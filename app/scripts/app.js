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
    'firebase',
    'xeditable',
    'checklist-model',
    'ui.bootstrap'
  ])
  .value('fbUsersURL', 'https://earnestkp.firebaseio.com/users')
  .value('fbRolesURL', 'https://earnestkp.firebaseio.com/roles')
  .run(function(editableOptions) {
    editableOptions.theme = 'bs3'; // Bootstrap 3 theme
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });