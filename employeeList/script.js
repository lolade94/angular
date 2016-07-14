//Application module
var app= angular.module('empControl',[]);

app.controller('ctrl',['$scope', function($scope){
	
	$scope.employees= [
	 
	 {
		 "name": "Lola Akinleye",
		 "job": "Owner",
		 "department": "Technology",
         "img_link": "profile.jpg"
	 },
	 {
		 "name":"Jack Hudson",
		 "job": "Accountant",
		 "department": "Accounting",
		 "img_link": "profile.jpg"
	 },
	 {
		 "name":"Larry Home",
		 "job": "Human Resource Agent",
		 "department": "Human Resource",
		 "img_link": "profile.jpg"
	 },
	 	 {
		 "name":"Drake Graham",
		 "job": "Chief Marketing Officer",
		 "department": "Marketing",
		 "img_link": "profile.jpg"
	 },
	 {
		 "name":"Beyonce Knowles",
		 "job": "Chief Operating Officer",
		 "department": "Operation",
		 "img_link": "profile.jpg"
		 
	 },
	 {
		  "name":"Andrew Schulz",
		 "job": "Public Relation",
		 "department": "Marketing",
		 "img_link": "profile.jpg"
	 },
	 
	 {
		  "name":"Lucy Sandrock",
		 "job": "Plugin Developer",
		 "department": "Technogology",
		 "img_link": "profile.jpg"
	 }
	 ,
	 
	 {
		 "name":"Tory Negus",
		 "job":"Software Developer",
		 "department":"Technogology",
		 "img_link":"profile.jpg"
	 },
	 {
		 "name":"John Smith",
		 "job": "Support Team Lead",
		 "department": "Sales & Marketing",
		 "img_link":"profile.jpg"
	 },
	 
	 {
		 "name":"Mick Jenkins",
		 "job": "Lawyer",
		 "department": "Law",
		 "img_link":"profile.jpg"
	 }
	]
	
}]);