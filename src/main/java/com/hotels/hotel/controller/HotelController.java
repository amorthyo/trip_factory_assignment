package com.hotels.hotel.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.hotels.hotel.data.Hotel;
import com.hotels.hotel.service.HotelService;

@Controller
public class HotelController
{

	private final HotelService hotelService;

	@Autowired
	public HotelController( HotelService hotelService )
	{
		this.hotelService = hotelService;
	}

	@GetMapping( path = "getAllHotels" )
	public String getHotels( @RequestParam( required = true ) String city, @RequestParam( required = true ) String checkin, @RequestParam( required = false ) String checkout, @RequestParam( required = false ) Integer rooms, @RequestParam( required = false ) Integer adults, @RequestParam( required = false ) Integer children, @RequestParam( required = false ) Integer infants, Model model ) throws JsonMappingException, JsonProcessingException
	{
		List<Hotel> hotels = hotelService.getHotels( city, checkin, checkout, rooms, adults, children, infants );
		model.addAttribute( "hotels", hotels );
		return "allHotels";
	}

	@GetMapping( path = "getAvailableRoomDetails/{hotelCode}" )
	public String getAvailableHotel( @PathVariable( "hotelCode" ) String hotelCode, @RequestParam( required = true ) String hotelName, @RequestParam( required = true ) String checkin, @RequestParam( required = false ) String checkout, @RequestParam( required = false ) Integer rooms, @RequestParam( required = false ) Integer adults, @RequestParam( required = false ) Integer children, @RequestParam( required = false ) Integer infants, Model model ) throws JsonProcessingException, IllegalArgumentException
	{
		Hotel hotel = hotelService.getAvailableHotel( hotelCode, hotelName, checkin, checkout, rooms, adults, children, infants );
		model.addAttribute( "name", hotel.getName() );
		model.addAttribute( "rooms", hotel.getRooms() );
		return "eachHotel";
	}
}
