

var app = angular.module('customs', []);

app.controller('customController', function($scope){
	
$scope.example1=1;
$scope.example2=2;
$scope.example3=3;
$scope.example4=4;
$scope.example5=17;
$scope.example6=0;
$scope.example7=99;
$scope.example8=-33;	
	
});

app.filter('ordinal', function(){
	
	return function(number){
		
		if(isNaN(number) || number<1 ){
			return number;
	    }
    else{
		
		var lastDigit = number%10;
		if (lastDigit==1)
			return number + 'st';
		else if(lastDigit===2)
			return number + 'nd';
		else if(lastDigit===3)
			return number + 'rd';
		else if(lastDigit>3){
			return number + 'th';
		}
	}
}
	
});

