console.log('is this even hitting');
var myApp = angular.module('myApp', []);

myApp.controller('myAppController', ['$http', function($http){
    console.log('controller loaded');


}]);