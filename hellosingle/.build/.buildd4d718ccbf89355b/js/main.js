//Initialize function
var init = function() {
        $('div[data-role="page"]:first .ui-btn-back').bind("click", function(event) {
            var currentApp = tizen.application.getCurrentApplication();
            currentApp.exit();
        });

        $( "#button1" ).bind( "click", function(event, ui) {
            console.log("button1 is clicked!!!");
        });
        $( "#button2" ).bind( "click", function(event, ui) {
            console.log("button2 is clicked!!!");
        });

        // TODO:: Do your initialization job
        console.log("init() called");
    };
$(document).bind('pageinit', init);