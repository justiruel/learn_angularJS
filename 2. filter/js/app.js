var app=angular.module('FirstApp',[]);
app.filter('rupiah', function(){
		return function toRp(angka){
		var rev = parseInt(angka, 10).toString().split('').reverse().join('');
		var rev2    = '';
		for(var i = 0; i < rev.length; i++){
			rev2  += rev[i];
			if((i + 1) % 3 === 0 && i !== (rev.length - 1)){
				rev2 += '.';
			}
		}
		return 'Rp. ' + rev2.split('').reverse().join('') + ',00';
  }
});
app.controller('MainController',['$scope', function($scope){
			$scope.hello="Hello World"; 
			$scope.book={
				title: 'Belajar AngularJs Bersama Agung Setiawan',
				author : 'Agung Setiawan',
				price  : 80000
			};
		}]);
		