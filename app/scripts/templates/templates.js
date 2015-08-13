(function(module) {
try { module = angular.module("app-templates"); }
catch(err) { module = angular.module("app-templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("activity.html",
    "<div class=\"app-body\">\n" +
    "  <div class=\"activity-panel\">\n" +
    "    <div class=\"ap-header\">\n" +
    "      <div class=\"l-block-small\">\n" +
    "        <div class=\"ap-header__title\">\n" +
    "          Tweets about Photoshop\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"l-block-small\">\n" +
    "        <label>\n" +
    "          <input type=\"checkbox\"\n" +
    "                 ng-model=\"filters.highlightUnfamiliar\"> Only tweets for\n" +
    "          unfamiliar commands\n" +
    "        </label>\n" +
    "      </div>\n" +
    "\n" +
    "      <label>\n" +
    "        <input type=\"checkbox\"\n" +
    "               ng-model=\"filters.highlightRelevant\"> Only tweets for relevant\n" +
    "        commands\n" +
    "      </label>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"ap-section\">\n" +
    "      <timeline></timeline>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"ap-section\">\n" +
    "      <active-tweet></active-tweet>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("app-templates"); }
catch(err) { module = angular.module("app-templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("menu.html",
    "<script type=\"text/ng-template\" id=\"menuDropdown\">\n" +
    "    <div class=\"md-item\"\n" +
    "         ng-class=\"{'md-item--highlighted': item.isHighlighted,\n" +
    "                    'md-item--parent': item.children.length}\"\n" +
    "         ng-mouseenter=\"hoverOpen(item)\"\n" +
    "         ng-click=\"clickOpen(item)\">\n" +
    "\n" +
    "        <div class=\"md-item__counter\"\n" +
    "             ng-show=\"item.tweetsCount > 0\">{{item.tweetsCount}}</div>\n" +
    "\n" +
    "        <button class=\"md-item__name\"\n" +
    "                ng-click=\"showTweetsFor(item)\">{{item.label}}</button>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-show=\"item.children.length\">\n" +
    "        <div class=\"m-dropdown m-dropdown--nested\"\n" +
    "             ng-show=\"item.isOpen\">\n" +
    "            <div ng-repeat=\"item in item.children\">\n" +
    "                <div class=\"m-dropdown__slot\"\n" +
    "                     ng-hide=\"item.divider\"\n" +
    "                     ng-include=\"'menuDropdown'\"></div>\n" +
    "\n" +
    "                <div class=\"m-dropdown__divider\"\n" +
    "                     ng-show=\"item.divider\"></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</script>\n" +
    "\n" +
    "<div class=\"menu\">\n" +
    "    <ul class=\"l-list-inline l-list-inline--collapsed\">\n" +
    "        <li class=\"l-list-inline__item\"\n" +
    "            ng-repeat=\"rootItem in menuItems\">\n" +
    "            <div class=\"menu__slot\">\n" +
    "                <div class=\"m-item\"\n" +
    "                     ng-class=\"{'m-item--highlighted': rootItem.isHighlighted}\"\n" +
    "                     ng-mouseenter=\"hoverOpen(rootItem)\"\n" +
    "                     ng-click=\"clickOpen(rootItem)\">\n" +
    "                    <button class=\"m-item__name\">{{rootItem.label}}</button>\n" +
    "\n" +
    "                    <div class=\"m-item__counter\"\n" +
    "                         ng-show=\"rootItem.tweetsCount > 0\">\n" +
    "                        {{rootItem.tweetsCount}}\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"m-dropdown m-dropdown--root\"\n" +
    "                     ng-show=\"rootItem.isOpen\">\n" +
    "                    <div ng-repeat=\"item in rootItem.children\">\n" +
    "                        <div class=\"m-dropdown__slot\"\n" +
    "                             ng-hide=\"item.divider\"\n" +
    "                             ng-include=\"'menuDropdown'\"></div>\n" +
    "\n" +
    "                        <div class=\"m-dropdown__divider\"\n" +
    "                             ng-show=\"item.divider\"></div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("app-templates"); }
catch(err) { module = angular.module("app-templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("panelbar.html",
    "<div class=\"toolbar toolbar--right\">\n" +
    "  <div ng-repeat=\"panel in panels\">\n" +
    "    <div class=\"toolbar__slot\"\n" +
    "         ng-click=\"clickOpen(panel)\"\n" +
    "         ng-mouseenter=\"hoverOpen(panel)\"\n" +
    "         ng-if=\"!panel.divider\">\n" +
    "      <div class=\"t-item\"\n" +
    "           ng-class=\"{'t-item--highlighted': panel.isHighlighted}\">\n" +
    "        <button>\n" +
    "          <div class=\"l-list-inline l-list-inline--x-small\">\n" +
    "            <div class=\"l-list-inline__item is-middle-aligned\">\n" +
    "              <div class=\"t-item__icon\"\n" +
    "                   style=\"background-image: url('/images/{{panel.id}}.png');\">\n" +
    "              </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"l-list-inline__item is-middle-aligned\">\n" +
    "              <div class=\"t-item__label\">{{panel.label}}</div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </button>\n" +
    "\n" +
    "        <div class=\"t-item__counter t-item__counter--rev\"\n" +
    "             ng-show=\"panel.tweetsCount > 0\">{{panel.tweetsCount}}</div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"t-dropdown t-dropdown--rev\"\n" +
    "           ng-click=\"clickOpen(panel)\"\n" +
    "           ng-show=\"panel.isOpen\">\n" +
    "        <img ng-src=\"/images/{{panel.id}}-panel.png\" alt=\"{{panel.label}}\"/>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"toolbar__divider\"\n" +
    "         ng-if=\"tool.divider\"></div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("app-templates"); }
catch(err) { module = angular.module("app-templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("timeline.html",
    "<div id=\"js-timeline\"\n" +
    "     class=\"timeline\">\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("app-templates"); }
catch(err) { module = angular.module("app-templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("toolbar.html",
    "<div class=\"toolbar toolbar--left\">\n" +
    "  <div ng-repeat=\"tool in tools\">\n" +
    "    <div class=\"toolbar__slot\"\n" +
    "         ng-if=\"!tool.divider\">\n" +
    "      <div class=\"t-item\"\n" +
    "           ng-click=\"clickOpen(tool)\"\n" +
    "           ng-mouseenter=\"hoverOpen(tool)\"\n" +
    "           ng-class=\"{'t-item--highlighted': tool.isHighlighted}\">\n" +
    "        <button class=\"t-item__icon\"\n" +
    "                ng-class=\"{'t-item__icon--large': tool.largeIcon}\"\n" +
    "                style=\"background-image: url('/images/{{tool.id}}.png');\">\n" +
    "        </button>\n" +
    "\n" +
    "        <div class=\"t-item__counter\"\n" +
    "             ng-show=\"tool.tweetsCount > 0\">{{tool.tweetsCount}}</div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"t-dropdown\"\n" +
    "           ng-show=\"tool.isOpen\"\n" +
    "           ng-if=\"tool.children.length\">\n" +
    "        <div class=\"t-dropdown__slot\"\n" +
    "             ng-repeat=\"subtool in tool.children\">\n" +
    "          <div class=\"td-item\"\n" +
    "               ng-mouseenter=\"hoverOpen(subtool)\"\n" +
    "               ng-class=\"{'td-item--first': $first,\n" +
    "                          'td-item--highlighted': subtool.isHighlighted}\">\n" +
    "            <button>\n" +
    "              <div class=\"l-list-inline l-list-inline--x-small\">\n" +
    "                <div class=\"l-list-inline__item is-middle-aligned\">\n" +
    "                  <div class=\"td-item__icon\"\n" +
    "                       ng-class=\"{'td-item__icon--large': subtool.largeIcon}\"\n" +
    "                       style=\"background-image:\n" +
    "                       url('/images/{{subtool.id}}.png');\"></div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"l-list-inline__item is-middle-aligned\">\n" +
    "                  <div class=\"td-item__label\">{{subtool.label}}</div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </button>\n" +
    "\n" +
    "            <div class=\"td-item__counter\"\n" +
    "                 ng-show=\"tool.tweetsCount > 0\">{{tool.tweetsCount}}</div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"toolbar__divider\"\n" +
    "         ng-if=\"tool.divider\"></div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("app-templates"); }
catch(err) { module = angular.module("app-templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("tweet.html",
    "<div>\n" +
    "  <div class=\"l-tweet-content\"\n" +
    "       ng-show=\"data.retweetedStatus\">\n" +
    "    <div class=\"l-tweet-content__icon is-right-aligned\">\n" +
    "      <i class=\"icon t-icon-retweet-indicator\"></i>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"tweet__extra\">\n" +
    "      {{data.author.name}} retweeted ({{data.createdAt | amDateFormat:'h:mm A - D MMM YYYY'}})\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"l-tweet-content\">\n" +
    "    <div class=\"l-list-inline l-list-inline--collapsed\">\n" +
    "      <div class=\"l-list-inline__item\">\n" +
    "        <div class=\"t-author\">\n" +
    "          <div class=\"l-tweet-content__icon\">\n" +
    "            <img src=\"{{tweet.author.profileImageUrl}}\"\n" +
    "                 alt=\"{{tweet.author.name}}\"\n" +
    "                 class=\"t-author__avatar\"/>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"l-list-inline l-list-inline--collapsed\">\n" +
    "            <div class=\"l-list-inline__item\">\n" +
    "              <div class=\"t-author__name\">{{tweet.author.name}}</div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"l-list-inline__item\">\n" +
    "              <div class=\"t-author__screen-name tweet__extra\">@{{tweet.author.screenName}}</div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"l-list-inline__item\">\n" +
    "        <div class=\"tweet__extra tweet__extra--pre-dot\">1h</div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"l-block-small\">\n" +
    "      {{tweet.text}}\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"l-block-small\">\n" +
    "      <div class=\"tweet__preview-image\"\n" +
    "           style=\"background: url('//placehold.it/600x400');\"></div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"l-block-small\">\n" +
    "      <div class=\"commands-table\">\n" +
    "        <div class=\"commands-table__cell\">\n" +
    "          <div class=\"commands-header\">Menu items:</div>\n" +
    "\n" +
    "          <div class=\"command\"\n" +
    "               ng-repeat=\"item in tweet.menu | limitTo: data.id === active ? tweet.menu.length : 2\"\n" +
    "               ng-mouseenter=\"highlight('menu', item.id)\"\n" +
    "               ng-mouseleave=\"removeHighlights('menu', item.id)\"\n" +
    "               ng-click=\"open('menu', item.id, $event)\">{{item.label | characters:25}}</div>\n" +
    "\n" +
    "          <div class=\"command\"\n" +
    "               ng-show=\"data.id !== active && tweet.menu.length > 2\">...</div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"commands-table__cell commands-table__cell--pre-border\">\n" +
    "          <div class=\"commands-header\">Panels:</div>\n" +
    "\n" +
    "          <div class=\"command\"\n" +
    "               ng-repeat=\"item in tweet.panels | limitTo: data.id === active ? tweet.panels.length : 2\"\n" +
    "               ng-mouseenter=\"highlight('panelbar', item.id)\"\n" +
    "               ng-mouseleave=\"removeHighlights('panelbar', item.id)\"\n" +
    "               ng-click=\"open('panelbar', item.id, $event)\">{{item.label | characters:25}}</div>\n" +
    "\n" +
    "          <div class=\"command\"\n" +
    "               ng-show=\"data.id !== active && tweet.panels.length > 2\">...</div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"commands-table__cell commands-table__cell--pre-border\">\n" +
    "          <div class=\"commands-header\">Tools:</div>\n" +
    "\n" +
    "          <div class=\"command\"\n" +
    "               ng-repeat=\"item in tweet.tools| limitTo: data.id === active ? tweet.tools.length : 2\"\n" +
    "               ng-mouseenter=\"highlight('toolbar', item.id)\"\n" +
    "               ng-mouseleave=\"removeHighlights('toolbar', item.id)\"\n" +
    "               ng-click=\"open('toolbar', item.id, $event)\">{{item.label | characters:25}}</div>\n" +
    "\n" +
    "          <div class=\"command\"\n" +
    "               ng-show=\"data.id !== active && tweet.tools.length > 2\">...</div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"l-block-small\"\n" +
    "         ng-show=\"data.id == active\">\n" +
    "      <div class=\"t-share-table\">\n" +
    "        <div class=\"l-list-inline l-list-inline--collapsed\">\n" +
    "          <div class=\"l-list-inline__item\">\n" +
    "            <div class=\"t-share-table__cell\">\n" +
    "              <div class=\"t-stat\">\n" +
    "                <div class=\"t-stat__title tweet__extra\">retweets</div>\n" +
    "                <div class=\"t-stat__value\">{{tweet.retweetedBy.length}}</div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"l-list-inline__item\">\n" +
    "            <div class=\"t-share-table__cell\">\n" +
    "              <div class=\"t-stat\">\n" +
    "                <div class=\"t-stat__title tweet__extra\">favorites</div>\n" +
    "                <div class=\"t-stat__value\">{{tweet.favoriteCount}}</div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"l-list-inline__item\">\n" +
    "            <div class=\"t-share-table__cell t-share-table__cell--pre-border\">\n" +
    "              <div class=\"l-list-inline l-list-inline--x-small\">\n" +
    "                <div class=\"l-list-inline__item\"\n" +
    "                     ng-repeat=\"author in tweet.retweetedBy | limitTo:8\">\n" +
    "                  <div class=\"t-retweet\">\n" +
    "                    <img src=\"{{author.profileImageUrl}}\"\n" +
    "                         alt=\"author.name\"\n" +
    "                         class=\"t-retweet__user-avatar\"/>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"l-block-small\"\n" +
    "         ng-show=\"data.id == active\">\n" +
    "      <div class=\"tweet__extra\">\n" +
    "        {{tweet.createdAt | amDateFormat:'h:mm A - D MMM YYYY'}}\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"tweet__extra\">\n" +
    "      <div class=\"l-list-inline\">\n" +
    "        <div class=\"l-list-inline__item\">\n" +
    "          <div class=\"tweet__action\">\n" +
    "            <i class=\"icon t-icon-retweet\"></i>\n" +
    "            <span ng-show=\"data.id != active\">{{tweet.retweetedBy.length}}</span>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"l-list-inline__item\">\n" +
    "          <div class=\"tweet__action\">\n" +
    "            <i class=\"icon t-icon-favorite\"></i>\n" +
    "            <span ng-show=\"data.id != active\">{{tweet.favoriteCount}}</span>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("app-templates"); }
catch(err) { module = angular.module("app-templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("tweetList.html",
    "<div class=\"tweet-list\">\n" +
    "  <tweet ng-repeat=\"t in tweets.all | limitTo: tweets.showItems\"\n" +
    "         ng-click=\"activate(t)\"\n" +
    "         class=\"tweet\"\n" +
    "         ng-class=\"{'tweet--is-first': $first,\n" +
    "                    'tweet--is-last':  $last,\n" +
    "                    'tweet--is-open': t.id == activeId}\"\n" +
    "         data=\"t\"\n" +
    "         active=\"activeId\"></tweet>\n" +
    "</div>");
}]);
})();
