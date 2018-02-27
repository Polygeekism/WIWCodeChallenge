myApp.controller('userUpdateController', function (WIWservice, $http, $location, $scope) {
    //console.log('userupdatecontroller loaded');
    $scope.content = '';
    var self = this;

    self.userForUpdate = WIWservice.userForUpdate;
    self.allPositions = WIWservice.allPositions;
    

    //console.log('user for update', self.userForUpdate);
    self.updateThisUser = function () {
        //console.log('button pressed');
        //console.log('scope data', $scope.data)
        WIWservice.userUpdate(self.userForUpdate, $scope.data);
    }
    //console.log('positions',self.userForUpdate.positions);

    

    $scope.isChecked = function (id) {
        var match = false;
        for (var i = 0; i < $scope.data.length; i++) {
            if ($scope.data[i] == id) {
                match = true;
            }
        }
        return match;
    };

    $scope.allOptions = self.allPositions.list.positions;

    $scope.data = self.userForUpdate.positions;

    $scope.sync = function (bool, item) {
        //console.log('sync hit');
        if (bool) {
            if($scope.data.length == 0){
                $scope.data.push(item);
            }else{

                for (var i = 0; i < $scope.data.length; i++) {
                    if ($scope.data[i] == item) {

                    } else {
                        //console.log('sync hit');
                        $scope.data.push(item);
                    }
                }
            }
        }

        // add item

        else {
            // remove item
            for (var i = 0; i < $scope.data.length; i++) {
                //console.log('index id', $scope.data[i], ' and id comparison', item);
                if ($scope.data[i] == item) {
                    $scope.data.splice(i, 1);
                }
            }
        }
    };
    //console.log('All Ps',self.allPositions);
})