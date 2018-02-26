myApp.controller('loginController', function (WIWservice, $http, $location) {
    console.log('controller loaded');

    var self = this;
    

    self.loginRequest = function () {
        console.log('Loginrequest -- controller');

        WIWservice.login();
    }
});