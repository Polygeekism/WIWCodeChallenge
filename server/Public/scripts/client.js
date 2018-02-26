var myApp = angular.module('myApp', ['ngRoute']);

var WIWtoken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOjEsImlhdCI6MTUxOTI1MzIxNywibG9naW4iOiIxMDMyNDI3NSIsInBpZCI6IjEwMzI0Mjc1In0.PXnO8z8nZiTwgt36P1kV2FS9D1Q1I12PTpTJUAJKlkxyQza1cxzU7G_RJI1rhQrlTey1GhpMO8RGL4govskCkjEmhoWkLW1b-XIZIXLNy3_jdzdpIyLuz58qfWQM7fzRb_Doe8HX9nEedBUAAfNX-Dk1_tGgUCLPannW2b2rWEA3SGvyN0jd5R39yWElSACjKleuCOapv4DS7XvR-AigCmtQ-HrqJ-7Ap6K-WREgRyaZ9j0fJvjraZceprkfGjeWnhTKqQkUmrXkCwxExwS5vjOx-hgvvk_Pj74TukuS-pWsmD2gkVQ465yafyOpxNrVAjA0Ql2U0LZ_a4yUYleXjQ';

var WIWtestAccount = '2912246';
var WIWemail = 'test7@developertest.com';
var WIWpassword = 'JGRfkzhCR3MTujtt';
var WIWaccountId = '2912246';
var WIWuserId = '30926016';


myApp.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        console.log('myApp -- config');
        $locationProvider.hashPrefix('');

        $routeProvider
            .when('/login', {
                templateUrl: '/views/templates/login.html',
                controller: 'loginController as lc'
            })
            .when('/home', {
                templateUrl: '/views/templates/home.html',
                controller: 'userHomeController as uc'
            })
    }]);
