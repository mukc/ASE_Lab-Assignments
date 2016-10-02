angular.module('LoginApp',[])
    .controller('LoginController', function ($scope,$window) {
    $scope.FaceBookLogin = function(){
        FB.login(function(response) {
            if (response.authResponse) {
                console.log('Welcome!  Fetching your information.... ');
                FB.api('/me', function(response) {
                    console.log('Good to see you, ' + response.name + '.');
                    $window.location.href = "http://localhost:63342/Lab5/index.html";
                    $window.alert("Welcome "+response.name+"!!!!"+"\n"+"You are successfully logged in.");
                });

            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        });
    };
    });