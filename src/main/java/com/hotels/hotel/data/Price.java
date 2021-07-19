package com.hotels.hotel.data;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties( ignoreUnknown = true )
public class Price
{
	@JsonProperty( "price" )
	private double minPrice;

	public double getMinPrice()
	{
		return minPrice;
	}

	public void setMinPrice( double minPrice )
	{
		this.minPrice = minPrice;
	}
}
