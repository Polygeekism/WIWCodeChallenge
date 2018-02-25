var myApp = angular.module('myApp', ['ngRoute']);


myApp.config(function($routeProvider, $locationProvider){
    console.log('myApp -- config');

});


myApp.controller('myAppController', ['$http', function($http){
    console.log('controller loaded');



}]);