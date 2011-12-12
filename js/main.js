// main js
require.config({
    paths: {
        jQuery: 'libs/jquery/jquery',
        Kendo: 'libs/kendo/kendo'
    }
});

require([
// Load our app module and pass it to our definition function
  'mylibs/app',

// Some plugins have to be loaded in order due to there non AMD compliance
// Because these scripts are not "modules" they do not pass any values to the definition function below
  'order!libs/jquery/jquery-1.6.2.min',
  'order!libs/kendo/kendo.web.min'
], function (App) {
    // The "app" dependency is passed in as "App"
    // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
    App.initialize();
});