//Filename: item.js

define([
// These are path alias that we configured in our bootstrap
  'jQuery',     // lib/jquery/jquery.js
  'Kendo',      //libs/kendo/kendo.js
], function ($, kendo) {
    var pub = {};

    // public
    pub.itemModel = function (id) {
        return kendo.data.Model.define({
            id: id
        });
    };

    // private

    // return
    return pub;
});