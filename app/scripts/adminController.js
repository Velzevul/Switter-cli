angular.module('tweetsToSoftware')
  .controller('adminController', function(MenuService, switterServer, LoggerService,
                                          $scope, $http) {
    'use strict';

    LoggerService.log('Enter admin page');

    $scope.menuItems = MenuService.menu;
    $scope.panelbarItems = MenuService.panelbar;
    $scope.toolbarItems = MenuService.toolbar;

    $scope.selectedMenuItems = [];
    $scope.selectedPanelbarItems = [];
    $scope.selectedToolbarItems = [];

    $scope.addMenuItem = function() {
      $scope.selectedMenuItems.push({});
    };
    $scope.addPanelbarItem = function() {
      $scope.selectedPanelbarItems.push({});
    };
    $scope.addToolbarItem = function() {
      $scope.selectedToolbarItems.push({});
    };

    $scope.removeMenuItem = function(item) {
      $scope.selectedMenuItems.splice($scope.selectedMenuItems.indexOf(item), 1);
    };
    $scope.removePanelbarItem = function(item) {
      $scope.selectedPanelbarItems.splice($scope.selectedPanelbarItems.indexOf(item), 1);
    };
    $scope.removeToolbarItem = function(item) {
      $scope.selectedToolbarItems.splice($scope.selectedToolbarItems.indexOf(item), 1);
    };

    $scope.check = function() {
      $http.get(switterServer + '/api/tweets/' + $scope.tweetId)
        .then(function(r) {
          $scope.tweetStatus = 'Tweet with such ID already in the database';
        }, function(r) {
          $scope.tweetStatus = 'Yay, this tweet is not in the database! Let`s add it!';
        });
    };

    $scope.submit = function() {
      $http.get(switterServer + '/twitter-api/tweets/' + $scope.tweetId)
        .then(function(r) {
          var tweetData = r.data;

          tweetData.preview_image_url = $scope.previewImageUrl;
          tweetData.menu_items = $scope.selectedMenuItems.map(function(item) {
            return item.id;
          }).join(',') || null;
          tweetData.panelbar_items = $scope.selectedPanelbarItems.map(function(item) {
            return item.id;
          }).join(',') || null;
          tweetData.toolbar_items = $scope.selectedToolbarItems.map(function(item) {
            return item.id;
          }).join(',') || null;

          $http.post(switterServer + '/api/tweets', {tweet: JSON.stringify(tweetData)})
            .then(function(r) {
              alert('Tweet was successfully added!');
              $scope.tweetId = null;
              $scope.previewImageUrl = null;

              $scope.selectedMenuItems = [];
              $scope.selectedToolbarItems = [];
              $scope.selectedPanelbarItems = [];
            });
        });
    };

    /**
     * common for all menus
     */
    $scope.activateItem = function(menu, item) {
      if (item.children.length === 0) {
        menu.close();

        var target;

        if (menu.name === 'menu') {
          target = $scope.selectedMenuItems;
        } else if (menu.name === 'panelbar') {
          target = $scope.selectedPanelbarItems;
        } else if (menu.name === 'toolbar') {
          target = $scope.selectedToolbarItems;
        }

        target.push(item);
      }
    };

    $scope.itemHoverHandler = function(menu, item) {
      menu.close();
      item.highlight().open();
      menu.isOpen = true;
    };

    $scope.itemLeaveHandler = function(item) {
      if (item.children.length === 0) {
        item.isHighlighted = false;
      }
    };

    $scope.rootItemHoverHandler = function(menu, rootItem) {
      if (menu.isOpen) {
        menu.close();
        rootItem.open();
        menu.isOpen = true;
      }
      rootItem.highlight();
    };

    $scope.rootItemClickHandler = function(menu, rootItem) {
      rootItem.highlight();

      if (menu.isOpen) {
        menu.close();
      } else {
        menu.close();
        rootItem.open();
        menu.isOpen = true;
      }
    };

    $scope.rootItemLeaveHandler = function(menu, rootItem) {
      if (!menu.isOpen) {
        rootItem.isHighlighted = false;
      }
    };
  });