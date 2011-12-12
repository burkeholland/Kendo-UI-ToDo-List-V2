//Filename: boilerplate.js

define([
// These are path alias that we configured in our bootstrap
  'jQuery',     // lib/jquery/jquery.js
  'Kendo',      //libs/kendo/kendo.js
  'modules/items/dataSource'
], function ($, kendo, dataSource) {
    var pub = {};

    // public
    pub.load = function (grid) {
        // load the grid
        $(grid).kendoGrid({
            dataSource: dataSource,
            columns: [{ field: "Name", title: "Click On An Item To Edit", width: 600 }, { title: "", command: "destroy"}],
            editable: true,
            navigatable: true,
            scrollable: false,
            toolbar: ["save"]
        });

        return grid;
    }

    // private

    // return
    return pub;
});