/*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
 * 
 * @author Tadeusz Wlodarkiewicz <<ahref='mailto:t.wlodarkiew@samsung.com'>t.wlodarkiew@samsung.com</a>>
 * 
 * 
 * ********************************************************************************************************
 * 
 * Copyright (c) 2012 Samsung Electronics All Rights Reserved.
 * 
 ******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/


$.extend($.mobile, {
	defaultPageTransition : "flip",
	loadingMessageTextVisible : true,
	pageLoadErrorMessage : "Unable to load page",
	pageLoadErrorMessageTheme : "d",
	touchOverflowEnabled : true,
	loadingMessage : "Please wait...",
	allowCrossDomainPages : true,
	ajaxEnabled : false
});

tizen.logger = tizen.logger({
	logLevel : 3
});

/**
 * Initializes destinations object. If the object is not empty it starts the service.
 */
function init() {
	tizen.network.isInternetConnection(function(result){
		if (!result){
			alert("Internet connecion is mandatory, but it's not enabled. Please enable Internet connecion.");
			tizen.application.exit();
		}
	});
	decarta.initDeCarta();
	destinations.init();
	if (destinations.areThereAnyDestinations())
		decarta.runAlarmService();
}

$(document).delegate("#main", "pageinit", function() {
	$("#exit").bind("vclick", function() {
		popupConfirmation("Are you sure you want to exit?", function() {
			tizen.application.exit();
		});
		return false;
	});

	$("#alarm-all-list").delegate("div", "vclick", function() {
		popupConfirmation("Are you sure you want to cancel?", destinations.removeDestinationFromIndex, $(this).parent().data("id"));
		refreshAlarmsList();
		decarta.checkAlarmService();
		return false;
	});

	init();
	refreshAlarmsList();
	tizen.logger.info("end main init");
});

tizen.application.visibility.onApplicationVisible(function() {
	tizen.logger.info("app visible");
	geolocation.getCurrentLocation(decarta.setStart);
});

$(document).delegate("#decarta", "pageinit", function() {
	$("#dec-alarm-save").bind("vclick", function() {
		decarta.createDecAlarm();
		return false;
	});

	geolocation.getCurrentLocation(decarta.setStart);
	tizen.logger.info("end decarta init");
});

$(document).delegate("#addr-to-pos", "pageinit", function() {
	$("#addr-to-pos-convert").bind("vclick", function() {
		tizen.view.showLoader();
		decarta.structuredAddressToPosition();
		return false;
	});
});

$(document).delegate("#alarm", "pageinit", function() {
	$("#stop-playing").bind("vclick", function() {
		document.getElementById("mp3").pause();
		return false;
	});
});

/**
 * Refreshes the list with destinations. The new list is based on the destinations object content.
 */
function refreshAlarmsList() {
	var alarmListContent = "";
	var dest = destinations.getDestinations();
	for ( var i = 0; i < dest.length; i++) {
		if (!dest[i].country)
			dest[i].country = "Unknown";
		if (!dest[i].city)
			dest[i].city = "Unknown";
		if (!dest[i].street)
			dest[i].street = "";
		alarmListContent += '<li class="ui-li-has-multiline" data-id="' + i + '">Destination:<br>' + dest[i].country + ", " + dest[i].city + '<br>' + dest[i].street + ' <br> Waking radius: ' + dest[i].radius / 1000 + ' km<div data-role="button" data-inline="true">Cancel</div></li>';
	}
	$("#alarm-all-list").html(alarmListContent).trigger("create").listview("refresh");
}

/**
 * Creates popup asking user for confirmation of his intension.
 * 
 * @param message {String} message to be displayed to user
 * @param IfTrueDo {function} function that will be called when confirmation is received
 * @param functionArgument {Object} argument to the function
 */
function popupConfirmation(message, IfTrueDo, functionArgument) {
	var userResponse = confirm(message);
	if (userResponse) {
		IfTrueDo(functionArgument);
	}
}
