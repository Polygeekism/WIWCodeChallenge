myApp.controller('userHomeController', function(WIWservice, $http, $location){
    //console.log('User home controller loaded');

    var self = this;
    WIWservice.login();

    self.userObject = WIWservice.userObject;
    
    self.updateThisUser = function(){
    
        WIWservice.updateThisUser(self.userObject);
    }
    console.log(self.userObject);
    

});