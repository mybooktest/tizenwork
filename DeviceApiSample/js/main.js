//Initialize function
var init = function() {
        $('div[data-role="page"]:first .ui-btn-back').bind("click", function(event) {
            var currentApp = tizen.application.getCurrentApplication();
            currentApp.exit();
        });
        
//        $("ul > li").click(function() {
//            $(this).find("ul").toggle();
//        });
        
        // TODO:: Do your initialization job
        console.log("init() called");
    };
$(document).bind('pageinit', init);