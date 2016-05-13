var mainApp = angular.
                    module("mainApp", []);
                        

   
mainApp.controller("shapeController", function($scope) {
   $scope.message = "In shape controller";
   var colorSet = [
	{
		color: "red",
		value: "#f00",
                like:0,
                dislike:0
	},
	{
		color: "green",
		value: "#0f0",
                like:0,
                dislike:0
	},
	{
		color: "blue",
		value: "#00f",
                like:0,
                dislike:0
	},
	{
		color: "cyan",
		value: "#0ff",
                like:0,
                dislike:0
	},
	{
		color: "magenta",
		value: "#f0f",
                like:0,
                dislike:0
	},
	{
		color: "yellow",
		value: "#ff0",
                like:0,
                dislike:0
	},
	{
		color: "black",
		value: "#000",
                like:0,
                dislike:0
	}
];
   $scope.colorSet = colorSet;
   $scope.type = "Shape";
//   $scope.searchText = searchText;
   
//   $scope.like = function(color) {
//       color.likes++;
//   }
//   
//   $scope.Dislike = function(color) {
//       color.dislike++;
//   }
})