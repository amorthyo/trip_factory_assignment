package com.hotels.hotel.data;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties( ignoreUnknown = true )
public class AllHotels
{
	private List<Hotel> hotels;

	public List<Hotel> getHotels()
	{
		List<Hotel> hotelAllReadOnlyList = new ArrayList<>( hotels );
		return hotelAllReadOnlyList;
	}

	public void setHotels( List<Hotel> hotels )
	{
		this.hotels = hotels;
	}

}
