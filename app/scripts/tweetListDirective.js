angular.module('tweetsToSoftware')
  .directive('tweetList', function(FilterService, MenuService, $timeout) {
    'use strict';

    return {
      restrict: 'E',
      templateUrl: 'tweetList.html',
      scope: {
        tweets: '=',
        activeItem: '=',
        activeMenu: '=',
        deactivateCallback: '='
      },
      controller: function($scope) {
        var highlightTimeout,
            highlightDelay = 50,
            lastOpenItem = null;

        $scope.activeTweetId = null;

        // "opens" tweet and makes it "active", so that user can
        // interact with the command links in it
        $scope.activateTweet = function(t) {
          $scope.activeTweetId = t.id;
        };

        $scope.highlightCommand = function(menuName, commandId) {
          clearTimeout(highlightTimeout);
          highlightTimeout = $timeout(function() {
            var menu = MenuService[menuName],
                item = menu.byId[commandId];

            MenuService.menu.close();
            MenuService.panelbar.close();
            MenuService.toolbar.close();

            menu.lastOpenItem = item;
            item.highlight();
          }, highlightDelay).$$timeoutId;
        };

        $scope.dimCommand = function(menuName, commandId) {
          clearTimeout(highlightTimeout);

          var menu = MenuService[menuName],
              item = menu.byId[commandId];

          if (!item.isOpen) {
            item.isHighlighted = false;
          }
        };

        $scope.revealCommandLocation = function(menuName, commandId, event) {
          clearTimeout(highlightTimeout);
          event.stopPropagation();

          var menu = MenuService[menuName],
              item = menu.byId[commandId];

          item.open();
          menu.isOpen = true;
        };
      },
      link: function($scope) {
        
      }
    };
  });