/*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
 * 
 * This module is responsible wifi and cellular network detection on Tizen platform.
 * 
 * @author Tomasz Scislo <<ahref='mailto:t.scislo@samsung.com'>t.scislo@samsung.com</a>>
 * 
 * 
 * **************************************************************************************
 * 
 * Copyright (c) 2012 Samsung Electronics All Rights Reserved.
 * 
 ******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/**
 * @version 0.0.1
 * REQUIRED: You MUST add to config.xml <feature name="http://tizen.org/api/systeminfo" required="true"/> in order for this module to work.
 */
if (typeof tizen.network === "undefined")
	tizen.network = function($) {

		return {
			/**
			 * Checks if WiFi network connection is available
			 * 
			 * @param callback {Function} - This callback is invoked with one boolean parameter which indicates if WiFi network connection is available
			 */
			isWifiConnection : function(callback) {
				tizen.logger.info('isWifiConnection');
				var errMsg = "Unable to determine WiFi status";
				if (typeof tizen !== "undefined" && tizen.systeminfo && tizen.systeminfo.isSupported('WifiNetwork')) {
					tizen.systeminfo.getPropertyValue('WifiNetwork', function(wifi) {
						try {
							tizen.logger.info(JSON.stringify(wifi));
							if ((wifi.status === "ON" && wifi.ssid) || (typeof wifi.status === "boolean" && wifi.status)) {
								tizen.logger.info("WiFi network connection enabled");
								callback(true);
							} else {
								tizen.logger.info("WiFi network connection disabled");
								callback(false);
							}
						} catch (exc) {
							tizen.logger.err(errMsg);
							callback(false);
						}
					}, function() {
						tizen.logger.err(errMsg);
						callback(false);
					});
				} else {
					tizen.logger.err(errMsg);
					callback(false);
				}
			},

			/**
			 * Checks if cellular network connection is available
			 * 
			 * @param callback {Function} - This callback is invoked with one boolean parameter which indicates if cellular network connection is available
			 */
			isCellularNetworkInternetConnection : function(callback) {
				tizen.logger.info('isCellularNetworkInternetConnection');
				var errMsg = "Unable to determine cellular status";
				if (typeof tizen !== "undefined" && tizen.systeminfo && tizen.systeminfo.isSupported('CellularNetwork')) {
					tizen.systeminfo.getPropertyValue('CellularNetwork', function(cellular) {
						try {
							tizen.logger.info(JSON.stringify(cellular));
							if ((cellular.status === "ON" || (typeof cellular.status === "boolean" && cellular.status)) && cellular.ipAddress) {
								tizen.logger.info("Cellular network connection enabled");
								callback(true);
							} else {
								tizen.logger.info("Cellular network connection disabled");
								callback(false);
							}
						} catch (exc) {
							tizen.logger.err(errMsg);
							callback(false);
						}
					}, function() {
						tizen.logger.err(errMsg);
						callback(false);
					});
				} else {
					tizen.logger.err(errMsg);
					callback(false);
				}
			},

			/**
			 * 
			 * Method to check if either WiFi or Cellular Internet connection available
			 * 
			 * @param callback {Function} - This callback is invoked with one boolean parameter which indicates if network connection is available
			 */
			isInternetConnection : function(callback) {
				var that = this;
				tizen.logger.info('isInternetConnection');
				if (typeof callback !== "function") {
					tizen.logger.err("Invalid callback for isInternetConnection");
					return false;
				}
				var innerCallback = function(isConnection) {
					/**
					 * If there is WiFi connection invoke callback(true) immediately If not try with cellular network
					 */
					if (isConnection) {
						callback(true);
					} else {
						that.isCellularNetworkInternetConnection(callback);
					}
				};

				this.isWifiConnection(innerCallback);
			}

		};

	}($);
else
	console.err("Unable to create tizen.network module");