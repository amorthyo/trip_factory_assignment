package com.hotels.hotel.config;

import java.util.Base64;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.databind.ObjectMapper;

@Configuration
public class BeanConfig
{
	@Bean
	public RestTemplate restTemplate()
	{
		return new RestTemplate();
	}
	
	@Bean
	@Scope(value = "prototype")
	public HttpHeaders httpHeaders()
	{
		String authStr = "tripfactory23623:920A445CBBD0F1506960B55C2C3861B3EF8CEA80";
	    String base64Creds = Base64.getEncoder().encodeToString(authStr.getBytes());
	    HttpHeaders httpHeaders = new HttpHeaders();
	    httpHeaders.add("Authorization", "Basic " + base64Creds);
		return httpHeaders;
	}
	
	@SuppressWarnings( { "rawtypes", "unchecked" } )
	@Bean
	@Scope(value = "prototype")
	public HttpEntity httpEntity( HttpHeaders httpHeaders )
	{
		return new HttpEntity( httpHeaders );
	}
	
	@Bean
	@Scope(value = "prototype")
	public ObjectMapper objectMapper()
	{
		return new ObjectMapper();
	}
}
