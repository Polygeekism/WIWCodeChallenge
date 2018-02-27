myApp.service("WIWservice", function ($http, $location, $cookies) {
  //console.log("WIW service created");
  var self = this;

  self.userObject = {};
  self.allUsers = { list: [] };
  self.userForUpdate = {};
  self.allPositions = {list:[]};

  self.login = function () {

    console.log('login on service reached.');
    $http({
      method: "GET",
      url: "https://api.wheniwork.com/2/login",
      headers: {
        "W-Token":
          "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOjEsImlhdCI6MTUxOTI1MzIxNywibG9naW4iOiIxMDMyNDI3NSIsInBpZCI6IjEwMzI0Mjc1In0.PXnO8z8nZiTwgt36P1kV2FS9D1Q1I12PTpTJUAJKlkxyQza1cxzU7G_RJI1rhQrlTey1GhpMO8RGL4govskCkjEmhoWkLW1b-XIZIXLNy3_jdzdpIyLuz58qfWQM7fzRb_Doe8HX9nEedBUAAfNX-Dk1_tGgUCLPannW2b2rWEA3SGvyN0jd5R39yWElSACjKleuCOapv4DS7XvR-AigCmtQ-HrqJ-7Ap6K-WREgRyaZ9j0fJvjraZceprkfGjeWnhTKqQkUmrXkCwxExwS5vjOx-hgvvk_Pj74TukuS-pWsmD2gkVQ465yafyOpxNrVAjA0Ql2U0LZ_a4yUYleXjQ"
      }
    }).then(function (response) {
      //console.log("login attempt response", response);
      self.userObject = response.data;
      //console.log('user object', self.userObject);
      $cookies.put("token", "loggedin");
      $location.path("/home");
    });
  };

  self.authUser = function () {
    var auth = $cookies.get('token');
    if (auth == "loggedin") {
      console.log('user authorized')
    } else {
      $location.path("/login");
    }
  }

  self.updateThisUser = function (userInfo) {
    //console.log('updateThisUser service function', userInfo);
    var id = userInfo.users[0].id;
    var firstName = userInfo.users[0].first_name;
    var lastName = userInfo.users[0].last_name;
    var email = userInfo.users[0].email;

    //console.log('info for update', id, firstName, lastName, email);
    $http({
      method: "POST",
      url: "https://api.wheniwork.com/2/users/profile",
      data: {
        "email": email,
        "first_name": firstName,
        "last_name": lastName
      },
      headers: {
        "W-Token":
          "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOjEsImlhdCI6MTUxOTI1MzIxNywibG9naW4iOiIxMDMyNDI3NSIsInBpZCI6IjEwMzI0Mjc1In0.PXnO8z8nZiTwgt36P1kV2FS9D1Q1I12PTpTJUAJKlkxyQza1cxzU7G_RJI1rhQrlTey1GhpMO8RGL4govskCkjEmhoWkLW1b-XIZIXLNy3_jdzdpIyLuz58qfWQM7fzRb_Doe8HX9nEedBUAAfNX-Dk1_tGgUCLPannW2b2rWEA3SGvyN0jd5R39yWElSACjKleuCOapv4DS7XvR-AigCmtQ-HrqJ-7Ap6K-WREgRyaZ9j0fJvjraZceprkfGjeWnhTKqQkUmrXkCwxExwS5vjOx-hgvvk_Pj74TukuS-pWsmD2gkVQ465yafyOpxNrVAjA0Ql2U0LZ_a4yUYleXjQ"
      }
    }).then(function (response) {
      //console.log(response);
      self.login();
    })
  };

  self.getAllUsers = function () {
    //console.log('get users service');
    $http({
      method: "GET",
      url: "https://api.wheniwork.com/2/users",
      headers: {
        "W-Token":
          "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOjEsImlhdCI6MTUxOTI1MzIxNywibG9naW4iOiIxMDMyNDI3NSIsInBpZCI6IjEwMzI0Mjc1In0.PXnO8z8nZiTwgt36P1kV2FS9D1Q1I12PTpTJUAJKlkxyQza1cxzU7G_RJI1rhQrlTey1GhpMO8RGL4govskCkjEmhoWkLW1b-XIZIXLNy3_jdzdpIyLuz58qfWQM7fzRb_Doe8HX9nEedBUAAfNX-Dk1_tGgUCLPannW2b2rWEA3SGvyN0jd5R39yWElSACjKleuCOapv4DS7XvR-AigCmtQ-HrqJ-7Ap6K-WREgRyaZ9j0fJvjraZceprkfGjeWnhTKqQkUmrXkCwxExwS5vjOx-hgvvk_Pj74TukuS-pWsmD2gkVQ465yafyOpxNrVAjA0Ql2U0LZ_a4yUYleXjQ"
      }
    }).then(function (response) {
      //console.log('response from get', response.data.users);
      self.allUsers.list = response.data.users;
    })
  }

  self.newUser = function (newUser) {
    //console.log('new user service', newUser);

    var email = newUser.email;
    var firstName = newUser.firstName;
    var lastName = newUser.lastName;
    var positions = [
      "retail",
      "supervisor",
      "management"
    ]

    $http({
      method: "POST",
      url: "https://api.wheniwork.com/2/users",
      data: {
        "email": email,
        "first_name": firstName,
        "last_name": lastName,
        "positions": positions
      },
      headers: {
        "W-Token":
          "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOjEsImlhdCI6MTUxOTI1MzIxNywibG9naW4iOiIxMDMyNDI3NSIsInBpZCI6IjEwMzI0Mjc1In0.PXnO8z8nZiTwgt36P1kV2FS9D1Q1I12PTpTJUAJKlkxyQza1cxzU7G_RJI1rhQrlTey1GhpMO8RGL4govskCkjEmhoWkLW1b-XIZIXLNy3_jdzdpIyLuz58qfWQM7fzRb_Doe8HX9nEedBUAAfNX-Dk1_tGgUCLPannW2b2rWEA3SGvyN0jd5R39yWElSACjKleuCOapv4DS7XvR-AigCmtQ-HrqJ-7Ap6K-WREgRyaZ9j0fJvjraZceprkfGjeWnhTKqQkUmrXkCwxExwS5vjOx-hgvvk_Pj74TukuS-pWsmD2gkVQ465yafyOpxNrVAjA0Ql2U0LZ_a4yUYleXjQ"
      }
    }).then(function (response) {
      //console.log('response from newuser request', response);
      self.getAllUsers();
    })

  }

  self.getUserForUpdate = function (userId) {
    console.log('userid on service for update');

    var id = userId;

    $http({
      method: "GET",
      url: "https://api.wheniwork.com/2/users/" + id,
      headers: {
        "W-Token":
          "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOjEsImlhdCI6MTUxOTI1MzIxNywibG9naW4iOiIxMDMyNDI3NSIsInBpZCI6IjEwMzI0Mjc1In0.PXnO8z8nZiTwgt36P1kV2FS9D1Q1I12PTpTJUAJKlkxyQza1cxzU7G_RJI1rhQrlTey1GhpMO8RGL4govskCkjEmhoWkLW1b-XIZIXLNy3_jdzdpIyLuz58qfWQM7fzRb_Doe8HX9nEedBUAAfNX-Dk1_tGgUCLPannW2b2rWEA3SGvyN0jd5R39yWElSACjKleuCOapv4DS7XvR-AigCmtQ-HrqJ-7Ap6K-WREgRyaZ9j0fJvjraZceprkfGjeWnhTKqQkUmrXkCwxExwS5vjOx-hgvvk_Pj74TukuS-pWsmD2gkVQ465yafyOpxNrVAjA0Ql2U0LZ_a4yUYleXjQ"
      }
    }).then(function (response) {
      self.getPositions();
      console.log('response from userupdate request', response)
      self.userForUpdate = response.data.user;
      $location.path("/userupdate");

    })

  }

  self.userUpdate = function (userInfo) {
    //console.log('updateThisUser service function', userInfo);
    var id = userInfo.id;
    var firstName = userInfo.first_name;
    var lastName = userInfo.last_name;
    var positions = [
      { "retail": userInfo.positions.retail },
      { "supervisor": userInfo.positions.supervisor },
      { "management": userInfo.positions.management }
    ]
    console.log('position info', positions);

    //console.log('info for update', id, firstName, lastName, email);
    $http({
      method: "PUT",
      url: "https://api.wheniwork.com/2/users/" + id,
      data: {
        "first_name": firstName,
        "last_name": lastName,
        //"positions": positions
      },
      headers: {
        "W-Token":
          "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOjEsImlhdCI6MTUxOTI1MzIxNywibG9naW4iOiIxMDMyNDI3NSIsInBpZCI6IjEwMzI0Mjc1In0.PXnO8z8nZiTwgt36P1kV2FS9D1Q1I12PTpTJUAJKlkxyQza1cxzU7G_RJI1rhQrlTey1GhpMO8RGL4govskCkjEmhoWkLW1b-XIZIXLNy3_jdzdpIyLuz58qfWQM7fzRb_Doe8HX9nEedBUAAfNX-Dk1_tGgUCLPannW2b2rWEA3SGvyN0jd5R39yWElSACjKleuCOapv4DS7XvR-AigCmtQ-HrqJ-7Ap6K-WREgRyaZ9j0fJvjraZceprkfGjeWnhTKqQkUmrXkCwxExwS5vjOx-hgvvk_Pj74TukuS-pWsmD2gkVQ465yafyOpxNrVAjA0Ql2U0LZ_a4yUYleXjQ"
      }
    }).then(function (response) {
      //console.log(response);
      $location.path('/userlist')
    })
  };

  self.getPositions = function(){

    $http({
      method: "GET",
      url: "https://api.wheniwork.com/2/positions",
      headers: {
        "W-Token":
          "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOjEsImlhdCI6MTUxOTI1MzIxNywibG9naW4iOiIxMDMyNDI3NSIsInBpZCI6IjEwMzI0Mjc1In0.PXnO8z8nZiTwgt36P1kV2FS9D1Q1I12PTpTJUAJKlkxyQza1cxzU7G_RJI1rhQrlTey1GhpMO8RGL4govskCkjEmhoWkLW1b-XIZIXLNy3_jdzdpIyLuz58qfWQM7fzRb_Doe8HX9nEedBUAAfNX-Dk1_tGgUCLPannW2b2rWEA3SGvyN0jd5R39yWElSACjKleuCOapv4DS7XvR-AigCmtQ-HrqJ-7Ap6K-WREgRyaZ9j0fJvjraZceprkfGjeWnhTKqQkUmrXkCwxExwS5vjOx-hgvvk_Pj74TukuS-pWsmD2gkVQ465yafyOpxNrVAjA0Ql2U0LZ_a4yUYleXjQ"
      }
    }).then(function(response){
      
      self.allPositions.list = response.data;
      //console.log('allPositions', self.allPositions.list )
    })
  }
  //only used to create positions
  // self.createPositions = function () {

  //   $http({
  //     method: "POST",
  //     url: "https://api.wheniwork.com/2/positions/",
  //     data: {
        
  //       "name": "Supervisor",
  //     },
  //     headers: {
  //       "W-Token":
  //         "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOjEsImlhdCI6MTUxOTI1MzIxNywibG9naW4iOiIxMDMyNDI3NSIsInBpZCI6IjEwMzI0Mjc1In0.PXnO8z8nZiTwgt36P1kV2FS9D1Q1I12PTpTJUAJKlkxyQza1cxzU7G_RJI1rhQrlTey1GhpMO8RGL4govskCkjEmhoWkLW1b-XIZIXLNy3_jdzdpIyLuz58qfWQM7fzRb_Doe8HX9nEedBUAAfNX-Dk1_tGgUCLPannW2b2rWEA3SGvyN0jd5R39yWElSACjKleuCOapv4DS7XvR-AigCmtQ-HrqJ-7Ap6K-WREgRyaZ9j0fJvjraZceprkfGjeWnhTKqQkUmrXkCwxExwS5vjOx-hgvvk_Pj74TukuS-pWsmD2gkVQ465yafyOpxNrVAjA0Ql2U0LZ_a4yUYleXjQ"
  //     }
  //   }).then(function (response) {
  //     console.log('response from create positions', response);

  //   })
  // }
});
