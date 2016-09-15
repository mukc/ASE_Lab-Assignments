angular.module('MyModule',[])
    .controller('MyController', function ($scope,$http) {

        $scope.retrieveData = function (){
            document.getElementById('results').style.visibility="visible";
            var query = document.getElementById('query').value;
            var place=document.getElementById('city').value;
            $scope.query=query;
            var resp=$http.get("https://api.foursquare.com/v2/venues/search"+"+query+"&near"=place+"&limit=5&client_id=DYNHBOIXE443UYLNQHNEI4GU5LEFGVEUW20ZV0QYP5NQMARE&client_secret=VLR5TXA4FSG3WYOB13GMJGKOIWCIGUEYIPFHQEAD5U4B40X4&v=20130815");
            resp.success(function(data,status, headers,config){
                $scope.name0 = data.response.venues[0].name;
                $scope.name1 = data.response.venues[1].name;
                $scope.name2 = data.response.venues[2].name;
                $scope.name3 = data.response.venues[3].name;
                $scope.name4 = data.response.venues[4].name;
            
                            resp.error(function(data,status,headers, config){
                window.alert("response not received 1, Something went wrong");
            });
        }
        $scope.calcWeather = function (){
            document.getElementById('weather-canvas').style.visibility="visible";
            document.getElementById('weatherheader').style.visibility="visible";
            var place=document.getElementById('city');
            var resp=$http.get("http://api.openweathermap.org/data/2.5/weather?q=place&units=imperial&appid=d2863c1e04899cedaf39571ff29987d1");
            resp.success(function(data,status, headers,config){
                $scope.sourcetemp = data.main.temp+"` F";

                console.log("data :"+ $scope.sourcetemp);
            });
            resp.error(function(data,status,headers, config){
                window.alert("response not received 1, Something went wrong");
            });
        }

    });
