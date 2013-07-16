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


if (typeof decarta === "undefined")
	decarta = function($) {
		
		//web worker responsible for periodical left distance checking
		var service;
		//currently specified destination
		var destination;
		//destination left notification
		var notification;
		
		/**
		 * Sets and displays the starting position. Calls reverse geocoding to set the current country and city.
		 * 
		 * @param position {Object}
		 */
		function setPositionStart(position) {
			tizen.logger.info("setPositionStart");
			if (!position){
				tizen.loger.err('No position specified');
			} else {
				tizen.view.showLoader();
				convertPositionToAddress(position.latitude, position.longitude, onReverseGeocodeSuccess);
				$("#dec-latitude-start").val(position.latitude);
				$("#dec-longitude-start").val(position.longitude);
			}
		}
		
		/**
		 * Calls deCarta API to translate position to address.
		 * 
		 * @param latitude {Number}
		 * @param longitude {Number}
		 * @param callback {function} function that will be called after reverseGeocode finishes
		 */
		function convertPositionToAddress(latitude, longitude, callback) {
			var myPosition = new deCarta.Core.Position(latitude, longitude);
			deCarta.Core.Geocoder.reverseGeocode(myPosition, callback);
		}
		
		/**
		 * Stops the service web worker
		 */
		function stopServiceWebWorker() {
			if (!destinations.areThereAnyDestinations()) {
				tizen.logger.info("Stopping service");
				service.postMessage("STOP");
				service = null;
			}
		}
		/**
		 * Handles errors from structuredAddressToPosition function.
		 * 
		 * @param e {error}
		 */
		function onError(e) {
			destination = null;
			tizen.view.hideLoader();
			tizen.view.showPopup("Error: " + e.message + " Check the account setting and network availability");
		}
		
		/**
		 * Callback on reverse geocode success. Displays the current country and city.
		 * 
		 * @param results
		 */
		function onReverseGeocodeSuccess(results) {
			if (typeof results !== "undefined") {
				var address = results['Address'];
				tizen.logger.info("Current country: " + address.countryCode);
				tizen.logger.info("Current city: " + address.countryTertiarySubdivision);
				$("#dec-country-start").val(address.countryCode ? address.countryCode : "");
				$("#dec-city-start").val(address.countryTertiarySubdivision ? address.countryTertiarySubdivision : address.municipality);
				tizen.view.hideLoader();
			} else {
				tizen.logger.err("onReverseGeocodeSuccess failed");
				tizen.view.hideLoader();
			}
		}
		
		/**
		 * Callback from successful structured address geocoding.
		 * 
		 * @param results {Object} contains the latitude and longitude 
		 */
		function onGeocodeStructuredAddressSuccess(results) {
			tizen.view.hideLoader();
			
			if (typeof results !== "undefined" && results[0]) {
				if (results[0].Position.getLat() === 0
						&& results[0].Position.getLon() === 0) {
					alert("No destination found");
				} else {
					updateDestination({
						latitude : results[0].Position.getLat(),
						longitude : results[0].Position.getLon()
					});
					$.mobile.changePage("#decarta");
					tizen.view.showLoader();
					planRoute();
				}
			}
		}
		
		/**
		 * Displays map with route from start to destination
		 */
function planRoute() {
	tizen.logger.info("initDeCartaMap");

	refreshMap();
	
	var routeOverlay = new deCarta.Core.MapOverlay({
		name : 'route'
	});
	var map = new deCarta.Core.Map({
		zoom : 12,
		center : new deCarta.Core.Position("0,0"),
		id : "mapContainer",
		onReady : function() {
			var routeCriteria = new deCarta.Core.RouteCriteria();
			map.addOverlay(routeOverlay);
			routeCriteria.waypoints = [ new deCarta.Core.Position(parseFloat($("#dec-latitude-start").attr("value")), parseFloat($("#dec-longitude-start").attr("value"))), new deCarta.Core.Position(parseFloat($("#dec-latitude-end").attr("value")), parseFloat($("#dec-longitude-end").attr("value"))) ];
			deCarta.Core.Routing.execute(routeCriteria, function(route, error) {
				if (route && route.routeSummary && route.routeSummary.totalDistance) {
					var distance = (parseInt(route.routeSummary.totalDistance)/1000).toFixed(2);
					tizen.logger.info("distance: " + distance);
					$("#dec-distance").val(distance + " km");

					var line = new deCarta.Core.Polyline({
						lineGeometry : route.routeGeometry
					});

					var centerAndZoom = line.getIdealCenterAndZoom(map);
					routeOverlay.addObject(line);
					map.zoomTo(centerAndZoom.zoom);
					map.centerOn(centerAndZoom.center);
					tizen.view.showPopup("Destination found and distance calculated");
				} else {
					destination = null;
					tizen.view.showPopup("Unable to calculate the distance");
				}
				tizen.view.hideLoader();
			});
		}
	});
}
		
		/**
		 * Returns distance from starting point to destination
		 * 
		 * @param startPoint {Object} coordinates of the starting point
		 * @param endPoint {Object} coordinates of the destination
		 * @param callback {function} function that will be called after calculating distance
		 */
		function getRouteDistance(startPoint, endPoint, callback) {
			tizen.logger.info("getRouteDistance " + endPoint.city);
	
			var routeCriteria = new deCarta.Core.RouteCriteria();
			routeCriteria.waypoints = [ new deCarta.Core.Position(startPoint.latitude, startPoint.longitude), new deCarta.Core.Position(endPoint.latitude, endPoint.longitude) ];
	
			deCarta.Core.Routing.execute(routeCriteria, function(route, error) {
				if (error) {
					tizen.logger.err("No route from start to destination. " + error.message);
				} else {
					tizen.logger.info("distance: " + route.routeSummary.totalDistance);
					callback(route.routeSummary.totalDistance, endPoint);
				}
			});
		}
		
		/**
		 * Checks if the destination is in waking radius and run a function. Also handles service and removes destinations objects.
		 * 
		 * @param distance {Number} distance from current location to destination
		 * @param destination {Object}
		 */
		function checkIfInRadiusAndRun(distance, destination) {
			tizen.logger.info("Checking if destination in radius");
			var dist = parseFloat(distance);
			tizen.logger.info("Distance: " + dist);
	
			if (dist < destination.radius) {
				tizen.logger.info("Destination in radius: " + destination.radius);
				destinations.removeDestination(destination);
				refreshAlarmsList();
				stopServiceWebWorker();
				startApplicationService();
			} else {
				tizen.logger.info("Destination not in radius" + destination.radius);
				var distKm = (dist/1000).toFixed(2);
				var message = "Distance left to " + destination.city + ": " + distKm + "km";
				if (notification) {
					notification.updateNotificationMessage(message);
				} else {
					notification = new SimpleNotification("Are We There Yet?", message);
					notification.displayNotification();
				}
			}
		}
		
		/**
		 * Updates current destination
		 * 
		 * @param dest {Object} Current destination will take values from dest
		 */
		function updateDestination(dest) {
			if (!destination)
				destination = {};
			destination.latitude = dest.latitude;
			destination.longitude = dest.longitude;
			if (dest.city)
				destination.city = dest.city;
			if (dest.country)
				destination.country = dest.country;
			setDisplayedDestination(dest);
		}
		
		/**
		 * Displays destination latitude and longitude on the screen
		 * 
		 * @param dest {Object} destination to be displayed
		 */
		function setDisplayedDestination(dest) {
			dest.latitude ? $("#dec-latitude-end").val(dest.latitude) : $("#dec-latitude-end").val("");
			dest.longitude ? $("#dec-longitude-end").val(dest.longitude) : $("#dec-longitude-end").val("");
		}
		
		/**
		 * Resets destination. Clears map and displayed destination value.
		 */
		function resetDestination() {
			destination = null;
			refreshMap();
			setDisplayedDestination({});
			$("#dec-distance").val("");
		}
		
		/**
		 * Loops through all the destinations and checks their distance from the current position.
		 * 
		 * @param currentPosition {Object} coordinates of thecurrent position
		 */
		function loopDestinations(currentPosition) {
			tizen.logger.info("Looping through destinations");
			setPositionStart(currentPosition);
			var dest = destinations.getDestinations();
			dest.forEach(function(destination) {
				tizen.logger.info("-------- DESTINATION --------------");
				tizen.logger.info(JSON.stringify(destination));
				getRouteDistance(currentPosition, destination, checkIfInRadiusAndRun);
			});
		}
		
		/**
		 * Clears map.
		 */
		function refreshMap() {
			$('#mapContainer').remove();
			$('#beforeMap').after('<li id="mapContainer"></li>');
			$('#list').listview('refresh');
		}
		
		/**
		 * Launches application service and displays alarm site.
		 */
		function  startApplicationService() {
			tizen.logger.info("Starting service");
			var service = new tizen.ApplicationService("http://tizen.org/appcontrol/operation/view", null, null, null);

			var serviceReplyCallback = {
				// callee sent a reply
				onsuccess : function(reply) {
					for ( var num = 0; num < reply.data.length; num++) {
						tizen.logger.info("reply.data[" + num + "].key = " + reply.data[num].key);
						tizen.logger.info("reply.data[" + num + "].value = " + reply.data[num].value);
					}
				},
				// Something went wrong
				onfail : function() {
					tizen.logger.info('The launch service failed');
				}
			};

			tizen.application.launchService(service, "smart8alar", function() {
				tizen.logger.info("launch service succeed");
				$.mobile.changePage("#alarm");
				var player = document.getElementById("mp3");
				player.load();
				player.play();
			}, function(e) {
				tizen.logger.info("launch service failed. reason: " + e.message);
			}, serviceReplyCallback);
		}

		return {
			/**
			 * Initializes deCarta API. Sets client name and password.
			 */
			initDeCarta : function () {
				deCarta.Core.Configuration.clientName = Config.clientName;
				deCarta.Core.Configuration.clientPassword = Config.clientPassword;
			},
			
			/**
			 * Sets and displays the starting position. Calls reverse geocoding to set the current country and city.
			 * 
			 * @param position {Object}
			 */
			setStart : function(position) {
				tizen.logger.info("setPositionStart");
				if (!position){
					alert("GPS is mandatory, but it's not enabled. The application will exit. Please enable GPS.");
					tizen.application.exit();
				} else {
					setPositionStart(position);
				}
			},
			
			/**
			 * Calls deCarta API to translate position to address.
			 * 
			 * @param latitude {Number}
			 * @param longitude {Number}
			 * @param callback {function} function that will be called after reverseGeocode finishes
			 */
			positionToAddress : function (latitude, longitude, callback) {
				convertPositionToAddress(latitude, longitude, callback);
			},
			
			/**
			 * Translates specified destination to coordinates. onGeocodeStructuredAddressSuccess will be called after successful geocoding.
			 */
			structuredAddressToPosition : function (){
				destination = {};
				destination.country = $('#country-select').find(":selected").text();
				destination.city = $("#city").attr("value");
				destination.street = $("#street").attr("value");
	
				var countryCode = $('#country-select').find(":selected").val();
			    var myAddress = new deCarta.Core.StructuredAddress(
			            {
			            	municipality : destination.city,
			                street : destination.street
			            },
			            new deCarta.Core.Locale('EN', countryCode)
			        );
	
				try {
					deCarta.Core.Geocoder.geocode(myAddress, onGeocodeStructuredAddressSuccess);
				} catch (exc) {
					onError(exc);
				}
			},
			
			/**
			 * Updates current destination and map
			 */
			updateDestinationAndMap : function(destination) {
				updateDestination(destination);
				planRoute();
			},
			
			/**
			 * Runs web worker that will periodically tries to check current location and the distance to the destinations.
			 */
			runAlarmService : function() {
				if (!service) {
					service = new Worker('./js/service.js');

					service.addEventListener('message', function(e) {
						geolocation.getCurrentLocation(loopDestinations);
					}, false);
					tizen.logger.info("Starting service");
					service.postMessage();
				}
			},
			
			/**
			 * Checks if the alarm service should still be running
			 */
			checkAlarmService : function() {
				if (service) {
					stopServiceWebWorker();
				}
			},
	
			/**
			 * Creates alarm for specified destination.
			 */
			createDecAlarm : function () {
				if (destinations.addDestination(destination)) {
					resetDestination();
					refreshAlarmsList();
					this.runAlarmService();
					tizen.view.showPopup("Alarm set :)");
					$.mobile.changePage("#main");
				} else {
					tizen.view.showPopup("Destination not specified or false");
				}
			}
		};
	}($);
else
	console.err("Unable to create decarta module");

