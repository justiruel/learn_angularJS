var app=angular.module('FirstApp',[]);
app.controller('MainController',['$scope', function($scope){
}]);
app.filter('rupiah', function(){
  return function toRp(angka){
	  angka = angka * 10000;
    var rev = parseInt(angka, 10).toString().split('').reverse().join(''); //--> ANGKA 10 ADALAH  radix is 10 (decimal)
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