var express = require('express');
var request = require('request');
var app = express();
var port = 8001;
var RestaurantName;
var Rating;

var Area = {
	Restaurant: [
				 ]
};
app.get('/', function (req, res) {

	var objRes = res;
	var objReq = req;
	var querystring = req.query.search;
	GetRestaurant(querystring, objRes);
})

function GetRestaurant(Query, ResponseObj) {
	
	request('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=5000&type=restaurant&keyword='+Query+'&key=AIzaSyDMCVXEHn7Kf0Hg3IImxpJW4aeWNvkmUvY', function (error, response, body) {

		if (response.statusCode !== 200) {
			return console.log('Invalid Status Code Returned:', response.statusText);
		}

		var obj = JSON.parse(body)

		console.log("Entered");
		for (var i = 0; i < 1; i++) 
		{
			var hits = obj.results[i]
			RestaurantName = hits.name;
			Rating = hits.rating;
			var latitude = hits.geometry.location.lat;
			var longitude = hits.geometry.location.lng
			GetWeather(latitude, longitude, addData,ResponseObj)

		}
		
	});
}

function addData(Temp,ResponseObj) {
	
	Area.Restaurant.push({
		"RestaurantName": RestaurantName,
		"Rating": Rating,
		"Temperature":Temp
	})
	ResponseObj.contentType('application/json');
		ResponseObj.write(JSON.stringify(Area));
		ResponseObj.end();

}

function GetWeather(latitude, longitude, addData,ResponseObj) {
	var Lists = new Array();
	request('http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&APPID=a149d0dfbedce700edce4a82cccb6c32', function (error, response, body) {

		console.log(latitude);
		console.log(longitude);
		
		if (response.statusCode !== 200) {
			return console.log('Invalid Status Code Returned:', response.statusCode);
		}

		var obj = JSON.parse(body)
		var temp = obj.main.temp;
		
		addData(temp,ResponseObj)

	});

}

app.listen(port, function (Err) {

	console.log("Running Server on Port " + port);
});