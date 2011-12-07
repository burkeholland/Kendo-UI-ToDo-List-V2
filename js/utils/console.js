//Filename: utils.js
define([], function () {
    var pub = {};

    // public
    pub.log = function (msg) {
        if (typeof (console) == "undefined") console = { log: function (msg) { } };
        else console.log(msg);
    }

    // private

    // return
    return pub;
});