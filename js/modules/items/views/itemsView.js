//Filename: items.js

define([
// These are path alias that we configured in our bootstrap
  'jQuery',     // lib/jquery/jquery.js
  'Kendo',      // libs/kendo/kendo.js
  'modules/items/dataSource',
  'text!/js/modules/items/templates/TodoList.htm',
  'text!/js/modules/items/templates/Item.htm',
  'modules/items/events/todoListEvents'
], function ($, kendo, dataSource, todoListTemplate, itemTemplate, events) {
    var pub = {};

    pub.load = function (el) {

        // load the todo list
        var todoList = kendo.template($(todoListTemplate).html());
        el.html(todoList);

        var item = kendo.template($(itemTemplate).html());
        $.subscribe('/datasource/change', function (sender) {
            $("#items").html(kendo.render(item, sender.view()));
        });

        // subscribe to all the buton click / keyboard events
        $.subscribe("/todoList/events/addItem", function (event) {
            if ($.trim($("#new-item").val()) != "") {
                dataSource.add({ Name: $("#new-item").val() });
                dataSource.sync();
                $("#new-item").val("");
            }
        });

        // load up the events
        events.load(el);
    }

    return pub;
});