package com.hotels.hotel.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.hotels.hotel.data.AllHotels;
import com.hotels.hotel.data.Hotel;
import com.hotels.hotel.data.Price;
import com.hotels.hotel.data.Room;

@Service
public class HotelService
{
	private final RestTemplate restTemplate;

	private final BeanFactory beanFactory;

	@SuppressWarnings( "rawtypes" )
	private final HttpEntity request;

	private ObjectMapper mapper;

	@Autowired
	public HotelService( RestTemplate restTemplate, BeanFactory beanFactory )
	{
		this.restTemplate = restTemplate;
		this.beanFactory = beanFactory;
		this.request = this.beanFactory.getBean( HttpEntity.class, this.beanFactory.getBean( HttpHeaders.class ) );
		this.mapper = this.beanFactory.getBean( ObjectMapper.class );
	}

	public List<Hotel> getHotels( String city, String checkin, String checkout, Integer rooms, Integer adults, Integer children, Integer infants ) throws JsonMappingException, JsonProcessingException
	{
		String paramUrl = getParamUrl( checkin, checkout, rooms, adults, children, infants );
		String url = "https://rest.reserve-online.net/availability?location=" + city + "&" + paramUrl;
		ResponseEntity<Object> response = restTemplate.exchange( url, HttpMethod.GET, request, Object.class );
		JsonNode node = mapper.valueToTree( response.getBody() );
		String error = mapper.treeToValue( node.at( "/error_msg" ), String.class );
		if ( !error.isEmpty() )
		{
			return new ArrayList<>();
		}
		AllHotels allHotels = mapper.treeToValue( node.at( "/data" ), AllHotels.class );
		return allHotels.getHotels();
	}

	private String getParamUrl( String checkin, String checkout, Integer rooms, Integer adults, Integer children, Integer infants )
	{
		StringBuilder paramUrl = new StringBuilder();
		if ( checkin != null )
			paramUrl.append( "checkin=" ).append( checkin );
		if ( checkout != null )
			paramUrl.append( "&" ).append( "checkout=" ).append( checkout );
		if ( rooms != null )
			paramUrl.append( "&" ).append( "rooms=" ).append( rooms.intValue() );
		if ( adults != null )
			paramUrl.append( "&" ).append( "adults=" ).append( adults.intValue() );
		if ( children != null )
			paramUrl.append( "&" ).append( "children=" ).append( children.intValue() );
		if ( infants != null )
			paramUrl.append( "&" ).append( "infants=" ).append( infants.intValue() );
		return paramUrl.toString();
	}

	public Hotel getAvailableHotel( String hotelCode, String hotelName, String checkin, String checkout, Integer rooms, Integer adults, Integer children, Integer infants ) throws JsonProcessingException, IllegalArgumentException
	{
		String url = "http://rest.reserve-online.net/availability/" + hotelCode;
		String paramUrl = getParamUrl( checkin, checkout, rooms, adults, children, infants );
		url = url + "?" + paramUrl;
		ResponseEntity<Object> response = restTemplate.exchange( url, HttpMethod.GET, request, Object.class );
		JsonNode node = mapper.valueToTree( response.getBody() );
		String error = mapper.treeToValue( node.at( "/error_msg" ), String.class );
		Hotel hotel = null;
		if ( !error.isEmpty() )
		{
			hotel = new Hotel();
			hotel.setName( hotelName );
			Room room = new Room();
			room.setType( "Nil" );
			room.setRoom( "Nil" );
			room.setRateDesc( "Nil" );
			Price price = new Price();
			price.setMinPrice( 0.0 / 0.0 );
			room.setPrice( price );
			hotel.setRooms( new ArrayList<>( Arrays.asList( room ) ) );
			return hotel;
		}
		hotel = mapper.treeToValue( node.at( "/data" ), Hotel.class );
		return hotel;
	}
}
