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


/**
 * This module handles all the saved destinations.
 */
if (typeof destinations === "undefined") {
	destinations = function($) {
		//array of destinations
		var destinationsArray = [];
		
		/**
		 * Saves destinations array to locale storage
		 */
		function saveDestinationsToLocalStorage() {
			tizen.logger.info("Seving destination to locale storage: " + destinationsArray.length);
			localStorage.setItem('destinationsArray', JSON.stringify(destinationsArray));
		}
		
		return {
			
			/**
			 * Initializes destinations array from locale storage if there are any.
			 */
			init : function() {
				if (localStorage.getItem('destinationsArray')) {
					var dest = JSON.parse(localStorage.getItem('destinationsArray'));
					if (dest.length) {
						destinationsArray = dest;
					}
				}
			},
			
			/**
			 * Checks if there are any destination left in the array.
			 * 
			 * @returns {boolean}
			 */
			areThereAnyDestinations : function() {
				if (destinationsArray.length)
					return true;
				else
					return false;
			},
			
			/**
			 * Returns destinations array
			 * 
			 * @returns {Array} destinations
			 */
			getDestinations : function() {
				return destinationsArray;
			},
			
			/**
			 * Adds new destination to the destinations array.
			 * 
			 * @param destination {Object}
			 */
			addDestination : function(destination) {
				var radius = parseInt($('input[name=radius]:checked', '#decarta').val());
				if (destination) {
					if (!destination.city)
						destination.city = "";
					if (!destination.country)
						destination.country = "";
					destination.radius = radius;
					destinationsArray.push(destination);
					saveDestinationsToLocalStorage();
				} else {
					return false;
				}
				return true;
			},
			
			/**
			 * Removes destination from the destinations array
			 * 
			 * @param destination {Object}
			 */
			removeDestination : function(destination) {
				tizen.logger.info("Removing destination");
				var index = destinationsArray.indexOf(destination);
				if (index >= 0)
					destinationsArray.splice(index, 1);
				saveDestinationsToLocalStorage();
			},
			
			/**
			 * Removes destination from the destinations array
			 * 
			 * @param index {Number}
			 */
			removeDestinationFromIndex : function(index) {
				tizen.logger.info("Removing destination from index: " + index);
				if (index >= 0)
					destinationsArray.splice(index, 1);
				saveDestinationsToLocalStorage();
			}
		};
	}($);
}
