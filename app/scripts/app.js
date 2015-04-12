'use strict';

/**
 * @ngdoc overview
 * @name earnestkpApp
 * @description
 * # earnestkpApp
 *
 * Main module of the application.
 */
angular
  .module('earnestkpApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .value('fbUsersURL', 'https://earnestkp.firebaseio.com/users')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/edituser/:id', {
        templateUrl: 'views/edituser.html',
        controller: 'EditUserCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });