//Filename: item.js

define([
// These are path alias that we configured in our bootstrap
  'jQuery',     // lib/jquery/jquery.js
  'Kendo',      //libs/kendo/kendo.js
], function ($, kendo) {
    return kendo.data.Model.define({
        id: "ID",
        fields: {
            Name: { nullable: false, validation: { required: true} }

        }
    });
});