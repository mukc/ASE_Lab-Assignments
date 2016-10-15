angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$http) {
         
    $scope.getVenues=function(){
    console.log ("-----"+$scope.food);
    var resp = $http.get("https://api.foursquare.com/v2/venues/search?near=overland park&query=theatres&limit=10&client_id=DYNHBOIXE443UYLNQHNEI4GU5LEFGVEUW20ZV0QYP5NQMARE&client_secret=VLR5TXA4FSG3WYOB13GMJGKOIWCIGUEYIPFHQEAD5U4B40X4&v=20160212");
        
            resp.success(function(data,status,headers,config){
            console.log("data : "+data.response.venues[1]);
            $scope.venues = data.response.venues;
          });
    	resp.error(function(data,status,headers,config){
    		alert("Failure during service call!!")
    	});  
   
   
  
  
  };
})

.controller('ChatsCtrl', function($scope, $http) {
    
    $scope.getWeather=function() {
          console.log('done');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
  function showPosition(position) {
      console.log('entered showPosition')
     $scope.lat=position.coords.latitude;
     $scope.lon=position.coords.longitude;

    	
    	var resp = $http.get("http://api.openweathermap.org/data/2.5/weather?q=overland park&units=imperial&appid=72fda7b3e7dccb8f3533c3d81ec6a4c0");
    	resp.success(function(data,status,headers,config){
    		console.log("data : "+data.weather[0].id);
    		$scope.temperatureSource = data.main.temp;
    		
    	});
    	resp.error(function(data,status,headers,config){
    		alert("Failure during service call!!")
    	});
     };

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})


