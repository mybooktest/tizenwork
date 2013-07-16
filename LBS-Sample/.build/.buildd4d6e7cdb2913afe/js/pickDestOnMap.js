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


$(document).delegate("#pickDestOnMap", "pageinit", function() {
	var temporatyLocation;
	var pinOverlay = new deCarta.Core.MapOverlay({
		name : "Pins"
	});

	function eventHandler(event) {
		tizen.logger.info('Selected destination', event.position.lat, event.position.lon);
		var pin = new deCarta.Core.Pin({
			position : new deCarta.Core.Position(event.position.lat + "," + event.position.lon),
			text : 'Destination'
		});
		pinOverlay.clear();
		pinOverlay.addObject(pin);
		temporatyLocation = {
			latitude : event.position.lat,
			longitude : event.position.lon
		};
	}

	$('#destinationSave').unbind().bind({
		click : function() {
			if (typeof temporatyLocation !== "undefined") {
				decarta.positionToAddress(temporatyLocation.latitude, temporatyLocation.longitude, onReverseGeocodeSuccessPickDestOnMap);
			} else {
				$.mobile.changePage("#decarta");
				tizen.view.showPopup("No new destination!");
			}
		}
	});
	
	var coord = $("#dec-latitude-start").attr("value") + "," + $("#dec-longitude-start").attr("value");
	var map = new deCarta.Core.Map({
		zoom : 4,
		id : "mapToPick",
		center : new deCarta.Core.Position(coord),
		onReady : function() {
			map.addLayer(pinOverlay);
			deCarta.Core.EventManager.listen('click', eventHandler);
		}
	});
	
	/**
	 * Callback from reverse geocode after specifying destination on the map. 
	 * 
	 * @param results {Object} structured address
	 */
	function onReverseGeocodeSuccessPickDestOnMap(results) {
		var address = results['Address'];
		tizen.logger.info("Destination on map: " + JSON.stringify(address));
		temporatyLocation.country = address.countryCode;
		temporatyLocation.city = address.countryTertiarySubdivision ? address.countryTertiarySubdivision : address.municipality;
		$.mobile.changePage("#decarta");
		tizen.view.showLoader();
		
		decarta.updateDestinationAndMap(temporatyLocation);
	}

});

