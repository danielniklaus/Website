
  // creating Angular Module
  var websiteApp = angular.module('themeonApp', []);

websiteApp.controller('themeonCtrl', function($scope, $http, $timeout) {

	$scope.contactformData = {};
	$scope.submit = false;
	$scope.submitcontactForm = function(data1) {
		$scope.submit = true;
		//alert(data1);
		var name=/^[a-zA-Z]+$/;
  
		if (data1 == true) {
			if (!$scope.contactformData)
				return false;
		} else if (!$scope.contactformData) {

			return false;
		} 
		else if($scope.contactformData.email == undefined){
			$('#email').addClass('error')
		}
		else if(name.test($scope.contactformData.name)== false || $scope.contactformData.name ==undefined){
			 
		$('#name').addClass('error')
		}
		else {
			
			$scope.submit = false;
			$http({
				method : 'POST',
				url : 'mail.php',
				data : $.param($scope.contactformData), // pass in data as strings
				headers : {
					'Content-Type' : 'application/x-www-form-urlencoded'
				} // set the headers so angular passing info as form data (not request payload)
			}).success(function(data) {
				if (data) {
					$scope.contactformData = {};
					$scope.submit = false;
					$('input').val('');
					$('#name').removeClass('error')
					$('textarea').val('')
					$('#contactSuccess').fadeIn(1000);
					 $timeout(function(){
					 $('#contactSuccess').fadeOut(1000);
					 },1000);	

				}
			});
		}
	};
}); 