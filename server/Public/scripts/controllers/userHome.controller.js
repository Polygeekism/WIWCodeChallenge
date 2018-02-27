myApp.controller('userHomeController', function(WIWservice, $http, $location, $cookies){
    //console.log('User home controller loaded');

    var self = this;
    WIWservice.login();

    //self.tokenAuth = $cookies.get("token");
    self.userObject = WIWservice.userObject;
    //console.log('self token', self.tokenAuth);
    self.updateThisUser = function(){
    
        WIWservice.updateThisUser(self.userObject);
    }
    console.log(self.userObject);

    //only used to create positions
    // self.createPositions = function(){

    //     WIWservice.createPositions();
    // }
    

});