/*******************************************************************************
 * 
 * @author Tomasz Scislo <<ahref='mailto:t.scislo@samsung.com'>t.scislo@samsung.com</a>>
 * 
 * 
 * **************************************************************************************
 * 
 * Copyright (c) 2012 Samsung Electronics All Rights Reserved.
 * 
 ******************************************************************************/

if (typeof geolocation === "undefined"){
	geolocation = function($) {
		
		return {
			/**
			 * Method that can be used to get current device geolocation according
			 * to W3C Geolocation API
			 * 
			 * @returns
			 */
			getCurrentLocation : function(handlePosition) {
				tizen.logger.info('getCurrentLocation');
				if (navigator && navigator.geolocation && navigator.geolocation.getCurrentPosition)
					navigator.geolocation.getCurrentPosition(function(position) {
						tizen.view.hideLoader();
						// Currently Tizen returns coords as 0 0 and this is error
						if (position.coords.latitude === 0 && position.coords.longitude === 0)
							tizen.logger.info('Unable to acquire your location');
						else {
							tizen.logger.info('Latitude: ' + position.coords.latitude + "\n" + 'Longitude: ' + position.coords.longitude);
							handlePosition({latitude : position.coords.latitude, longitude : position.coords.longitude});
						}
					}, function(error) {
						tizen.view.hideLoader();
						tizen.logger.err('GPS error occurred. Error code: ', JSON.stringify(error));
						handlePosition();
					});
				else {
					tizen.view.hideLoader();
					tizen.view.showPopup('Unable to acquire your location');
					tizen.logger.err('No W3C Geolocation API available');
				}
			},
		};
	}($);
}
