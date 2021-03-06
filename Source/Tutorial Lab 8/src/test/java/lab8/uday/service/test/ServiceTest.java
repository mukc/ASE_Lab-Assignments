package lab8.uday.service.test;

import javax.ws.rs.core.Response;

import org.junit.Test;

import lab8.uday.service.RestaurantService;
import lab8.uday.service.WeatherService;

public class ServiceTest {

	@Test
	public void weatherTest() throws Exception{
		WeatherService weather = new WeatherService();
		Response s = weather.getWeather("london");
		System.out.println("The Weather Service is executed successfully-------"+Response.status(200).entity(s).build().toString());
	}
	
	@Test
	public void restaurantTest() throws Exception{
		RestaurantService restaurantService = new RestaurantService();
		Response resp = restaurantService.getRestaurants("donut");
		System.out.println("The Restaurant Service is executed successfully-------"+Response.status(200).entity(resp).build().toString());
	}
}
