(function(){
	var myAppModule = angular.module('myApp', []);

	myAppModule.controller('MyCartController', function($scope){

		$scope.items = [
			{title: 'aaa',qua: 45,price:3.95},
			{title: 'sss',qua: 25,price:3.05},
			{title: 'ddd',qua: 25,price:1.95},
			{title: 'fff',qua: 35,price:3.45},
			{title: 'ggg',qua: 55,price:8.95}
		];

		$scope.remove = function(index){
			$scope.items.splice(index, 1);
		}
	})
})()