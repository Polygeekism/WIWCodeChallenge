myApp.controller('userHomeController', function(WIWservice, $http, $location){
    console.log('User home controller loaded');

    var self = this;

    self.userObject = WIWservice.userObject;
    
    self.updateThisUser = function(){
        console.log('button clicking and linked');
        WIWservice.updateThisUser();
    }
    console.log('user object on user controller', self.userObject);

});