var app= angular.module('myFilter',[]);

app.controller('filterController', function($scope){
$scope.number=50;
$scope.decimal=50.459;
	$scope.friends = [
	{
		name:'Bianca',
		age:21
	},
	{
		name: 'Gara',
		age:21
	},
	{
		name:'Ted',
		age:21
	},
	{
		name:'Yewande',
		age:29
	}
	
	];
	
	
	
});