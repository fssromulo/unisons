'use strict';

var uniSons = angular.module('uniSons', [ 'ngRoute' ]);

uniSons.config(['$routeProvider',
    function (
        $routeProvider
    ) {
          $routeProvider.
              when('/home', {
                  templateUrl: 'pages/home.html',
                  controller: 'HomeController'
              }).
              otherwise({
                  redirectTo: '/home'
              });
}]);