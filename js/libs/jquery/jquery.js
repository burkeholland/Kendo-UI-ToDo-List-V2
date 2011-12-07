// Filename: libs/jquery/jquery.js

define([
// Load the original jQuery source file
  'order!libs/jquery/jquery-1.6.2.min', 'order!libs/jquery/pubsub'], function () {   
    // Tell Require.js that this module returns a reference to jQuery
    return $;
});