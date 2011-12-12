//Filename: items.js

define([
// These are path alias that we configured in our bootstrap
  'jQuery',     // lib/jquery/jquery.js
  'Kendo',      // libs/kendo/kendo.js
  'modules/items/dataSource',
  'text!/js/modules/items/templates/TodoList.htm',
  'modules/items/views/grid',
  'modules/items/events/todoListEvents'
], function ($, kendo, dataSource, todoListTemplate, grid, events) {
    var pub = {};

    pub.load = function (el) {

        // load the todo list
        var todoList = kendo.template($(todoListTemplate).html());
        el.html(todoList);

        // load in the grid
        grid.load($(todoList).find("#grid"));

        //        var item = kendo.template($(itemTemplate).html());
        //        $.subscribe('/datasource/change', function (sender) {
        //            $("#items").html(kendo.render(item, sender.view()));
        //        });

        // subscribe to all the buton click / keyboard events
        $.subscribe("/todoList/events/create", function (event) {
            if ($.trim($("#todo-list #new").val()) != "") {
                dataSource.add({ Name: $("#todo-list #new").val() });
                dataSource.sync();
                $("#todo-list #new").val("");
                dataSource.read();
            }
        });

        $.subscribe("/dataSource/change", function (sender) {
            if (sender.view().length == 0) $(grid).hide();
            else $(grid).show();
        });

        // load up the events
        // create listeners for the events       
        events.load(el, ".k-button", "click");
    }

    return pub;
});