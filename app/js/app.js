(function () {
  'use strict';

  angular
    .module('elefgee', [
      'ngRoute',
      'ngAnimate',
      'underscore'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          redirectTo: '/login'
        })
        .when('/login', {
          templateUrl: 'login/views/login.html',
          controller: 'LoginController'
        })
        .when('/404', {
          template: '<h2>Sorry, page not found</h2>'
        })
        .otherwise({
          redirectTo: '/404'
        });
    })
    angular
      .module('underscore', [])
      .factory('_', function ($window) {
        return $window._;
    });
})();
