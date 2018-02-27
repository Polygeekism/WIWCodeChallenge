myApp.controller('userUpdateController', function(WIWservice, $http, $location){
    console.log('userupdatecontroller loaded');

    var self = this;

    self.userForUpdate = WIWservice.userForUpdate;
    console.log('user for update', self.userForUpdate);
})