var myApp = angular.module('myApp', ['ngRoute']);

var WIWtoken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOjEsImlhdCI6MTUxOTI1MzIxNywibG9naW4iOiIxMDMyNDI3NSIsInBpZCI6IjEwMzI0Mjc1In0.PXnO8z8nZiTwgt36P1kV2FS9D1Q1I12PTpTJUAJKlkxyQza1cxzU7G_RJI1rhQrlTey1GhpMO8RGL4govskCkjEmhoWkLW1b-XIZIXLNy3_jdzdpIyLuz58qfWQM7fzRb_Doe8HX9nEedBUAAfNX-Dk1_tGgUCLPannW2b2rWEA3SGvyN0jd5R39yWElSACjKleuCOapv4DS7XvR-AigCmtQ-HrqJ-7Ap6K-WREgRyaZ9j0fJvjraZceprkfGjeWnhTKqQkUmrXkCwxExwS5vjOx-hgvvk_Pj74TukuS-pWsmD2gkVQ465yafyOpxNrVAjA0Ql2U0LZ_a4yUYleXjQ';

var WIWtestAccount = '2912246';
var WIWemail = 'test7@developertest.com';
var WIWpassword = 'JGRfkzhCR3MTujtt';
var WIWaccountId = '2912246';
var WIWuserId = '30926016';

// router.get('/', function(req,res){
//     console.log('login post route hit');

//     var baseurl = 'https://api.wheniwork.com/2/login?';
//     baseurl += "username=" + WIWemail;
//     baseurl += "&password" + WIWpassword;
//     baseurl += "&key" + WIWtoken;

//     console.log('api string', baseurl);
//     $http.post(baseurl).then(function(response){
//         console.log('login attempt response', response);
//         res.send(response);

//     })
    
// })


myApp.config(function($routeProvider, $locationProvider){
    console.log('myApp -- config');

});


myApp.controller('myAppController', ['$http', function($http){
    console.log('controller loaded');

    var self = this;

    self.loginRequest = function(){
        console.log('Loginrequest -- controller');


       

    }

    


}]);