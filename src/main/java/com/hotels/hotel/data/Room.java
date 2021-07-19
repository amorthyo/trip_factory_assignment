package com.hotels.hotel.data;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties( ignoreUnknown = true )
public class Room
{
	private String type;
	private String room;
	@JsonProperty( "rate_desc" )
	private String rateDesc;
	@JsonProperty( "pricing" )
	private Price price;
	
	public String getType()
	{
		return type;
	}

	public void setType( String type )
	{
		this.type = type;
	}

	public String getRoom()
	{
		return room;
	}

	public void setRoom( String room )
	{
		this.room = room;
	}

	public String getRateDesc()
	{
		return rateDesc;
	}

	public void setRateDesc( String rateDesc )
	{
		this.rateDesc = rateDesc;
	}

	public Price getPrice()
	{
		return price;
	}

	public void setPrice( Price price )
	{
		this.price = price;
	}
}
