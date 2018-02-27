myApp.controller('userUpdateController', function(WIWservice, $http, $location){
    //console.log('userupdatecontroller loaded');

    var self = this;

    self.userForUpdate = WIWservice.userForUpdate;
    self.allPositions = WIWservice.allPositions;

    //console.log('user for update', self.userForUpdate);
    self.updateThisUser = function(){
        //console.log('button pressed');
        WIWservice.userUpdate(self.userForUpdate);
    }
    //console.log('All Ps',self.allPositions);
})