var app= angular.module('theme',[]);

app.controller('themeController',['$scope', function($scope){
	
	$scope.products=[
	{
		"prod_name": "Video Member Theme",
		"prod_img": "videoTheme.jpg",
		"price": "$119",
		"feature": ["Awesome Slider",
		            "Completely Responsive",
					"Full Documentation",
					"Styling Option",
					"Custom Templates",
					"Custom Widgets",
					"Social Icon",
					"Compatibility"
		],
		"download": "http://www.inkthemes.com",
		"detail_status":false,
		"detail_hide_status": false
	},	
	{
		"prod_name": "Real Photography Theme",
		"prod_img": "photograph.jpg",
		"price": "$59",
		"feature": ["Awesome Slider",
		            "Completely Responsive",
					"Full Documentation",
					"Styling Option",
					"Custom Templates",
					"Custom Widgets",
					"Social Icons",
					"Compatibility"
		],
		"download": "http://www.inkthemes.com",
		"detail_status":false,
		"detail_hide_status": false
	},
		{
		"prod_name": "Colorway Theme",
		"prod_img": "colorway.jpg",
		"price": "$75",
		"feature": ["Awesome Slider",
		            "Completely Responsive",
					"Full Documentation",
					"Styling Option",
					"Custom Templates",
					"Custom Widgets",
					"Social Icons",
					"Compatibility"
		],
		"download": "http://www.inkthemes.com",
		"detail_status":false,
		"detail_hide_status": false
	},
		{
		"prod_name": "Geocraft Theme",
		"prod_img": "geocraft.jpg",
		"price": "$97",
		"feature": ["Awesome Slider",
		            "Completely Responsive",
					"Full Documentation",
					"Styling Option",
					"Custom Templates",
					"Custom Widgets",
					"Social Icon",
					"Compatibility"
		],
		"download": "http://www.inkthemes.com",
		"detail_status":false,
		"detail_hide_status": false
	},
		{
		"prod_name": "BlackRiders Theme",
		"prod_img": "black.jpg",
		"price": "$59",
		"feature": ["Awesome",
		            "Completely Responsive",
					"Full Documentation",
					"Styling Option",
					"Custom Templates",
					"Custom Widgets",
					"Social Icon",
					"Compatibility"
		],
		"download": "http://www.inkthemes.com",
		"detail_status":false,
		"detail_hide_status": false
	},
	{
		"prod_name": "Vidcraft Theme",
		"prod_img": "vidcraft.jpg",
		"price": "$97",
		"feature": ["Awesome Slider",
		            "Completely Responsive",
					"Full Documentation",
					"Styling Option",
					"Custom Templates",
					"Custom Widgets",
					"Social Icon",
					"Compatibility"
		],
		"download": "http://www.inkthemes.com",
		"detail_status":false,
		"detail_hide_status": false
	},
	{
		"prod_name": "Variant Landing Page Theme",
		"prod_img": "landing.jpg",
		"price": "$77",
		"feature": [" 5 layouts, 1 Dashboard",
		            "Create Desired Form",
					"Instant Setup",
					"Amazing Features",
					"Conversion Optimized",
					"Powerful admin Panel"
		],
		"download": "http://www.inkthemes.com",
		"detail_status":false,
		"detail_hide_status": false
	}

  ]
  
$scope.showFeature= function(index){
	for(var i=0; i<$scope.products.length; i++){
		$scope.products[i].detail_status=false;
		$scope.products[i].detail_hide_status=false;
		$scope.products[index].detail_status=true;
		$scope.products[index].detail_hide_status=true;
	}
}


$scope.hideFeature= function(index){
	$scope.products[index].detail_status=false;
	$scope.products[index].detail_hide_status=false;
}

	
}]);