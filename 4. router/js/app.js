var app= angular.module("FirstApp",['ngRoute']);
app.config(function($routeProvider){
  $routeProvider.when('/',{
    templateUrl : 'main.html',
    controller : 'MainController'
  })
  .when('/sub1/:theparam',{
    templateUrl : 'sub1.html',
    controller : 'sub1Controller'  
  })
  .when('/sub2',{
    templateUrl : 'sub2.html',
    controller : 'sub2Controller'  
  })
  .otherwise({
    redirectTo : '/'
  })
});

app.controller('MainController',['$scope', function($scope){
}]);

app.controller('sub1Controller',['$scope','$routeParams', function($scope,$routeParams){
	console.log($routeParams.theparam);
}]);

app.controller('sub2Controller',['$scope', function($scope){
}]);