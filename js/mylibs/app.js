define([
  'jQuery',
  'Kendo',
  'modules/items/items',
  'modules/networkTraffic/networkTraffic'
], function ($, kendo, items, networkTraffic) {

    var pub = {};

    // public
    pub.initialize = function () {

        // load the network traffic monitor
        networkTraffic.load($('#network-traffic'));

        // load in the items from the server
        items.load($('#todo-list'));
    }

    // private

    return pub;
});