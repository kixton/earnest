'use strict';

/**
 * @ngdoc service
 * @name earnestkpApp.ModalSvc
 * @description
 * # ModalSvc
 * Factory in the earnestkpApp.
 */
angular.module('earnestkpApp')
  .factory('ModalSvc', function (ModalService, Users) {
    return {
      showModal: function(id) {
        ModalService.showModal({
          templateUrl: '../../views/modal.html',
          controller: 'ModalCtrl'
        }).then(function(modal) {
          modal.element.modal();
          modal.close.then(function(result) {
            if (result === 'Yes') {
              Users.removeUser(id);
            }
          });
        });
      }
    };
  });
