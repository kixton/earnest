'use strict';

/**
 * @ngdoc function
 * @name earnestkpApp.controller:ModalCtrl
 * @description
 * # ModalCtrl
 * Controller of the earnestkpApp
 */
angular.module('earnestkpApp')
  .controller('ModalCtrl', function ($scope, close) {
    $scope.close = function(result) {
      close(result, 500);
    };
  });
