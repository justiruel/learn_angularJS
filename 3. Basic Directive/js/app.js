var app=angular.module('FirstApp',[]);
app.controller('MainController',['$scope', function($scope){
  $scope.books=[
  {
    title: 'Belajar AngularJs Bersama Agung Setiawan',
    author : 'Agung Setiawan',
    price  : 80000,
    pubdate : new Date('2015','09','09')
  },
  {
    title: 'Belajar Ruby',
    author : 'Penulis Satu',
    price  : 65000,
    pubdate : new Date('2015','10','09')
  },
  {
    title: 'Belajar Ruby on Rails',
    author : 'Penulis Dua',
    price  : 90000,
    pubdate : new Date('2015','11','09')
  }];
  
  $scope.hai=function(data){
      alert(data);
	  $scope.myVar=data;
  };
  
  $scope.cuy=function(data){
      console.log(data);
  };
  
  $scope.DoWork = function(){
          alert($scope.myVar);  
  };
  
}]);


app.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });
 
                event.preventDefault();
            }
        });
    };
});