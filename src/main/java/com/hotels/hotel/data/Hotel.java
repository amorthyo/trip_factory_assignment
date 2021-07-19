package com.hotels.hotel.data;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties( ignoreUnknown = true )
public class Hotel
{
	private String code;
	private String name;
	private String currency;
	private double minprice;
	@JsonProperty( "rates" )
	private List<Room> rooms;

	public String getCode()
	{
		return code;
	}

	public void setCode( String code )
	{
		this.code = code;
	}

	public String getName()
	{
		return name;
	}

	public void setName( String name )
	{
		this.name = name;
	}

	public String getCurrency()
	{
		return currency;
	}

	public void setCurrency( String currency )
	{
		this.currency = currency;
	}

	public double getMinprice()
	{
		return minprice;
	}

	public void setMinprice( double minprice )
	{
		this.minprice = minprice;
	}

	public List<Room> getRooms()
	{
		return rooms;
	}
	
	public void setRooms( List<Room> rooms )
	{
		this.rooms = rooms;
	}

}
