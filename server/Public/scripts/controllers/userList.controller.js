myApp.controller('userListController', function(WIWservice, $http, $location){
    console.log('userlistcontroller created');
    var self = this;

    self.allUsers = WIWservice.allUsers;

    WIWservice.getAllUsers();
    
})