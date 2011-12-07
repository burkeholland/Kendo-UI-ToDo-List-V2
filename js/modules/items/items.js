//Filename: items.js

define([
// These are path alias that we configured in our bootstrap
  'jQuery',                     // lib/jquery/jquery.js
  'Kendo',                      //libs/kendo/kendo.js
  'modules/items/dataSource',    // the data source module
  'modules/items/views/itemsView'
], function ($, kendo, dataSource, itemsView) {
    var pub = {};

    // public
    pub.load = function (el) {
        // load in the items view
        itemsView.load(el);

        dataSource.read();
    };

    // private

    // return
    return pub;
});