angular.module('tweetsToSoftware')
    .directive('panelbar', function(MenuService) {
        'use strict';

        return {
            restrict: 'E',
            templateUrl: 'panelbar.html',
            scope: {},
            controller: function($scope) {
                MenuService.loaded
                    .then(function() {
                        $scope.panels = MenuService.panelbar.all;
                    });
            }
        }
    });