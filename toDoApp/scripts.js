var app = angular.module('toDo', []);

app.controller('ctrl', function($scope){
	
$scope.todos=[
];

$scope.indexes=0;

$scope.addTodo = function(){
	
$scope.todos.push({ 'title': $scope.newtodo});


}
	
$scope.clearTask = function(){
$scope.todos.splice(this.$index, 1);
	
	}
	
} )