'use strict';

/**
 * @ngdoc directive
 * @name earnestkpApp.directive:ngReallyClick
 * @description
 * # ngReallyClick
 */

angular.module('earnestkpApp')
  .directive('ngReallyClick', [function() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        element.bind('click', function() {
          var message = attrs.ngReallyMessage;
          if (message && confirm(message)) {
            scope.$apply(attrs.ngReallyClick);
          }
        });
      }
    };
  }]);