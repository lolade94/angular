var app= angular.module('service', []);
//angularjs has about  30 built in services
//service is a functon or object that is available for Angularjs
//location sercice has methods which returns information about the location of the current page
app.controller('locateController',function($scope, $location, $timeout, $interval){
	/*
	Note that the $location service is passed in to the controller as an argument. 
	In order to use the service in the controller, it must be defined as a dependency
	*/
	$scope.myUrl= $location.absUrl();
	
	$scope.myHeader="Hello World";
	
	$timeout(function(){
		$scope.myHeader="How are you today?";
	}, 2000);
	
	$scope.theTime= new Date().toLocaleTimeString();
	
	$interval(function(){
		$scope.theTime= new Date().toLocaleTimeString();	
	}, 1000);
});