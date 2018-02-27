myApp.controller('userListController', function(WIWservice, $http, $location){
    console.log('userlistcontroller created');
    var self = this;

    self.allUsers = WIWservice.allUsers;
    self.newUser = {};

    WIWservice.getAllUsers();

    console.log('all users on controller', self.allUsers);
    self.newUserSubmit = function(){
        console.log('new user object', self.newUser);
        WIWservice.newUser(self.newUser);
        self.newUser = {};
    }
    
})