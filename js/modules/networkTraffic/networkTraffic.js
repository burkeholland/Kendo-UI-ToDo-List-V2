//Filename: networkTraffic.js

define([
// These are path alias that we configured in our bootstrap
  'jQuery',                                     // lib/jquery/jquery.js
  'Kendo',                                      // libs/kendo/kendo.js
  'utils/guid',                              
  'modules/networkTraffic/views/networkTrafficView'
], function ($, kendo, guid, networkTrafficView) {
    var pub = {};

    // public
    pub.load = function (el) {

        // load the view
        networkTrafficView.load(el);

        // attach event listeners to the element
        $(el).ajaxSend(function (event, xhr, options) {
            xhr.id = guid.newGuid();
            $.publish('/log/request', [xhr.id, options.url, options.data, options.type]);
        });

        $(el).ajaxComplete(function (event, xhr, options) {
            if (xhr.id) {
                $.publish('/log/response', [ xhr.id, xhr.responseText ]);
            }
        });
    }

    // private

    // return
    return pub;
});