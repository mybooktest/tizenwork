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
 * Simple Notification class
 * 
 * @param title {String} title of the notification
 * @param message {String} message text that the notification will display to the user
 */
function SimpleNotification(title, message) {
	try {
		var appControl = new tizen.ApplicationService("http://tizen.org/appcontrol/operation/create_content", null, "image/jpg", null);
		this.notificationDict = {
			content : message,
			appControl : appControl
		};
		this.notification = new tizen.StatusNotification("SIMPLE", title, this.notificationDict);
	} catch (err) {
		tizen.logger.error(err.name + ": " + err.message);
	}
}

/**
 * Displays the notification
 */
SimpleNotification.prototype.displayNotification = function() {
	try {
		tizen.notification.post(this.notification);
	} catch (err) {
		tizen.logger.error(err.name + ": " + err.message);
	};
};

/**
 * Updates the notification with a new message and displays it.
 * 
 * @param message {String} notification will display this new message
 */
SimpleNotification.prototype.updateNotificationMessage = function(message) {
	try {
		this.notification.content = message;
		tizen.notification.update(this.notification);
	} catch (err) {
		tizen.logger.error(err.name + ": " + err.message);
	}
};
