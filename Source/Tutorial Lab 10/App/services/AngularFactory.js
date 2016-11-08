(function () {

	var AngularFactory = function ($http) {

		var API_KEY = 'vMf1Dl6PDxVKj7ckcRhGVdZNFnvSYRwu';
		var config = {
				headers: {
					'Content-Type': 'application/json'
				}
			}

		AngularFactory.CreateUser = function (FirstName,LastName,Email,Password) {

			
			var Data = JSON.stringify({
				'FirstName':FirstName,
				'LastName':LastName,
				'EmailId': Email,
				'Password': Password,
			});
			var URI = 'https://api.mlab.com/api/1/databases/ase/collections/user?apiKey=' + API_KEY
			return $http.post(URI, Data, config)
		}

		AngularFactory.GetUser = function (EmailId) 
		{

			var URI = 'https://api.mlab.com/api/1/databases/ase/collections/user?apiKey=' + API_KEY + '&q={"EmailId":' +'"'+EmailId + '"'+ '}'
			return $http.get(URI)
		}
		
		AngularFactory.DeleteUser = function(EmailId)
		{
			var URI = 'https://api.mlab.com/api/1/databases/ase/collections/user?apiKey=' + API_KEY + '&q={"EmailId":' +'"'+EmailId + '"'+ '}'
			var Empty = JSON.stringify({'':''})
			return $http.put(URI,Empty,config);
		}
		
		AngularFactory.UpdateUser = function(FirstName,LastName,EmailId,Password)
		{
			var Data = JSON.stringify({
				'FirstName':FirstName,
				'LastName':LastName,
				'EmailId': EmailId,
				'Password': Password,
			});
			var URI = 'https://api.mlab.com/api/1/databases/ase/collections/user?apiKey=' + API_KEY + '&q={"EmailId":' +'"'+EmailId + '"'+ '}'
			return $http.put(URI,Data,config)
		}

		return AngularFactory;
	}
	AngularFactory.$inject = ['$http'];
	angular.module('Mlab').service('AngularFactory', AngularFactory);

}());