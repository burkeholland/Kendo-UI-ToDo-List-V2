//Filename: todoListEvents.js

define([
// These are path alias that we configured in our bootstrap
  'jQuery',     // lib/jquery/jquery.js
  'Kendo',      // libs/kendo/kendo.js
  'modules/items/dataSource'
], function ($, kendo, dataSource) {
    var pub = {};

    pub.load = function(el,selector, event) {
        $(el).delegate(selector, event, function (e) {
            var that = $(this),
                eventData = that.data("event");
            $.publish("/todoList/events/" + eventData, [e]);
        });
    }

    return pub;
});