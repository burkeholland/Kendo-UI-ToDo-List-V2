//Filename: requestResponse.js

define([
// These are path alias that we configured in our bootstrap
  'jQuery',                                         // lib/jquery/jquery.js
  'Kendo',                                          //libs/kendo/kendo.js
  'text!/js/modules/networkTraffic/templates/PanelBar.htm',
  'text!/js/modules/networkTraffic/templates/LogEntry.htm'
], function ($, kendo, panelbarTemplate, logEntryTemplate) {

    var pub = {};

    pub.load = function (el) {

        var panelbar = kendo.template($(panelbarTemplate).html());

        // add the panel bar to the dom
        $(el).html(panelbar);

        // create the panel bar
        $("#panelbar").kendoPanelBar();

        // subscribe to the request event
        $.subscribe("/log/request", function (id, url, data, type) {
            var entry = kendo.template($(logEntryTemplate).html());

            $("#log").html(entry({
                requestId: id,
                requestUrl: url,
                requestData: data ? unescape(data) : "",
                requestMethod: type
            }));

            $('.tabstrip').kendoTabStrip();
        });

        // subscribe to the ajax response event
        $.subscribe("/log/response", function (id, data) {
            if (id) {
                $("#" + id).html(data);
            }
        });
    }

    return pub;
});