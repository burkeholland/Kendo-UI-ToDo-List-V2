//Filename: boilerplate.js

define([
// These are path alias that we configured in our bootstrap
  'jQuery',         // lib/jquery/jquery.js
  'Kendo',          // libs/kendo/kendo.js
  'models/item',    // modules/item.js
  'utils/root',     // utils/console.js
  'modules/items/items'     // views/items.js
], function ($, kendo, model, root) {
    return new kendo.data.DataSource({
        transport: {
            read: {
                url: root("Home/Read")
            },
            create: {
                url: root("Home/Create"),
                type: "POST"
            },
            destroy: {
                url: root("Home/Delete"),
                type: "POST"
            },
            update: {
                url: root("Home/Update"),
                type: "POST"
            }
        },
        schema: {
            model: model
        },
        change: function () {
            $.publish('/datasource/change', [this]);
        }
    });
});