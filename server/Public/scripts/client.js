var myApp = angular.module('myApp', ['ngRoute']);


myApp.config(function($routeProvider, $locationProvider){
    console.log('myApp -- config');

});


myApp.controller('myAppController', ['$http', function($http){
    console.log('controller loaded');

    var self = this;

    self.loginRequest = function(){
        console.log('Loginrequest -- controller');
        $http.post('/login').then(function(response){
            console.log('response from server', response);
        })

    }

    


}]);