/**
 * This interface provides the relative alarm, which occurs at a fixed interval in future.
          <p>
This alarm triggers after a duration mentioned in <em>delay</em> attribute from the moment the alarm is added. 
If a <em>period</em> is provided, the alarm keeps triggering for the given interval.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {AlarmRelative}
 */
function AlarmRelative() {};
AlarmRelative.prototype = new Alarm();

/**
 * This interface provides an absolute alarm, which triggers at a specified absolute date. If a is provided, the alarm keeps triggering for the given interval. If the array is not empty, the alarm triggers every week, for the given days, at the time defined by attribute.
 *
 * @super Object
 * @constructor
 * @return {AlarmAbsolute}
 */
function AlarmAbsolute() {};
AlarmAbsolute.prototype = new Alarm();

/**
 * This interface is an abstract interface for alarm types.
 *
 * @super Object
 * @constructor
 * @return {Alarm}
 */
function Alarm() {};
Alarm.prototype = new Object();

/**
 * This interface provides methods to manage alarms.
 *
 * @super Object
 * @constructor
 * @return {AlarmManager}
 */
function AlarmManager() {};
AlarmManager.prototype = new Object();

/**
 * This interface defines what is instantiated by the object from the Tizen Platform. There will be a object that allows access to the functionality of the Alarm API.
 *
 * @super Object
 * @constructor
 * @return {AlarmManagerObject}
 */
function AlarmManagerObject() {};
AlarmManagerObject.prototype = new Object();

/**
 * An attribute to store the difference in time (in seconds) between when an alarm is added and it is triggered.
 *
 * @type Number
 */
AlarmRelative.prototype.delay = new Number();

/**
 * An attribute to store the duration (in seconds) between each trigger of an alarm. By default, this attribute is set to , indicating that this alarm does not repeat.
 *
 * @type Number
 */
AlarmRelative.prototype.period = new Number();

/**
 * Returns duration in seconds before the next alarm is triggered.
            <p>
If the alarm has expired, this method returns <var>null</var>.
            </p>
           
 *
 * @type Number
 * @memberOf AlarmRelative
 * @returns {Number}
 */
AlarmRelative.prototype.getRemainingSeconds = function(){ var ret = new Number(); return ret; };

/**
 * An attribute to store the absolute date/time when the alarm is initially triggered.
 * <p>
This attribute is precise to the second. Milliseconds will be ignored.
            </p>
 *
 * @type Date
 */
AlarmAbsolute.prototype.date = new Date();

/**
 * An attribute to store the duration in seconds between each trigger of the alarm.
 * <p>
By default, this attribute is set to <var>null</var>, indicating that this alarm does not repeat.
The <em>period</em> and <em>daysOfTheWeek</em> attributes are mutually exclusive.
            </p>
 *
 * @type Number
 */
AlarmAbsolute.prototype.period = new Number();

/**
 * An attribute to store the days of the week associated with the recurrence rule.
 * <p>
By default, this attribute is set to an empty array.
The <em>period</em> and <em>daysOfTheWeek</em> attributes are mutually exclusive.
            </p>
 *
 * @type array
 */
AlarmAbsolute.prototype.daysOfTheWeek = new array();

/**
 * Returns the date / time of the next alarm trigger.
            <p>
If the alarm has expired, this method returns <var>null</var>. The returned date is precise to the second.
            </p>
           
 *
 * @type Date
 * @memberOf AlarmAbsolute
 * @returns {Date}
 */
AlarmAbsolute.prototype.getNextScheduledDate = function(){ var ret = new Date(); return ret; };

/**
 * The alarm identifier.
 *
 * @type AlarmId
 */
Alarm.prototype.id = new AlarmId();

/**
 * The period of a minute. It defines the number of seconds per minute.
 *
 * @type Number
 */
AlarmManager.PERIOD_MINUTE = new Number();

/**
 * The period of an hour. It defines the number of seconds per hour.
 *
 * @type Number
 */
AlarmManager.PERIOD_HOUR = new Number();

/**
 * The period of a day. It defines the number of seconds per day.
 *
 * @type Number
 */
AlarmManager.PERIOD_DAY = new Number();

/**
 * The period of a week. It defines the number of seconds in a week.
 *
 * @type Number
 */
AlarmManager.PERIOD_WEEK = new Number();

/**
 * Adds an alarm to the storage.
            <p>
For more information about the arguments, see <a href="http://127.0.0.1:50053/help/topic/org.tizen.web.device.apireference/tizen/application.html">The Application API</a>.
            </p>
           
 *
 * @param {Alarm} alarm
 * @param {ApplicationId} applicationId
 * @param {ApplicationControl} appControl
 * @type void
 * @memberOf AlarmManager
 * @returns {void}
 */
AlarmManager.prototype.add = function(alarm, applicationId, appControl){ return; };

/**
 * Removes an alarm from the storage.
 *
 * @param {AlarmId} id
 * @type void
 * @memberOf AlarmManager
 * @returns {void}
 */
AlarmManager.prototype.remove = function(id){ return; };

/**
 * Removes all alarms added by an application.
            <p>
Because each application has its own alarm storage, this method will only remove alarms added by the calling application.
            </p>
           
 *
 * @type void
 * @memberOf AlarmManager
 * @returns {void}
 */
AlarmManager.prototype.removeAll = function(){ return; };

/**
 * Returns an alarm as per the specified identifier.
 *
 * @param {AlarmId} id
 * @type Alarm
 * @memberOf AlarmManager
 * @returns {Alarm}
 */
AlarmManager.prototype.get = function(id){ var ret = new Alarm(); return ret; };

/**
 * Returns all alarms
            <p>
This method returns all alarms in an application storage.
Alarms that have already been triggered are removed automatically from the storage.
            </p>
           
 *
 * @type array
 * @memberOf AlarmManager
 * @returns {array}
 */
AlarmManager.prototype.getAll = function(){ var ret = new array(); return ret; };

/**
 * This API provides the functionality for setting and unsetting of alarms.
 * <p>
Each client application has its own individual alarm storage, that is, applications cannot view (or edit) alarms set by other applications.
For more information on the Alarm features, see <a href="http://127.0.0.1:50053/help/topic/org.tizen.web.appprogramming/html/guide/app_guide/alarm.htm">Alarm Guide</a>.
        </p>
 *
 * @type AlarmManager
 */
AlarmManagerObject.prototype.alarm = new AlarmManager();

/**
 * This API provides the functionality for setting and unsetting of alarms.
 * <p>
Each client application has its own individual alarm storage, that is, applications cannot view (or edit) alarms set by other applications.
For more information on the Alarm features, see <a href="http://127.0.0.1:50053/help/topic/org.tizen.web.appprogramming/html/guide/app_guide/alarm.htm">Alarm Guide</a>.
        </p>
 *
 * @type AlarmManager
 */
Tizen.prototype.alarm = new AlarmManager();

/**
 * This interface defines the current application's information and the basic operations (such as exit or hide) for the current application .
 *
 * @super Object
 * @constructor
 * @return {Application}
 */
function Application() {};
Application.prototype = new Object();

/**
 * This interface defines the certificate information of an installed application.
 *
 * @super Object
 * @constructor
 * @return {ApplicationCertificate}
 */
function ApplicationCertificate() {};
ApplicationCertificate.prototype = new Object();

/**
 * This interface specified a success callback that is invoked when system finished searching applications which is matched by specific application control .
          <p>
This callback interface specifies a success method with an array of
<em>ApplicationInformation </em>objects and application control as an input parameter.
It is used in <em>ApplicationManager.findAppControl()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FindAppControlSuccessCallback}
 */
function FindAppControlSuccessCallback() {};
FindAppControlSuccessCallback.prototype = new Object();

/**
 * This interface invokes the success callback that is invoked when the installed application list is retrieved.
          <p>
This callback interface specifies a success method with an array of
<em>ApplicationInformation </em>objects as an input parameter. It is used in <em>ApplicationManager.getAppsInfo()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ApplicationInformationArraySuccessCallback}
 */
function ApplicationInformationArraySuccessCallback() {};
ApplicationInformationArraySuccessCallback.prototype = new Object();

/**
 * This callback interface specifies success callbacks that are invoked as a reply from the requested application control within the application control requester.
          <p>
This callback interface specifies two methods:
          </p>
          <ul>
            <li>
 <em>onsuccess()</em> - Invoked by the callee application calls <em>RequestedApplicationControl.replyResult()</em>.            </li>
            <li>
 <em>onfailure()</em> - Invoked if the callee application calls <em>RequestedApplicationControl.replyFailure()</em>.            </li>
          </ul>
         
 *
 * @super Object
 * @constructor
 * @return {ApplicationControlDataArrayReplyCallback}
 */
function ApplicationControlDataArrayReplyCallback() {};
ApplicationControlDataArrayReplyCallback.prototype = new Object();

/**
 * This interface defines a key/value pair used to pass data between applications through the interface.
 *
 * @super Object
 * @constructor
 * @return {ApplicationControlData}
 */
function ApplicationControlData() {};
ApplicationControlData.prototype = new Object();

/**
 * This interface defines the metadata information available to an installed application.
 *
 * @super Object
 * @constructor
 * @return {ApplicationInformation}
 */
function ApplicationInformation() {};
ApplicationInformation.prototype = new Object();

/**
 * This callback interface that specifies the success callback that is invoked when the list of running applications is retrieved.
          <p>
This callback interface specifies a success method with
an array of <em>ApplicationContext </em>objects as an input parameter. It is used in <em>ApplicationManager.getAppsContext()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ApplicationContextArraySuccessCallback}
 */
function ApplicationContextArraySuccessCallback() {};
ApplicationContextArraySuccessCallback.prototype = new Object();

/**
 * This interface defines the information available about a running application.
 *
 * @super Object
 * @constructor
 * @return {ApplicationContext}
 */
function ApplicationContext() {};
ApplicationContext.prototype = new Object();

/**
 * This interface defines what is instantiated by the object by the Tizen Platform.
          <p>
There will be a <em>tizen.application </em>object that allows access to Application API functionality.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ApplicationManagerObject}
 */
function ApplicationManagerObject() {};
ApplicationManagerObject.prototype = new Object();

/**
 * This section defines the application manager interface.
 *
 * @super Object
 * @constructor
 * @return {ApplicationManager}
 */
function ApplicationManager() {};
ApplicationManager.prototype = new Object();

/**
 * This interface consists of an operation, URI, MIME type, and data. It describes an action to be performed by other applications and is passed to launch other applications. If the system gets the application control request, it finds the corresponding application to be launched with the delivered application control and launches the selected application.
 *
 * @super Object
 * @constructor
 * @return {ApplicationControl}
 */
function ApplicationControl() {};
ApplicationControl.prototype = new Object();

/**
 * The callback interface to specify for subscribing for notification of changes in the list of installed applications on a device.
          <p>
This callback interface specifies methods that will be invoked when
an application is installed, updated, or uninstalled.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ApplicationInformationEventCallback}
 */
function ApplicationInformationEventCallback() {};
ApplicationInformationEventCallback.prototype = new Object();

/**
 * This interface has an application control information requested and passed from other application and is passed to launch other applications. The newly launched application can get the requested application control through method, and send the results to the calling application through the method after performing the required action requested the calling application.
 *
 * @super Object
 * @constructor
 * @return {RequestedApplicationControl}
 */
function RequestedApplicationControl() {};
RequestedApplicationControl.prototype = new Object();

/**
 * An attribute to store the application information for the current application.
 *
 * @type ApplicationInformation
 */
Application.prototype.appInfo = new ApplicationInformation();

/**
 * An attribute to store the ID of a running application.
 *
 * @type ApplicationContextId
 */
Application.prototype.contextId = new ApplicationContextId();

/**
 * Exits the current application.
 *
 * @type void
 * @memberOf Application
 * @returns {void}
 */
Application.prototype.exit = function(){ return; };

/**
 * Hides the current application.
 *
 * @type void
 * @memberOf Application
 * @returns {void}
 */
Application.prototype.hide = function(){ return; };

/**
 * Gets the requested application control passed to the current application.
            <p>
Gets the requested application control that contains the application control
passed by the <em>launchAppControl()</em> method from the calling application.
The requested application control contains the reason the application
was launched and what it has to perform. For example, an application
might be launched to display an image on a page by other
application's request. In all of these cases, the application is
responsible for checking the contents of the application control and responding
appropriately when it is launched.
            </p>
           
 *
 * @type RequestedApplicationControl
 * @memberOf Application
 * @returns {RequestedApplicationControl}
 */
Application.prototype.getRequestedAppControl = function(){ var ret = new RequestedApplicationControl(); return ret; };

/**
 * An attribute to store the type of the application certificate.
 *
 * @type String
 */
ApplicationCertificate.prototype.type = new String();

/**
 * An attribute to store the value of the application certificate.
 *
 * @type String
 */
ApplicationCertificate.prototype.value = new String();

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {array} informationArray
 * @param {ApplicationControl} appControl
 * @type void
 * @memberOf FindAppControlSuccessCallback
 * @returns {void}
 */
FindAppControlSuccessCallback.prototype.onsuccess = function(informationArray, appControl){ return; };

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {array} informationArray
 * @type void
 * @memberOf ApplicationInformationArraySuccessCallback
 * @returns {void}
 */
ApplicationInformationArraySuccessCallback.prototype.onsuccess = function(informationArray){ return; };

/**
 * Called when the callee application calls .
 *
 * @param {array} data
 * @type void
 * @memberOf ApplicationControlDataArrayReplyCallback
 * @returns {void}
 */
ApplicationControlDataArrayReplyCallback.prototype.onsuccess = function(data){ return; };

/**
 * Called when the callee application calls .
 *
 * @type void
 * @memberOf ApplicationControlDataArrayReplyCallback
 * @returns {void}
 */
ApplicationControlDataArrayReplyCallback.prototype.onfailure = function(){ return; };

/**
 * An attribute to store the name of a key.
 *
 * @type String
 */
ApplicationControlData.prototype.key = new String();

/**
 * An attribute to store the value associated with a key.
 *
 * @type array
 */
ApplicationControlData.prototype.value = new array();

/**
 * An attribute to store the identifier of an application for application management.
 *
 * @type ApplicationId
 */
ApplicationInformation.prototype.id = new ApplicationId();

/**
 * An attribute to store the name of an application.
 *
 * @type String
 */
ApplicationInformation.prototype.name = new String();

/**
 * An attribute to store the icon path of an application.
 *
 * @type String
 */
ApplicationInformation.prototype.iconPath = new String();

/**
 * An attribute to store the version of an application.
 *
 * @type String
 */
ApplicationInformation.prototype.version = new String();

/**
 * An attribute that determines whether the application information should be shown (such as in the menus) or not.
 *
 * @type Boolean
 */
ApplicationInformation.prototype.show = new Boolean();

/**
 * An array of attributes to store the categories that the app belongs to.
 *
 * @type array
 */
ApplicationInformation.prototype.categories = new array();

/**
 * An attribute to store the application install/update time.
 *
 * @type Date
 */
ApplicationInformation.prototype.installDate = new Date();

/**
 * An attribute to store the application size (installed space).
 *
 * @type Number
 */
ApplicationInformation.prototype.size = new Number();

/**
 * An attribute to store the package ID of application.
 *
 * @type PackageId
 */
ApplicationInformation.prototype.packageId = new PackageId();

/**
 * Called when completes successfully.
 *
 * @param {array} contexts
 * @type void
 * @memberOf ApplicationContextArraySuccessCallback
 * @returns {void}
 */
ApplicationContextArraySuccessCallback.prototype.onsuccess = function(contexts){ return; };

/**
 * An attribute to store the ID of a running application.
 *
 * @type ApplicationContextId
 */
ApplicationContext.prototype.id = new ApplicationContextId();

/**
 * An attribute to store the ID of an installed application.
 *
 * @type ApplicationId
 */
ApplicationContext.prototype.appId = new ApplicationId();

/**
 * This API provides a way to launch other applications and access application management.
 * <p>
The <em>ApplicationManager</em> interface also provides methods to launch other applications
explicitly and implicitly through the <em>ApplicationControl</em> interface.
The <em>ApplicationControl</em> interface consists of an operation, URI, and MIME type
and also describes an action to be performed by other
applications and can carry the result from the subsequent application.
The <em>ApplicationManager</em> interface also provides methods to handle the application
lifecycle, to access the installed applications on the device, and to let
an application be notified of a change in the application list.
        </p>
 * <p>
The <em>Application</em> interface defines the current application's information and
the basic operations for current application such as exit or hide.
        </p>
 * <p>
For more information on the Application features, see <a href="http://127.0.0.1:50053/help/topic/org.tizen.web.appprogramming/html/guide/app_guide/application.htm">Application Guide</a>.
        </p>
 *
 * @type ApplicationManager
 */
ApplicationManagerObject.prototype.application = new ApplicationManager();

/**
 * Gets the object defining the current application.
 *
 * @type Application
 * @memberOf ApplicationManager
 * @returns {Application}
 */
ApplicationManager.prototype.getCurrentApplication = function(){ var ret = new Application(); return ret; };

/**
 * Kills an application with the specified application context ID.
            <p>
The <em>ErrorCallback() </em>is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If the context is not found with specified context ID.              </li>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value
or if the specified context ID matches the context ID of the calling application.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {ApplicationContextId} contextId
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ApplicationManager
 * @returns {void}
 */
ApplicationManager.prototype.kill = function(contextId, successCallback, errorCallback){ return; };

/**
 * Launches an application with the given application ID.
            <p>
The <em>ErrorCallback()</em> is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If the application is not found with given ID.              </li>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {ApplicationId} id
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ApplicationManager
 * @returns {void}
 */
ApplicationManager.prototype.launch = function(id, successCallback, errorCallback){ return; };

/**
 * Launches an application with the specified application control.
            <p>
An application can launch other applications with the application control,
and get back the results from the launched applications.
            </p>
            <p>
The application control consists of an operation, URI, and MIME type, and describes
the request to be performed by the newly launched application. The
application control is passed to the <em>launchAppControl()</em> method to launch an
application. The system tries to find the proper application
to perform the requested application control, then launches the selected application.
            </p>
            <p>
The application control request is passed to the newly launched application
and it can be accessed by <em>getRequestedAppControl() </em>method. The passed
application control contains the reason the application was launched and
information about what the application is doing. The launched application
can send a result to the caller application with the <em>replyResult() </em>method of
<em>RequestedApplicationControl</em> interface.
            </p>
            <p>
The <em>ErrorCallback() </em>is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If system cannot find the application that matches the specified application control.              </li>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError: If any other error occurs.              </li>
            </ul>
           
 *
 * @param {ApplicationControl} appControl
 * @param {ApplicationId} id
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {ApplicationControlDataArrayReplyCallback} replyCallback
 * @type void
 * @memberOf ApplicationManager
 * @returns {void}
 */
ApplicationManager.prototype.launchAppControl = function(appControl, id, successCallback, errorCallback, replyCallback){ return; };

/**
 * Finds application information can be launched with the given application control.
            <p>
An application can get a list of other applications can be launched with the application control.
            </p>
            <p>
The <em>ErrorCallback()<em> is launched with these error types:
</em></em>            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {ApplicationControl} appControl
 * @param {FindAppControlSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ApplicationManager
 * @returns {void}
 */
ApplicationManager.prototype.findAppControl = function(appControl, successCallback, errorCallback){ return; };

/**
 * Gets a list of application contexts for applications that are currently running on a device. The information contained for each application corresponds to the application state at the time when the list was generated.
            <p>
The <em>errorCallback()</em> is launched with this error type:
            </p>
            <ul>
              <li>
UnknownError - If an unknown error occurs.              </li>
            </ul>
           
 *
 * @param {ApplicationContextArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ApplicationManager
 * @returns {void}
 */
ApplicationManager.prototype.getAppsContext = function(successCallback, errorCallback){ return; };

/**
 * Gets the application context for the specified application context ID. If the ID is set to or is not set at all, the method returns the application context of the current application. The list of running applications and their application IDs is obtained with .
 *
 * @param {ApplicationContextId} contextId
 * @type ApplicationContext
 * @memberOf ApplicationManager
 * @returns {ApplicationContext}
 */
ApplicationManager.prototype.getAppContext = function(contextId){ var ret = new ApplicationContext(); return ret; };

/**
 * Gets the list of installed application's information on a device. The information contained on each application corresponds to the application state at the moment when the list was generated.
            <p>
The <em>errorCallback()</em> is launched with this error type:
            </p>
            <ul>
              <li>
UnknownError - If an unknown error occurs.              </li>
            </ul>
           
 *
 * @param {ApplicationInformationArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ApplicationManager
 * @returns {void}
 */
ApplicationManager.prototype.getAppsInfo = function(successCallback, errorCallback){ return; };

/**
 * Gets application information for a specified application ID.
            <p>
If the ID is set to <var>null</var> or not set at all, it returns application information for the current application.
The list of installed applications and their application IDs is obtained with <em>getAppsInfo()</em>.
            </p>
           
 *
 * @param {ApplicationId} id
 * @type ApplicationInformation
 * @memberOf ApplicationManager
 * @returns {ApplicationInformation}
 */
ApplicationManager.prototype.getAppInfo = function(id){ var ret = new ApplicationInformation(); return ret; };

/**
 * Gets application certificates for a specified application ID.
            <p>
If the ID is set to <var>null</var> or not set at all, it returns application certificates for the current application.
            </p>
            <p>
The certificate types are listed below
            </p>
            <ul>
              <li>
 AUTHOR_ROOT - Author Root Certificate               </li>
              <li>
 AUTHOR_INTERMEDIATE - Author Intermediate Certificate               </li>
              <li>
 AUTHOR_SIGNER - Author Signer Certificate               </li>
              <li>
 DISTRIBUTOR_ROOT - Distributor Root Certificate               </li>
              <li>
 DISTRIBUTOR_INTERMEDIATE - Distributor Intermediate Certificate               </li>
              <li>
 DISTRIBUTOR_SIGNER - Distributor Signer Certificate               </li>
              <li>
 DISTRIBUTOR2_ROOT - Distributor2 Root Certificate               </li>
              <li>
 DISTRIBUTOR2_INTERMEDIATE - Distributor2 Intermediate Certificate               </li>
              <li>
 DISTRIBUTOR2_SIGNER - Distributor2 Signer Certificate               </li>
            </ul>
           
 *
 * @param {ApplicationId} id
 * @type array
 * @memberOf ApplicationManager
 * @returns {array}
 */
ApplicationManager.prototype.getAppCerts = function(id){ var ret = new array(); return ret; };

/**
 * Gets URI of read-only shared directory of application for a specified application ID.
            <p>
The shared directory is used to export data to other applications.
If the ID is set to <var>null</var> or not set at all, it returns shared directory URI for the current application.
            </p>
           
 *
 * @param {ApplicationId} id
 * @type String
 * @memberOf ApplicationManager
 * @returns {String}
 */
ApplicationManager.prototype.getAppSharedURI = function(id){ var ret = new String(); return ret; };

/**
 * Adds a listener for receiving any notification for changes in the list of the installed applications on a device.
            <p>
It install a callback that is triggered every time a change occurs on
the list of installed applications on a device. This change may
be occurred by a new installation, uninstallation, or update of an application.
            </p>
            <p>
When executed, the implementation must immediately return a listener
ID that identifies the listener. After returning the ID, the change
detection operation is started asynchronously.
            </p>
            <p>
The <em>ApplicationInformationEventCallback </em>must be invoked every time a new
application is installed, removed, or updated.
            </p>
            <p>
The change detection must continue until the <em>removeAppInfoEventListener()</em> method is called
with the corresponding listener identifier.
            </p>
           
 *
 * @param {ApplicationInformationEventCallback} eventCallback
 * @type Number
 * @memberOf ApplicationManager
 * @returns {Number}
 */
ApplicationManager.prototype.addAppInfoEventListener = function(eventCallback){ var ret = new Number(); return ret; };

/**
 * Removes the listener to stop receiving notifications for changes on the list of installed applications on a device.
 *
 * @param {Number} watchId
 * @type void
 * @memberOf ApplicationManager
 * @returns {void}
 */
ApplicationManager.prototype.removeAppInfoEventListener = function(watchId){ return; };

/**
 * An attribute to store the string that defines the action to be performed by an application control.
 *
 * @type String
 */
ApplicationControl.prototype.operation = new String();

/**
 * An attribute to store the URI needed by application control.
 *
 * @type String
 */
ApplicationControl.prototype.uri = new String();

/**
 * An attribute to store the MIME type of a content.
 *
 * @type String
 */
ApplicationControl.prototype.mime = new String();

/**
 * An attribute to store the category of the application to be launched.
 *
 * @type String
 */
ApplicationControl.prototype.category = new String();

/**
 * An array of attributes to store the data needed for an application control.
 *
 * @type array
 */
ApplicationControl.prototype.data = new array();

/**
 * Called when an application is installed.
 *
 * @param {ApplicationInformation} info
 * @type void
 * @memberOf ApplicationInformationEventCallback
 * @returns {void}
 */
ApplicationInformationEventCallback.prototype.oninstalled = function(info){ return; };

/**
 * Called when an application is updated.
 *
 * @param {ApplicationInformation} info
 * @type void
 * @memberOf ApplicationInformationEventCallback
 * @returns {void}
 */
ApplicationInformationEventCallback.prototype.onupdated = function(info){ return; };

/**
 * Called when an application is uninstalled.
 *
 * @param {ApplicationId} id
 * @type void
 * @memberOf ApplicationInformationEventCallback
 * @returns {void}
 */
ApplicationInformationEventCallback.prototype.onuninstalled = function(id){ return; };

/**
 * An attribute to store the application control object that describes caller application's request. It contains the information that the calling application passed to .
 *
 * @type ApplicationControl
 */
RequestedApplicationControl.prototype.appControl = new ApplicationControl();

/**
 * An attribute to store the caller application's ID
 *
 * @type ApplicationId
 */
RequestedApplicationControl.prototype.callerAppId = new ApplicationId();

/**
 * Sends the results to the caller application.
 *
 * @param {array} data
 * @type void
 * @memberOf RequestedApplicationControl
 * @returns {void}
 */
RequestedApplicationControl.prototype.replyResult = function(data){ return; };

/**
 * Notifies the calling application that the application failed to perform the requested action.
 *
 * @type void
 * @memberOf RequestedApplicationControl
 * @returns {void}
 */
RequestedApplicationControl.prototype.replyFailure = function(){ return; };

/**
 * This API provides a way to launch other applications and access application management.
 * <p>
The <em>ApplicationManager</em> interface also provides methods to launch other applications
explicitly and implicitly through the <em>ApplicationControl</em> interface.
The <em>ApplicationControl</em> interface consists of an operation, URI, and MIME type
and also describes an action to be performed by other
applications and can carry the result from the subsequent application.
The <em>ApplicationManager</em> interface also provides methods to handle the application
lifecycle, to access the installed applications on the device, and to let
an application be notified of a change in the application list.
        </p>
 * <p>
The <em>Application</em> interface defines the current application's information and
the basic operations for current application such as exit or hide.
        </p>
 * <p>
For more information on the Application features, see <a href="http://127.0.0.1:50053/help/topic/org.tizen.web.appprogramming/html/guide/app_guide/application.htm">Application Guide</a>.
        </p>
 *
 * @type ApplicationManager
 */
Tizen.prototype.application = new ApplicationManager();

/**
 * This interface represents Bluetooth Class of Device/Service(CoD).
          <p>
Bluetooth device class describes the characteristics and capabilities of a device.
          </p>
          <p>
Bluetooth CoD is a 24 bit integer created by the union of three components:
          </p>
          <ul>
            <li>
Exactly one <b>Major Device Class</b>(bits 8-12 of CoD) - This is the highest level of granularity for defining a Bluetooth Device.            </li>
            <li>
Exactly one <b>Minor Device Class</b>(bits 2-7 of CoD) - This is to be interpreted only in the context of the Major Device Class. Thus, the meaning of these bits may change, depending on the value of 'Major Device Class'.             </li>
            <li>
Zero or more <b>Major Service Classes</b>(bits 13-23) - Represents the services supported by the device.            </li>
          </ul>
          <p>
The Major and Minor classes are intended to define a general family of devices with which any particular implementation wishes to be associated. 
No assumptions should be made about specific functionality or characteristics of any application, based solely on the assignment of a Major or minor device class.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {BluetoothClass}
 */
function BluetoothClass() {};
BluetoothClass.prototype = new Object();

/**
 * This interface provides methods to handle Bluetooth service.
 *
 * @super Object
 * @constructor
 * @return {BluetoothServiceHandler}
 */
function BluetoothServiceHandler() {};
BluetoothServiceHandler.prototype = new Object();

/**
 * This interface provides access to control the device's Bluetooth adapter.
          <p>
This interface offers methods to control local Bluetooth behavior, such as:
          </p>
          <ul>
            <li>
Turning on/off Bluetooth radio            </li>
            <li>
Changing device visibility            </li>
            <li>
Scanning for remote devices            </li>
            <li>
Accessing known devices            </li>
            <li>
Registering a service in the device service database            </li>
          </ul>
         
 *
 * @super Object
 * @constructor
 * @return {BluetoothAdapter}
 */
function BluetoothAdapter() {};
BluetoothAdapter.prototype = new Object();

/**
 * The success callback for .
 *
 * @super Object
 * @constructor
 * @return {BluetoothDeviceArraySuccessCallback}
 */
function BluetoothDeviceArraySuccessCallback() {};
BluetoothDeviceArraySuccessCallback.prototype = new Object();

/**
 * This interface holds the identifiers for minor device classes of Bluetooth CoD.
 *
 * @super Object
 * @constructor
 * @return {BluetoothClassDeviceMinor}
 */
function BluetoothClassDeviceMinor() {};
BluetoothClassDeviceMinor.prototype = new Object();

/**
 * The success method for .
 *
 * @super Object
 * @constructor
 * @return {BluetoothSocketSuccessCallback}
 */
function BluetoothSocketSuccessCallback() {};
BluetoothSocketSuccessCallback.prototype = new Object();

/**
 * This interface implements the success callback and .
 *
 * @super Object
 * @constructor
 * @return {BluetoothDeviceSuccessCallback}
 */
function BluetoothDeviceSuccessCallback() {};
BluetoothDeviceSuccessCallback.prototype = new Object();

/**
 * This interface represents the Bluetooth socket.
          <p>
The socket object is created by <em>BluetoothDevice.connectToServiceByUUID()</em> or <em>BluetoothAdapter.registerRFCOMMServiceByUUID()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {BluetoothSocket}
 */
function BluetoothSocket() {};
BluetoothSocket.prototype = new Object();

/**
 * The success callback for .
 *
 * @super Object
 * @constructor
 * @return {BluetoothDiscoverDevicesSuccessCallback}
 */
function BluetoothDiscoverDevicesSuccessCallback() {};
BluetoothDiscoverDevicesSuccessCallback.prototype = new Object();

/**
 * This interface defines what is instantiated by the object from the Tizen platform.
          <p>
There is a <em>tizen.bluetooth</em> object that allows access to the Bluetooth API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {BluetoothManagerObject}
 */
function BluetoothManagerObject() {};
BluetoothManagerObject.prototype = new Object();

/**
 * This interface holds the identifiers for major device classes of Bluetooth CoD.
 *
 * @super Object
 * @constructor
 * @return {BluetoothClassDeviceMajor}
 */
function BluetoothClassDeviceMajor() {};
BluetoothClassDeviceMajor.prototype = new Object();

/**
 * This interface implements the success callback for .
 *
 * @super Object
 * @constructor
 * @return {BluetoothServiceSuccessCallback}
 */
function BluetoothServiceSuccessCallback() {};
BluetoothServiceSuccessCallback.prototype = new Object();

/**
 * This interface holds identifiers for the major service classes of Bluetooth CoD.
 *
 * @super Object
 * @constructor
 * @return {BluetoothClassDeviceService}
 */
function BluetoothClassDeviceService() {};
BluetoothClassDeviceService.prototype = new Object();

/**
 * This interface represents a remote Bluetooth device.
          <p>
A <em>BluetoothDevice</em> object can be retrieved using one of the following APIs:
          </p>
          <ul>
            <li>
 BluetoothAdapter.getDevice()            </li>
            <li>
 BluetoothAdapter.getKnownDevices()             </li>
            <li>
 BluetoothAdapter.discoverDevices()             </li>
            <li>
 BluetoothAdapter.createBonding()             </li>
          </ul>
         
 *
 * @super Object
 * @constructor
 * @return {BluetoothDevice}
 */
function BluetoothDevice() {};
BluetoothDevice.prototype = new Object();

/**
 * This interface provides access to the object.
 *
 * @super Object
 * @constructor
 * @return {BluetoothManager}
 */
function BluetoothManager() {};
BluetoothManager.prototype = new Object();

/**
 * The major device class and it refers to the interface for the list of possible values.
 *
 * @type octet
 */
BluetoothClass.prototype.major = new octet();

/**
 * The minor device class and it refer to the interface for the list of possible values.
 *
 * @type octet
 */
BluetoothClass.prototype.minor = new octet();

/**
 * The services provided by this device and it refers to the interface for the list of possible values.
 *
 * @type array
 */
BluetoothClass.prototype.services = new array();

/**
 * Checks whether the given service exists in the .
 *
 * @param {Number} service
 * @type Boolean
 * @memberOf BluetoothClass
 * @returns {Boolean}
 */
BluetoothClass.prototype.hasService = function(service){ var ret = new Boolean(); return ret; };

/**
 * The UUID of the service.
 *
 * @type BluetoothUUID
 */
BluetoothServiceHandler.prototype.uuid = new BluetoothUUID();

/**
 * The name of the service.
 *
 * @type String
 */
BluetoothServiceHandler.prototype.name = new String();

/**
 * An attribute to check whether any remote devices is using this service or not.
 *
 * @type Boolean
 */
BluetoothServiceHandler.prototype.isConnected = new Boolean();

/**
 * The success callback to be invoked when a remote device is connected to this service. By default, this attribute is set to null.
 *
 * @type BluetoothSocketSuccessCallback
 */
BluetoothServiceHandler.prototype.onconnect = new BluetoothSocketSuccessCallback();

/**
 * Unregisters a service record from the Bluetooth services record database and stops listening for new connections to this service.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothServiceHandler
 * @returns {void}
 */
BluetoothServiceHandler.prototype.unregister = function(successCallback, errorCallback){ return; };

/**
 * An attribute to store the readable name of the Bluetooth adapter.
 *
 * @type String
 */
BluetoothAdapter.prototype.name = new String();

/**
 * An attribute to store the unique hardware address of the Bluetooth adapter, also known as the MAC address.
 *
 * @type BluetoothAddress
 */
BluetoothAdapter.prototype.address = new BluetoothAddress();

/**
 * An attribute to indicate the current state of the Bluetooth adapter. This attribute holds one of the following 2 values:
 * <ul>
 * <li>- If Bluetooth adapter is currently on
 * <li>- If Bluetooth adapter is currently off
 * </ul>
 *
 * @type Boolean
 */
BluetoothAdapter.prototype.powered = new Boolean();

/**
 * An attribute to indicate the current visibility state of the Bluetooth adapter, that is, whether the local device is discoverable by remote devices or not.
 *
 * @type Boolean
 */
BluetoothAdapter.prototype.visible = new Boolean();

/**
 * Sets the local Bluetooth adapter name.
            <p>
Sends a request to Bluetooth hardware to change the name of the local Bluetooth adapter to <em>name</em>.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 InvalidValuesError: If any of the input parameters contain an invalid value.              </li>
              <li>
 ServiceNotAvailableError: If a Bluetooth device is turned off.               </li>
              <li>
 UnknownError: In any other error case.               </li>
            </ul>
           
 *
 * @param {String} name
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothAdapter
 * @returns {void}
 */
BluetoothAdapter.prototype.setName = function(name, successCallback, errorCallback){ return; };

/**
 * Sets the state of a Bluetooth adapter to on or off by sending a request to Bluetooth hardware to change the power state. For most Bluetooth actions, the Bluetooth adapter must be powered on.
            <p>
The ErrorCallback is launched with these error names:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError - If a Bluetooth device is busy.              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {Boolean} state
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothAdapter
 * @returns {void}
 */
BluetoothAdapter.prototype.setPowered = function(state, successCallback, errorCallback){ return; };

/**
 * Sets the local device visibility by sending a request to a Bluetooth hardware to change the device visible state to . If is , then the device is visible to other devices, that is, it responds to inquiry calls from remote devices for time period defined (in seconds) by . After the timeout, the device will become invisible.
            <p>
If <em>timeout</em> is not passed or an invalid parameter is passed, the <em>timeout </em>defaults to <var>180 </var>seconds (3 minutes). A <em>timeout</em> of <var>0</var> is considered unlimited.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
 ServiceNotAvailableError - If a Bluetooth device is turned off.              </li>
              <li>
 UnknownError - If any other error case occurs.              </li>
            </ul>
           
 *
 * @param {Boolean} mode
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {Number} timeout
 * @type void
 * @memberOf BluetoothAdapter
 * @returns {void}
 */
BluetoothAdapter.prototype.setVisible = function(mode, successCallback, errorCallback, timeout){ return; };

/**
 * Discovers nearby Bluetooth devices if any, that is, devices within proximity to the local device.
            <p>
This method initiates the device discovery process. Depending on the progress of this process the following methods are invoked:
            </p>
            <ul>
              <li>
<em>BluetoothDiscoverDevicesSuccessCallback.onstarted()</em> - when a discovery process starts successfully.              </li>
              <li>
<em>BluetoothDiscoverDevicesSuccessCallback.ondevicefound() </em>- when any device is found in the process and this method is invoked with the device information. If no device is found, this method will never be invoked.              </li>
              <li>
<em>BluetoothDiscoverDevicesSuccessCallback.ondevicedisappeared()</em> - when a device goes out of proximity and this method is invoked with the address of the device.              </li>
              <li>
<em>BluetoothDiscoverDevicesSuccessCallback.onfinished()</em> - when a discovery process is completed.              </li>
            </ul>
            <p>
A discovery process can be canceled anytime, by calling <em>stopDiscovery() </em>on the <em>BluetoothAdapter</em>.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError - If a Bluetooth device is turned off.              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {BluetoothDiscoverDevicesSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothAdapter
 * @returns {void}
 */
BluetoothAdapter.prototype.discoverDevices = function(successCallback, errorCallback){ return; };

/**
 * Stops an active device discovery session.
            <p>
Device discovery is a heavyweight procedure, hence we recommend stopping discovery as soon as required device is found. This method cancels an active discovery session.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError - If a Bluetooth device is turned off.              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothAdapter
 * @returns {void}
 */
BluetoothAdapter.prototype.stopDiscovery = function(successCallback, errorCallback){ return; };

/**
 * Gets all the known devices that have information stored in the local Bluetooth adapter.
            <p>
A known device is one of the following:
            </p>
            <ul>
              <li>
a bonded device              </li>
              <li>
a device found in last inquiry process              </li>
            </ul>
            <p>
On success, it returns the list of currently known devices through <em>BluetoothDeviceArraySuccessCallback</em>.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError - If a Bluetooth device is turned off.              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {BluetoothDeviceArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothAdapter
 * @returns {void}
 */
BluetoothAdapter.prototype.getKnownDevices = function(successCallback, errorCallback){ return; };

/**
 * Gets the object for a given device hardware address.
            <p>
This method returns device information stored in the local Bluetooth adapter for the specified device <em>address</em> through 
BluetoothDeviceSuccessCallback.
A valid hardware address must be passed, such as "35:F4:59:D1:7A:03".
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 NotFoundError - If there is no device with the given address.              </li>
              <li>
 ServiceNotAvailableError - If a Bluetooth device is turned off.              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {BluetoothAddress} address
 * @param {BluetoothDeviceSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothAdapter
 * @returns {void}
 */
BluetoothAdapter.prototype.getDevice = function(address, successCallback, errorCallback){ return; };

/**
 * Creates a bond with a remote device by initiating the bonding process with peer device, using the given MAC address. The remote device must be bonded with the local device in order to connect to services of the remote device and then exchange data with each other.
            <p>
If the bonding process is successful, the device information is sent in <em>successCallback</em>.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 NotFoundError - If there is no device with the given address.              </li>
              <li>
 ServiceNotAvailableError - If a Bluetooth device is turned off.              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {BluetoothAddress} address
 * @param {BluetoothDeviceSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothAdapter
 * @returns {void}
 */
BluetoothAdapter.prototype.createBonding = function(address, successCallback, errorCallback){ return; };

/**
 * Destroys the bond with a remote device, that is, this method initiates the process of removing the specified from the list of bonded devices.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 NotFoundError - If there is no device with the given address.              </li>
              <li>
 ServiceNotAvailableError - If a Bluetooth device is turned off.              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {BluetoothAddress} address
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothAdapter
 * @returns {void}
 */
BluetoothAdapter.prototype.destroyBonding = function(address, successCallback, errorCallback){ return; };

/**
 * Registers a service record in the device service record database with the specified , .
            <p>
On success of the service registration, it returns a <em>BluetoothServiceHandler</em> object as the first parameter of <em>successCallback</em>, and listens for client connections. 
The service handler can be used to be notified on client connections or to unregister the service.
User interaction is mandatory to connect to a registered service.
            </p>
            <p>
If any client(remote device) connects to this service, then <em>BluetoothServiceHandler.onconnect()</em> is invoked with <em>BluetoothSocket</em> object.
            </p>
            <p>
<em>BluetoothServiceHandler.unregister()</em> can be used to unregister the service record from the device service database and stop listening for client connections.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
 ServiceNotAvailableError - If a Bluetooth device is turned off.              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {BluetoothUUID} uuid
 * @param {String} name
 * @param {BluetoothServiceSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothAdapter
 * @returns {void}
 */
BluetoothAdapter.prototype.registerRFCOMMServiceByUUID = function(uuid, name, successCallback, errorCallback){ return; };

/**
 * The method to be invoked when device information is ready.
 *
 * @param {array} devices
 * @type void
 * @memberOf BluetoothDeviceArraySuccessCallback
 * @returns {void}
 */
BluetoothDeviceArraySuccessCallback.prototype.onsuccess = function(devices){ return; };

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.COMPUTER_UNCATEGORIZED = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.COMPUTER_DESKTOP = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.COMPUTER_SERVER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.COMPUTER_LAPTOP = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.COMPUTER_HANDHELD_PC_OR_PDA = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.COMPUTER_PALM_PC_OR_PDA = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.COMPUTER_WEARABLE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PHONE_UNCATEGORIZED = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PHONE_CELLULAR = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PHONE_CORDLESS = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PHONE_SMARTPHONE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PHONE_MODEM_OR_GATEWAY = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PHONE_ISDN = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_UNRECOGNIZED = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_WEARABLE_HEADSET = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_HANDSFREE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_MICROPHONE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_LOUDSPEAKER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_HEADPHONES = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_PORTABLE_AUDIO = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_CAR_AUDIO = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_SETTOP_BOX = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_HIFI = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_VCR = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_VIDEO_CAMERA = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_CAMCORDER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_MONITOR = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_DISPLAY_AND_LOUDSPEAKER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_VIDEO_CONFERENCING = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_GAMING_TOY = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_UNCATEGORIZED = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_KEYBOARD = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_POINTING_DEVICE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_KEYBOARD_AND_POINTING_DEVICE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_JOYSTICK = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_GAMEPAD = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_REMOTE_CONTROL = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_SENSING_DEVICE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_DEGITIZER_TABLET = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_CARD_READER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_DIGITAL_PEN = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_HANDHELD_SCANNER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_HANDHELD_INPUT_DEVICE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.IMAGING_UNCATEGORIZED = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.IMAGING_DISPLAY = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.IMAGING_CAMERA = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.IMAGING_SCANNER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.IMAGING_PRINTER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.WEARABLE_WRITST_WATCH = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.WEARABLE_PAGER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.WEARABLE_JACKET = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.WEARABLE_HELMET = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.WEARABLE_GLASSES = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.TOY_ROBOT = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.TOY_VEHICLE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.TOY_DOLL = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.TOY_CONTROLLER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.TOY_GAME = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_UNDEFINED = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_BLOOD_PRESSURE_MONITOR = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_THERMOMETER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_WEIGHING_SCALE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_GLUCOSE_METER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_PULSE_OXIMETER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_PULSE_RATE_MONITOR = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_DATA_DISPLAY = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_STEP_COUNTER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_BODY_COMPOSITION_ANALYZER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_PEAK_FLOW_MONITOR = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_MEDICATION_MONITOR = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_KNEE_PROSTHESIS = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_ANKLE_PROSTHESIS = new Number();

/**
 * The method to be invoked when the connection to a service is ready.
 *
 * @param {BluetoothSocket} socket
 * @type void
 * @memberOf BluetoothSocketSuccessCallback
 * @returns {void}
 */
BluetoothSocketSuccessCallback.prototype.onsuccess = function(socket){ return; };

/**
 * The method to be invoked on success.
 *
 * @param {BluetoothDevice} device
 * @type void
 * @memberOf BluetoothDeviceSuccessCallback
 * @returns {void}
 */
BluetoothDeviceSuccessCallback.prototype.onsuccess = function(device){ return; };

/**
 * An attribute to store the service UUID to which this socket is connected.
 *
 * @type BluetoothUUID
 */
BluetoothSocket.prototype.uuid = new BluetoothUUID();

/**
 * An attribute to indicate the socket state.
 *
 * @type BluetoothSocketState
 */
BluetoothSocket.prototype.state = new BluetoothSocketState();

/**
 * The peer device to which this socket is connected.
 *
 * @type BluetoothDevice
 */
BluetoothSocket.prototype.peer = new BluetoothDevice();

/**
 * The success callback to be invoked when an incoming message is received from the peer. By default, this attribute is set to null.
 *
 * @type SuccessCallback
 */
BluetoothSocket.prototype.onmessage = new SuccessCallback();

/**
 * The success callback to be invoked when the socket is closed. By default, this attribute is set to null.
 *
 * @type SuccessCallback
 */
BluetoothSocket.prototype.onclose = new SuccessCallback();

/**
 * The error callback to be invoked when an error occurs. By default, this attribute is set to null.
 *
 * @type ErrorCallback
 */
BluetoothSocket.prototype.onerror = new ErrorCallback();

/**
 * Writes data as a sequence of bytes onto the socket and returns the number of bytes actually written.
 *
 * @param {array} data
 * @type Number
 * @memberOf BluetoothSocket
 * @returns {Number}
 */
BluetoothSocket.prototype.writeData = function(data){ var ret = new Number(); return ret; };

/**
 * Reads data from the socket.
            <p>
This method should be called only in the <em>BluetoothSocket.onmessage</em> handler, that is, when data is ready on the socket.
            </p>
           
 *
 * @type array
 * @memberOf BluetoothSocket
 * @returns {array}
 */
BluetoothSocket.prototype.readData = function(){ var ret = new array(); return ret; };

/**
 * Closes the socket.
            <p>
<b>BluetoothSocket.state</b> changes to <var>CLOSED</var>, and <em>BluetoothSocket.onclose()</em> is invoked on success.
            </p>
           
 *
 * @type void
 * @memberOf BluetoothSocket
 * @returns {void}
 */
BluetoothSocket.prototype.close = function(){ return; };

/**
 * The method to be invoked at the beginning of a device discovery process for finding the nearby Bluetooth device.
 *
 * @type void
 * @memberOf BluetoothDiscoverDevicesSuccessCallback
 * @returns {void}
 */
BluetoothDiscoverDevicesSuccessCallback.prototype.onstarted = function(){ return; };

/**
 * The method to be invoked when a new device is discovered in the process of inquiry/discovery.
 *
 * @param {BluetoothDevice} device
 * @type void
 * @memberOf BluetoothDiscoverDevicesSuccessCallback
 * @returns {void}
 */
BluetoothDiscoverDevicesSuccessCallback.prototype.ondevicefound = function(device){ return; };

/**
 * The method to be invoked when a device is lost from proximity. After that, this device is no longer visible.
 *
 * @param {BluetoothAddress} address
 * @type void
 * @memberOf BluetoothDiscoverDevicesSuccessCallback
 * @returns {void}
 */
BluetoothDiscoverDevicesSuccessCallback.prototype.ondevicedisappeared = function(address){ return; };

/**
 * The method to be invoked when the device discovery process has finished.
 *
 * @param {array} foundDevices
 * @type void
 * @memberOf BluetoothDiscoverDevicesSuccessCallback
 * @returns {void}
 */
BluetoothDiscoverDevicesSuccessCallback.prototype.onfinished = function(foundDevices){ return; };

/**
 * This specification defines interfaces and methods to manage Bluetooth.
 * <p>
The following Bluetooth functionalities are provided:
        </p>
 * <ul>
 * <li>Controls local Bluetooth device, that is, turn Bluetooth on/off, etc.
 * <li>Sets visibility
 * <li>Discovers nearby Bluetooth devices (Device discovery).
 * <li>Gets bonded devices information.
 * <li>Controls bonding.
 * <li>Connects to a service on a remote device and exchanges data.
 * <li>Registers a service (RFCOMM) on a local device, which can be consumed by remote devices to exchange data.
 * </ul>
 * <p>
For more information on the Bluetooth features, see <a href="http://127.0.0.1:50053/help/topic/org.tizen.web.appprogramming/html/guide/communication_guide/bluetooth.htm">Bluetooth Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/network.bluetooth
 * @type BluetoothManager
 */
BluetoothManagerObject.prototype.bluetooth = new BluetoothManager();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMajor.MISC = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMajor.COMPUTER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMajor.PHONE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMajor.NETWORK = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMajor.AUDIO_VIDEO = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMajor.PERIPHERAL = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMajor.IMAGING = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMajor.WEARABLE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMajor.TOY = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMajor.HEALTH = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMajor.UNCATEGORIZED = new Number();

/**
 * The method to be invoked when registering a service with the local device is successful.
 *
 * @param {BluetoothServiceHandler} handler
 * @type void
 * @memberOf BluetoothServiceSuccessCallback
 * @returns {void}
 */
BluetoothServiceSuccessCallback.prototype.onsuccess = function(handler){ return; };

/**
 * 
 *
 * @type Number
 */
BluetoothClassDeviceService.LIMITED_DISCOVERABILITY = new Number();

/**
 * 
 *
 * @type Number
 */
BluetoothClassDeviceService.POSITIONING = new Number();

/**
 * 
 *
 * @type Number
 */
BluetoothClassDeviceService.NETWORKING = new Number();

/**
 * 
 *
 * @type Number
 */
BluetoothClassDeviceService.RENDERING = new Number();

/**
 * 
 *
 * @type Number
 */
BluetoothClassDeviceService.CAPTURING = new Number();

/**
 * 
 *
 * @type Number
 */
BluetoothClassDeviceService.OBJECT_TRANSFER = new Number();

/**
 * 
 *
 * @type Number
 */
BluetoothClassDeviceService.AUDIO = new Number();

/**
 * 
 *
 * @type Number
 */
BluetoothClassDeviceService.TELEPHONY = new Number();

/**
 * 
 *
 * @type Number
 */
BluetoothClassDeviceService.INFORMATION = new Number();

/**
 * An attribute to store the readable name of this remote device.
 *
 * @type String
 */
BluetoothDevice.prototype.name = new String();

/**
 * An attribute to store the hardware address of this remote device.
 *
 * @type BluetoothAddress
 */
BluetoothDevice.prototype.address = new BluetoothAddress();

/**
 * An attribute to indicate a device class, which represents the type of the device and the services it provides.
 *
 * @type BluetoothClass
 */
BluetoothDevice.prototype.deviceClass = new BluetoothClass();

/**
 * An attribute to check the bond state of this remote device with the local device.
 *
 * @type Boolean
 */
BluetoothDevice.prototype.isBonded = new Boolean();

/**
 * An attribute to check whether the local device recognizes this remote device as a trusted device or not.
 *
 * @type Boolean
 */
BluetoothDevice.prototype.isTrusted = new Boolean();

/**
 * An attribute to check the connection state of this remote device with the local device.
 *
 * @type Boolean
 */
BluetoothDevice.prototype.isConnected = new Boolean();

/**
 * An attribute to store the list of 128 bit service UUIDs available on this remote device.
 *
 * @type array
 */
BluetoothDevice.prototype.uuids = new array();

/**
 * Connects to a specified service identified by on this remote device.
            <p>
If opening a connection is successful, then a <em>BluetoothSocket</em> object with open state is sent using <em>successCallback</em>, through which data can be exchanged by both devices.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 NotFoundError - If there is no service with the specified <em>uuid</em>.              </li>
              <li>
 InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {BluetoothUUID} uuid
 * @param {BluetoothSocketSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothDevice
 * @returns {void}
 */
BluetoothDevice.prototype.connectToServiceByUUID = function(uuid, successCallback, errorCallback){ return; };

/**
 * An attribute to access to a major device class identifiers of Bluetooth class of device (CoD).
 *
 * @type BluetoothClassDeviceMajor
 */
BluetoothManager.prototype.deviceMajor = new BluetoothClassDeviceMajor();

/**
 * An attribute to access to a minor device class identifiers of Bluetooth class of device (CoD).
 *
 * @type BluetoothClassDeviceMinor
 */
BluetoothManager.prototype.deviceMinor = new BluetoothClassDeviceMinor();

/**
 * Accessor to major service class identifiers of Bluetooth class of device (CoD).
 *
 * @type BluetoothClassDeviceService
 */
BluetoothManager.prototype.deviceService = new BluetoothClassDeviceService();

/**
 * Gets the default local Bluetooth adapter.
 *
 * @type BluetoothAdapter
 * @memberOf BluetoothManager
 * @returns {BluetoothAdapter}
 */
BluetoothManager.prototype.getDefaultAdapter = function(){ var ret = new BluetoothAdapter(); return ret; };

/**
 * This specification defines interfaces and methods to manage Bluetooth.
 * <p>
The following Bluetooth functionalities are provided:
        </p>
 * <ul>
 * <li>Controls local Bluetooth device, that is, turn Bluetooth on/off, etc.
 * <li>Sets visibility
 * <li>Discovers nearby Bluetooth devices (Device discovery).
 * <li>Gets bonded devices information.
 * <li>Controls bonding.
 * <li>Connects to a service on a remote device and exchanges data.
 * <li>Registers a service (RFCOMM) on a local device, which can be consumed by remote devices to exchange data.
 * </ul>
 * <p>
For more information on the Bluetooth features, see <a href="http://127.0.0.1:50053/help/topic/org.tizen.web.appprogramming/html/guide/communication_guide/bluetooth.htm">Bluetooth Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/network.bluetooth
 * @type BluetoothManager
 */
Tizen.prototype.bluetooth = new BluetoothManager();

/**
 * This interface implements the object.
 *
 * @super Object
 * @constructor
 * @return {BookmarkFolder}
 */
function BookmarkFolder() {};
BookmarkFolder.prototype = new Object();

/**
 * This interface provides access to the bookmark folder and bookmark item.
          <p>
It provides access to the API functionalities through the <em>tizen.bookmark </em>interface.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {BookmarkManager}
 */
function BookmarkManager() {};
BookmarkManager.prototype = new Object();

/**
 * This interface implements the object.
 *
 * @super Object
 * @constructor
 * @return {BookmarkItem}
 */
function BookmarkItem() {};
BookmarkItem.prototype = new Object();

/**
 * Defines what is instantiated by the Tizen object from the Tizen Platform.
          <p>
There will be a <em>tizen.bookmark </em>object that allows to access the functionality of the Bookmark API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {BookmarkManagerObject}
 */
function BookmarkManagerObject() {};
BookmarkManagerObject.prototype = new Object();

/**
 * The parent bookmark folder.
 * <p>
This attribute is meaningful when this object is successfully added or retrieved.
If this BookmarkFolder is not added yet, its value is set to undefined.
            </p>
 * <p>
If the parent bookmark folder indicates the root bookmark folder, the value will be <var>null</var>.
            </p>
 *
 * @type BookmarkFolder
 */
BookmarkFolder.prototype.parent = new BookmarkFolder();

/**
 * The title of the bookmark folder.
 *
 * @type String
 */
BookmarkFolder.prototype.title = new String();

/**
 * Gets all bookmark items and bookmark folders.
            <p>
If no parentFolder is passed, or the parentFolder contains <var>null</var>, it is considered as the default bookmark folder(The root bookmark folder).
In this case, the return will contain bookmarks under the root bookmark folder.
            </p>
           
 *
 * @param {BookmarkFolder} parentFolder
 * @param {Boolean} recursive
 * @type array
 * @memberOf BookmarkManager
 * @returns {array}
 */
BookmarkManager.prototype.get = function(parentFolder, recursive){ var ret = new array(); return ret; };

/**
 * Adds a bookmark item or a bookmark folder.
            <p>
If no parentFolder is passed, or the parentFolder contains <var>null</var>, it is considered as the default bookmark folder(The root bookmark folder).
In this case, the bookmark is added under the root bookmark folder.
            </p>
           
 *
 * @param {Bookmark} bookmark
 * @param {BookmarkFolder} parentFolder
 * @type void
 * @memberOf BookmarkManager
 * @returns {void}
 */
BookmarkManager.prototype.add = function(bookmark, parentFolder){ return; };

/**
 * Removes a bookmark item or a bookmark folder.
            <p>
If the bookmark is a BookmarkFolder type, all the bookmark items and bookmark folders under the specified bookmark folder is going to be removed.<br/>If no bookmark is passed, or the bookmark contains <var>null</var>, it is considered as the default bookmark folder(The root bookmark folder).
In this case, all the bookmarks will be removed.
            </p>
           
 *
 * @param {Bookmark} bookmark
 * @type void
 * @memberOf BookmarkManager
 * @returns {void}
 */
BookmarkManager.prototype.remove = function(bookmark){ return; };

/**
 * The parent bookmark folder.
 * <p>
This attribute is meaningful when this object is successfully added or retrieved.
If this BookmarkItem is not added yet, its value is set to undefined.
            </p>
 * <p>
If the parent bookmark folder indicates the root bookmark folder, the value will be <var>null</var>.
            </p>
 *
 * @type BookmarkFolder
 */
BookmarkItem.prototype.parent = new BookmarkFolder();

/**
 * The title of the bookmark.
 *
 * @type String
 */
BookmarkItem.prototype.title = new String();

/**
 * The uri of the bookmark.
 *
 * @type String
 */
BookmarkItem.prototype.url = new String();

/**
 * This API provides interfaces and methods for accessing Bookmark. This API provides functionality to get, add, and remove bookmarks.
 * <p>
For more information on the Bookmark features, see <a href="http://127.0.0.1:50053/help/topic/org.tizen.web.appprogramming/html/guide/social_guide/bookmark.htm">Bookmark Guide</a>. 
        </p>
 *
 * @type BookmarkManager
 */
BookmarkManagerObject.prototype.bookmark = new BookmarkManager();

/**
 * This API provides interfaces and methods for accessing Bookmark. This API provides functionality to get, add, and remove bookmarks.
 * <p>
For more information on the Bookmark features, see <a href="http://127.0.0.1:50053/help/topic/org.tizen.web.appprogramming/html/guide/social_guide/bookmark.htm">Bookmark Guide</a>. 
        </p>
 *
 * @type BookmarkManager
 */
Tizen.prototype.bookmark = new BookmarkManager();

/**
 * This interface that has methods to manage events or tasks in a calendar. A Calendar object contains a set of events or tasks, depending on the calendar type.
          <p>
This interface offers the following methods to manage events in a calendar:
          </p>
          <ul>
            <li>
 Finding items using a key-value filter.            </li>
            <li>
 Adding items to a specific calendar using <em>add() </em>/ <em>addBatch() </em>methods.            </li>
            <li>
 Updating existing items using <em>update() </em>/ <em>updateBatch()</em> methods.            </li>
            <li>
 Deleting existing items using <em>remove()</em> / <em>removeBatch() </em>methods.            </li>
            <li>
 Tracking calendar changes using <em>addChangeListener()</em> / <em>removeChangeListener() </em>methods.            </li>
          </ul>
         
 *
 * @super Object
 * @constructor
 * @return {Calendar}
 */
function Calendar() {};
Calendar.prototype = new Object();

/**
 * This interface implements the success callback used in the asynchronous operation for retrieving a list of calendar items.
 *
 * @super Object
 * @constructor
 * @return {CalendarItemArraySuccessCallback}
 */
function CalendarItemArraySuccessCallback() {};
CalendarItemArraySuccessCallback.prototype = new Object();

/**
 * This is a parent interface that is used to create Calendar events and tasks. These attributes are shared by both events and tasks.
 *
 * @super Object
 * @constructor
 * @return {CalendarItem}
 */
function CalendarItem() {};
CalendarItem.prototype = new Object();

/**
 * This interface contains a UID and an optional recurrence ID attribute to identify calendar events.
          <p>
The recurrence identifier (<em>rid</em> attribute) is used to identify a particular instance of a recurring event. All instances of the same recurring event have the same UID but different recurrence IDs.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {CalendarEventId}
 */
function CalendarEventId() {};
CalendarEventId.prototype = new Object();

/**
 * An interface that implements the object.
 *
 * @super Object
 * @constructor
 * @return {CalendarTask}
 */
function CalendarTask() {};
CalendarTask.prototype = new CalendarItem();

/**
 * This interface implements the success callback used in the asynchronous operation to get a list of calendars using the method.
 *
 * @super Object
 * @constructor
 * @return {CalendarArraySuccessCallback}
 */
function CalendarArraySuccessCallback() {};
CalendarArraySuccessCallback.prototype = new Object();

/**
 * This interface implements the object that contains information about an event attendee.
          <p>
By default, each of the attributes of this interface are undefined.
          </p>
          <p>
(For more details, see RFC 5545, Section 3.8.4.1.)
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {CalendarAttendee}
 */
function CalendarAttendee() {};
CalendarAttendee.prototype = new Object();

/**
 * An interface that implements the success callback used in the asynchronous operation for retrieving a list of calendar events.
 *
 * @super Object
 * @constructor
 * @return {CalendarEventArraySuccessCallback}
 */
function CalendarEventArraySuccessCallback() {};
CalendarEventArraySuccessCallback.prototype = new Object();

/**
 * This interface provides methods to access calendars and attributes for calendars. Once a calendar object is obtained, it is possible to add, remove, or update the information it contains through the Calendar interface methods.
 *
 * @super Object
 * @constructor
 * @return {CalendarManager}
 */
function CalendarManager() {};
CalendarManager.prototype = new Object();

/**
 * This interface gives access to the Calendar API from the object.
 *
 * @super Object
 * @constructor
 * @return {CalendarManagerObject}
 */
function CalendarManagerObject() {};
CalendarManagerObject.prototype = new Object();

/**
 * An interface that contains information related to an event alarm or reminder.
 *
 * @super Object
 * @constructor
 * @return {CalendarAlarm}
 */
function CalendarAlarm() {};
CalendarAlarm.prototype = new Object();

/**
 * An interface that implements the object.
 *
 * @super Object
 * @constructor
 * @return {CalendarEvent}
 */
function CalendarEvent() {};
CalendarEvent.prototype = new CalendarItem();

/**
 * This interface specifies a set of methods that will be invoked every time a calendar change occurs (calendar item addition/update/removal).
 *
 * @super Object
 * @constructor
 * @return {CalendarChangeCallback}
 */
function CalendarChangeCallback() {};
CalendarChangeCallback.prototype = new Object();

/**
 * This interface implements theobject, which contains information about the recurrence of an event. (See RFC 5545, Section 3.3.10.)
 *
 * @super Object
 * @constructor
 * @return {CalendarRecurrenceRule}
 */
function CalendarRecurrenceRule() {};
CalendarRecurrenceRule.prototype = new Object();

/**
 * An attribute to uniquely identify a calendar.
 *
 * @type CalendarId
 */
Calendar.prototype.id = new CalendarId();

/**
 * An attribute to assign a readable (descriptive) name for a calendar, such as work, personal, etc.
 *
 * @type String
 */
Calendar.prototype.name = new String();

/**
 * Gets the calendar item with the specified identifier.
 *
 * @param {CalendarItemId} id
 * @type CalendarItem
 * @memberOf Calendar
 * @returns {CalendarItem}
 */
Calendar.prototype.get = function(id){ var ret = new CalendarItem(); return ret; };

/**
 * Adds an item to the calendar synchronously.
            <p>
If the item is successfully inserted in the calendar, the <em>CalendarItem </em>will have its identifier (id attribute) set when the method returns.
            </p>
            <p>
To update an existing item, call the <em>update() </em>method instead. If you wish to add a copy of an existing <em>CalendarItem </em>object, call <em>CalendarItem.clone()</em> method first and pass the clone to the <em>add()</em> method.
            </p>
           
 *
 * @param {CalendarItem} item
 * @type void
 * @memberOf Calendar
 * @returns {void}
 */
Calendar.prototype.add = function(item){ return; };

/**
 * Adds an array of items to the calendar asynchronously.
            <p>
If all the items are successfully added to the calendar, the success callback will be invoked, passing the list of <em>CalendarItem </em>objects that were added, with their identifier set (id attribute).
            </p>
            <p>
The <em>errorCallback()</em> is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - if any of the input parameters contain an invalid value, the item has any invalid value or the calendar has some restrictions that cause the attempted insertion of the calendar items to fail (for example, limitations in the size of text attributes)              </li>
              <li>
UnknownError - if any other error occurs.               </li>
            </ul>
            <p>
If you wish to update an existing item, call the <em>update() </em>method instead. If you wish to add a copy of an existing <em>CalendarItem </em>object, call CalendarItem.clone() method first and pass the clone to the add() method.
            </p>
           
 *
 * @param {array} items
 * @param {CalendarItemArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Calendar
 * @returns {void}
 */
Calendar.prototype.addBatch = function(items, successCallback, errorCallback){ return; };

/**
 * Updates an existing item in the calendar synchronously with the one specified in the argument.
            <p>
In case of recurring events, the default behavior is to update all their instances (including their detached ones), as well. If you don't want that, the <em>updateAllInstances</em> flag should be set to <var>false</var>.
            </p>
           
 *
 * @param {CalendarItem} item
 * @param {Boolean} updateAllInstances
 * @type void
 * @memberOf Calendar
 * @returns {void}
 */
Calendar.prototype.update = function(item, updateAllInstances){ return; };

/**
 * Updates an array of existing items in the calendar asynchronously with the specified values in the argument.
            <p>
In case of recurring events, the default behavior is to update all their instances (including their detached ones) as well. The <em>updateAllInstances</em> flag should be set to <var>false</var> to change the default behavior.
            </p>
            <p>
The <em>errorCallback() </em>is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - if parameters such as the calendar item has any invalid value or the calendar has some restrictions that cause the attempted insertion of the calendar items to fail (for example, limitations in the size of text attributes).              </li>
              <li>
UnknownError - if any other error occurs.              </li>
            </ul>
           
 *
 * @param {array} items
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {Boolean} updateAllInstances
 * @type void
 * @memberOf Calendar
 * @returns {void}
 */
Calendar.prototype.updateBatch = function(items, successCallback, errorCallback, updateAllInstances){ return; };

/**
 * Removes an item from the calendar that corresponds to the specified identifier. This method will throw an exception if it fails to remove the specified calendar item.
 *
 * @param {CalendarItemId} id
 * @type void
 * @memberOf Calendar
 * @returns {void}
 */
Calendar.prototype.remove = function(id){ return; };

/**
 * Removes several items from the calendar asynchronously depending on the specified identifiers.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - if an identifier in the <em>ids </em>parameter does not correspond to the ID attribute of an item in the calendar.              </li>
              <li>
InvalidValuesError - if any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError - if any other error occurs.              </li>
            </ul>
           
 *
 * @param {array} ids
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Calendar
 * @returns {void}
 */
Calendar.prototype.removeBatch = function(ids, successCallback, errorCallback){ return; };

/**
 * Finds and fetches an array of objects for items stored in the calendar according to the supplied filter if it is valid else it will return all the items stored.
            <p>
If the filter is passed and contains valid values, only those values in the calendar that match the filter criteria as specified in the <em>AbstractFilter </em>interface will be returned in the <em>successCallback()</em>.
If no filter is passed, or the filter contains any invalid value which is <var>null </var>or undefined, then the implementation must return the full list of items in the <em>successCallback()</em>.
If no items are available in the calendar (it is empty) or no item matches the filter criteria, the <em>successCallback() </em>will be invoked with an empty array.
            </p>
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - if any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError - if any other error occurs.              </li>
            </ul>
            <p>
<b>Filter specific remarks:</b>            </p>
            <ul>
              <li>
For event filtering based on start/end dates, items that recur during the given time interval will be found, even if the parent item itself is outside the interval.              </li>
              <li>
For event filtering based on the identifier, the identifier type should be CalendarEventID (<em>uid</em> and <em>rid</em>).
If no recurrence ID is given, the filter will match both the parent event and all its detached instances.              </li>
            </ul>
           
 *
 * @param {CalendarItemArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {AbstractFilter} filter
 * @param {SortMode} sortMode
 * @type void
 * @memberOf Calendar
 * @returns {void}
 */
Calendar.prototype.find = function(successCallback, errorCallback, filter, sortMode){ return; };

/**
 * Adds a listener to receive notifications about calendar changes.
            <p>
When executed, the implementation must immediately return a subscription identifier that identifies the watch operation. After returning the identifier, the watcher methods are invoked asynchronously.
            </p>
           
 *
 * @param {CalendarChangeCallback} successCallback
 * @type Number
 * @memberOf Calendar
 * @returns {Number}
 */
Calendar.prototype.addChangeListener = function(successCallback){ var ret = new Number(); return ret; };

/**
 * Unsubscribes from receiving notification for a calendar item changes.
            <p>
If the <em>watchId </em>argument is valid and corresponds to a subscription already in place, the watch process must immediately stop and no further callbacks must be invoked. If the <em>watchId </em>argument is not valid or does not correspond to a valid subscription, the method should return without any further action.
            </p>
           
 *
 * @param {Number} watchId
 * @type void
 * @memberOf Calendar
 * @returns {void}
 */
Calendar.prototype.removeChangeListener = function(watchId){ return; };

/**
 * Called when the list of calendar items is retrieved successfully.
 *
 * @param {array} items
 * @type void
 * @memberOf CalendarItemArraySuccessCallback
 * @returns {void}
 */
CalendarItemArraySuccessCallback.prototype.onsuccess = function(items){ return; };

/**
 * An attribute to persistently and uniquely identify an item in implementation.
 * <p>
Includes a UID and a possible recurrence ID that is needed to identify a particular instance of a recurring event.
            </p>
 *
 * @type CalendarItemId
 */
CalendarItem.prototype.id = new CalendarItemId();

/**
 * An attribute to identify the calendar in which this item is saved.
 * <p>
By default, this attribute is set to null.
            </p>
 *
 * @type CalendarId
 */
CalendarItem.prototype.calendarId = new CalendarId();

/**
 * An attribute to identify the last modified date and time of an item.
 * <p>
This attribute is automatically populated and cannot be edited by the client.
(See RFC 5545 - Section 3.8.7.3).
            </p>
 *
 * @type TZDate
 */
CalendarItem.prototype.lastModificationDate = new TZDate();

/**
 * An attribute to store the textual descriptions of an item.
 * <p>
It is usually used to provide a more complete description of the item and any supporting information than what is provided in the summary attribute.
(See RFC 5545 - Section 3.8.1.5).
            </p>
 * <p>
The default value is an empty string. 
            </p>
 *
 * @type String
 */
CalendarItem.prototype.description = new String();

/**
 * An attribute to store a short summary or subject for an item. (See RFC 5545 - Section 3.8.1.12)
 * <p>
The default value is an empty string. 
            </p>
 *
 * @type String
 */
CalendarItem.prototype.summary = new String();

/**
 * An attribute that behaves like a flag to indicate whether an event is an all-day event or not.
 * <p>
If set to <var>true</var>, then the time and time zone of the <em>startDate </em>are to be ignored and are not guaranteed to be stored in the database. An all-day event always covers the whole day, regardless of which time zone it was defined in and what the current time zone is. The duration must be <var>n*60*24 </var>minutes for an event lasting <var>n</var> days.
            </p>
 * <p>
The default value for this attribute is <var>false</var>.
            </p>
 *
 * @type Boolean
 */
CalendarItem.prototype.isAllDay = new Boolean();

/**
 * An attribute to store the start date/time for an item. (see RFC 5545 - Section 3.8.2.4).
 * <p>
The default value for this attribute is <var>null</var>.
            </p>
 * <p>
<em>startDate</em> must be specified in the same time zone as <em>endDate / dueDate</em> if provided.
            </p>
 *
 * @type TZDate
 */
CalendarItem.prototype.startDate = new TZDate();

/**
 * An attribute to denote the duration of the calendar component. (See RFC 5545 - Section 3.8.2.5).
 * <p>
By default, this attribute is set to <var>null</var>.
            </p>
 * <p>
<em>duration</em> and <em>endDate / dueDate</em> are mutually exclusive, hence, only one of them have <var>null</var>.
            </p>
 * <p>
This attribute is precise to the second. Milliseconds are ignored.
            </p>
 *
 * @type TimeDuration
 */
CalendarItem.prototype.duration = new TimeDuration();

/**
 * An attribute to store the location or the intended venue for the activity defined by the calendar item. (See RFC 5545 - Section 3.8.1.7)
 * <p>
The default value for this attribute is an empty string. 
            </p>
 *
 * @type String
 */
CalendarItem.prototype.location = new String();

/**
 * An attribute to store the global position latitude and longitude of the location where the event is planned to take place. (See RFC 5545 - Section 3.8.1.6).
 *
 * @type SimpleCoordinates
 */
CalendarItem.prototype.geolocation = new SimpleCoordinates();

/**
 * An attribute to store the name of the person who organized this event. (See RFC 5545 - Section 3.8.4.3).
 * <p>
By default, this attribute is initialized to an empty string.
            </p>
 *
 * @type String
 */
CalendarItem.prototype.organizer = new String();

/**
 * An attribute to mark the visibility (secrecy) level of the item. (See RFC 5545 - Section 3.8.1.3).
 * <p>
The default value is <var>PUBLIC</var>.
            </p>
 *
 * @type CalendarItemVisibility
 */
CalendarItem.prototype.visibility = new CalendarItemVisibility();

/**
 * An attribute to store the overall confirmation status for a calendar component. (See RFC 5545 - Section 3.8.1.11).
 * <p>
For an event, the default value is <var>CONFIRMED</var>. For a task, the default value is <var>NEEDS_ACTION</var>.
            </p>
 *
 * @type CalendarItemStatus
 */
CalendarItem.prototype.status = new CalendarItemStatus();

/**
 * An attribute to indicate the priority level of an item and may be used to relatively prioritize multiple items during a given period of time. (See RFC 5545 - Section 3.8.1.9).
 * <p>
The default value for this attribute is <var>LOW </var>priority.
            </p>
 * <p>
If the native item database supports another priority schema (such as a range from 1 to 9), the implementation must convert those values to the supported values. For instance, RFC 5545 suggests the following mapping for a range from 1 to 9:
            </p>
 * <ul>
 * <li>1-4 to HIGH,
 * <li>5 to MEDIUM,
 * <li>6-9 to LOW.
 * </ul>
 *
 * @type CalendarItemPriority
 */
CalendarItem.prototype.priority = new CalendarItemPriority();

/**
 * An attribute array to lists the alarms (or reminders) associated to an item.
 *
 * @type array
 */
CalendarItem.prototype.alarms = new array();

/**
 * An attribute to indicate the item categories or subtypes of a calendar component. The categories are useful in searching for a calendar component of a particular type and category. (See RFC 5545 - Section 3.8.1.2).
 * <p>
Examples of categories are personal, work, vacation, travel, etc.
            </p>
 * <p>
By default, this attribute is set to an empty array.
            </p>
 *
 * @type array
 */
CalendarItem.prototype.categories = new array();

/**
 * An attribute array that lists the people attending an event. (See RFC 5545 - Section 3.8.4.3).
 * <p>
By default, this attribute is set to an empty array.
            </p>
 *
 * @type array
 */
CalendarItem.prototype.attendees = new array();

/**
 * Converts the calendar item to a string format that will be generated and returned synchronously. The export format is set using the format parameter.
 *
 * @param {CalendarTextFormat} format
 * @type String
 * @memberOf CalendarItem
 * @returns {String}
 */
CalendarItem.prototype.convertToString = function(format){ var ret = new String(); return ret; };

/**
 * Clones the object, detached from any calendar.
            <p>
The <em>CalendarItem </em>object returned by the <em>clone()</em> method will have its identifier set to <var>null </var>and will be detached from any calendar.
            </p>
           
 *
 * @type CalendarItem
 * @memberOf CalendarItem
 * @returns {CalendarItem}
 */
CalendarItem.prototype.clone = function(){ var ret = new CalendarItem(); return ret; };

/**
 * An attribute to persistently, and uniquely identify a calendar event.
 * <p>
This value is assigned by the platform when the event is added to the calendar, it is locally unique and persistent for the life time of the event and it cannot be modified by the developers.
            </p>
 * <p>
See RFC 5545 (section 3.8.4.7) for more details about this parameter and algorithms to guarantee assignment of unique values.
This value is assigned by the platform when the <em>add()</em> method is successfully invoked.
            </p>
 *
 * @type String
 */
CalendarEventId.prototype.uid = new String();

/**
 * An attribute to store the recurrence ID of a instance.
 * <p>
This attribute is used in conjunction with the <em>uid</em> property to identify a specific instance of a recurring event.
            </p>
 * <p>
The parent of a recurrence instance has its <em>rid</em> set to <var>null</var>.
            </p>
 * <p>
By default, this attribute is set to <var>null</var>.
(See RFC 5545 (section 3.8.4.4) for more details about this parameter.)
            </p>
 *
 * @type String
 */
CalendarEventId.prototype.rid = new String();

/**
 * An attribute to store the due date and time for completing a task. (See RFC 5545 - Section 3.8.2.3).
 * <p>
This <em>dueDate</em> must be in the same time zone as the <em>startDate</em>. The <em>duration</em> and <em>dueDate</em> are mutually exclusive, so only one of them can have the value <var>null</var> at any given time.
            </p>
 * <p>
This attribute is precise to the second. Milliseconds are ignored.
            </p>
 * <p>
The default value is undefined. If no value is provided, the task doesn't have a due date.
            </p>
 *
 * @type TZDate
 */
CalendarTask.prototype.dueDate = new TZDate();

/**
 * An attribute to record the date and time when an task is completed. (See RFC 5545 - Section 3.8.2.1).
 * <p>
This attribute is precise to the second. Milliseconds are ignored.
            </p>
 * <p>
The default value is undefined. If no value is provided, the task is not completed yet.  
            </p>
 *
 * @type TZDate
 */
CalendarTask.prototype.completedDate = new TZDate();

/**
 * An attribute to denote the percent of completion of a task.
 * <p>
The value is a positive integer between <var>0 </var>and <var>100</var>. A value of <var>0 </var>indicates the task has not been started yet. A value of <var>100 </var>indicates that the task has been completed.
            </p>
 * <p>
Integer values in between indicate the percent partially complete.
(See RFC 5545 - Section 3.8.1.8).
            </p>
 * <p>
The default value is <var>0</var>, implies that the task has not been started.
            </p>
 *
 * @type Number
 */
CalendarTask.prototype.progress = new Number();

/**
 * Called when the array of objects is retrieved successfully.
 *
 * @param {array} calendars
 * @type void
 * @memberOf CalendarArraySuccessCallback
 * @returns {void}
 */
CalendarArraySuccessCallback.prototype.onsuccess = function(calendars){ return; };

/**
 * An attribute to store the URI for the attendee.
 * <p>
This is often an email in the form 'mailto:name@domain.com'.
            </p>
 *
 * @type String
 */
CalendarAttendee.prototype.uri = new String();

/**
 * An attribute to store the name of an attendee.
 *
 * @type String
 */
CalendarAttendee.prototype.name = new String();

/**
 * An attribute to denote the role of the attendee.
 * <p>
(See RFC 5545, Section 3.2.16.)
            </p>
 * <p>
The default value is <var>REQ_PARTICIPANT</var>.
            </p>
 *
 * @type AttendeeRole
 */
CalendarAttendee.prototype.role = new AttendeeRole();

/**
 * An attribute to store the participant's attendance status. (See RFC 5545, Section 3.2.12.)
 * <p>
The default value is <var>PENDING</var>.
            </p>
 *
 * @type AttendeeStatus
 */
CalendarAttendee.prototype.status = new AttendeeStatus();

/**
 * An attribute to store the attendee's participation status reply (RSVP). (See RFC 5545, Section 3.2.17.)
 * <p>
By default, this attribute is set to <var>FALSE</var>.
            </p>
 *
 * @type Boolean
 */
CalendarAttendee.prototype.RSVP = new Boolean();

/**
 * An attribute to indicate the type of a participant. (See RFC 5545, Section 3.2.3.)
 * <p>
The default value is <var>INDIVIDUAL</var>.
            </p>
 *
 * @type AttendeeType
 */
CalendarAttendee.prototype.type = new AttendeeType();

/**
 * An attribute to store the participant's group or list membership. (See RFC 5545, Section 3.2.11.)
 *
 * @type String
 */
CalendarAttendee.prototype.group = new String();

/**
 * An attribute to store the URI of the person who has delegated their participation to this attendee. (See RFC 5545, Section 3.2.4.)
 *
 * @type String
 */
CalendarAttendee.prototype.delegatorURI = new String();

/**
 * An attribute to stores the URI of the attendee to whom the person has delegated his participation. (See RFC 5545, Section 3.2.5.)
 *
 * @type String
 */
CalendarAttendee.prototype.delegateURI = new String();

/**
 * An attribute to store the participant's reference in the Contact API.
 * <p>
If the contact is not resolved, this attribute will be set to<var> null</var>.
For more information, see the <a href="http://127.0.0.1:50053/help/topic/org.tizen.web.device.apireference/tizen/contact.html">Contact API</a>.
            </p>
 *
 * @type ContactRef
 */
CalendarAttendee.prototype.contactRef = new ContactRef();

/**
 * Called when the list of calendar events is retrieved successfully.
 *
 * @param {array} events
 * @type void
 * @memberOf CalendarEventArraySuccessCallback
 * @returns {void}
 */
CalendarEventArraySuccessCallback.prototype.onsuccess = function(events){ return; };

/**
 * Gets an array of Calendar objects.
            <p>
If the operation completes successfully, the <em>successCallback() </em>must be invoked with all the calendars found and available. The first calendar in the list is always the default calendar.
            </p>
            <p>
If no Calendar object is available, the <em>successCallback()</em> is invoked with an empty array.
            </p>
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - if any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError - if any other error occurs.              </li>
            </ul>
           
 *
 * @param {CalendarType} type
 * @param {CalendarArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf CalendarManager
 * @returns {void}
 */
CalendarManager.prototype.getCalendars = function(type, successCallback, errorCallback){ return; };

/**
 * The unified calendar is the aggregation of all calendars that are obtained from and contains all events or tasks. It does not have the calendar id nor name which are set to .
            <p>
If an item is added to the unified calendar, it will be saved in the default calendar.
            </p>
           
 *
 * @param {CalendarType} type
 * @type Calendar
 * @memberOf CalendarManager
 * @returns {Calendar}
 */
CalendarManager.prototype.getUnifiedCalendar = function(type){ var ret = new Calendar(); return ret; };

/**
 * Gets the default calendar, which is used for new items.
 *
 * @param {CalendarType} type
 * @type Calendar
 * @memberOf CalendarManager
 * @returns {Calendar}
 */
CalendarManager.prototype.getDefaultCalendar = function(type){ var ret = new Calendar(); return ret; };

/**
 * Gets the calendar with the specified identifier and type.
 *
 * @param {CalendarType} type
 * @param {CalendarId} id
 * @type Calendar
 * @memberOf CalendarManager
 * @returns {Calendar}
 */
CalendarManager.prototype.getCalendar = function(type, id){ var ret = new Calendar(); return ret; };

/**
 * This API provides interfaces and methods for users to manage their schedule. Separate calendars can be implemented for group related events or tasks. For example, a user may have a work, personal, and family calendar. A calendar entry is called an event and is composed of a series of attributes, such as purpose, starting time, and duration. A calendar is a collection of events.
 * <p>
Internet Calendaring and Scheduling Core Object Specification (iCalendar), defines a format for exchanging event items. Mapping to specified event/task attributes in this API is as per this specification. To know more about this specification, see <a href="http://tools.ietf.org/html/rfc5545">RFC 5545</a>. 
        </p>
 * <p>
This API provides functionality to read, create, delete, and update items in specific calendars. Calendars can be obtained using the <em>getCalendars() </em>method, which returns an array of Calendar objects.
        </p>
 * <p>
For more information on the Calendar features, see <a href="http://127.0.0.1:50053/help/topic/org.tizen.web.appprogramming/html/guide/social_guide/calendar.htm">Calendar Guide</a>. 
        </p>
 *
 * @type CalendarManager
 */
CalendarManagerObject.prototype.calendar = new CalendarManager();

/**
 * An attribute to record the absolute date and time when an alarm should be triggered.
 * <p>
<em>absoluteDate </em>and <em>before </em>are mutually exclusive.
            </p>
 * <p>
This attribute is precise to the second. Milliseconds are ignored.
            </p>
 *
 * @type TZDate
 */
CalendarAlarm.prototype.absoluteDate = new TZDate();

/**
 * An attribute to store the duration before an event starts on which the alarm should be triggered.
 * <p>
The duration should be positive.
            </p>
 * <p>
<em>absoluteDate </em>and <em>before </em>are mutually exclusive.
            </p>
 * <p>
This attribute is precise to the second. Milliseconds are ignored.
            </p>
 *
 * @type TimeDuration
 */
CalendarAlarm.prototype.before = new TimeDuration();

/**
 * An attribute to denote the notification method used by an alarm.
 *
 * @type AlarmMethod
 */
CalendarAlarm.prototype.method = new AlarmMethod();

/**
 * An attribute to store the description of an alarm.
 * <p>
When the method is <var>DISPLAY</var>, the alarm must also include a non-null description attribute, which contains the text to be displayed when the alarm is triggered.
            </p>
 *
 * @type String
 */
CalendarAlarm.prototype.description = new String();

/**
 * An attribute that behaves like a flag to indicates if an instance of a recurring event is detached and if it has been modified and saved to the calendar.
 *
 * @type Boolean
 */
CalendarEvent.prototype.isDetached = new Boolean();

/**
 * An attribute to store the end date/time of an event.
 * <p>
(see RFC 5545 - Section 3.8.2.2).
            </p>
 * <p>
This <em>endDate</em> must be in the same time zone as the <em>startDate</em>. 
Note that <em>duration</em> and <em>endDate</em> are mutually exclusive, only one of them can be non-null.
            </p>
 * <p>
This attribute is precise to the second. Milliseconds are ignored.
            </p>
 * <p>
The default value for this attribute is <var>null</var>. 
            </p>
 *
 * @type TZDate
 */
CalendarEvent.prototype.endDate = new TZDate();

/**
 * An attribute to indicate the availability of a person for an event. (See RFC 5545 - Section 3.2.9).
 * <p>
The default value is <var>BUSY</var>.
            </p>
 *
 * @type EventAvailability
 */
CalendarEvent.prototype.availability = new EventAvailability();

/**
 * An attribute to denote the recurrence rule for the event.
 * <p>
The generated instances of a recurring event will have the same recurrence rule as their parent. This is useful when editing a particular event instance and choosing to update <b>all</b> instances from it.
            </p>
 * <p>
The detached instances (specific instances that have been modified as saved to the calendar) of a recurring event will not have any recurrence rule. No recurrence rule can be set on detached instances either. If one tries to set a recurrence rule on a detached event, a NotSupportedError should be thrown. Detached instances can be distinguished by checking their <em>isDetached</em> attribute.
(See RFC 5545, Section 3.3.10.)
            </p>
 *
 * @type CalendarRecurrenceRule
 */
CalendarEvent.prototype.recurrenceRule = new CalendarRecurrenceRule();

/**
 * Expands a recurring event and returns asynchronously the list of instances occurring in a given time interval (inclusive).
            <p>
This method takes into consideration all the parameters of the event recurrence rule to generate the instances occurring in a given time interval.
            </p>
            <p>
The call involves retrieving from the database detached instances of an event to replace their corresponding virtual instances in the returned list. The client can then use <em>CalendarEvent.isDetached </em>attribute to identify detached instances. If the event is not saved to a calendar yet, only virtual instances will be returned.
            </p>
            <p>
The errorCallback is launched with these error types: 
            </p>
            <ul>
              <li>
InvalidValuesError - if the event given in argument is not a recurring event.              </li>
              <li>
UnknownError - if any other error occurs.              </li>
            </ul>
           
 *
 * @param {TZDate} startDate
 * @param {TZDate} endDate
 * @param {CalendarEventArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf CalendarEvent
 * @returns {void}
 */
CalendarEvent.prototype.expandRecurrence = function(startDate, endDate, successCallback, errorCallback){ return; };

/**
 * Called when items are added to the calendar.
 *
 * @param {array} items
 * @type void
 * @memberOf CalendarChangeCallback
 * @returns {void}
 */
CalendarChangeCallback.prototype.onitemsadded = function(items){ return; };

/**
 * Called when items are updated in the calendar.
 *
 * @param {array} items
 * @type void
 * @memberOf CalendarChangeCallback
 * @returns {void}
 */
CalendarChangeCallback.prototype.onitemsupdated = function(items){ return; };

/**
 * Called when item are removed from the calendar.
 *
 * @param {array} ids
 * @type void
 * @memberOf CalendarChangeCallback
 * @returns {void}
 */
CalendarChangeCallback.prototype.onitemsremoved = function(ids){ return; };

/**
 * An attribute to store the frequency of a recurrence rule.
 * <p>
This property corresponds to <em>FREQ</em> in RFC 5545.
            </p>
 *
 * @type RecurrenceRuleFrequency
 */
CalendarRecurrenceRule.prototype.frequency = new RecurrenceRuleFrequency();

/**
 * An attribute to specify how often the recurrence rule repeats over the unit of time indicated by its frequency.
 * <p>
This attribute is linked to the <em>frequency </em>attribute and for an interval of <var>n</var>, the event will recur every <var>n </var>of recurrence attribute.
            </p>
 * <p>
For example, if the interval attribute is set to <var>2 </var>and <em>frequency </em>attribute is set to <var>WEEKLY</var>, then the event will recur every 2 weeks.
            </p>
 * <p>
The default interval value is <var>1</var>, that is, every day if the <em>CalendarRecurrenceRule frequency</em> attribute is DAILY, every week if frequency is <var>WEEKLY</var>, every month if frequency is <var>MONTHLY </var>or every year if frequency is <var>YEARLY</var>.
            </p>
 * <p>
This property corresponds to <em>INTERVAL</em> in RFC 5545.
            </p>
 *
 * @type Number
 */
CalendarRecurrenceRule.prototype.interval = new Number();

/**
 * An attribute to indicate the end date of a recurrence duration of an event using either an end date (attribute) or a number of occurrences (attribute).
 * <p>
By default, this attribute is set to <var>null</var>, meaning that the event recurs infinitely, unless <em>occurrenceCount </em>is set.
            </p>
 * <p>
This attribute is precise to the second. Milliseconds are ignored.
            </p>
 * <p>
This property corresponds to <em>UNTIL</em> in RFC 5545.
            </p>
 *
 * @type TZDate
 */
CalendarRecurrenceRule.prototype.untilDate = new TZDate();

/**
 * An attribute to indicate the number of occurrences of a recurring event.
 * <p>
The recurrence duration of an event can be defined using either an end date (<em>untilDate </em>attribute) or a number of occurrences (<em>occurrenceCount </em>attribute).
            </p>
 * <p>
By default, this attribute is set to <var>-1</var>, meaning that the event recurs infinitely, unless <em>untilDate </em>is set.
            </p>
 * <p>
This property corresponds to <em>COUNT</em> in RFC 5545.
            </p>
 *
 * @type Number
 */
CalendarRecurrenceRule.prototype.occurrenceCount = new Number();

/**
 * An attribute to store the days of the week associated with the recurrence rule.
 * <p>
This property value is valid only for recurrence rules with a frequency type of <em>WEEKLY</em>, <em>MONTHLY</em>, and <em>YEARLY</em>.
            </p>
 * <p>
This property corresponds to <em>BYDAY</em> in RFC 5545.
            </p>
 * <p>
By default, this attribute is set to an empty array.
            </p>
 *
 * @type array
 */
CalendarRecurrenceRule.prototype.daysOfTheWeek = new array();

/**
 * An attribute to store a list of ordinal numbers that filters which recurrences to include in the recurrence rule's frequency.
 * <p>
For example, a yearly recurrence rule that has a <em>daysOfTheWeek </em>value that specifies Monday through Friday, and a <em>setPositions </em>array containing <var>2 </var>and <var>-1</var>, occurs only on the second weekday and last weekday of every year.
            </p>
 * <p>
Values can be from 1 to 366 or -366 to -1. 
Negative values indicate counting backwards from the end of the recurrence rule's frequency (week, month, or year). 
            </p>
 * <p>
This attribute must only be used in conjunction with another BYxxx rule part (such as <em>daysOfTheWeek</em>).
            </p>
 * <p>
This property corresponds to <em>BYSETPOS</em> in RFC 5545.
            </p>
 * <p>
By default, this attribute is set to an empty array.
            </p>
 *
 * @type array
 */
CalendarRecurrenceRule.prototype.setPositions = new array();

/**
 * An attribute to list date/time exceptions for the recurring event. (See RFC 5545, Section 3.8.5.1.)
 * <p>
This attribute is precise to the second. Milliseconds are ignored.
            </p>
 * <p>
This property corresponds to <em>EXDATE</em> in RFC 5545.
            </p>
 * <p>
By default, this attribute is set to an empty array.
            </p>
 *
 * @type array
 */
CalendarRecurrenceRule.prototype.exceptions = new array();

/**
 * This API provides interfaces and methods for users to manage their schedule. Separate calendars can be implemented for group related events or tasks. For example, a user may have a work, personal, and family calendar. A calendar entry is called an event and is composed of a series of attributes, such as purpose, starting time, and duration. A calendar is a collection of events.
 * <p>
Internet Calendaring and Scheduling Core Object Specification (iCalendar), defines a format for exchanging event items. Mapping to specified event/task attributes in this API is as per this specification. To know more about this specification, see <a href="http://tools.ietf.org/html/rfc5545">RFC 5545</a>. 
        </p>
 * <p>
This API provides functionality to read, create, delete, and update items in specific calendars. Calendars can be obtained using the <em>getCalendars() </em>method, which returns an array of Calendar objects.
        </p>
 * <p>
For more information on the Calendar features, see <a href="http://127.0.0.1:50053/help/topic/org.tizen.web.appprogramming/html/guide/social_guide/calendar.htm">Calendar Guide</a>. 
        </p>
 *
 * @type CalendarManager
 */
Tizen.prototype.calendar = new CalendarManager();

/**
 * This is a callback interface of operations. For example code, see interface.
 *
 * @super Object
 * @constructor
 * @return {CallHistoryEntryArraySuccessCallback}
 */
function CallHistoryEntryArraySuccessCallback() {};
CallHistoryEntryArraySuccessCallback.prototype = new Object();

/**
 * This interface represents remote parties.
 *
 * @super Object
 * @constructor
 * @return {RemoteParty}
 */
function RemoteParty() {};
RemoteParty.prototype = new Object();

/**
 * This is a callback interface of aoperations. For example code, see interface.
 *
 * @super Object
 * @constructor
 * @return {CallHistoryChangeCallback}
 */
function CallHistoryChangeCallback() {};
CallHistoryChangeCallback.prototype = new Object();

/**
 * This interface manages call history. Apps can read or delete call history items (depending on permission). Modifying call history items is allowed for certain attributes, like direction. Adding items is owned by the back-end. Filtering is supported for all fields of .
 *
 * @super Object
 * @constructor
 * @return {CallHistory}
 */
function CallHistory() {};
CallHistory.prototype = new Object();

/**
 * This interface represents the subset of properties of calls, which become a call record in the call history after the call ends.
 *
 * @super Object
 * @constructor
 * @return {CallHistoryEntry}
 */
function CallHistoryEntry() {};
CallHistoryEntry.prototype = new Object();

/**
 * This interface defines what is instantiated by the object from the Tizen Platform. The
 *
 * @super Object
 * @constructor
 * @return {CallHistoryObject}
 */
function CallHistoryObject() {};
CallHistoryObject.prototype = new Object();

/**
 * Called when the queries on call history have been successfully completed.
 *
 * @param {array} entries
 * @type void
 * @memberOf CallHistoryEntryArraySuccessCallback
 * @returns {void}
 */
CallHistoryEntryArraySuccessCallback.prototype.onsuccess = function(entries){ return; };

/**
 * An attribute to store the RPID. The remote party identifier (RPID) that is a unique identifier used by a service with call capability. It also includes phone numbers. Contacts are also defined per service, so an RPID can be resolved to a Contact. A value means that the remote is hidden (private number).
 *
 * @type String
 */
RemoteParty.prototype.remoteParty = new String();

/**
 * An attribute to store the identifier of the person that the raw contact belongs to.
 * <p>
If the contact cannot be resolved, the value is <var>null</var>.
See <a href="http://127.0.0.1:50053/help/topic/org.tizen.web.device.apireference/tizen/contact.html">Contact API</a> for more information.
            </p>
 *
 * @type PersonId
 */
RemoteParty.prototype.personId = new PersonId();

/**
 * Called when a new call history item is added.
 *
 * @param {array} newItems
 * @type void
 * @memberOf CallHistoryChangeCallback
 * @returns {void}
 */
CallHistoryChangeCallback.prototype.onadded = function(newItems){ return; };

/**
 * Called when the call history items have been changed.
 *
 * @param {array} changedItems
 * @type void
 * @memberOf CallHistoryChangeCallback
 * @returns {void}
 */
CallHistoryChangeCallback.prototype.onchanged = function(changedItems){ return; };

/**
 * Called when the call history items have been removed.
 *
 * @param {array} removedItems
 * @type void
 * @memberOf CallHistoryChangeCallback
 * @returns {void}
 */
CallHistoryChangeCallback.prototype.onremoved = function(removedItems){ return; };

/**
 * Finds and returns call history items.
            <p>
The <em>errorCallback()</em> is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {CallHistoryEntryArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {AbstractFilter} filter
 * @param {SortMode} sortMode
 * @param {Number} limit
 * @param {Number} offset
 * @type void
 * @memberOf CallHistory
 * @returns {void}
 */
CallHistory.prototype.find = function(successCallback, errorCallback, filter, sortMode, limit, offset){ return; };

/**
 * Removes a call history entry synchronously by deleting it.
 *
 * @param {CallHistoryEntry} entry
 * @type void
 * @memberOf CallHistory
 * @returns {void}
 */
CallHistory.prototype.remove = function(entry){ return; };

/**
 * Removes a list of call history entries asynchronously by deleting them.
            <p>
The <em>errorCallback()</em> is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {array} entries
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf CallHistory
 * @returns {void}
 */
CallHistory.prototype.removeBatch = function(entries, successCallback, errorCallback){ return; };

/**
 * Removes the complete call history by deleting it.
            <p>
The <em>errorCallback()</em> is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf CallHistory
 * @returns {void}
 */
CallHistory.prototype.removeAll = function(successCallback, errorCallback){ return; };

/**
 * Adds a listener to register for callback to observe call history changes.
 *
 * @param {CallHistoryChangeCallback} observer
 * @type Number
 * @memberOf CallHistory
 * @returns {Number}
 */
CallHistory.prototype.addChangeListener = function(observer){ var ret = new Number(); return ret; };

/**
 * Removes a listener to unregister a previously registered listener.
 *
 * @param {Number} handle
 * @type void
 * @memberOf CallHistory
 * @returns {void}
 */
CallHistory.prototype.removeChangeListener = function(handle){ return; };

/**
 * An attribute to store The unique identifier of a call record.
 *
 * @type String
 */
CallHistoryEntry.prototype.uid = new String();

/**
 * An attribute to store the service type of the call saved to call history.
 * <p>
The following values are the supported:
            </p>
 * <ul>
 * <li>TEL - for all protocols with phone number addressing (PSTN, GSM, CDMA, LTE, etc.)
 * <li>XMPP - for generic XMPP calls
 * <li>SIP - for generic SIP calls
 * </ul>
 *
 * @type String
 */
CallHistoryEntry.prototype.type = new String();

/**
 * An array of attributes to store the features associated with the call service are saved to call history. The following values are the supported:
 * <ul>
 * <li>CALL - for all call types
 * <li>VOICECALL - for voice-only calls
 * <li>VIDEOCALL - for audio and video channel support in the call
 * <li>EMERGENCYCALL - to denote an emergency call
 * </ul>
 *
 * @type array
 */
CallHistoryEntry.prototype.features = new array();

/**
 * An array of attributes to store the remote parties participating in the call.
 *
 * @type array
 */
CallHistoryEntry.prototype.remoteParties = new array();

/**
 * An attribute to store the start time of the call. The exact meaning is defined by the back-end. The intention of this attribute is to give the moment when media channels come up.
 *
 * @type Date
 */
CallHistoryEntry.prototype.startTime = new Date();

/**
 * An attribute to store the duration of the call in seconds. The exact meaning is defined by the back-end. The intention of this attribute is to count the duration from media channels up to the moment when media channels tear down, on the same call service. If the call gets migrated to another service, another call history entry is used.
 *
 * @type Number
 */
CallHistoryEntry.prototype.duration = new Number();

/**
 * An attribute to store to indicate whether the call was dialed, received, missed, blocked or rejected. The following values are the supported:
 * <ul>
 * <li>DIALED - for dialed calls
 * <li>RECEIVED - for received calls
 * <li>MISSEDNEW - for missed calls not seen yet
 * <li>MISSED - for missed calls
 * <li>BLOCKED - for blocked calls
 * <li>REJECTED - for rejected calls
 * </ul>
 *
 * @type String
 */
CallHistoryEntry.prototype.direction = new String();

/**
 * This API provides interfaces and methods for retrieving information from the call history.
 * <p>
For more information on the Callhistory features, see <a href="http://127.0.0.1:50053/help/topic/org.tizen.web.appprogramming/html/guide/social_guide/call.htm">Call History Guide</a>.  
        </p>
 *
 * @feature http://tizen.org/feature/network.telephony
 * @type CallHistory
 */
CallHistoryObject.prototype.callhistory = new CallHistory();

/**
 * This API provides interfaces and methods for retrieving information from the call history.
 * <p>
For more information on the Callhistory features, see <a href="http://127.0.0.1:50053/help/topic/org.tizen.web.appprogramming/html/guide/social_guide/call.htm">Call History Guide</a>.  
        </p>
 *
 * @feature http://tizen.org/feature/network.telephony
 * @type CallHistory
 */
Tizen.prototype.callhistory = new CallHistory();

/**
 * The person object.
 *
 * @super Object
 * @constructor
 * @return {Person}
 */
function Person() {};
Person.prototype = new Object();

/**
 * The fully-defined contact reference.
          <p>
It contains both the identifier of the address book which the contact is in, and
the contact identifier within this address book.
          </p>
          <p>
This interface is used by other APIs to uniquely and globally identify contacts.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ContactRef}
 */
function ContactRef() {};
ContactRef.prototype = new Object();

/**
 * This interface provides methods to manage an address book.
          <p>
An address book is a collection of contacts and groups. This interface offers methods to manage the address book and to manipulate contacts within the address book, such as:
          </p>
          <ul>
            <li>
 <em>get()</em> - To get contacts that have a specific ID            </li>
            <li>
 <em>find()</em> - To find contacts using filters            </li>
            <li>
 <em>add() </em>or <em>addBatch()</em> - To add contacts to a specific address book            </li>
            <li>
 <em>update() </em>or <em>updateBatch()</em> - To update contacts in a specific address book            </li>
            <li>
 <em>remove() </em>or <em>removeBatch() </em> - To remove existing contacts            </li>
            <li>
 <em>addChangeListener() </em>or <em>removeChangeListener() </em> - To watch for address book changes            </li>
          </ul>
          <p>
This interface also offers methods to manipulate groups within the address book, such as:
          </p>
          <ul>
            <li>
 <em>getGroup()</em> - To get a group having specific ID            </li>
            <li>
 <em>getGroups()</em> - To get groups in a specific address book            </li>
            <li>
 <em>addGroup() </em> - To add groups to a specific address book             </li>
            <li>
 <em>updateGroup() </em> - To update groups in a specific address book            </li>
            <li>
 <em>removeGroup() </em> - To remove existing groups            </li>
          </ul>
         
 *
 * @super Object
 * @constructor
 * @return {AddressBook}
 */
function AddressBook() {};
AddressBook.prototype = new Object();

/**
 * This interface contains all information related to a contact name.
 *
 * @super Object
 * @constructor
 * @return {ContactName}
 */
function ContactName() {};
ContactName.prototype = new Object();

/**
 * This interface is used to create a object.
 *
 * @super Object
 * @constructor
 * @return {Contact}
 */
function Contact() {};
Contact.prototype = new Object();

/**
 * The ContactPhoneNumber object that contains the number and the type of phone number.
          <p>
This interface provides the phone number and the type of number, for example, work, home, car, etc., or the device subtype, for example, fax, fixed, or mobile.
          </p>
          <p>
For more details, see RFC 2426, Section 3.3.1
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ContactPhoneNumber}
 */
function ContactPhoneNumber() {};
ContactPhoneNumber.prototype = new Object();

/**
 * This interface contains a set of attributes that represent a particular point on the Earth's surface.
          <p>
Except isDefault and types attributes, each of the attributes of this interface are set to <var>null</var> by default.
          </p>
          <p>
For more details, see RFC 2426, Section 3.2.1.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ContactAddress}
 */
function ContactAddress() {};
ContactAddress.prototype = new Object();

/**
 * The success callback when retrieving a list of AddressBooks.
          <p>
The success callback that takes an array of AddressBooks as an input
argument. It is used in the asynchronous operation to
get address books.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {AddressBookArraySuccessCallback}
 */
function AddressBookArraySuccessCallback() {};
AddressBookArraySuccessCallback.prototype = new Object();

/**
 * This interface contains the information about the organization or company that a contact belongs to.
          <p>
By default, each of the attributes of this interface are <var>null</var>.
          </p>
          <p>
For more details, see RFC 2426, Section 3.5.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ContactOrganization}
 */
function ContactOrganization() {};
ContactOrganization.prototype = new Object();

/**
 * The interface for specifying the methods to be called for address book change notifications.
          <p>
This interface specifies a set of functions that will be invoked every time an address
book change occurs (contact addition/update/deletion).
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {AddressBookChangeCallback}
 */
function AddressBookChangeCallback() {};
AddressBookChangeCallback.prototype = new Object();

/**
 * Defines what is instantiated by the object from the Tizen Platform.
          <p>
There is a <em>tizen.contact </em>object that allows access to the Contact API functionality.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ContactManagerObject}
 */
function ContactManagerObject() {};
ContactManagerObject.prototype = new Object();

/**
 * The ContactWebSite object that contains the URL and the type of web site.
          <p>
For more details, see RFC 2426, Section 3.6.8.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ContactWebSite}
 */
function ContactWebSite() {};
ContactWebSite.prototype = new Object();

/**
 * This interface implements the object that contains the date and description of an anniversary.
 *
 * @super Object
 * @constructor
 * @return {ContactAnniversary}
 */
function ContactAnniversary() {};
ContactAnniversary.prototype = new Object();

/**
 * The ContactEmailAddress object that contains the email address and the type of email address.
          <p>
For more details, see RFC 2426, Section 3.3.2.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ContactEmailAddress}
 */
function ContactEmailAddress() {};
ContactEmailAddress.prototype = new Object();

/**
 * The group object.
 *
 * @super Object
 * @constructor
 * @return {ContactGroup}
 */
function ContactGroup() {};
ContactGroup.prototype = new Object();

/**
 * This interface provides access to the API functionality.
          <p>
This interface offers a method to retrieve the address books objects.
The address book objects can be manipulated with the provided functionalities to add, remove, and update the contained information.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ContactManager}
 */
function ContactManager() {};
ContactManager.prototype = new Object();

/**
 * The interface for specifying the methods to be called for change notifications.
          <p>
This interface specifies a set of functions that will be invoked every time person's
list change occurs (person addition/update/deletion).
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PersonsChangeCallback}
 */
function PersonsChangeCallback() {};
PersonsChangeCallback.prototype = new Object();

/**
 * The success callback that is used for saving and retrieving a list of contacts.
          <p>
The success callback that takes an array of contacts as an input
argument. It is used in the asynchronous operation to
get or save a list of contacts.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ContactArraySuccessCallback}
 */
function ContactArraySuccessCallback() {};
ContactArraySuccessCallback.prototype = new Object();

/**
 * The success callback that is used for retrieving a list of persons.
          <p>
The success callback that takes an array of persons as an input
argument. It is used in the asynchronous operation to
get or save a list of persons.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PersonArraySuccessCallback}
 */
function PersonArraySuccessCallback() {};
PersonArraySuccessCallback.prototype = new Object();

/**
 * The identifier of the person.
 *
 * @type PersonId
 */
Person.prototype.id = new PersonId();

/**
 * An attribute to identify a person by storing the display name in a string. It is selected from the contacts' display names.
 *
 * @type String
 */
Person.prototype.displayName = new String();

/**
 * An attribute to count the number of the contacts that belong to a person.
 *
 * @type Number
 */
Person.prototype.contactCount = new Number();

/**
 * An attribute to indicate if a person has a phone number.
 *
 * @type Boolean
 */
Person.prototype.hasPhoneNumber = new Boolean();

/**
 * An attribute to indicate if the person has an email addresses.
 *
 * @type Boolean
 */
Person.prototype.hasEmail = new Boolean();

/**
 * An attribute to indicate whether the contact is a favorite or not.
 * <p>
Indicates if the person was marked as <em>Favorite</em> or not.
            </p>
 * <p>
By default, this attribute is set to <var>false</var>.
            </p>
 *
 * @type Boolean
 */
Person.prototype.isFavorite = new Boolean();

/**
 * The URI of a picture of a person.
 * <p>
This attribute is used to store a URI that points to an image that can represent the
person object. This attribute only contains file URI; remote pictures could be loaded
to local with Download API.
Person's photoURI is bounded to linked contacts' valid photoURI. 
It means that if photoURI is existed, it can't become <var>null</var> and except linked contact's photoURI, any file can't be set as photoURI
            </p>
 * <p>
By default, this attribute is set to <var>null</var>.
            </p>
 *
 * @type String
 */
Person.prototype.photoURI = new String();

/**
 * An attribute to specify and store the URI of a custom ringtone for a contact.
 * <p>
By default, this attribute is initialized to <var>null</var>.
This attribute only contains file URI; remote ringtones could be loaded to local with Download API.
            </p>
 *
 * @type String
 */
Person.prototype.ringtoneURI = new String();

/**
 * The ID of a contact that represents information of the person.
 * <p>
The contact, this value is indicating, is used to show detailed information of the person.
            </p>
 *
 * @type ContactId
 */
Person.prototype.displayContactId = new ContactId();

/**
 * Aggregates another person to this person.
            <p>
Person is a meta object which aggregates contacts and to make a person, user should combine related contacts.
For this operation, link method is provided. 
If "Person A" is linked to "Person B", contacts related to "Person A" are aggregated to "Person B".
After this function returns, the target "Person A" is removed from DB.
            </p>
           
 *
 * @param {PersonId} personId
 * @type void
 * @memberOf Person
 * @returns {void}
 */
Person.prototype.link = function(personId){ return; };

/**
 * Separates a contact from this person.
            <p>
Person is aggregated contacts and if a user wants to detach one contact from person, unlink method is provided.
Unlink is basically detaching a contact object from linked contacts so only a contact Id linked to the person can be used as the input parameter.
This function returns a newly created Person object that indicates the separated contact.
            </p>
           
 *
 * @param {ContactId} contactId
 * @type Person
 * @memberOf Person
 * @returns {Person}
 */
Person.prototype.unlink = function(contactId){ var ret = new Person(); return ret; };

/**
 * The address book identifier.
 *
 * @type AddressBookId
 */
ContactRef.prototype.addressBookId = new AddressBookId();

/**
 * The contact identifier inside the address book.
 *
 * @type ContactId
 */
ContactRef.prototype.contactId = new ContactId();

/**
 * An attribute to uniquely identify the address book.
 * <p>
The value of this attribute shall be <var>null </var> if the address book
is the unified address book.
            </p>
 *
 * @type AddressBookId
 */
AddressBook.prototype.id = new AddressBookId();

/**
 * The address book descriptive name.
 *
 * @type String
 */
AddressBook.prototype.name = new String();

/**
 * An attribute to indicate if the address book is read-only.
 * <p>
Some on line address books cannot be edited and will have this
flag set to <var>true</var>.
            </p>
 *
 * @type Boolean
 */
AddressBook.prototype.readOnly = new Boolean();

/**
 * Gets the contact with the specified identifier.
            <p>
If the operation completes successfully, it must return the
contact with the specified identifier.
            </p>
           
 *
 * @param {ContactId} id
 * @type Contact
 * @memberOf AddressBook
 * @returns {Contact}
 */
AddressBook.prototype.get = function(id){ var ret = new Contact(); return ret; };

/**
 * Adds a contact to the address book synchronously.
            <p>
If the contact is successfully inserted in the addressbook, the Contact object
will have its identifier (id attribute) set when the function returns.
This operation is done successfully, new person object is also generated automatically.
            </p>
            <p>
If you wish to update an
existing contact, call the update() method instead. If you wish to add a copy
of an existing Contact object, call Contact.clone() method first and pass the
clone to the add() method.
            </p>
            <p>
The contact shall be added to default address book if the address book
is the unified address book.
            </p>
           
 *
 * @param {Contact} contact
 * @type void
 * @memberOf AddressBook
 * @returns {void}
 */
AddressBook.prototype.add = function(contact){ return; };

/**
 * Adds several contacts to the address book asynchronously.
            <p>
If all the contacts are successfully added to the address book,
the success callback will be invoked, passing the list of Contact objects
that were added, with their identifier set (id attribute).
            </p>
            <p>
The <em>errorCallback()</em> is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value, the contact has any invalid value or the address book has some restrictions (such as, limitations in the size of text attributes) because of which the contact items were not added.              </li>
              <li>
UnknownError - If any other error occurs, while trying to add the contacts.              </li>
            </ul>
            <p>
If you wish to update an
existing contact, call the update() method instead. If you wish to add a copy
of an existing Contact object, call Contact.clone() method first and pass the
clone to the add() method.
            </p>
            <p>
If any of the contacts cannot be added, the error callback
function that was passed in the invocation will be called.
            </p>
            <p>
The contacts shall be added to local phone address book if the address book
is the default address book.
            </p>
           
 *
 * @param {array} contacts
 * @param {ContactArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf AddressBook
 * @returns {void}
 */
AddressBook.prototype.addBatch = function(contacts, successCallback, errorCallback){ return; };

/**
 * Updates a contact in the address book synchronously.
 *
 * @param {Contact} contact
 * @type void
 * @memberOf AddressBook
 * @returns {void}
 */
AddressBook.prototype.update = function(contact){ return; };

/**
 * Updates several existing contacts in the address book asynchronously.
            <p>
The <em>errorCallback()</em> is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If an identifier in the IDs parameter does not correspond to the <em>id </em>attribute of any contact in the address book.              </li>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError - If any other error occurs, while trying to add the contacts.              </li>
            </ul>
            <p>
If any of the contacts could not be updated, the error callback
function that was passed in the invocation will be called.
            </p>
           
 *
 * @param {array} contacts
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf AddressBook
 * @returns {void}
 */
AddressBook.prototype.updateBatch = function(contacts, successCallback, errorCallback){ return; };

/**
 * Removes a contact from the address book synchronously.
            <p>
Removes the contact in the address book that corresponds to the specified
identifier. This function will throw an exception if it failed to
remove the specified contact.
            </p>
           
 *
 * @param {ContactId} id
 * @type void
 * @memberOf AddressBook
 * @returns {void}
 */
AddressBook.prototype.remove = function(id){ return; };

/**
 * Removes several contacts from the address book asynchronously.
            <p>
The <em>errorCallback()</em> is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If an identifier in the IDs parameter does not correspond to the <em>id </em>attribute of any contact in the address book (Otherwise, the implementation will attempt to remove the contacts that correspond to these identifiers).              </li>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError - If any other error occurs while trying to remove the contacts.              </li>
            </ul>
           
 *
 * @param {array} ids
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf AddressBook
 * @returns {void}
 */
AddressBook.prototype.removeBatch = function(ids, successCallback, errorCallback){ return; };

/**
 * Finds an array of all Contact objects from the specified address book or an array of Contact objects that match the optionally supplied filter.
            <p>
If the filter is passed and contains valid values, only those values in the
address book that match the filter criteria as specified in the AbstractFilter
interface will be returned in the successCallback. If no filter is passed, the filter
contains any invalid values, the filter is <var>null</var> or undefined, then
the implementation MUST return the full list of contact items
in the successCallback. If no contacts are available in the address book or no
contact matches the filter criteria, the successCallback will be invoked
with an empty array.
            </p>
            <p>
The <em>errorCallback() </em>is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError - If any other error occurs while trying to retrieve the contacts.              </li>
            </ul>
           
 *
 * @param {ContactArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {AbstractFilter} filter
 * @param {SortMode} sortMode
 * @type void
 * @memberOf AddressBook
 * @returns {void}
 */
AddressBook.prototype.find = function(successCallback, errorCallback, filter, sortMode){ return; };

/**
 * Subscribes to receive notifications about address book changes.
            <p>
When executed, the implementation must immediately return a subscription identifier that identifies
the watch operation. After returning the identifier, the watch operation is started
asynchronously.
            </p>
           
 *
 * @param {AddressBookChangeCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type Number
 * @memberOf AddressBook
 * @returns {Number}
 */
AddressBook.prototype.addChangeListener = function(successCallback, errorCallback){ var ret = new Number(); return ret; };

/**
 * Unsubscribes an address book changes watch operation.
            <p>
If the watchId argument is valid and corresponds to a subscription already in
place, the watch process MUST immediately stop and no further callbacks MUST be
invoked. If the watchId argument is not valid or does not correspond to a
valid subscription, the method should return without any further action.
            </p>
           
 *
 * @param {Number} watchId
 * @type void
 * @memberOf AddressBook
 * @returns {void}
 */
AddressBook.prototype.removeChangeListener = function(watchId){ return; };

/**
 * Gets the group with the specified identifier.
            <p>
If the operation completes successfully, it must return the
group with the given identifier.
            </p>
           
 *
 * @param {ContactGroupId} groupId
 * @type ContactGroup
 * @memberOf AddressBook
 * @returns {ContactGroup}
 */
AddressBook.prototype.getGroup = function(groupId){ var ret = new ContactGroup(); return ret; };

/**
 * Adds a group to the address book.
            <p>
If the group is successfully inserted in the addressbook, the Group object
will have its identifier (id attribute) set when the function returns.
            </p>
            <p>
The group shall be added to local phone address book if the address book
is the default address book.
            </p>
           
 *
 * @param {ContactGroup} group
 * @type void
 * @memberOf AddressBook
 * @returns {void}
 */
AddressBook.prototype.addGroup = function(group){ return; };

/**
 * Updates a group in the address book.
 *
 * @param {ContactGroup} group
 * @type void
 * @memberOf AddressBook
 * @returns {void}
 */
AddressBook.prototype.updateGroup = function(group){ return; };

/**
 * Removes a group from the address book.
            <p>
Removes the group in the address book that corresponds to the specified identifier. This method will throw an exception if it failed to remove the specified group.
            </p>
           
 *
 * @param {ContactGroupId} groupId
 * @type void
 * @memberOf AddressBook
 * @returns {void}
 */
AddressBook.prototype.removeGroup = function(groupId){ return; };

/**
 * Gets an array of all ContactGroup objects from the specified address book.
 *
 * @type array
 * @memberOf AddressBook
 * @returns {array}
 */
AddressBook.prototype.getGroups = function(){ var ret = new array(); return ret; };

/**
 * The name prefix of a contact.
 * <p>
By default, this attribute is initialized to
<var>null</var>. See also RFC 2426, Section 3.1.1.
            </p>
 *
 * @type String
 */
ContactName.prototype.prefix = new String();

/**
 * The name suffix of a contact.
 * <p>
By default, this attribute is initialized to
<var>null</var>. See also RFC 2426, Section 3.1.1.
            </p>
 *
 * @type String
 */
ContactName.prototype.suffix = new String();

/**
 * The first (given) name of a contact.
 * <p>
By default, this attribute is initialized to
<var>null</var>. See also RFC 2426, Section 3.1.1.
            </p>
 *
 * @type String
 */
ContactName.prototype.firstName = new String();

/**
 * The middle name of a contact.
 * <p>
By default, this attribute is initialized to
<var>null</var>. See also RFC 2426, Section 3.1.1.
            </p>
 *
 * @type String
 */
ContactName.prototype.middleName = new String();

/**
 * The last (family) name of a contact.
 * <p>
By default, this attribute is initialized to
<var>null</var>. See also RFC 2426, Section 3.1.1.
            </p>
 *
 * @type String
 */
ContactName.prototype.lastName = new String();

/**
 * The nicknames of a contact.
 * <p>
The nickname is a name used instead of, or in addition to, the given name of a contact,
place, or thing. It can also be used to specify a familiar form of a proper name.
            </p>
 * <p>
By default, this attribute is initialized to an empty array.
            </p>
 * <p>
In case multiple nicknames are available the first one is the default.
See RFC 2426, Section 3.1.3.
            </p>
 *
 * @type array
 */
ContactName.prototype.nicknames = new array();

/**
 * The phonetic first name of a contact.
 * <p>
Describes how the first name should be
pronounced. This is very important in
some languages, such as Japanese, because the
same 'Kanji' may have several pronunciations.
            </p>
 * <p>
By default, this attribute is set to <var>null</var>.
            </p>
 *
 * @type String
 */
ContactName.prototype.phoneticFirstName = new String();

/**
 * The phonetic last name of a contact.
 * <p>
Describes how the last name should be
pronounced. This is very important in
some languages, such as Japanese, because the
same 'Kanji' may have several pronunciations.
            </p>
 * <p>
By default, this attribute is set to <var>null</var>.
            </p>
 *
 * @type String
 */
ContactName.prototype.phoneticLastName = new String();

/**
 * The display name of a contact.
 * <p>
The string which can be displayed to identify the contact. It is composed of the first
and last names if available, otherwise, it will fall back to the most adequate
field available to identify the contact (such as nickname).
            </p>
 * <p>
By default, this attribute is set to <var>null</var>. Initially, once a contact is added to an address book, this value is composed.
            </p>
 *
 * @type String
 */
ContactName.prototype.displayName = new String();

/**
 * An attribute to identify a raw contact.
 * <p>
By default, this attribute is set to <var>null</var>.
            </p>
 *
 * @type ContactId
 */
Contact.prototype.id = new ContactId();

/**
 * The identifier of the person corresponding to the raw contact.
 * <p>
By default, this attribute is set to <var>null</var>.
            </p>
 *
 * @type PersonId
 */
Contact.prototype.personId = new PersonId();

/**
 * The identifier of the address book that corresponds to the raw contact. By default, this attribute is set to .
 *
 * @type AddressBookId
 */
Contact.prototype.addressBookId = new AddressBookId();

/**
 * The timestamp for the last update of a contact.
 * <p>
Specifies revision information about the contact.
            </p>
 * <p>
By default, this attribute is set to <var>null</var>. Initially, once a contact is added to an address book, this value is the same as the creation date.
For more details, see RFC 2426, Section 3.6.4.
            </p>
 *
 * @type Date
 */
Contact.prototype.lastUpdated = new Date();

/**
 * An attribute to indicate whether a contact is favorite or not.
 * <p>
This value is associated with the <em>isFavorite</em> attribute of Person that this contact indicates.
            </p>
 * <p>
By default, this attribute is set to <var>false</var>.
            </p>
 *
 * @type Boolean
 */
Contact.prototype.isFavorite = new Boolean();

/**
 * An attribute to store the name of a contact.
 *
 * @type ContactName
 */
Contact.prototype.name = new ContactName();

/**
 * The contact addresses.
 * <p>
By default, this attribute is set to an empty array.
            </p>
 *
 * @type array
 */
Contact.prototype.addresses = new array();

/**
 * The URI to the picture of the contact.
 * <p>
This attribute is used to store a URI that points to an image that can represent the
contact object. This attribute only contains file URI; remote pictures could be loaded
to local with Download API. See RFC 2426, Section 3.1.4.
            </p>
 * <p>
By default, this attribute is set to <var>null</var>.
            </p>
 *
 * @type String
 */
Contact.prototype.photoURI = new String();

/**
 * The telephone numbers of the contact.
 * <p>
By default, this attribute is set to empty array.
            </p>
 *
 * @type array
 */
Contact.prototype.phoneNumbers = new array();

/**
 * The email addresses of the contact.
 * <p>
By default, this attribute is set to empty array.
            </p>
 *
 * @type array
 */
Contact.prototype.emails = new array();

/**
 * The birthday of the contact.
 * <p>
Defines specify the birthday of the contact (see RFC 2426 -
Section 3.1.5).
            </p>
 * <p>
By default, this attribute is set to <var>null</var>.
            </p>
 *
 * @type Date
 */
Contact.prototype.birthday = new Date();

/**
 * The list of anniversaries for the contact.
 * <p>
Defines specify arbitrary anniversaries for the contact (in addition to the birthday).
            </p>
 * <p>
By default, this attribute is set to empty array.
            </p>
 *
 * @type array
 */
Contact.prototype.anniversaries = new array();

/**
 * The organizations the contact belongs to.
 * <p>
Contains information related to the contact's company or organization.
            </p>
 * <p>
For more details, see RFC 2426, Section 3.5.
            </p>
 *
 * @type array
 */
Contact.prototype.organizations = new array();

/**
 * The notes associated to the contact.
 * <p>
To specify supplemental information or a comment related to the contact.
            </p>
 * <p>
For more details, see RFC 2426, Section 3.6.2.
            </p>
 *
 * @type array
 */
Contact.prototype.notes = new array();

/**
 * The URLs associated to the contact.
 * <p>
By default, this attribute is initialized to an empty array.
            </p>
 * <p>
In case multiple URLs are available, the first one is the default one.
For more details, see RFC 2426, Section 3.6.8.
            </p>
 *
 * @type array
 */
Contact.prototype.urls = new array();

/**
 * The URI to the custom ringtone for the contact.
 * <p>
To specify a custom ringtone for the contact.
            </p>
 * <p>
By default, this attribute is initialized to <var>null</var>.
This attribute only contains file URI scheme;
remote pictures could be loaded to local with Download API.
For more details, see RFC 2426, Section 3.6.6.
            </p>
 *
 * @type String
 */
Contact.prototype.ringtoneURI = new String();

/**
 * The groups the contact belongs to.
 * <p>
To associate groups to the contact.
            </p>
 * <p>
By default, this attribute is initialized to an empty array.
            </p>
 * <p>
In a case where multiple categories are available, the first one is the default one.
See RFC 2426, Section 3.6.1.
            </p>
 *
 * @type array
 */
Contact.prototype.groupIds = new array();

/**
 * Converts the Contact item to a string format.
            <p>
A textual representation for the contact will be generated and returned synchronously.
The export format is set via the format parameter.
            </p>
           
 *
 * @param {ContactTextFormat} format
 * @type String
 * @memberOf Contact
 * @returns {String}
 */
Contact.prototype.convertToString = function(format){ var ret = new String(); return ret; };

/**
 * 
            <p>
Creates a clone of the Contact object, detached from any address book.
            </p>
            <p>
The Contact object returned by the <var>clone()</var> method will have its identifier
set to <var>null</var> and will be detached from any address book.
            </p>
           
 *
 * @type Contact
 * @memberOf Contact
 * @returns {Contact}
 */
Contact.prototype.clone = function(){ var ret = new Contact(); return ret; };

/**
 * The full phone number.
 *
 * @type String
 */
ContactPhoneNumber.prototype.number = new String();

/**
 * The default state of the phone number.
 * <p>
Indicates if the phone number was marked as <em>default</em> or not for the contact.
The only one among phone numbers for a person can have default property,
so that this attribute might be changed without explicit modification
according to the policy of platform.
            </p>
 * <p>
It deals with the 'pref' TYPE on RFC 2426, Section 3.3.1
            </p>
 * <p>
By default, this attribute is set to false.
            </p>
 *
 * @type Boolean
 */
ContactPhoneNumber.prototype.isDefault = new Boolean();

/**
 * The case insensitive list of phone types, as defined in RFC 2426.
 * <p>
Specifies the intended use of the phone number.
            </p>
 * <p>
At least the following values must be supported:
            </p>
 * <ul>
 * <li>- Indicates a work number
 * <li>- Indicates a home number
 * <li>- Indicates a voice number (Default)
 * <li>- Indicates a facsimile number
 * <li>- Indicates a messaging service on the number
 * <li>- Indicates a cellular number
 * <li>- Indicates a pager number
 * <li>- Indicates a bulletin board service number
 * <li>- Indicates a MODEM number
 * <li>- Indicates a car-phone number
 * <li>- Indicates an ISDN number
 * <li>- Indicates a video-phone number
 * <li>- Personal Communication Standard
 * </ul>
 *
 * @type array
 */
ContactPhoneNumber.prototype.types = new array();

/**
 * The country of the address.
 * <p>
It is recommended that the country is specified
using the two-letter [ISO 3166-1] code.
            </p>
 *
 * @type String
 */
ContactAddress.prototype.country = new String();

/**
 * The name of a country subdivision.
 * <p>
For example, State (United States) or Province (Spain).
            </p>
 *
 * @type String
 */
ContactAddress.prototype.region = new String();

/**
 * The name of the locality. For example, the city, county, town, or village.
 *
 * @type String
 */
ContactAddress.prototype.city = new String();

/**
 * The street address, for example, building number and street name/number.
 *
 * @type String
 */
ContactAddress.prototype.streetAddress = new String();

/**
 * An attribute to capture any other address details that are required for an accurate address. For example, floor number, apartment number, suite name, the name of an office occupant, etc.
 *
 * @type String
 */
ContactAddress.prototype.additionalInformation = new String();

/**
 * The postal code of the location (also known as the zip code in the US).
 *
 * @type String
 */
ContactAddress.prototype.postalCode = new String();

/**
 * The default state of an address.
 * <p>
Indicates if the address was marked as <em>default</em> or not for the contact.
The only one among addresses for a person can have default property,
so that this attribute might be changed without explicit modification
according to the policy of platform.
            </p>
 * <p>
It deals with the 'pref' TYPE on RFC 2426, Section 3.2.1
            </p>
 * <p>
By default, this attribute is set to <var>false</var>.
            </p>
 *
 * @type Boolean
 */
ContactAddress.prototype.isDefault = new Boolean();

/**
 * The case insensitive list of address types.
 * <p>
For more details, see RFC 2426, Section 3.2.1.
            </p>
 * <p>
At least the following values must be supported:
            </p>
 * <ul>
 * <li>WORK - Indicates a work address
 * <li>HOME - Indicates a home address
 * </ul>
 * <p>
By default, this attribute is set to HOME.
            </p>
 *
 * @type array
 */
ContactAddress.prototype.types = new array();

/**
 * The method invoked when a list of address books is retrieved successfully.
 *
 * @param {array} addressbooks
 * @type void
 * @memberOf AddressBookArraySuccessCallback
 * @returns {void}
 */
AddressBookArraySuccessCallback.prototype.onsuccess = function(addressbooks){ return; };

/**
 * The name of an organization.
 * <p>
For more details, see RFC 2426, Section 3.5.5.
            </p>
 *
 * @type String
 */
ContactOrganization.prototype.name = new String();

/**
 * The organizational unit name.
 * <p>
For more details, see RFC 2426, Section 3.5.5.
            </p>
 *
 * @type String
 */
ContactOrganization.prototype.department = new String();

/**
 * The job title.
 * <p>
To specify the job title, functional position or function (such as 'Director,
Research and Development').
            </p>
 * <p>
For more details, see RFC 2426, Section 3.5.1.
            </p>
 *
 * @type String
 */
ContactOrganization.prototype.title = new String();

/**
 * An attribute to store the role, occupation, or business category (such as 'Programmer').
 * <p>
For more details, see RFC 2426, Section 3.5.2.
            </p>
 *
 * @type String
 */
ContactOrganization.prototype.role = new String();

/**
 * The URI to the logo of a company.
 * <p>
To specify a graphic image of a logo associated with an organization.
This attribute only contains file URI Scheme;
remote pictures could be loaded to local with Download API.
For more details, see RFC 2426, Section 3.5.3.
            </p>
 *
 * @type String
 */
ContactOrganization.prototype.logoURI = new String();

/**
 * The method invoked when contacts are added to the address book.
 *
 * @param {array} contacts
 * @type void
 * @memberOf AddressBookChangeCallback
 * @returns {void}
 */
AddressBookChangeCallback.prototype.oncontactsadded = function(contacts){ return; };

/**
 * The method invoked when contacts are updated in the address book.
 *
 * @param {array} contacts
 * @type void
 * @memberOf AddressBookChangeCallback
 * @returns {void}
 */
AddressBookChangeCallback.prototype.oncontactsupdated = function(contacts){ return; };

/**
 * The method invoked when contacts are deleted from the address book.
 *
 * @param {array} contactIds
 * @type void
 * @memberOf AddressBookChangeCallback
 * @returns {void}
 */
AddressBookChangeCallback.prototype.oncontactsremoved = function(contactIds){ return; };

/**
 * This API is for managing Address Books.
 * <p>
A contact is a set of information that describes a contact. The contact contains information, such as phone numbers,
e-mail addresses, etc.
        </p>
 * <p>
<a href="http://www.ietf.org/rfc/rfc2426.txt"> RFC 2426 vCard MIME Directory Profile</a> defines a format for exchanging contacts. Contact API refers to this specification to provide a mapping of the specified contact attributes.
        </p>
 * <p>
A <em>person </em>is a set of information that describes a person. Two different <em>contacts</em> that indicate the same person will have the same person ID. A person has a display contact ID that indicates a contact that represents information of the person. A person is automatically created when a new contact is added.
        </p>
 * <p>
This API provides functionality to read, create, remove, and update contacts in specific address books. Address books can be obtained using the <em>getAddressBooks()</em> method, which returns an array of <em>AddressBook</em> objects.
        </p>
 * <p>
For more information on the Contact features, see <a href="http://127.0.0.1:50053/help/topic/org.tizen.web.appprogramming/html/guide/social_guide/contact.htm">Contact Guide</a>.  
        </p>
 *
 * @type ContactManager
 */
ContactManagerObject.prototype.contact = new ContactManager();

/**
 * The URL for the contact's web site.
 *
 * @type String
 */
ContactWebSite.prototype.url = new String();

/**
 * The type of web site.
 * <p>
At least the following values must be supported:
            </p>
 * <ul>
 * <li>HOMEPAGE - Indicates a home page.
 * <li>BLOG - Indicates a blog.
 * </ul>
 * <p>
By default, this attribute is set to HOMEPAGE.
            </p>
 *
 * @type String
 */
ContactWebSite.prototype.type = new String();

/**
 * The date of an anniversary.
 *
 * @type Date
 */
ContactAnniversary.prototype.date = new Date();

/**
 * The text describing an anniversary.
 * <p>
By default, this attribute is set to <var>null</var>.
            </p>
 *
 * @type String
 */
ContactAnniversary.prototype.label = new String();

/**
 * The full email address.
 *
 * @type String
 */
ContactEmailAddress.prototype.email = new String();

/**
 * The default state of an email address.
 * <p>
Indicates if the email address was marked as <em>default</em> or not for the contact.
The only one among email addresses for a person can have default property,
so that this attribute might be changed without explicit modification
according to the policy of platform.
            </p>
 * <p>
It deals with the 'pref' TYPE on RFC 2426, Section 3.3.2
            </p>
 * <p>
By default, this attribute is set to false.
            </p>
 *
 * @type Boolean
 */
ContactEmailAddress.prototype.isDefault = new Boolean();

/**
 * The case insensitive list of email types.
 * <p>
Specifies the intended use of the email address.
            </p>
 * <p>
At least the following values must be supported:
            </p>
 * <ul>
 * <li>WORK - Indicates a work email
 * <li>HOME - Indicates a home email
 * </ul>
 * <p>
By default, this attribute is set to WORK.
            </p>
 *
 * @type array
 */
ContactEmailAddress.prototype.types = new array();

/**
 * The identifier of a group.
 * <p>
By default, this attribute is set to <var>null</var>.
            </p>
 *
 * @type ContactGroupId
 */
ContactGroup.prototype.id = new ContactGroupId();

/**
 * The identifier of the address book that the group belongs to.
 * <p>
By default, this attribute is set to <var>null</var>.
            </p>
 *
 * @type AddressBookId
 */
ContactGroup.prototype.addressBookId = new AddressBookId();

/**
 * The name of a group.
 *
 * @type String
 */
ContactGroup.prototype.name = new String();

/**
 * The URI to the custom ringtone for a group.
 * <p>
To specify a custom ringtone for a group.
            </p>
 * <p>
By default, this attribute is initialized to <var>null</var>.
This attribute only contains file URI; remote pictures could be loaded to local with Download API.
            </p>
 *
 * @type String
 */
ContactGroup.prototype.ringtoneURI = new String();

/**
 * An attribute to store a URI that points to an image that can represent theobject. This attribute only contains file URI; remote pictures could be loaded to local with Download API.
 * <p>
By default, this attribute is set to <var>null</var>.
            </p>
 *
 * @type String
 */
ContactGroup.prototype.photoURI = new String();

/**
 * The flag indicating if the group can be modified / removed or not.
 * <p>
By default, this attribute is set to false.
            </p>
 *
 * @type String
 */
ContactGroup.prototype.readOnly = new String();

/**
 * Gets the available address books.
            <p>
If the operation completes successfully, the successCallback must
be invoked with the phone address book and the SIM address book (if any).
Other address books present in the device should also be returned.
            </p>
            <p>
If no address book is present, the <em>successCallback</em> will be invoked with an empty array.
            </p>
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If the event given in argument is not a recurring event.              </li>
              <li>
UnknownError - If any other error occurs while trying to get the address books.              </li>
            </ul>
           
 *
 * @param {AddressBookArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ContactManager
 * @returns {void}
 */
ContactManager.prototype.getAddressBooks = function(successCallback, errorCallback){ return; };

/**
 * Gets the aggregation of all address books.
            <p>
The unified address book is a logical address book that represents an aggregation of all address books 
that are obtained by getAddressBooks() and contains all contacts in the address books.
Note that the unified address book does not have an address book ID 
and it is set to <var>null</var>.
            </p>
           
 *
 * @type AddressBook
 * @memberOf ContactManager
 * @returns {AddressBook}
 */
ContactManager.prototype.getUnifiedAddressBook = function(){ var ret = new AddressBook(); return ret; };

/**
 * Gets the default address book.
            <p>
The default address book is the appointed addressbook from platform or operator.
This is one of addressBooks and it has the address book ID.
            </p>
            <p>
If the operation completes successfully, it must return the
default address book.
            </p>
           
 *
 * @type AddressBook
 * @memberOf ContactManager
 * @returns {AddressBook}
 */
ContactManager.prototype.getDefaultAddressBook = function(){ var ret = new AddressBook(); return ret; };

/**
 * Gets the address book with the specified identifier.
            <p>
If the operation completes successfully, it must return the
address book with the specified identifier.
            </p>
           
 *
 * @param {AddressBookId} addressBookId
 * @type AddressBook
 * @memberOf ContactManager
 * @returns {AddressBook}
 */
ContactManager.prototype.getAddressBook = function(addressBookId){ var ret = new AddressBook(); return ret; };

/**
 * Gets the person with the specified identifier.
            <p>
If the operation completes successfully, it must return the
person with the specified identifier.
            </p>
           
 *
 * @param {PersonId} personId
 * @type Person
 * @memberOf ContactManager
 * @returns {Person}
 */
ContactManager.prototype.get = function(personId){ var ret = new Person(); return ret; };

/**
 * Updates a person in the address book synchronously.
 *
 * @param {Person} person
 * @type void
 * @memberOf ContactManager
 * @returns {void}
 */
ContactManager.prototype.update = function(person){ return; };

/**
 * Updates several existing persons in the contact DB asynchronously.
            <p>
The <em>errorCallback()</em> is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If an identifier in the IDs parameter does not correspond to the <em>id</em> attribute of any person in the contact DB.              </li>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError - If any other error occurs, while trying to add the persons.              </li>
            </ul>
            <p>
If the details of any persons cannot be updated, the error callback function that was passed in the invocation will be called.
            </p>
           
 *
 * @param {array} persons
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ContactManager
 * @returns {void}
 */
ContactManager.prototype.updateBatch = function(persons, successCallback, errorCallback){ return; };

/**
 * Removes a person from the contact DB synchronously.
            <p>
Removes the person that corresponds to the specified identifier and the contacts related to the person as well. This function will throw an exception if it fails to remove the specified person.
            </p>
           
 *
 * @param {PersonId} personId
 * @type void
 * @memberOf ContactManager
 * @returns {void}
 */
ContactManager.prototype.remove = function(personId){ return; };

/**
 * Removes persons from contact DB asynchronously.
            <p>
Removes the persons that correspond to the specified identifiers as well as the contacts related to them.
            </p>
            <p>
The <em>errorCallback() </em>is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If an identifier in the <em>personIds </em>parameter does not correspond to the ID of any person in the contact DB. (Otherwise, the implementation will attempt to remove the contacts corresponding to these identifiers).              </li>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError - If any other error occurs while trying to remove the persons.              </li>
            </ul>
           
 *
 * @param {array} personIds
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ContactManager
 * @returns {void}
 */
ContactManager.prototype.removeBatch = function(personIds, successCallback, errorCallback){ return; };

/**
 * Gets an array of all objects from the contact DB or the ones that match the optionally supplied filter.
            <p>
If the filter is passed and contains valid values, only those values in the
address book that match the filter criteria as specified in the AbstractFilter
interface will be returned in the successCallback. If no filter is passed, the filter
contains any invalid values, the filter is <var>null </var> or undefined, then
the implementation must return the full list of contact items
in the successCallback. If no persons are available in the contact DB or no
person matches the filter criteria, the successCallback will be invoked
with an empty array.
            </p>
            <p>
The <em>errorCallback() </em>is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError - If any other error occurs while trying to retrieve the persons.              </li>
            </ul>
           
 *
 * @param {PersonArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {AbstractFilter} filter
 * @param {SortMode} sortMode
 * @type void
 * @memberOf ContactManager
 * @returns {void}
 */
ContactManager.prototype.find = function(successCallback, errorCallback, filter, sortMode){ return; };

/**
 * Subscribes to receive notifications about persons' changes.
            <p>
When executed, the implementation must immediately return a subscription identifier that identifies
the watch operation. After returning the identifier, the watch operation is started
asynchronously.
            </p>
           
 *
 * @param {PersonsChangeCallback} successCallback
 * @type Number
 * @memberOf ContactManager
 * @returns {Number}
 */
ContactManager.prototype.addChangeListener = function(successCallback){ var ret = new Number(); return ret; };

/**
 * Unsubscribes a persons' changes watch operation.
            <p>
If the watchId argument is valid and corresponds to a subscription already in
place, the watch process must immediately stop and no further callbacks MUST be
invoked. If the watchId argument is not valid or does not correspond to a
valid subscription, the method should return without any further action.
            </p>
           
 *
 * @param {Number} watchId
 * @type void
 * @memberOf ContactManager
 * @returns {void}
 */
ContactManager.prototype.removeChangeListener = function(watchId){ return; };

/**
 * The method invoked when persons are added to the person list.
 *
 * @param {array} persons
 * @type void
 * @memberOf PersonsChangeCallback
 * @returns {void}
 */
PersonsChangeCallback.prototype.onpersonsadded = function(persons){ return; };

/**
 * The method invoked when persons are updated in the person list.
 *
 * @param {array} persons
 * @type void
 * @memberOf PersonsChangeCallback
 * @returns {void}
 */
PersonsChangeCallback.prototype.onpersonsupdated = function(persons){ return; };

/**
 * The method invoked when persons are deleted from the person list.
 *
 * @param {array} personIds
 * @type void
 * @memberOf PersonsChangeCallback
 * @returns {void}
 */
PersonsChangeCallback.prototype.onpersonsremoved = function(personIds){ return; };

/**
 * The method invoked when a list of contacts is retrieved successfully.
 *
 * @param {array} contacts
 * @type void
 * @memberOf ContactArraySuccessCallback
 * @returns {void}
 */
ContactArraySuccessCallback.prototype.onsuccess = function(contacts){ return; };

/**
 * The method invoked when a list of persons is retrieved successfully.
 *
 * @param {array} persons
 * @type void
 * @memberOf PersonArraySuccessCallback
 * @returns {void}
 */
PersonArraySuccessCallback.prototype.onsuccess = function(persons){ return; };

/**
 * This API is for managing Address Books.
 * <p>
A contact is a set of information that describes a contact. The contact contains information, such as phone numbers,
e-mail addresses, etc.
        </p>
 * <p>
<a href="http://www.ietf.org/rfc/rfc2426.txt"> RFC 2426 vCard MIME Directory Profile</a> defines a format for exchanging contacts. Contact API refers to this specification to provide a mapping of the specified contact attributes.
        </p>
 * <p>
A <em>person </em>is a set of information that describes a person. Two different <em>contacts</em> that indicate the same person will have the same person ID. A person has a display contact ID that indicates a contact that represents information of the person. A person is automatically created when a new contact is added.
        </p>
 * <p>
This API provides functionality to read, create, remove, and update contacts in specific address books. Address books can be obtained using the <em>getAddressBooks()</em> method, which returns an array of <em>AddressBook</em> objects.
        </p>
 * <p>
For more information on the Contact features, see <a href="http://127.0.0.1:50053/help/topic/org.tizen.web.appprogramming/html/guide/social_guide/contact.htm">Contact Guide</a>.  
        </p>
 *
 * @type ContactManager
 */
Tizen.prototype.contact = new ContactManager();

/**
 * Called when a scan completes successfully to return content.
 *
 * @super Object
 * @constructor
 * @return {ContentScanSuccessCallback}
 */
function ContentScanSuccessCallback() {};
ContentScanSuccessCallback.prototype = new Object();

/**
 * This interface provides lyrics for music.
 *
 * @super Object
 * @constructor
 * @return {AudioContentLyrics}
 */
function AudioContentLyrics() {};
AudioContentLyrics.prototype = new Object();

/**
 * This interface provides access to properties of a content.
 *
 * @super Object
 * @constructor
 * @return {Content}
 */
function Content() {};
Content.prototype = new Object();

/**
 * This interface defines what is instantiated by the Tizen object.
          <p>
There is a <em>tizen.content </em>object that allows accessing the functionality of the Content module.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ContentManagerObject}
 */
function ContentManagerObject() {};
ContentManagerObject.prototype = new Object();

/**
 * Called when a method completes successfully to return a list of content objects.
 *
 * @super Object
 * @constructor
 * @return {ContentArraySuccessCallback}
 */
function ContentArraySuccessCallback() {};
ContentArraySuccessCallback.prototype = new Object();

/**
 * This interface extends a basic object with image-specific attributes.
 *
 * @super Object
 * @constructor
 * @return {ImageContent}
 */
function ImageContent() {};
ImageContent.prototype = new Content();

/**
 * This interface specifies a set of methods that are invoked every time a content change occurs.
 *
 * @super Object
 * @constructor
 * @return {ContentChangeCallback}
 */
function ContentChangeCallback() {};
ContentChangeCallback.prototype = new Object();

/**
 * This interface extends a basic object with audio-specific attributes.
 *
 * @super Object
 * @constructor
 * @return {AudioContent}
 */
function AudioContent() {};
AudioContent.prototype = new Content();

/**
 * This interface extends a basic object with video-specific attributes.
 *
 * @super Object
 * @constructor
 * @return {VideoContent}
 */
function VideoContent() {};
VideoContent.prototype = new Content();

/**
 * This interface provides operations to retrieve and manipulate contents.
 *
 * @super Object
 * @constructor
 * @return {ContentManager}
 */
function ContentManager() {};
ContentManager.prototype = new Object();

/**
 * Called when a method completes successfully to return a list of objects.
 *
 * @super Object
 * @constructor
 * @return {ContentDirectoryArraySuccessCallback}
 */
function ContentDirectoryArraySuccessCallback() {};
ContentDirectoryArraySuccessCallback.prototype = new Object();

/**
 * This interface that provides access to properties of a content directory.
 *
 * @super Object
 * @constructor
 * @return {ContentDirectory}
 */
function ContentDirectory() {};
ContentDirectory.prototype = new Object();

/**
 * Called when the scanning has been completed.
 *
 * @param {String} contentURI
 * @type void
 * @memberOf ContentScanSuccessCallback
 * @returns {void}
 */
ContentScanSuccessCallback.prototype.onsuccess = function(contentURI){ return; };

/**
 * The type of lyrics, that is, whether they are synchronized with the music or not.
 *
 * @type AudioContentLyricsType
 */
AudioContentLyrics.prototype.type = new AudioContentLyricsType();

/**
 * The array of timestamps in milliseconds for lyrics.
 * <p>
If the lyrics are not synchronized (that is, if there is no time information for the lyrics), the array is undefined.
            </p>
 *
 * @type array
 */
AudioContentLyrics.prototype.timestamps = new array();

/**
 * The array of lyric snippets.
 * <p>
If the lyrics are not synchronized, the array has only one member with full lyrics.
            </p>
 *
 * @type array
 */
AudioContentLyrics.prototype.texts = new array();

/**
 * The list of attributes that can be written back to the local backend using update or updateBatch method.
 *
 * @type array
 */
Content.prototype.editableAttributes = new array();

/**
 * The opaque content ID.
 *
 * @type ContentId
 */
Content.prototype.id = new ContentId();

/**
 * The content name. The initial value is the file name of the content.
 *
 * @type String
 */
Content.prototype.name = new String();

/**
 * The content type.
 *
 * @type ContentType
 */
Content.prototype.type = new ContentType();

/**
 * The content MIME type.
 *
 * @type String
 */
Content.prototype.mimeType = new String();

/**
 * The content title.
 *
 * @type String
 */
Content.prototype.title = new String();

/**
 * The URI that can be used to access the content.
 *
 * @type String
 */
Content.prototype.contentURI = new String();

/**
 * The array of content thumbnails URIs.
 *
 * @type array
 */
Content.prototype.thumbnailURIs = new array();

/**
 * The date when a content has been released to the public. If only the release year is known, then the month and date are set to January and 1st.
 *
 * @type Date
 */
Content.prototype.releaseDate = new Date();

/**
 * The last modified date for a content.
 *
 * @type Date
 */
Content.prototype.modifiedDate = new Date();

/**
 * The file size of the content in bytes.
 *
 * @type Number
 */
Content.prototype.size = new Number();

/**
 * The content description.
 *
 * @type String
 */
Content.prototype.description = new String();

/**
 * The content rating. This value can vary from to .
 *
 * @type Number
 */
Content.prototype.rating = new Number();

/**
 * This API discovers and manages contents such as images, videos, music, and the other that are available on the device. It is possible to search for specific contents using filters. The API also supports setting attributes of specific contents.
 * <p>
For more information on the Content features, see <a href="http://127.0.0.1:50053/help/topic/org.tizen.web.appprogramming/html/guide/content_guide/mediacontent.htm">Content Guide</a>.
        </p>
 *
 * @type ContentManager
 */
ContentManagerObject.prototype.content = new ContentManager();

/**
 * Called when the list of content is retrieved successfully.
 *
 * @param {array} contents
 * @type void
 * @memberOf ContentArraySuccessCallback
 * @returns {void}
 */
ContentArraySuccessCallback.prototype.onsuccess = function(contents){ return; };

/**
 * The geographical location where the image has been made.
 *
 * @type SimpleCoordinates
 */
ImageContent.prototype.geolocation = new SimpleCoordinates();

/**
 * The width of an image in pixels.
 *
 * @type Number
 */
ImageContent.prototype.width = new Number();

/**
 * The height of an image in pixels.
 *
 * @type Number
 */
ImageContent.prototype.height = new Number();

/**
 * Information about image orientation.
 *
 * @type ImageContentOrientation
 */
ImageContent.prototype.orientation = new ImageContentOrientation();

/**
 * Called when content is added.
 *
 * @param {Content} content
 * @type void
 * @memberOf ContentChangeCallback
 * @returns {void}
 */
ContentChangeCallback.prototype.oncontentadded = function(content){ return; };

/**
 * Called when content is updated.
 *
 * @param {Content} content
 * @type void
 * @memberOf ContentChangeCallback
 * @returns {void}
 */
ContentChangeCallback.prototype.oncontentupdated = function(content){ return; };

/**
 * Called when content is removed.
 *
 * @param {ContentId} id
 * @type void
 * @memberOf ContentChangeCallback
 * @returns {void}
 */
ContentChangeCallback.prototype.oncontentremoved = function(id){ return; };

/**
 * The album name to which the audio belongs.
 *
 * @type String
 */
AudioContent.prototype.album = new String();

/**
 * The list of genres to which the audio belongs.
 *
 * @type array
 */
AudioContent.prototype.genres = new array();

/**
 * The list of artists who created the audio.
 *
 * @type array
 */
AudioContent.prototype.artists = new array();

/**
 * The list of composers for the music.
 *
 * @type array
 */
AudioContent.prototype.composers = new array();

/**
 * The lyrics of a song in an audio file.
 *
 * @type AudioContentLyrics
 */
AudioContent.prototype.lyrics = new AudioContentLyrics();

/**
 * The copyright information.
 *
 * @type String
 */
AudioContent.prototype.copyright = new String();

/**
 * The audio bitrate in bits per second. By default, this value is 0.
 *
 * @type Number
 */
AudioContent.prototype.bitrate = new Number();

/**
 * The track number if the audio belongs to an album.
 *
 * @type Number
 */
AudioContent.prototype.trackNumber = new Number();

/**
 * The audio duration in milliseconds.
 *
 * @type Number
 */
AudioContent.prototype.duration = new Number();

/**
 * The geographical location where the video was made.
 *
 * @type SimpleCoordinates
 */
VideoContent.prototype.geolocation = new SimpleCoordinates();

/**
 * The album name to which the video belongs.
 *
 * @type String
 */
VideoContent.prototype.album = new String();

/**
 * The list of artists who created the video.
 *
 * @type array
 */
VideoContent.prototype.artists = new array();

/**
 * The video duration in milliseconds.
 *
 * @type Number
 */
VideoContent.prototype.duration = new Number();

/**
 * The width of a video in pixels.
 *
 * @type Number
 */
VideoContent.prototype.width = new Number();

/**
 * The height of a video in pixels.
 *
 * @type Number
 */
VideoContent.prototype.height = new Number();

/**
 * Updates attributes of the content in content database synchronously.
            <p>
When an application has changed some attributes of a content, this method allows writing it
back to the content database.
            </p>
           
 *
 * @param {Content} content
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.update = function(content){ return; };

/**
 * Updates a batch of content attributes in the content database asynchronously.
            <p>
When an application has changed any attributes in array of content, this method allows writing them
back to the content database.
            </p>
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {array} contents
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.updateBatch = function(contents, successCallback, errorCallback){ return; };

/**
 * Gets a list of content directory.
            <p>
This method returns (via callback) a list of content directory objects. To obtain a list of contents
in a specific directory, use find() method with the directory ID.
            </p>
            <p>
The errorCallback is launched with this error type:
            </p>
            <ul>
              <li>
UnknownError - If an unknown error occurs.              </li>
            </ul>
           
 *
 * @param {ContentDirectoryArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.getDirectories = function(successCallback, errorCallback){ return; };

/**
 * Finds contents that satisfy the conditions set by a filter.
            <p>
This method allows searching based on a supplied filter. For more detail on AbstractFilter, see
<a href="http://127.0.0.1:50053/help/topic/org.tizen.web.device.apireference/tizen/tizen.html#::Tizen::AbstractFilter">Tizen</a> module. The filter allows precise searching such
as "return all songs by artist U2, ordered by name".
            </p>
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {ContentArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {ContentDirectoryId} directoryId
 * @param {AbstractFilter} filter
 * @param {SortMode} sortMode
 * @param {Number} count
 * @param {Number} offset
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.find = function(successCallback, errorCallback, directoryId, filter, sortMode, count, offset){ return; };

/**
 * Scans a file to create or update a content in the content database.
            <p>
When an application creates or updates a content, this method allows scanning it 
to insert or update the content in the content database.
            </p>
           
 *
 * @param {String} contentURI
 * @param {ContentScanSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.scanFile = function(contentURI, successCallback, errorCallback){ return; };

/**
 * Sets a listener to receive notification about content changes.
 *
 * @param {ContentChangeCallback} changeCallback
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.setChangeListener = function(changeCallback){ return; };

/**
 * Unsets the listener to unsubscribes from receiving notification for any content changes.
 *
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.unsetChangeListener = function(){ return; };

/**
 * Called when the list of directory is retrieved successfully.
 *
 * @param {array} directories
 * @type void
 * @memberOf ContentDirectoryArraySuccessCallback
 * @returns {void}
 */
ContentDirectoryArraySuccessCallback.prototype.onsuccess = function(directories){ return; };

/**
 * The opaque content directory ID.
 *
 * @type ContentDirectoryId
 */
ContentDirectory.prototype.id = new ContentDirectoryId();

/**
 * The directory path on a device.
 *
 * @type String
 */
ContentDirectory.prototype.directoryURI = new String();

/**
 * The directory name.
 *
 * @type String
 */
ContentDirectory.prototype.title = new String();

/**
 * The type of a device storage.
 *
 * @type ContentDirectoryStorageType
 */
ContentDirectory.prototype.storageType = new ContentDirectoryStorageType();

/**
 * The last modified date for a directory.
 *
 * @type Date
 */
ContentDirectory.prototype.modifiedDate = new Date();

/**
 * This API discovers and manages contents such as images, videos, music, and the other that are available on the device. It is possible to search for specific contents using filters. The API also supports setting attributes of specific contents.
 * <p>
For more information on the Content features, see <a href="http://127.0.0.1:50053/help/topic/org.tizen.web.appprogramming/html/guide/content_guide/mediacontent.htm">Content Guide</a>.
        </p>
 *
 * @type ContentManager
 */
Tizen.prototype.content = new ContentManager();

/**
 * This interface provides access to the object.
 *
 * @super Object
 * @constructor
 * @return {DataControlManager}
 */
function DataControlManager() {};
DataControlManager.prototype = new Object();

/**
 * This interface defines MAP data type operators.
 *
 * @super Object
 * @constructor
 * @return {MappedDataControlConsumer}
 */
function MappedDataControlConsumer() {};
MappedDataControlConsumer.prototype = new DataControlConsumerObject();

/**
 * This interface defines SQL data type operatiors.
 *
 * @super Object
 * @constructor
 * @return {SQLDataControlConsumer}
 */
function SQLDataControlConsumer() {};
SQLDataControlConsumer.prototype = new DataControlConsumerObject();

/**
 * This interface provides a SuccessCallback for SQLDataControlConsumer.select().
 *
 * @super Object
 * @constructor
 * @return {DataControlSelectSuccessCallback}
 */
function DataControlSelectSuccessCallback() {};
DataControlSelectSuccessCallback.prototype = new Object();

/**
 * This interface provides a SuccessCallback for DataControlConsumerObject.
 *
 * @super Object
 * @constructor
 * @return {DataControlSuccessCallback}
 */
function DataControlSuccessCallback() {};
DataControlSuccessCallback.prototype = new Object();

/**
 * This interface provides a ErrorCallback for DataControlConsumerObject.
 *
 * @super Object
 * @constructor
 * @return {DataControlErrorCallback}
 */
function DataControlErrorCallback() {};
DataControlErrorCallback.prototype = new Object();

/**
 * This interface provides a SuccessCallback for MapDataControlConsumer.getValue().
 *
 * @super Object
 * @constructor
 * @return {DataControlGetValueSuccessCallback}
 */
function DataControlGetValueSuccessCallback() {};
DataControlGetValueSuccessCallback.prototype = new Object();

/**
 * This interface provides a SuccessCallback for SQLDataControlConsumer.insert().
 *
 * @super Object
 * @constructor
 * @return {DataControlInsertSuccessCallback}
 */
function DataControlInsertSuccessCallback() {};
DataControlInsertSuccessCallback.prototype = new Object();

/**
 * Defines what is instantiated in the object.
          <p>
There is a <em>tizen.datacontrol</em> object that allows access to the
DataControl API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {DataControlManagerObject}
 */
function DataControlManagerObject() {};
DataControlManagerObject.prototype = new Object();

/**
 * This interface provides common attributes for other derived DataControlCunsumerObject.
 *
 * @super Object
 * @constructor
 * @return {DataControlConsumerObject}
 */
function DataControlConsumerObject() {};
DataControlConsumerObject.prototype = new Object();

/**
 * Gets with a given DataType.
 *
 * @param {String} providerId
 * @param {String} dataId
 * @param {DataType} type
 * @type DataControlConsumerObject
 * @memberOf DataControlManager
 * @returns {DataControlConsumerObject}
 */
DataControlManager.prototype.getDataControlConsumer = function(providerId, dataId, type){ var ret = new DataControlConsumerObject(); return ret; };

/**
 * Adds the value associated with the specified key to a key-values map owned by MAP-type data control provider.
 *
 * @param {Number} reqId
 * @param {String} key
 * @param {String} value
 * @param {DataControlSuccessCallback} successCallback
 * @param {DataControlErrorCallback} errorCallback
 * @type void
 * @memberOf MappedDataControlConsumer
 * @returns {void}
 */
MappedDataControlConsumer.prototype.addValue = function(reqId, key, value, successCallback, errorCallback){ return; };

/**
 * Removes the value associated with the specified key from a key-values map owned by MAP-type data control provider.
 *
 * @param {Number} reqId
 * @param {String} key
 * @param {String} value
 * @param {DataControlSuccessCallback} successCallback
 * @param {DataControlErrorCallback} errorCallback
 * @type void
 * @memberOf MappedDataControlConsumer
 * @returns {void}
 */
MappedDataControlConsumer.prototype.removeValue = function(reqId, key, value, successCallback, errorCallback){ return; };

/**
 * Gets value associated with the specified key, from a key-values map owned by MAP-type data control provider.
 *
 * @param {Number} reqId
 * @param {String} key
 * @param {DataControlGetValueSuccessCallback} successCallback
 * @param {DataControlErrorCallback} errorCallback
 * @type void
 * @memberOf MappedDataControlConsumer
 * @returns {void}
 */
MappedDataControlConsumer.prototype.getValue = function(reqId, key, successCallback, errorCallback){ return; };

/**
 * Sets the value associated with the specified key with a new value.
 *
 * @param {Number} reqId
 * @param {String} key
 * @param {String} oldValue
 * @param {String} newValue
 * @param {DataControlSuccessCallback} successCallback
 * @param {DataControlErrorCallback} errorCallback
 * @type void
 * @memberOf MappedDataControlConsumer
 * @returns {void}
 */
MappedDataControlConsumer.prototype.updateValue = function(reqId, key, oldValue, newValue, successCallback, errorCallback){ return; };

/**
 * Inserts new rows into a table owned by an SQL-type data control provider.
 *
 * @param {Number} reqId
 * @param {RowData} insertionData
 * @param {DataControlInsertSuccessCallback} successCallback
 * @param {DataControlErrorCallback} errorCallback
 * @type void
 * @memberOf SQLDataControlConsumer
 * @returns {void}
 */
SQLDataControlConsumer.prototype.insert = function(reqId, insertionData, successCallback, errorCallback){ return; };

/**
 * Updates values of a table owned by an SQL-type data control provider.
 *
 * @param {Number} reqId
 * @param {RowData} updateData
 * @param {String} where
 * @param {DataControlSuccessCallback} successCallback
 * @param {DataControlErrorCallback} errorCallback
 * @type void
 * @memberOf SQLDataControlConsumer
 * @returns {void}
 */
SQLDataControlConsumer.prototype.update = function(reqId, updateData, where, successCallback, errorCallback){ return; };

/**
 * Delete rows from a table that is owned by an SQL-type data control provider.
 *
 * @param {Number} reqId
 * @param {String} where
 * @param {DataControlSuccessCallback} successCallback
 * @param {DataControlErrorCallback} errorCallback
 * @type void
 * @memberOf SQLDataControlConsumer
 * @returns {void}
 */
SQLDataControlConsumer.prototype.remove = function(reqId, where, successCallback, errorCallback){ return; };

/**
 * Selects the specified columns to be queried. The result set of the specified columns is retrieved from a table owned by an SQL-type data control provider.
 *
 * @param {Number} reqId
 * @param {array} columns
 * @param {String} where
 * @param {DataControlSelectSuccessCallback} successCallback
 * @param {DataControlErrorCallback} errorCallback
 * @param {Number} page
 * @param {Number} maxNumberPerPage
 * @type void
 * @memberOf SQLDataControlConsumer
 * @returns {void}
 */
SQLDataControlConsumer.prototype.select = function(reqId, columns, where, successCallback, errorCallback, page, maxNumberPerPage){ return; };

/**
 * 
 *
 * @param {array} rows
 * @param {Number} reqId
 * @type void
 * @memberOf DataControlSelectSuccessCallback
 * @returns {void}
 */
DataControlSelectSuccessCallback.prototype.onsuccess = function(rows, reqId){ return; };

/**
 * 
 *
 * @param {Number} reqId
 * @type void
 * @memberOf DataControlSuccessCallback
 * @returns {void}
 */
DataControlSuccessCallback.prototype.onsuccess = function(reqId){ return; };

/**
 * 
 *
 * @param {Number} reqId
 * @param {WebAPIError} error
 * @type void
 * @memberOf DataControlErrorCallback
 * @returns {void}
 */
DataControlErrorCallback.prototype.onerror = function(reqId, error){ return; };

/**
 * 
 *
 * @param {array} values
 * @param {Number} reqid
 * @type void
 * @memberOf DataControlGetValueSuccessCallback
 * @returns {void}
 */
DataControlGetValueSuccessCallback.prototype.onsuccess = function(values, reqid){ return; };

/**
 * Called on success.
 *
 * @param {Number} reqId
 * @param {Number} insertRowId
 * @type void
 * @memberOf DataControlInsertSuccessCallback
 * @returns {void}
 */
DataControlInsertSuccessCallback.prototype.onsuccess = function(reqId, insertRowId){ return; };

/**
 * This specification defines a DataControl API for applications.
 * <p>
The DataControl functionality provides a way to access specific data that is exported by other applications.
        </p>
 * <p>
Please read the <a href="http://127.0.0.1:50053/help/topic/org.tizen.native.appprogramming/html/guide/app/data_controls.htm">Native DataControl API</a> to know how to share own application data with other applications.
        </p>
 *
 * @type DataControlManager
 */
DataControlManagerObject.prototype.datacontrol = new DataControlManager();

/**
 * An attribute to store the DataType.
 *
 * @type DataType
 */
DataControlConsumerObject.prototype.type = new DataType();

/**
 * An attribute to hold a provider identifier of the application whom it shares the DataControl with. This attribute should be known to users who want to interact with application to provide.
 *
 * @type String
 */
DataControlConsumerObject.prototype.providerId = new String();

/**
 * The dataId identifies specific data, usually a database table to process(insert, delete, update). The string consists of one or more components, separated by a slash('/').
 *
 * @type String
 */
DataControlConsumerObject.prototype.dataId = new String();

/**
 * This specification defines a DataControl API for applications.
 * <p>
The DataControl functionality provides a way to access specific data that is exported by other applications.
        </p>
 * <p>
Please read the <a href="http://127.0.0.1:50053/help/topic/org.tizen.native.appprogramming/html/guide/app/data_controls.htm">Native DataControl API</a> to know how to share own application data with other applications.
        </p>
 *
 * @type DataControlManager
 */
Tizen.prototype.datacontrol = new DataControlManager();

/**
 * This interface defines the sync statistics for a profile service.
 *
 * @super Object
 * @constructor
 * @return {SyncStatistics}
 */
function SyncStatistics() {};
SyncStatistics.prototype = new Object();

/**
 * This interface defines the sync profile information, based on which the synchronization is performed.
 *
 * @super Object
 * @constructor
 * @return {SyncProfileInfo}
 */
function SyncProfileInfo() {};
SyncProfileInfo.prototype = new Object();

/**
 * This interface defines the sync service information.
 *
 * @super Object
 * @constructor
 * @return {SyncServiceInfo}
 */
function SyncServiceInfo() {};
SyncServiceInfo.prototype = new Object();

/**
 * This interface defines progress notification callbacks for the ongoing sync operation.
 *
 * @super Object
 * @constructor
 * @return {SyncProgressCallback}
 */
function SyncProgressCallback() {};
SyncProgressCallback.prototype = new Object();

/**
 * This interface allows managing profiles and synchronizing data between the server and the client device based on the stored profile information.
 *
 * @super Object
 * @constructor
 * @return {DataSynchronizationManager}
 */
function DataSynchronizationManager() {};
DataSynchronizationManager.prototype = new Object();

/**
 * This interface defines the default data synchronization manager that is instantiated by the object. There will be a object that allows access to the functionality of the DataSynchronization API.
 *
 * @super Object
 * @constructor
 * @return {DataSynchronizationManagerObject}
 */
function DataSynchronizationManagerObject() {};
DataSynchronizationManagerObject.prototype = new Object();

/**
 * This interface defines the sync information.
 *
 * @super Object
 * @constructor
 * @return {SyncInfo}
 */
function SyncInfo() {};
SyncInfo.prototype = new Object();

/**
 * An attribute to store the last sync status for a corresponding service category.
 *
 * @type SyncStatus
 */
SyncStatistics.prototype.syncStatus = new SyncStatus();

/**
 * An attribute to indicate the sync service type.
 *
 * @type SyncServiceType
 */
SyncStatistics.prototype.serviceType = new SyncServiceType();

/**
 * An attribute to store the last sync time.
 *
 * @type Date
 */
SyncStatistics.prototype.lastSyncTime = new Date();

/**
 * An attribute to indicate the total number of items sent from the server to the client direction.
 *
 * @type Number
 */
SyncStatistics.prototype.serverToClientTotal = new Number();

/**
 * An attribute to indicate the number of added items from the server to the client direction.
 *
 * @type Number
 */
SyncStatistics.prototype.serverToClientAdded = new Number();

/**
 * An attribute to indicate the number of updated items from the server to the client direction.
 *
 * @type Number
 */
SyncStatistics.prototype.serverToClientUpdated = new Number();

/**
 * An attribute to indicate the number of removed items from the server to the client direction.
 *
 * @type Number
 */
SyncStatistics.prototype.serverToClientRemoved = new Number();

/**
 * An attribute to indicate the total number of items from the client to the server direction.
 *
 * @type Number
 */
SyncStatistics.prototype.clientToServerTotal = new Number();

/**
 * An attribute to indicate the number of added items from the client to the server direction.
 *
 * @type Number
 */
SyncStatistics.prototype.clientToServerAdded = new Number();

/**
 * An attribute to indicate the number of updated items from the client to the server direction.
 *
 * @type Number
 */
SyncStatistics.prototype.clientToServerUpdated = new Number();

/**
 * An attribute to indicate the number of removed items from the client to the server direction.
 *
 * @type Number
 */
SyncStatistics.prototype.clientToServerRemoved = new Number();

/**
 * An attribute to store the unique identifier provided by the platform for a profile that has been successfully added.
 *
 * @type SyncProfileId
 */
SyncProfileInfo.prototype.profileId = new SyncProfileId();

/**
 * An attribute to store the profile name.
 *
 * @type String
 */
SyncProfileInfo.prototype.profileName = new String();

/**
 * An attribute to store the sync info.
 *
 * @type SyncInfo
 */
SyncProfileInfo.prototype.syncInfo = new SyncInfo();

/**
 * An attribute to indicate the service info.
 *
 * @type array
 */
SyncProfileInfo.prototype.serviceInfo = new array();

/**
 * An attribute to enable or disable a service category for sync.
 *
 * @type Boolean
 */
SyncServiceInfo.prototype.enable = new Boolean();

/**
 * An attribute to indicate the sync service type.
 *
 * @type SyncServiceType
 */
SyncServiceInfo.prototype.serviceType = new SyncServiceType();

/**
 * An attribute to store the sync service DB URI of the server.
 *
 * @type String
 */
SyncServiceInfo.prototype.serverDatabaseUri = new String();

/**
 * An attribute to store the sync service DB access ID to the server.
 * <p>
This is used only when the server requires a separate access right to each DB.
When the saved value is retrieved, it will return <var>null</var> not to reveal the privacy issue.
            </p>
 *
 * @type String
 */
SyncServiceInfo.prototype.id = new String();

/**
 * An attribute to store the sync service DB access password to the server. This is used only when the server requires a separate access right to each DB. When an attempt to retrieve the saved value is made, it will return to prevent any compromise on the privacy of the password.
 *
 * @type String
 */
SyncServiceInfo.prototype.password = new String();

/**
 * Called when a synchronization operation is started and progress is made.
            <p>
The frequency of this callback invocation is dependent on the platform implementation.
Normally the packet size from a server affects it, that is, if the server sends a bigger packet containing many records in it, the platform will process it at once and invoke this callback less frequently.
            </p>
           
 *
 * @param {SyncProfileId} profileId
 * @param {SyncServiceType} serviceType
 * @param {Boolean} isFromServer
 * @param {Number} totalPerService
 * @param {Number} syncedPerService
 * @type void
 * @memberOf SyncProgressCallback
 * @returns {void}
 */
SyncProgressCallback.prototype.onprogress = function(profileId, serviceType, isFromServer, totalPerService, syncedPerService){ return; };

/**
 * Called when the sync operation has completed.
 *
 * @param {SyncProfileId} profileId
 * @type void
 * @memberOf SyncProgressCallback
 * @returns {void}
 */
SyncProgressCallback.prototype.oncompleted = function(profileId){ return; };

/**
 * Called when the sync operation is stopped by user.
 *
 * @param {SyncProfileId} profileId
 * @type void
 * @memberOf SyncProgressCallback
 * @returns {void}
 */
SyncProgressCallback.prototype.onstopped = function(profileId){ return; };

/**
 * Called when the sync operation fails.
 *
 * @param {SyncProfileId} profileId
 * @param {WebAPIError} error
 * @type void
 * @memberOf SyncProgressCallback
 * @returns {void}
 */
SyncProgressCallback.prototype.onfailed = function(profileId, error){ return; };

/**
 * Adds a sync profile.
            <p>
The profile ID is provided when the profile is successfully added.
            </p>
           
 *
 * @param {SyncProfileInfo} profile
 * @type void
 * @memberOf DataSynchronizationManager
 * @returns {void}
 */
DataSynchronizationManager.prototype.add = function(profile){ return; };

/**
 * Updates an existing sync profile.
 *
 * @param {SyncProfileInfo} profile
 * @type void
 * @memberOf DataSynchronizationManager
 * @returns {void}
 */
DataSynchronizationManager.prototype.update = function(profile){ return; };

/**
 * Removes an existing sync profile.
 *
 * @param {SyncProfileId} profileId
 * @type void
 * @memberOf DataSynchronizationManager
 * @returns {void}
 */
DataSynchronizationManager.prototype.remove = function(profileId){ return; };

/**
 * Gets the maximum number of supported sync profiles on a platform. Normally the platform sets a limitation on the number of supported profiles. It will return or negative value if no limitation is set.
 *
 * @type Number
 * @memberOf DataSynchronizationManager
 * @returns {Number}
 */
DataSynchronizationManager.prototype.getMaxProfilesNum = function(){ var ret = new Number(); return ret; };

/**
 * Gets the current number of sync profiles on a device.
 *
 * @type Number
 * @memberOf DataSynchronizationManager
 * @returns {Number}
 */
DataSynchronizationManager.prototype.getProfilesNum = function(){ var ret = new Number(); return ret; };

/**
 * Gets the object from a given profile ID.
            <p>
The attempt to retrieve <em>SyncProfileInfo</em> doesn't get any confidential information such as the <em>password</em> of <em>SyncInfo</em> or <em>SyncServiceInfo</em> but instead will return <var>null</var>.
            </p>
           
 *
 * @param {SyncProfileId} profileId
 * @type SyncProfileInfo
 * @memberOf DataSynchronizationManager
 * @returns {SyncProfileInfo}
 */
DataSynchronizationManager.prototype.get = function(profileId){ var ret = new SyncProfileInfo(); return ret; };

/**
 * Gets the information of all sync profiles saved in a device.
            <p>
An attempt to retrieve <em>SyncProfileInfo</em> doesn't get any confidential information such as the <em>password</em> of <em>SyncInfo</em> or <em>SyncServiceInfo</em> but instead will return <var>null</var>.
            </p>
           
 *
 * @type array
 * @memberOf DataSynchronizationManager
 * @returns {array}
 */
DataSynchronizationManager.prototype.getAll = function(){ var ret = new array(); return ret; };

/**
 * Starts a sync operation with a given profile ID.
            <p>
If the sync mode is set to <em>MANUAL</em>, the synchronization will not start automatically until this method is called. This method will work even in <em>PUSH</em> or <em>PERIODIC</em> mode.
            </p>
           
 *
 * @param {SyncProfileId} profileId
 * @param {SyncProgressCallback} progressCallback
 * @type void
 * @memberOf DataSynchronizationManager
 * @returns {void}
 */
DataSynchronizationManager.prototype.startSync = function(profileId, progressCallback){ return; };

/**
 * Stops an ongoing sync operation that is specified by the parameter.
 *
 * @param {SyncProfileId} profileId
 * @type void
 * @memberOf DataSynchronizationManager
 * @returns {void}
 */
DataSynchronizationManager.prototype.stopSync = function(profileId){ return; };

/**
 * Gets the sync statistics of a given profile ID.
 *
 * @param {SyncProfileId} profileId
 * @type array
 * @memberOf DataSynchronizationManager
 * @returns {array}
 */
DataSynchronizationManager.prototype.getLastSyncStatistics = function(profileId){ var ret = new array(); return ret; };

/**
 * This API provides methods to synchronize contact and event data to the server using the OMA DS 1.2 protocol. To know the details of this specification, visit . And for more information on the DataSync features, see .
 *
 * @type DataSynchronizationManager
 */
DataSynchronizationManagerObject.prototype.datasync = new DataSynchronizationManager();

/**
 * An attribute to store the URL of the sync server.
 *
 * @type String
 */
SyncInfo.prototype.url = new String();

/**
 * An attribute to store the login ID for the sync server.
 * <p>
When an attempt to retrieve the saved value is made, it will return <var>null</var> to prevent any compromise on the privacy of the login ID.
            </p>
 *
 * @type String
 */
SyncInfo.prototype.id = new String();

/**
 * An attribute to store the login password to the sync server.
 * <p>
When an attempt to retrieve the saved value is made, it will return <var>null</var> to prevent any compromise on the privacy of the login password.
            </p>
 *
 * @type String
 */
SyncInfo.prototype.password = new String();

/**
 * An attribute to store the sync mode.
 *
 * @type SyncMode
 */
SyncInfo.prototype.mode = new SyncMode();

/**
 * An attribute to store the sync type.
 * <p>
This attribute is used when the sync mode is set to <em>MANUAL</em> option.
            </p>
 *
 * @type SyncType
 */
SyncInfo.prototype.type = new SyncType();

/**
 * An attribute to store the sync interval.
 * <p>
This attribute is used when the sync mode is set to <em>PERIODIC</em> option.
            </p>
 *
 * @type SyncInterval
 */
SyncInfo.prototype.interval = new SyncInterval();

/**
 * This API provides methods to synchronize contact and event data to the server using the OMA DS 1.2 protocol. To know the details of this specification, visit . And for more information on the DataSync features, see .
 *
 * @type DataSynchronizationManager
 */
Tizen.prototype.datasync = new DataSynchronizationManager();

/**
 * This interface handles requests for downloading. Each step of download operation will be informed through callbacks.
 *
 * @super Object
 * @constructor
 * @return {DownloadManager}
 */
function DownloadManager() {};
DownloadManager.prototype = new Object();

/**
 * This interface defines the default download manager that is instantiated by the object. There will be a object that allows access to the functionality of the Download API.
 *
 * @super Object
 * @constructor
 * @return {DownloadManagerObject}
 */
function DownloadManagerObject() {};
DownloadManagerObject.prototype = new Object();

/**
 * This interface defines the download request object.
 *
 * @super Object
 * @constructor
 * @return {DownloadRequest}
 */
function DownloadRequest() {};
DownloadRequest.prototype = new Object();

/**
 * This interface defines notification callbacks for the download state change or progress.
 *
 * @super Object
 * @constructor
 * @return {DownloadCallback}
 */
function DownloadCallback() {};
DownloadCallback.prototype = new Object();

/**
 * Starts a download operation with the specified URL information.
 *
 * @param {DownloadRequest} downloadRequest
 * @param {DownloadCallback} downloadCallback
 * @type Number
 * @memberOf DownloadManager
 * @returns {Number}
 */
DownloadManager.prototype.start = function(downloadRequest, downloadCallback){ var ret = new Number(); return ret; };

/**
 * Cancels an ongoing download operation that is specified by the parameter.
 *
 * @param {Number} downloadId
 * @type void
 * @memberOf DownloadManager
 * @returns {void}
 */
DownloadManager.prototype.cancel = function(downloadId){ return; };

/**
 * Pauses an ongoing download operation that is specified by the parameter. The paused download operation can be resumed later by the method.
 *
 * @param {Number} downloadId
 * @type void
 * @memberOf DownloadManager
 * @returns {void}
 */
DownloadManager.prototype.pause = function(downloadId){ return; };

/**
 * Resumes a paused download operation that is specified by the parameter.
 *
 * @param {Number} downloadId
 * @type void
 * @memberOf DownloadManager
 * @returns {void}
 */
DownloadManager.prototype.resume = function(downloadId){ return; };

/**
 * Gets the download state of an operation synchronously with the specified ID.
 *
 * @param {Number} downloadId
 * @type DownloadState
 * @memberOf DownloadManager
 * @returns {DownloadState}
 */
DownloadManager.prototype.getState = function(downloadId){ var ret = new DownloadState(); return ret; };

/**
 * Gets the DownloadRequest object from a given id.
 *
 * @param {Number} downloadId
 * @type DownloadRequest
 * @memberOf DownloadManager
 * @returns {DownloadRequest}
 */
DownloadManager.prototype.getDownloadRequest = function(downloadId){ var ret = new DownloadRequest(); return ret; };

/**
 * Gets the MIME type of the downloaded file.
 *
 * @param {Number} downloadId
 * @type String
 * @memberOf DownloadManager
 * @returns {String}
 */
DownloadManager.prototype.getMIMEType = function(downloadId){ var ret = new String(); return ret; };

/**
 * Sets the download callback to the download operation of given id. It's possible to change or register the listener of download operation using the saved id.
 *
 * @param {Number} downloadId
 * @param {DownloadCallback} downloadCallback
 * @type void
 * @memberOf DownloadManager
 * @returns {void}
 */
DownloadManager.prototype.setListener = function(downloadId, downloadCallback){ return; };

/**
 * This API provides methods to asynchronously download the contents of a URL to a storage.
 * <p>
For more information on the Download features, see <a href="http://127.0.0.1:50053/help/topic/org.tizen.web.appprogramming/html/guide/content_guide/download.htm">Download Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/network.wifi
 * @type DownloadManager
 */
DownloadManagerObject.prototype.download = new DownloadManager();

/**
 * An attribute to store the URL of the object to download.
 *
 * @type String
 */
DownloadRequest.prototype.url = new String();

/**
 * An attribute to store the folder path of the destination folder to which a requested file object will be downloaded.
 * <p>
If the destination is not specified or an empty string, the file will be downloaded to the default storage: "Downloads". For more information, see <a href="http://127.0.0.1:50053/help/topic/org.tizen.web.device.apireference/tizen/filesystem.html">Filesystem API</a>.
            </p>
 * <p>
The default value is an empty string.
            </p>
 *
 * @type String
 */
DownloadRequest.prototype.destination = new String();

/**
 * An attribute to store the file name for the specified URL.
 * <p>
If the file name is not given or an empty string, the original file name from URL is used.
            </p>
 * <p>
The default value is an empty string.
            </p>
 *
 * @type String
 */
DownloadRequest.prototype.fileName = new String();

/**
 * An attribute to store the allowed network type.
 * <p>
If the network type is not given, all network type are allowed.
            </p>
 * <p>
The default value is "ALL".
            </p>
 *
 * @type DownloadNetworkType
 */
DownloadRequest.prototype.networkType = new DownloadNetworkType();

/**
 * An attribute to store extra HTTP header fields.
 * <p>
For more information about HTTP header fields, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec4.html#sec4.2">RFC-2616</a>            </p>
 * <p>
The default value is an empty object.
            </p>
 *
 * @type DownloadHTTPHeaderFields
 */
DownloadRequest.prototype.httpHeader = new DownloadHTTPHeaderFields();

/**
 * Called when a download is successful and it called multiple times as the download progresses. The interval between callback is platform-dependent. When the download is started, the can be .
 *
 * @param {Number} downloadId
 * @param {Number} receivedSize
 * @param {Number} totalSize
 * @type void
 * @memberOf DownloadCallback
 * @returns {void}
 */
DownloadCallback.prototype.onprogress = function(downloadId, receivedSize, totalSize){ return; };

/**
 * Called when the download operation is paused by the method.
 *
 * @param {Number} downloadId
 * @type void
 * @memberOf DownloadCallback
 * @returns {void}
 */
DownloadCallback.prototype.onpaused = function(downloadId){ return; };

/**
 * Called when download is canceled by the method.
 *
 * @param {Number} downloadId
 * @type void
 * @memberOf DownloadCallback
 * @returns {void}
 */
DownloadCallback.prototype.oncanceled = function(downloadId){ return; };

/**
 * Called when the download operation is completed with the final full path. If the same file name already exists in the destination, it is changed according to the platform policy and delivered in this callback.
 *
 * @param {Number} downloadId
 * @param {String} fullPath
 * @type void
 * @memberOf DownloadCallback
 * @returns {void}
 */
DownloadCallback.prototype.oncompleted = function(downloadId, fullPath){ return; };

/**
 * Called when the download operation fails.
 *
 * @param {Number} downloadId
 * @param {WebAPIError} error
 * @type void
 * @memberOf DownloadCallback
 * @returns {void}
 */
DownloadCallback.prototype.onfailed = function(downloadId, error){ return; };

/**
 * This API provides methods to asynchronously download the contents of a URL to a storage.
 * <p>
For more information on the Download features, see <a href="http://127.0.0.1:50053/help/topic/org.tizen.web.appprogramming/html/guide/content_guide/download.htm">Download Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/network.wifi
 * @type DownloadManager
 */
Tizen.prototype.download = new DownloadManager();

/**
 * The success callback to read the content of a file as a DOMString.
          <p>
This callback interface specifies a success callback with 
a DOMString object as input argument. It is used in asynchronous
operations, such as File.readAsText().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileStringSuccessCallback}
 */
function FileStringSuccessCallback() {};
FileStringSuccessCallback.prototype = new Object();

/**
 * The success callback to retrieve a FileSystemStorage object.
          <p>
This callback interface specifies a success callback with 
a FileSystmeStorage object as input argument. It is used in asynchronous
operations, such as FileSystemManager.getStorage() and
FileSystemManager.addStorageStateChangeListener().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileSystemStorageSuccessCallback}
 */
function FileSystemStorageSuccessCallback() {};
FileSystemStorageSuccessCallback.prototype = new Object();

/**
 * This interface provides access to the Filesystem API.
          <p>
This manager exposes the filesystem base API, and provides functionality, such as
determining root and default locations, resolving a given location
into a file handle, and registering filesystem listeners for
filesystem events.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileSystemManager}
 */
function FileSystemManager() {};
FileSystemManager.prototype = new Object();

/**
 * FileStream API.
          <p>
A FileStream represents a handle to a File opened for read and/or
write operations. Read and write operations are performed relative
to a position attribute, which is a pointer that represents the current position in the file.
          </p>
          <p>
A series of read/write methods are available that permit both binary and
text to be processed.
          </p>
          <p>
Once a file stream is closed, any operation attempted on this stream
will result in a standard JavaScript error.
          </p>
          <p>
The read/write operations in this interface do not throw any security
exceptions as the access rights are expected to be granted through the initial
resolve() method or through the openStream() method of the File interface.
Therefore, all actions performed on a successfully resolved File and FileStream are
expected to succeed. This avoids successive asynchronous calls and may potentially increase
application for a user.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileStream}
 */
function FileStream() {};
FileStream.prototype = new Object();

/**
 * The file system specific success callback.
          <p>
This callback interface specifies a success callback with 
a File object as input argument. It is used in asynchronous
operations, such as FileSystemManager.resolve() and
copying, moving, and deleting files.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileSuccessCallback}
 */
function FileSuccessCallback() {};
FileSuccessCallback.prototype = new Object();

/**
 * The file interface.
          <p>
This interface represents the file abstraction in use.
A file handle represents a file
if the isFile property is <em>true</em>, if the isFile property is <em>false</em>, the file
handle represents a directory.
If a file handle represents a directory, it can address files and directories.
          </p>
          <p>
The file object permissions for the file object location and tree rooted
at that location depends upon the mode defined in the resolve method.
When a File object creates a child File object, 
the new File object inherits its access rights from
the parent object without any reference to the security framework, as
noted in certain methods of File.
          </p>
          <p>
A file handle representing a file can be opened for I/O operations,
such as reading and writing.
          </p>
          <p>
A file handle representing a directory can be used for listing all
files and directories rooted as the file handle location.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {File}
 */
function File() {};
File.prototype = new Object();

/**
 * The FileSystemStorage interface.
          <p>
This interface gives additional information about a storage, such as if the
device is mounted, if it's a removable drive or not, or the device's name.
To retrieve the mount point, the resolve() method should be used using
the label as argument.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileSystemStorage}
 */
function FileSystemStorage() {};
FileSystemStorage.prototype = new Object();

/**
 * This interface defines what is instantiated by the Tizen object.
          <p>
There is a <em>tizen.filesystem </em>object that allows accessing the functionality of the Filesystem API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileSystemManagerObject}
 */
function FileSystemManagerObject() {};
FileSystemManagerObject.prototype = new Object();

/**
 * The success callback to open a file for raw access.
          <p>
This callback interface specifies a success callback with 
a FileStream object as input argument. It is used by asynchronous
methods, such as File.openStream().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileStreamSuccessCallback}
 */
function FileStreamSuccessCallback() {};
FileStreamSuccessCallback.prototype = new Object();

/**
 * The success callback to retrieve FileSystemStorage objects.
          <p>
This callback interface specifies a success callback with 
an array of FileSystemStorage objects as input argument. It is used in asynchronous
operations, such as FileSystemManager.listStorages().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileSystemStorageArraySuccessCallback}
 */
function FileSystemStorageArraySuccessCallback() {};
FileSystemStorageArraySuccessCallback.prototype = new Object();

/**
 * The file system specific success callback for listing methods.
          <p>
This callback interface specifies a success callback with a function
taking an array of File objects as input argument. It is used in asynchronous
methods, such as File.listFiles().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileArraySuccessCallback}
 */
function FileArraySuccessCallback() {};
FileArraySuccessCallback.prototype = new Object();

/**
 * The method invoked when the asynchronous call completes successfully.
 *
 * @param {String} fileStr
 * @type void
 * @memberOf FileStringSuccessCallback
 * @returns {void}
 */
FileStringSuccessCallback.prototype.onsuccess = function(fileStr){ return; };

/**
 * The method invoked when the asynchronous call completes successfully.
 *
 * @param {FileSystemStorage} storage
 * @type void
 * @memberOf FileSystemStorageSuccessCallback
 * @returns {void}
 */
FileSystemStorageSuccessCallback.prototype.onsuccess = function(storage){ return; };

/**
 * The maximum path length limit for the platform.
 *
 * @type Number
 */
FileSystemManager.prototype.maxPathLength = new Number();

/**
 * Resolves a location to a file handle after validating it.
            <p>
If the operation completes successfully, the handle is returned in the FileSuccessCallback.
A valid location is prefixed with a valid root or default location and it must address an existing, accessible file or directory.
            </p>
            <p>
A location can contain virtual path like (<var>documents/some_file.txt</var>)
or it can be a file's URI (<var>file://my_strange_path/some_file.png</var>).
            </p>
            <p>
The list of root locations that must be supported by a compliant implementation are:
            </p>
            <ul>
              <li>
documents - The default folder in which text documents (such as pdf, doc...) are stored by default in a device. For example, in some platforms it corresponds to the "My Documents" folder.              </li>
              <li>
images - Default folder in which still images, like pictures (in formats including jpg, gif, png, etc.), are stored in the device by default. For example, in some platforms it corresponds to the "My Images" folder.              </li>
              <li>
music - Default folder in which sound clips (in formats including mp3, aac, etc.) are stored in the device by default. For example, in some platforms it corresponds to the "My Music" folder.              </li>
              <li>
videos - Default folder in which video clips (in formats including avi, mp4, etc.) are stored in the device by default. For example, in some platforms it corresponds to the "My Videos" folder.              </li>
              <li>
downloads - Default folder in which downloaded files (from sources including browser, e-mail client, etc.) are stored by default in the device. For example, in some platforms it corresponds to the "Downloads" folder.              </li>
              <li>
wgt-package - Read-only folder to which the content of a widget file is extracted.              </li>
              <li>
wgt-private - Private folder in which a widget stores its information. This folder must be accessible only to the same widget and other widgets or applications must not be able to access the stored information.              </li>
              <li>
wgt-private-tmp - Temporary, private folder in which a widget can store data that is available during a widget execution cycle. Content of this folder can be removed from this directory when the widget is closed or the Web Runtime is restarted. This folder must be accessible only to the same widget and other widgets or applications must not be able to access it.              </li>
            </ul>
            <p>
The <em>mode </em>parameter specifies whether the resulting <em>File </em>object has read-only access ("r" access), read and write access ("rw" access), append access ("a" access), or write access ("w" access) to the root location containing directory tree.
Permission for the requested access is obtained from the security framework. Once the resulting <em>File </em>object has access, access is inherited by any other <em>File </em>objects that are derived from this instance without any further reference to the security framework, as noted in descriptions of certain methods of <em>File</em>.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.
For example, the mode is not valid (that is, it is not "r", "rw", "a", or "w").              </li>
              <li>
NotFoundError - If the location input argument does not correspond to a valid location.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {String} location
 * @param {FileSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {FileMode} mode
 * @type void
 * @memberOf FileSystemManager
 * @returns {void}
 */
FileSystemManager.prototype.resolve = function(location, onsuccess, onerror, mode){ return; };

/**
 * Gets information about a storage based on its label.
            <p>
For example: "MyThumbDrive", "InternalFlash".
            </p>
            <p>
The onsuccess receives the data structure as an input argument containing additional information about the drive.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If no drive was found with the given label.              </li>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError - If any other error occurs.               </li>
            </ul>
           
 *
 * @param {String} label
 * @param {FileSystemStorageSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf FileSystemManager
 * @returns {void}
 */
FileSystemManager.prototype.getStorage = function(label, onsuccess, onerror){ return; };

/**
 * Lists the available storages on the device.
            <p>
Get the list of available internal and external storage devices. The
onsuccess will receive as input argument a list of the data
structure containing additional information about each drive found.
Can get storages would have a label named as 'internal0', virtual roots (images, documents,...), 'removable1', 'removable2'.
'removable1' label would be used to resolve sdcard and 'removable2' label would be used to resolve usb host, if supported.
            </p>
            <p>
Labels can be different, depends on platform implementation.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError: In any other error case.               </li>
            </ul>
           
 *
 * @param {FileSystemStorageArraySuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf FileSystemManager
 * @returns {void}
 */
FileSystemManager.prototype.listStorages = function(onsuccess, onerror){ return; };

/**
 * Subscribes to notifications when a storage state changes.
            <p>
The most common usage for this method would be to watch notifications of
additions and removals of external storages.
            </p>
            <p>
When executed, the implementation MUST immediately return a subscription identifier that identifies
the watch operation. After returning the identifier, the watch operation is started
asynchronously. The onsuccess MUST be invoked every time
a storage state changes. If the attempt fails, the onerror (if present)
MUST be invoked with the relevant error type.
            </p>
            <p>
The watch operation MUST continue until the removeStorageStateChangeListener() method is
called with the corresponding subscription identifier.
            </p>
           
 *
 * @param {FileSystemStorageSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type Number
 * @memberOf FileSystemManager
 * @returns {Number}
 */
FileSystemManager.prototype.addStorageStateChangeListener = function(onsuccess, onerror){ var ret = new Number(); return ret; };

/**
 * Unsubscribes a storage watch operation.
            <p>
If the watchId argument is valid and corresponds to a subscription already in
place, the watch process MUST immediately stop and no further callbacks MUST be
invoked.
            </p>
           
 *
 * @param {Number} watchId
 * @type void
 * @memberOf FileSystemManager
 * @returns {void}
 */
FileSystemManager.prototype.removeStorageStateChangeListener = function(watchId){ return; };

/**
 * Indicates whether or not the current file pointer is at the end of the file.
 * <p>
If <em>true</em>, this attribute indicates that the file pointer is at the end of the file.
            </p>
 * <p>
If <em>false</em>, this attribute indicates that the file pointer is not at the end of the file
and may be anywhere within the file.
            </p>
 *
 * @type Boolean
 */
FileStream.prototype.eof = new Boolean();

/**
 * Gets/sets stream position for reads/writes.
 * <p>
The stream position is an offset of bytes from the start of
the file stream. When invoking an operation that reads or
writes from the stream, the operation will take place from the
byte defined by this position attribute. If the read or write
operation is successful, the position of the stream is advanced
by the number of bytes read or written. If the read/write operation is not
successful, the position of the stream is unchanged.
            </p>
 *
 * @type Number
 */
FileStream.prototype.position = new Number();

/**
 * Returns the number of bytes that are available for reading from the stream.
 * <p>
The number of bytes available for reading is the maximum
amount of bytes that can be read in the next read operation.
It corresponds to the number of bytes available after the file pointer
denoted by the position attribute.
            </p>
 * <p>
-1 if eof is <em>true</em>.
            </p>
 *
 * @type Number
 */
FileStream.prototype.bytesAvailable = new Number();

/**
 * Closes this FileStream.
            <p>
Flushes any pending buffered writes and closes the File. Always succeeds.
Note that pending writes might not succeed.
            </p>
           
 *
 * @type void
 * @memberOf FileStream
 * @returns {void}
 */
FileStream.prototype.close = function(){ return; };

/**
 * Reads the specified number of characters from this FileStream.
            <p>
Reads the specified number of characters after the position file pointer and returns them as a string.
The resulting string length might be shorter than charCount if eof
is <em>true</em>.
            </p>
           
 *
 * @param {Number} charCount
 * @type String
 * @memberOf FileStream
 * @returns {String}
 */
FileStream.prototype.read = function(charCount){ var ret = new String(); return ret; };

/**
 * Reads the specified number of bytes from this FileStream.
 *
 * @param {Number} byteCount
 * @type array
 * @memberOf FileStream
 * @returns {array}
 */
FileStream.prototype.readBytes = function(byteCount){ var ret = new array(); return ret; };

/**
 * Reads the specified number of bytes from this FileStream, encoding the result in base64.
 *
 * @param {Number} byteCount
 * @type String
 * @memberOf FileStream
 * @returns {String}
 */
FileStream.prototype.readBase64 = function(byteCount){ var ret = new String(); return ret; };

/**
 * Writes the specified DOMString to this FileStream.
 *
 * @param {String} stringData
 * @type void
 * @memberOf FileStream
 * @returns {void}
 */
FileStream.prototype.write = function(stringData){ return; };

/**
 * Writes the specified bytes to this FileStream.
 *
 * @param {array} byteData
 * @type void
 * @memberOf FileStream
 * @returns {void}
 */
FileStream.prototype.writeBytes = function(byteData){ return; };

/**
 * Converts the specified base64 DOMString to bytes and writes the result to this FileStream.
 *
 * @param {String} base64Data
 * @type void
 * @memberOf FileStream
 * @returns {void}
 */
FileStream.prototype.writeBase64 = function(base64Data){ return; };

/**
 * The method invoked when the asynchronous call completes successfully.
 *
 * @param {File} file
 * @type void
 * @memberOf FileSuccessCallback
 * @returns {void}
 */
FileSuccessCallback.prototype.onsuccess = function(file){ return; };

/**
 * The parent directory handle.
 * <p>
<em>null</em> if there is no parent directory.
            </p>
 * <p>
If there is no parent directory, this represents a root location.
            </p>
 *
 * @type File
 */
File.prototype.parent = new File();

/**
 * The file/directory access state in the filesystem.
 * <p>
<em>true</em> if object has read-only access at its location.
            </p>
 * <p>
<em>false</em> if object has write access at its location.
            </p>
 * <p>
This attribute represents the actual state of a
file or directory in the filesystem. Its value is not affected by
the mode used in FileSystemManager.resolve that was used to
create the File object from which this File object was obtained.
            </p>
 *
 * @type Boolean
 */
File.prototype.readOnly = new Boolean();

/**
 * The file type.
 * <p>
<em>true</em> if this handle is a file.
<em>false</em> if this handle is a directory.
            </p>
 *
 * @type Boolean
 */
File.prototype.isFile = new Boolean();

/**
 * The file type.
 * <p>
<em>true</em> if this handle is a directory,
<em>false</em> if this handle is a file.
            </p>
 *
 * @type Boolean
 */
File.prototype.isDirectory = new Boolean();

/**
 * The creation timestamp of this file.
 * <p>
This is the timestamp when the file was first created in the filesystem.
Equivalent to the timestamp when a call to createFile() succeeds.
            </p>
 * <p>
If the platform does not support this attribute, it MUST
be <em>null</em>.
            </p>
 * <p>
It is unspecified and platform-dependent if the creation
timestamp changes when a file is moved.
            </p>
 *
 * @type Date
 */
File.prototype.created = new Date();

/**
 * The modification timestamp.
 * <p>
The modification timestamp of this file. This is the timestamp
of the most recent modification to the file, usually when the last
write operation succeeded. Opening a file for reading does not change
the modification timestamp.
            </p>
 * <p>
If the platform does not support this attribute, it MUST
be <em>null</em>.
            </p>
 * <p>
It is unspecified and platform-dependent if the modified
timestamp changes when a file is moved.
            </p>
 *
 * @type Date
 */
File.prototype.modified = new Date();

/**
 * The path of this file, excluding the file name.
 * <p>
This is the path of this file, beginning with the name of the root containing the file,
up to and including the directory containing the file, but excluding the file name.
            </p>
 * <p>
Except in a special case of the File representing the root itself, the last
character is always the character '/'.
            </p>
 * <p>
For example, if a file is located at music/ramones/volume1/RockawayBeach.mp3,
the path would be music/ramones/volume1/.
            </p>
 * <p>
For example, if a directory is located at music/ramones/volume1, the path would be
music/ramones/.
            </p>
 * <p>
For the virtual roots, the path is same as the name of the virtual root. 
For example, if the root is music, then the path is music. If the root is documents, then the path is documents.
            </p>
 *
 * @type String
 */
File.prototype.path = new String();

/**
 * The file name, excluding any path components.
 * <p>
This is the name of this file, excluding the root name and any other path components.
            </p>
 * <p>
For example, if a file is located at
music/ramones/volume1/RockawayBeach.mp3, the name would be RockawayBeach.mp3.
            </p>
 * <p>
For example, if a directory is located at music/ramones/volume1, the
name would be volume1.
            </p>
 * <p>
For the special case of the root itself, the name is an empty string.
            </p>
 *
 * @type String
 */
File.prototype.name = new String();

/**
 * The full path of this file.
 * <p>
The full path of this file, beginning with the name of the root containing the file,
and including the name of the file or directory itself.
            </p>
 * <p>
For instance, for a file, if the file is located at
music/ramones/volume1/RockawayBeach.mp3, then the fullPath is
music/ramones/volume1/RockawayBeach.mp3.
            </p>
 * <p>
For a directory, if the directory is located at music/ramones/volume1, then the
fullPath is music/ramones/volume1.
            </p>
 * <p>
For the special case of the root itself, if the root is music, then the fullPath is
music.
            </p>
 * <p>
The fullPath is always equal to path + name.
            </p>
 *
 * @type String
 */
File.prototype.fullPath = new String();

/**
 * The size of this file, in bytes.
 * <p>
If there's an attempt to read this attribute on a directory,
<em>undefined</em> is returned. To retrieve the
number of files and directories contained in the directory,
use the length attribute, instead.
            </p>
 *
 * @type Number
 */
File.prototype.fileSize = new Number();

/**
 * The number of files and directories contained in this file handle.
 * <p>
If there's an attempt to read this attribute on a file,
<em>undefined</em> is returned. To retrieve the
size of a file, use the fileSize attribute instead.
            </p>
 *
 * @type Number
 */
File.prototype.length = new Number();

/**
 * Returns a URI for the file.
            <p>
Returns a URI that can be used to identify this entry (such as using it
as the src attribute on an HTML img element). The URI has no specific
expiration, it should be valid at least as long as the file exists.
            </p>
            <p>
When this method is invoked, the implementation MUST generate a URI.
            </p>
            <p>
If that URI corresponds to any of the public virtual roots (that is
images, videos, music, documents, and downloads) the URI
MUST be globally unique and could be used by any widget.
            </p>
            <p>
If that URI corresponds to a file located in any of the widget private
areas (such as wgt-package, wgt-private, wgt-private-tmp). The generated
URI MUST be unique for that file and for the widget making the request
(such as including some derived from the widget id in the URI). 
These URIs MUST NOT be accessible to other widgets,
apart from the one invoking this method.
            </p>
           
 *
 * @type String
 * @memberOf File
 * @returns {String}
 */
File.prototype.toURI = function(){ var ret = new String(); return ret; };

/**
 * Returns the list of all files in this directory.
            <p>
The list of files will be passed as a File[] in the onsuccess
and contains directories and files. However, the directories "." and ".."
MUST NOT be returned. Each File object part of the array MUST inherit
all the access rights (that is one of the values in FileMode) from the File object in which
this method was invoked.
            </p>
            <p>
If the filter is passed and contains valid values, only those directories
and files in the directory that match the filter criteria specified
in the FileFilter interface MUST be returned in the onsuccess.
If no filter is passed, the filter is <em>null</em> or undefined, or the filter contains invalid
values, the implementation MUST return the full list of files in the directory.
            </p>
            <p>
If the directory does not contain any files or directories, or
the filter criteria is unmatched to any files or directories, the onsuccess will be
invoked with an empty array.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
IOError: The operation is launched on a file (not a directory).              </li>
              <li>
InvalidValuesError: If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError: In any other error case.               </li>
            </ul>
           
 *
 * @param {FileArraySuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {FileFilter} filter
 * @type void
 * @memberOf File
 * @returns {void}
 */
File.prototype.listFiles = function(onsuccess, onerror, filter){ return; };

/**
 * Opens the file in the given mode supporting the given encoding.
            <p>
This operation is performed asynchronously. If the file is opened
successfully, the onsuccess is invoked with a FileStream
that can be used for reading and writing the file, depending on the
mode. The return FileStream instance includes a file pointer, which represents
the current position in the file. The filepointer will, by default, be at the start of the file,
except in the case of opening with append ("a") mode, in which case
the filepointer points to the end of the file.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: If any of the input parameters contains an invalid value.               </li>
              <li>
IOError: The operation is launched on a directory (not a file), the file is not
valid or it does not exist.              </li>
              <li>
UnknownError: In any other error case.              </li>
            </ul>
           
 *
 * @param {FileMode} mode
 * @param {FileStreamSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {String} encoding
 * @type void
 * @memberOf File
 * @returns {void}
 */
File.prototype.openStream = function(mode, onsuccess, onerror, encoding){ return; };

/**
 * Reads the content of a file as a DOMString.
            <p>
If the operation is successfully executed, the onsuccess is
invoked and a DOMString is passed as input parameter that represents
the file content in the format determined by the encoding parameter.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: If any of the input parameters contain an invalid value.              </li>
              <li>
IOError: The operation is launched on a directory (not a file), the file is not
valid, or the file does not exist.              </li>
              <li>
UnknownError: In any other error case.              </li>
            </ul>
           
 *
 * @param {FileStringSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {String} encoding
 * @type void
 * @memberOf File
 * @returns {void}
 */
File.prototype.readAsText = function(onsuccess, onerror, encoding){ return; };

/**
 * Copies (and overwrites if possible and specified) a file or a directory from a specified location to another specified location.
            <p>
The copy of the file or directory identified by the originFilePath parameter
MUST be created in the path passed in the destinationFilePath parameter.
            </p>
            <p>
The file or directory to be copied MUST be under the Directory from which the method
is invoked, otherwise the operation MUST NOT be performed.
            </p>
            <p>
If the copy is performed successfully, the onsuccess is invoked.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: If any of the input parameters contain an invalid value.              </li>
              <li>
NotFoundError: originFilePath does not correspond to a valid file or destinationPath is not a valid path.              </li>
              <li>
IOError: The File in which the copyTo method is invoked is a file (not a directory), 
originFilePath corresponds to a file or directory in use by another process,
overwrite parameter is <em>false</em> and destinationFilePath corresponds to an existing
file or directory.              </li>
              <li>
UnknownError: In any other error case.              </li>
            </ul>
           
 *
 * @param {String} originFilePath
 * @param {String} destinationFilePath
 * @param {Boolean} overwrite
 * @param {SuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf File
 * @returns {void}
 */
File.prototype.copyTo = function(originFilePath, destinationFilePath, overwrite, onsuccess, onerror){ return; };

/**
 * Moves a file or a directory from a specified location to another.
            <p>
The file or directory will be moved (and will overwrite if possible and specified)
atomically to the given path. This operation is different from 
instantiating copyTo and then deleting the original file, as on certain
platforms, this operation does not require extra disk space.
            </p>
            <p>
The file or directory identified by the originFilePath parameter
MUST be moved to the path passed in the destinationFilePath parameter.
            </p>
            <p>
The file to be moved MUST be under the Directory from which the method
is invoked, otherwise the operation MUST NOT be performed.
            </p>
            <p>
If the file or directory is moved successfully, the onsuccess is
invoked.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: If any of the input parameters contain an invalid value.               </li>
              <li>
NotFoundError: originFilePath does not correspond to a valid file or destinationPath is not a valid path.              </li>
              <li>
IOError: The File in which the moveTo method is invoked is a file (not a directory),
originFilePath corresponds to a file or directory in use by another process,
overwrite parameter is <em>false</em> and destinationFilePath corresponds to an existing
file or directory.              </li>
              <li>
UnknownError: In any other error case.              </li>
            </ul>
           
 *
 * @param {String} originFilePath
 * @param {String} destinationFilePath
 * @param {Boolean} overwrite
 * @param {SuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf File
 * @returns {void}
 */
File.prototype.moveTo = function(originFilePath, destinationFilePath, overwrite, onsuccess, onerror){ return; };

/**
 * Creates a new directory.
            <p>
A new directory will be created relative to the current
directory that this operation is performed on. The implementation will attempt to
create all necessary sub-directories specified in the dirPath, as well. The use of "."
or ".." in path components is not supported.
            </p>
            <p>
This operation can only be performed on file handlers that
represent a directory (that is, <var>isDirectory == true</var>).
            </p>
            <p>
If the directory is successfully created, it will be returned.
            </p>
            <p>
In case the directory cannot be created, an error MUST be thrown
with the appropriate error type.
            </p>
           
 *
 * @param {String} dirPath
 * @type File
 * @memberOf File
 * @returns {File}
 */
File.prototype.createDirectory = function(dirPath){ var ret = new File(); return ret; };

/**
 * Creates a new empty file in a specified location.
            <p>
A new empty file is created in the given path relative
to the directory indicated by current 'File' object's 'path' attribute.
The use of "." or ".." in path components is not supported.
This operation can only be performed on file handlers that
represent a directory (that is, <var>isDirectory == true</var>).
            </p>
            <p>
If the file is successfully created, a file handler MUST
be returned by this method.
            </p>
            <p>
In case the file cannot be created, an error MUST be thrown
with the appropriate error type.
            </p>
           
 *
 * @param {String} relativeFilePath
 * @type File
 * @memberOf File
 * @returns {File}
 */
File.prototype.createFile = function(relativeFilePath){ var ret = new File(); return ret; };

/**
 * Resolves an existing file or directory relative to the current directory this operation is performed on, and returns a file handle for it.
            <p>
The filePath is not allowed to contain the "." or ".." directories.
            </p>
            <p>
The encoding of file paths is <a href="http://www.ietf.org/rfc/rfc2279.txt">UTF-8</a>.
            </p>
           
 *
 * @param {String} filePath
 * @type File
 * @memberOf File
 * @returns {File}
 */
File.prototype.resolve = function(filePath){ var ret = new File(); return ret; };

/**
 * Deletes a specified directory and directory tree if specified.
            <p>
This function attempts to asynchronously delete a directory or directory tree under the current
directory.
            </p>
            <p>
If the recursive parameter is set to <em>true</em>, all the directories and files under the specified
directory MUST be deleted. If the recursive parameter is set to false, the directory will
only be deleted if it is empty, otherwise an IOError error type will be passed in onerror.
            </p>
            <p>
The directory to be deleted MUST be under the Directory that the method
is invoked from, otherwise the operation MUST NOT be performed.
If the deletion is performed successfully, the onsuccess is invoked.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: If any of the input parameters contain an invalid value.               </li>
              <li>
NotFoundError: The passed directory does not correspond to a valid directory.               </li>
              <li>
IOError: The File in which the delete method is invoked
is a file (not a directory), the directory is in use by another process
or the directory is not empty and recursive argument is <em>false</em>.
This code will be also used if a recursive deletion partially fails
and any data deleted so far cannot be recovered. This may occur
due to the lack of filesystem permissions or if any
directories or files are opened by other processes.              </li>
              <li>
UnknownError: In any other error case.              </li>
            </ul>
           
 *
 * @param {String} directoryPath
 * @param {Boolean} recursive
 * @param {SuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf File
 * @returns {void}
 */
File.prototype.deleteDirectory = function(directoryPath, recursive, onsuccess, onerror){ return; };

/**
 * Deletes a specified file.
            <p>
This function attempts to asynchronously delete a file under the current directory.
            </p>
            <p>
The file to be deleted MUST be under the Directory from which the method
is invoked, otherwise the operation MUST NOT be performed.
            </p>
            <p>
If the deletion is performed successfully, the onsuccess is invoked.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: If any of the input parameters contain an invalid value.               </li>
              <li>
NotFoundError: The file does not correspond to a valid file.               </li>
              <li>
IOError: The file in which the delete method is invoked
is a directory (not a file), the file is in use by another process,
or there is no permission in the file system.              </li>
              <li>
UnknownError: In any other error case.              </li>
            </ul>
           
 *
 * @param {String} filePath
 * @param {SuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf File
 * @returns {void}
 */
File.prototype.deleteFile = function(filePath, onsuccess, onerror){ return; };

/**
 * The storage name.
 * <p>
Used as input for functions like getStorage() and also used as 'location' parameter for File.resolve() and FileSystemManager.resolve().
            </p>
 *
 * @type String
 */
FileSystemStorage.prototype.label = new String();

/**
 * The storage type.
 * <p>
Defines whether the storage is internal or external.
            </p>
 *
 * @type FileSystemStorageType
 */
FileSystemStorage.prototype.type = new FileSystemStorageType();

/**
 * The storage state.
 * <p>
Defines whether the storage is mounted or not.
            </p>
 *
 * @type FileSystemStorageState
 */
FileSystemStorage.prototype.state = new FileSystemStorageState();

/**
 * This API provides access to a device's filesystem.
 * <p>
The filesystem is represented as an abstract collection of disjointed filesystem virtual
root locations, each corresponding to a specific location in the device
filesystem. The Filesystem API exposes the hierarchies below these root
locations as a single virtual filesystem, but provides no access to other
parts of the device filesystem.
        </p>
 * <p>
Each virtual root has a string name. Each file or directory within the virtual filesystem is addressed using a fully-qualified path of the form:
<em>&lt;root name&gt;/&lt;path&gt;</em>,
where <em>&lt;rootname&gt;</em>is the name of the virtual root and <em>&lt;path&gt;</em> is the path to the file or directory relative to that root.
        </p>
 * <p>
The following virtual roots must be supported:
        </p>
 * <ul>
 * <li>images - the location for images
 * <li>videos - the location for videos
 * <li>music - the location for sounds
 * <li>documents - the location for documents
 * <li>downloads - the location for downloaded items
 * <li>ringtones - the location for ringtones (read-only location)
 * <li>wgt-package - the read-only location for widget packages
 * <li>wgt-private - the location for a widget's private storage
 * <li>wgt-private-tmp - the location for a widget's private volatile storage
 * </ul>
 * <p>
The file URI path is also supported. To access other paths out of virtual root, for example '/tmp/', 'file:///tmp' can be used as location parameter.
        </p>
 * <p>
To access specific locations apart from those specified above, a file handle must be retrieved using the <em>filesystem.resolve() </em>call.
        </p>
 * <p>
A file handle represents either a file or a directory:        </p>
 * <ul>
 * <li>For a file, the attribute is set to .
 * <li>For a directory, the attribute is set to .
 * </ul>
 * <p>
A file can be opened for both read and write operations, using a 
FileStream handle. A list of files and sub-directories can be obtained from a
directory and a resolve method exists to resolve files or sub-directories
more conveniently than processing directory listings.
        </p>
 * <p>
The implementation must support the use of the following characters in file names:
        </p>
 * <ul>
 * <li>Letters (a-z, A-Z)
 * <li>Numbers (0-9)
 * <li>Blank spaces
 * <li>Underscores ("_")
 * <li>Hyphens ("-")
 * <li>Periods (".")
 * </ul>
 * <p>
The implementation may support additional characters in file names, depending on platform support.
        </p>
 * <p>
The implementation may forbid the use of additional characters in file names, depending on the platform. The use of the path (component) separator "/" should not be allowed in file names.
        </p>
 * <p>
Some other file name and path characteristics are platform-dependent,
for example, maximum path length, file name length, case sensitivity, additional
character support, etc. Therefore, it is recommended to avoid any dependency 
on aspects that cannot be supported across multiple platforms.
        </p>
 * <p>
When a path is used to interact with the underlying filesystem,
the encoding used for the file path should be the platform default.
        </p>
 * <p>
For more information on the Filesystem features, see <a href="http://127.0.0.1:50053/help/topic/org.tizen.web.appprogramming/html/guide/io_guide/filesystem.htm">File System Guide</a>.
        </p>
 *
 * @type FileSystemManager
 */
FileSystemManagerObject.prototype.filesystem = new FileSystemManager();

/**
 * The method invoked when the File.openStream asynchronous call completes successfully.
 *
 * @param {FileStream} filestream
 * @type void
 * @memberOf FileStreamSuccessCallback
 * @returns {void}
 */
FileStreamSuccessCallback.prototype.onsuccess = function(filestream){ return; };

/**
 * The method invoked when the asynchronous call completes successfully.
 *
 * @param {array} storages
 * @type void
 * @memberOf FileSystemStorageArraySuccessCallback
 * @returns {void}
 */
FileSystemStorageArraySuccessCallback.prototype.onsuccess = function(storages){ return; };

/**
 * The method invoked when the asynchronous call completes successfully.
 *
 * @param {array} files
 * @type void
 * @memberOf FileArraySuccessCallback
 * @returns {void}
 */
FileArraySuccessCallback.prototype.onsuccess = function(files){ return; };

/**
 * This API provides access to a device's filesystem.
 * <p>
The filesystem is represented as an abstract collection of disjointed filesystem virtual
root locations, each corresponding to a specific location in the device
filesystem. The Filesystem API exposes the hierarchies below these root
locations as a single virtual filesystem, but provides no access to other
parts of the device filesystem.
        </p>
 * <p>
Each virtual root has a string name. Each file or directory within the virtual filesystem is addressed using a fully-qualified path of the form:
<em>&lt;root name&gt;/&lt;path&gt;</em>,
where <em>&lt;rootname&gt;</em>is the name of the virtual root and <em>&lt;path&gt;</em> is the path to the file or directory relative to that root.
        </p>
 * <p>
The following virtual roots must be supported:
        </p>
 * <ul>
 * <li>images - the location for images
 * <li>videos - the location for videos
 * <li>music - the location for sounds
 * <li>documents - the location for documents
 * <li>downloads - the location for downloaded items
 * <li>ringtones - the location for ringtones (read-only location)
 * <li>wgt-package - the read-only location for widget packages
 * <li>wgt-private - the location for a widget's private storage
 * <li>wgt-private-tmp - the location for a widget's private volatile storage
 * </ul>
 * <p>
The file URI path is also supported. To access other paths out of virtual root, for example '/tmp/', 'file:///tmp' can be used as location parameter.
        </p>
 * <p>
To access specific locations apart from those specified above, a file handle must be retrieved using the <em>filesystem.resolve() </em>call.
        </p>
 * <p>
A file handle represents either a file or a directory:        </p>
 * <ul>
 * <li>For a file, the attribute is set to .
 * <li>For a directory, the attribute is set to .
 * </ul>
 * <p>
A file can be opened for both read and write operations, using a 
FileStream handle. A list of files and sub-directories can be obtained from a
directory and a resolve method exists to resolve files or sub-directories
more conveniently than processing directory listings.
        </p>
 * <p>
The implementation must support the use of the following characters in file names:
        </p>
 * <ul>
 * <li>Letters (a-z, A-Z)
 * <li>Numbers (0-9)
 * <li>Blank spaces
 * <li>Underscores ("_")
 * <li>Hyphens ("-")
 * <li>Periods (".")
 * </ul>
 * <p>
The implementation may support additional characters in file names, depending on platform support.
        </p>
 * <p>
The implementation may forbid the use of additional characters in file names, depending on the platform. The use of the path (component) separator "/" should not be allowed in file names.
        </p>
 * <p>
Some other file name and path characteristics are platform-dependent,
for example, maximum path length, file name length, case sensitivity, additional
character support, etc. Therefore, it is recommended to avoid any dependency 
on aspects that cannot be supported across multiple platforms.
        </p>
 * <p>
When a path is used to interact with the underlying filesystem,
the encoding used for the file path should be the platform default.
        </p>
 * <p>
For more information on the Filesystem features, see <a href="http://127.0.0.1:50053/help/topic/org.tizen.web.appprogramming/html/guide/io_guide/filesystem.htm">File System Guide</a>.
        </p>
 *
 * @type FileSystemManager
 */
Tizen.prototype.filesystem = new FileSystemManager();

/**
 * The interface defines what is instantiated by the Tizen object from the Tizen Platform.
          <p>
There is a <em>tizen.messageport</em> object that allows access to the functionality of the Message Port API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {MessagePortManagerObject}
 */
function MessagePortManagerObject() {};
MessagePortManagerObject.prototype = new Object();

/**
 * This interface defines notification callbacks for receiving data from other applications.
 *
 * @super Object
 * @constructor
 * @return {MessagePortCallback}
 */
function MessagePortCallback() {};
MessagePortCallback.prototype = new Object();

/**
 * The interface provides methods to send messages.
 *
 * @super Object
 * @constructor
 * @return {RemoteMessagePort}
 */
function RemoteMessagePort() {};
RemoteMessagePort.prototype = new Object();

/**
 * The interface provides methods to receive data.
 *
 * @super Object
 * @constructor
 * @return {LocalMessagePort}
 */
function LocalMessagePort() {};
LocalMessagePort.prototype = new Object();

/**
 * The interface provides methods to request message port to communicate.
 *
 * @super Object
 * @constructor
 * @return {MessagePortManager}
 */
function MessagePortManager() {};
MessagePortManager.prototype = new Object();

/**
 * This API provides the functionality for communicating with other applications.
 *
 * @type MessagePortManager
 */
MessagePortManagerObject.prototype.messageport = new MessagePortManager();

/**
 * Called when data is received from other applications via the specified message port name.
 *
 * @param {array} data
 * @param {RemoteMessagePort} remoteMessagePort
 * @type void
 * @memberOf MessagePortCallback
 * @returns {void}
 */
MessagePortCallback.prototype.onreceived = function(data, remoteMessagePort){ return; };

/**
 * An attribute to store the message port name.
 *
 * @type String
 */
RemoteMessagePort.prototype.messagePortName = new String();

/**
 * An attribute that store the application ID to connect with.
 *
 * @type ApplicationId
 */
RemoteMessagePort.prototype.appId = new ApplicationId();

/**
 * An attribute that determines whether the message port is trusted or not.
 *
 * @type Boolean
 */
RemoteMessagePort.prototype.isTrusted = new Boolean();

/**
 * Sends messages to the specified application.
 *
 * @param {array} data
 * @param {LocalMessagePort} localMessagePort
 * @type void
 * @memberOf RemoteMessagePort
 * @returns {void}
 */
RemoteMessagePort.prototype.sendMessage = function(data, localMessagePort){ return; };

/**
 * An attribute that stores the name of the message port name.
 *
 * @type String
 */
LocalMessagePort.prototype.messagePortName = new String();

/**
 * An attribute that determines whether the message port is trusted or not.
 *
 * @type Boolean
 */
LocalMessagePort.prototype.isTrusted = new Boolean();

/**
 * Adds a message port listener to receive messages from other applications.
 *
 * @param {MessagePortCallback} listener
 * @type Number
 * @memberOf LocalMessagePort
 * @returns {Number}
 */
LocalMessagePort.prototype.addMessagePortListener = function(listener){ var ret = new Number(); return ret; };

/**
 * Removes the message port listener.
 *
 * @param {Number} watchId
 * @type void
 * @memberOf LocalMessagePort
 * @returns {void}
 */
LocalMessagePort.prototype.removeMessagePortListener = function(watchId){ return; };

/**
 * Requests a LocalMessage Port instance to start receiving message from another application.
 *
 * @param {String} localMessagePortName
 * @type LocalMessagePort
 * @memberOf MessagePortManager
 * @returns {LocalMessagePort}
 */
MessagePortManager.prototype.requestLocalMessagePort = function(localMessagePortName){ var ret = new LocalMessagePort(); return ret; };

/**
 * Requests a trusted LocalMessagePort instance to receive message from another application.
            <p>
Trusted local message port can communicate with applications that are signed with same certificate.
            </p>
           
 *
 * @param {String} localMessagePortName
 * @type LocalMessagePort
 * @memberOf MessagePortManager
 * @returns {LocalMessagePort}
 */
MessagePortManager.prototype.requestTrustedLocalMessagePort = function(localMessagePortName){ var ret = new LocalMessagePort(); return ret; };

/**
 * Requests a RemoteMessagePort instance to send message to another application.
            <p>
If the message port name and application ID is the same, the platform returns the same RemoteMessagePort instance.
            </p>
           
 *
 * @param {ApplicationId} appId
 * @param {String} remoteMessagePortName
 * @type RemoteMessagePort
 * @memberOf MessagePortManager
 * @returns {RemoteMessagePort}
 */
MessagePortManager.prototype.requestRemoteMessagePort = function(appId, remoteMessagePortName){ var ret = new RemoteMessagePort(); return ret; };

/**
 * Requests a trusted RemoteMessagePort instance to receive message from another application.
            <p>
If the message port name and application ID is the same, the platform returns the same RemoteMessagePort instance.
Trusted remote message port can communicate with applications that are signed with same certificate.
            </p>
           
 *
 * @param {ApplicationId} appId
 * @param {String} remoteMessagePortName
 * @type RemoteMessagePort
 * @memberOf MessagePortManager
 * @returns {RemoteMessagePort}
 */
MessagePortManager.prototype.requestTrustedRemoteMessagePort = function(appId, remoteMessagePortName){ var ret = new RemoteMessagePort(); return ret; };

/**
 * This API provides the functionality for communicating with other applications.
 *
 * @type MessagePortManager
 */
Tizen.prototype.messageport = new MessagePortManager();

/**
 * Defines the content and attributes of a message.
          <p>
This interface allows a web application to define the set of properties
linked to a message.
          </p>
          <p>
It also allows an application to retrieve the content of a
message through <em>MessageStorage </em>methods. In these
cases, the implementation can return, in some situations, only the meta-information
of a message without the loaded body. In such situations, the method <em>MessageService.loadMessageBody() </em>should be used.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {Message}
 */
function Message() {};
Message.prototype = new Object();

/**
 * This interface allows a web application to manipulate and send messages and supports the message creating, sending, and fetching capabilities.
          <p>
Messages created through this API are not persistent in device memory until the implementation attempts to send the message using the sendMessage() method. On performing the sendMessage() method, the message is available in the relevant folder (such as sent and drafts), depending on the result of the operation.
          </p>
          <p>
The interface allows fetching of messages for all folders belonging to one account, with synchronizable flag set, using the sync() method, or for a given folder using the syncFolder() method.
          </p>
          <p>
The interface allows fetching of the message body for a given message using loadMessageBody() method.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {MessageService}
 */
function MessageService() {};
MessageService.prototype = new Object();

/**
 * watchConversationsChanges callback.
          <p>
This callback interface specifies a callback as a set of functions that will be
invoked when conversations from MessageStorage change. Each function takes a list of conversations as the input argument.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {MessageConversationsChangeCallback}
 */
function MessageConversationsChangeCallback() {};
MessageConversationsChangeCallback.prototype = new Object();

/**
 * This interface defines what is instantiated by the Tizen object.
          <p>
There is a <em>tizen.messaging </em>object that allows access to the Messaging API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {MessageManagerObject}
 */
function MessageManagerObject() {};
MessageManagerObject.prototype = new Object();

/**
 * This callback interface specifies a callback as a set of functions that are invoked when message folders from change. Each function takes a list of folders as the input argument.
 *
 * @super Object
 * @constructor
 * @return {MessageFoldersChangeCallback}
 */
function MessageFoldersChangeCallback() {};
MessageFoldersChangeCallback.prototype = new Object();

/**
 * findConversations specific success callback.
          <p>
This callback interface specifies a success callback function,
taking a list of conversations that satisfy the filtering criteria as the input argument.
It is used in the findConversations asynchronous operation.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {MessageConversationArraySuccessCallback}
 */
function MessageConversationArraySuccessCallback() {};
MessageConversationArraySuccessCallback.prototype = new Object();

/**
 * This interface retrieves messaging services.
          <p>
Fetches all existing messaging services by type or a messaging service of a given type
for concrete account.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {Messaging}
 */
function Messaging() {};
Messaging.prototype = new Object();

/**
 * findFolders specific success callback.
          <p>
This callback interface specifies a success callback function,
taking a list of folders that satisfy the filtering criteria as the input argument.
It is used in the findFolders asynchronous operation.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {MessageFolderArraySuccessCallback}
 */
function MessageFolderArraySuccessCallback() {};
MessageFolderArraySuccessCallback.prototype = new Object();

/**
 * This interface specifies the methods to be called for the sendMessage() operation.
 *
 * @super Object
 * @constructor
 * @return {MessageRecipientsCallback}
 */
function MessageRecipientsCallback() {};
MessageRecipientsCallback.prototype = new Object();

/**
 * This interface specifies a success callback function that takes a message as the input argument. It is used in the loadMessageBody() asynchronous operation.
 *
 * @super Object
 * @constructor
 * @return {MessageBodySuccessCallback}
 */
function MessageBodySuccessCallback() {};
MessageBodySuccessCallback.prototype = new Object();

/**
 * This interface defines the message conversation (also known as the thread of messages).
          <p>
This interface allows a web application to get the set of properties linked to a conversation.
This interface provides only read-only attributes.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {MessageConversation}
 */
function MessageConversation() {};
MessageConversation.prototype = new Object();

/**
 * findMessages specific success callback.
          <p>
This callback interface specifies a success callback function,
taking a list of messages that satisfy the filtering criteria as the input argument.
It is used in the findMessages asynchronous operation.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {MessageArraySuccessCallback}
 */
function MessageArraySuccessCallback() {};
MessageArraySuccessCallback.prototype = new Object();

/**
 * Defines callback(s) for retrieving message services.
 *
 * @super Object
 * @constructor
 * @return {MessageServiceArraySuccessCallback}
 */
function MessageServiceArraySuccessCallback() {};
MessageServiceArraySuccessCallback.prototype = new Object();

/**
 * This interface describes a message body.
          <p>
Message body is comprised of a plain text, an HTML, and inline attachments.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {MessageBody}
 */
function MessageBody() {};
MessageBody.prototype = new Object();

/**
 * This interface defines the content and attributes of a message attachment.
 *
 * @super Object
 * @constructor
 * @return {MessageAttachment}
 */
function MessageAttachment() {};
MessageAttachment.prototype = new Object();

/**
 * This interface allows management capabilities using a web application to query, update, and delete messages, and subscribe to changes. In addition to simple message queries, the interface provides functionality to find conversations and folders.
          <p>
The conversation object represents a group of messages combined by the set of message fields. Email conversations are grouped by subject, while chat messages are grouped by sender and recipient fields.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {MessageStorage}
 */
function MessageStorage() {};
MessageStorage.prototype = new Object();

/**
 * watchMessagesChanges callback.
          <p>
This callback interface specifies a callback as a set of functions that will be
invoked when messages from MessageStorage change. Each function takes a list of messages as the input argument.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {MessagesChangeCallback}
 */
function MessagesChangeCallback() {};
MessagesChangeCallback.prototype = new Object();

/**
 * This callback interface specifies a success callback function that takes the loaded attachment as the input argument. It is used in the loadMessageAttachment() asynchronous operation.
 *
 * @super Object
 * @constructor
 * @return {MessageAttachmentSuccessCallback}
 */
function MessageAttachmentSuccessCallback() {};
MessageAttachmentSuccessCallback.prototype = new Object();

/**
 * This interface defines the email folder.
          <p>
This interface allows a web application to get the set of properties that are linked to an email folder.
          </p>
          <p>
The concept of folders is present in several email protocols, such as IMAP, Mail For Exchange.
          </p>
          <p>
If the Messaging service does not represent email or an email protocol supporting the concept of folders on a server, this service has one folder which is the standard INBOX folder.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {MessageFolder}
 */
function MessageFolder() {};
MessageFolder.prototype = new Object();

/**
 * The message identifier.
 * <p>
The ID is locally unique and persistent property, assigned by the device or the Web runtime (WRT).
For new messages created using the Message constructor, the ID is assigned on the first occasion when a message is processed by the underlying platform, such as a call to MessageService.send(). Before the ID is assigned, it is set to <var>null</var>.
            </p>
 * <p>
By default, this attribute is set to <var>null</var>.
            </p>
 *
 * @type MessageId
 */
Message.prototype.id = new MessageId();

/**
 * The identifier of the conversation to which the message belongs.
 * <p>
By default, this attribute is set to <var>null</var>.
            </p>
 *
 * @type MessageConvId
 */
Message.prototype.conversationId = new MessageConvId();

/**
 * The identifier of the folder to which the message belongs.
 * <p>
By default, this attribute is set to null.
            </p>
 * <p>
For SMS and MMS, <em>folderId </em>can be one of these values:
            </p>
 * <ul>
 * <li>INBOX = 1,
 * <li>OUTBOX = 2,
 * <li>DRAFTS = 3,
 * <li>SENTBOX = 4
 * </ul>
 *
 * @type MessageFolderId
 */
Message.prototype.folderId = new MessageFolderId();

/**
 * The type of a given message.
 *
 * @type MessageServiceTag
 */
Message.prototype.type = new MessageServiceTag();

/**
 * The timestamp of a message.
 * <p>
For a received message, the timestamps indicates the time at which a message is received.
For a sent message, the timestamp indicates the time at which a message is sent.
By default, this attribute is set to <var>null</var>.
            </p>
 *
 * @type Date
 */
Message.prototype.timestamp = new Date();

/**
 * The source address (or source phone number) of a message.
 * <p>
This property is set up by the device or the web runtime environment.
By default, this attribute is set to null.
            </p>
 *
 * @type String
 */
Message.prototype.from = new String();

/**
 * The destination of a message.
 *
 * @type array
 */
Message.prototype.to = new array();

/**
 * The carbon copy address of a message.
 * <p>
This property is used only for email messages.
            </p>
 *
 * @type array
 */
Message.prototype.cc = new array();

/**
 * The blind carbon copy (bcc) address of a message.
 * <p>
This property is used only with email messages.
            </p>
 *
 * @type array
 */
Message.prototype.bcc = new array();

/**
 * An attribute to store the body of a message.
 *
 * @type MessageBody
 */
Message.prototype.body = new MessageBody();

/**
 * An attribute to indicate the read state for a message.
 * <p>
This property is set to <var>true</var> if the message has been read. Else it is set to <var>false</var>.
            </p>
 *
 * @type Boolean
 */
Message.prototype.isRead = new Boolean();

/**
 * An attribute to indicate whether an attachment(s) exists or not.
 * <p>
It is set to <var>true</var> if a message has one or more attachments.
            </p>
 * <p>
This property is used only with email and MMS messages.
            </p>
 *
 * @type Boolean
 */
Message.prototype.hasAttachment = new Boolean();

/**
 * An attribute to indicate the priority of a message.
 * <p>
It is set to <var>true</var> if the message has a high priority. Else it is set to <var>false</var>, if the message has a normal or low priority.
            </p>
 * <p>
This property is used only with email messages.
            </p>
 *
 * @type Boolean
 */
Message.prototype.isHighPriority = new Boolean();

/**
 * An attribute to store the subject of a message.
 * <p>
This property is used only with email and MMS messages.
            </p>
 *
 * @type String
 */
Message.prototype.subject = new String();

/**
 * The identifier of the original message.
 * <p>
If the message was replied to or forwarded, this property contains the ID of the original message, otherwise it is set to <var>null</var>.
            </p>
 *
 * @type MessageId
 */
Message.prototype.inResponseTo = new MessageId();

/**
 * The status of a given message.
 * <p>
It can be one of these values:
            </p>
 * <ul>
 * <li>SENT
 * <li>SENDING
 * <li>FAILED
 * <li>DRAFT
 * </ul>
 * <p>
If the status of the current message does not correspond to any item from
the list, an empty value is returned.
            </p>
 *
 * @type String
 */
Message.prototype.messageStatus = new String();

/**
 * The list of the message attachments.
 * <p>
This array is empty if the message does not have attachments or the message body is not loaded and the attachment info is inaccessible (in this case, the <em>hasAttachment</em> attribute is checked).
            </p>
 *
 * @type array
 */
Message.prototype.attachments = new array();

/**
 * The unique identifier of this Messaging service.
 *
 * @type String
 */
MessageService.prototype.id = new String();

/**
 * The tag supported by this messaging service.
 *
 * @type MessageServiceTag
 */
MessageService.prototype.type = new MessageServiceTag();

/**
 * The messaging service name taken from the messaging service
 *
 * @type String
 */
MessageService.prototype.name = new String();

/**
 * An attribute to access for this messaging service.
 * <p>
If the backend does not support <em>MessageStorage </em>for this messaging service, a WebAPIException is raised with error type NotSupportedError.
            </p>
 *
 * @type MessageStorage
 */
MessageService.prototype.messageStorage = new MessageStorage();

/**
 * Sends a specified message.
            <p>
For messaging technologies in which the message is sent individually to every recipient(such as SMS), individual notification must be supported as follows:
            </p>
            <p>
For every individual recipient in the destination list, if the message cannot be sent to that recipient, the onerror() method of the errorCallback argument must be invoked with the corresponding error type as input parameter.
These error types may be passed, depending on the error conditions:
            </p>
            <ul>
              <li>
 NetworkError - If the network connection is not accessible.              </li>
              <li>
 InvalidValuesError - If any of the input parameters contains an invalid value.              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
            <p>
The error message contains the name of the recipient who has failed to receive the sent message.
            </p>
            <p>
When the operation is fully completed (that is, the implementation has the
result of the send operation for all recipients), the onsuccess() 
method of the successCallback will be invoked with an array of recipients who received 
the sent message, as input parameter.
            </p>
           
 *
 * @param {Message} message
 * @param {MessageRecipientsCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf MessageService
 * @returns {void}
 */
MessageService.prototype.sendMessage = function(message, successCallback, errorCallback){ return; };

/**
 * Loads the body for a specified message.
            <p>
It is the back end's responsibility to detect which MIME parts of the message are related to the message body and should be loaded.
If the message body is already loaded, the onsuccess() method of the successCallback will be invoked immediately.
            </p>
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 InvalidValuesError - If any of the input parameters contains an invalid value.              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {Message} message
 * @param {MessageBodySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf MessageService
 * @returns {void}
 */
MessageService.prototype.loadMessageBody = function(message, successCallback, errorCallback){ return; };

/**
 * Loads a specified message attachment.
            <p>
This method is used only for email services. If the message attachment is already loaded, the onsuccess() method of the successCallback is invoked immediately.
            </p>
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 InvalidValuesError - If any of the input parameters contains an invalid value.              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {MessageAttachment} attachment
 * @param {MessageAttachmentSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf MessageService
 * @returns {void}
 */
MessageService.prototype.loadMessageAttachment = function(attachment, successCallback, errorCallback){ return; };

/**
 * Synchronizes the service content with an external mail server.
            <p>
This method is used only for email services. This method performs the same actions as syncFolder for every folder with Synchronizable flag set within the current Messaging service.
            </p>
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 InvalidValuesError - If any of the input parameters contains an invalid value.              </li>
              <li>
 AbortError - If the operation has been stopped.              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {Number} limit
 * @type Number
 * @memberOf MessageService
 * @returns {Number}
 */
MessageService.prototype.sync = function(successCallback, errorCallback, limit){ var ret = new Number(); return ret; };

/**
 * Synchronizes the folder content with an external mail server.
            <p>
This method is used only for email services. This method performs the following actions:
            </p>
            <ul>
              <li>
Exports local changes within a given folder from device to server.              </li>
              <li>
Retrieves the list of available messages from within the given folder.              </li>
            </ul>
            <p>
Messages that are retrieved from a given folder, even if synchronizable flag for this folder is not set.
The backend is responsible in deciding which data is retrieved for every message. It can be:
            </p>
            <ul>
              <li>
Message header details              </li>
              <li>
Whole message body              </li>
            </ul>
            <p>
The limit of latest messages for the given folder must be retrieved and put into <em>MessageStorage</em>. If the limit is not set, the entire folder must be retrieved.
            </p>
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 InvalidValuesError - If any of the input parameters contains an invalid value.              </li>
              <li>
 AbortError - If the operation is stopped.              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {MessageFolder} folder
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {Number} limit
 * @type Number
 * @memberOf MessageService
 * @returns {Number}
 */
MessageService.prototype.syncFolder = function(folder, successCallback, errorCallback, limit){ var ret = new Number(); return ret; };

/**
 * Stops sync() and syncFoler() operation.
            <p>
If the <em>operationId </em>argument is valid and corresponds to a service operation already in progress, the operation must be stopped and its error callback must be invoked with error type AbortError.
            </p>
            <p>
If the <em>operationId </em>argument is not valid or does not correspond to a valid service operation, the method will return without any further action.
            </p>
           
 *
 * @param {Number} opId
 * @type void
 * @memberOf MessageService
 * @returns {void}
 */
MessageService.prototype.stopSync = function(opId){ return; };

/**
 * Method invoked when conversations are added to MessageStorage.
 *
 * @param {array} addedConversations
 * @type void
 * @memberOf MessageConversationsChangeCallback
 * @returns {void}
 */
MessageConversationsChangeCallback.prototype.conversationsadded = function(addedConversations){ return; };

/**
 * Method invoked when conversations are updated in MessageStorage.
 *
 * @param {array} updatedConversations
 * @type void
 * @memberOf MessageConversationsChangeCallback
 * @returns {void}
 */
MessageConversationsChangeCallback.prototype.conversationsupdated = function(updatedConversations){ return; };

/**
 * Method invoked when conversations are removed from MessageStorage.
 *
 * @param {array} removedConversations
 * @type void
 * @memberOf MessageConversationsChangeCallback
 * @returns {void}
 */
MessageConversationsChangeCallback.prototype.conversationsremoved = function(removedConversations){ return; };

/**
 * This API provides interfaces and methods for managing SMS, MMS, and email messages.
 * <p>
The Messaging API provides access to these capabilities:
        </p>
 * <ul>
 * <li>Sending messages through different technologies: SMS, MMS, and email messages.
 * <li>Retrieving available message services.
 * <li>Searching for messages.
 * <li>Managing messages: update, delete, and add.
 * <li>Subscribing to receive notifications of message storage modifications.
 * <li>Fetching conversations and subscribing to conversation updates.
 * </ul>
 * <p>
For more information on the Messaging features, see <a href="http://127.0.0.1:50053/help/topic/org.tizen.web.appprogramming/html/guide/communication_guide/messaging.htm">Messaging Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/network.telephony
 * @type Messaging
 */
MessageManagerObject.prototype.messaging = new Messaging();

/**
 * Called when folders are added to .
 *
 * @param {array} addedFolders
 * @type void
 * @memberOf MessageFoldersChangeCallback
 * @returns {void}
 */
MessageFoldersChangeCallback.prototype.foldersadded = function(addedFolders){ return; };

/**
 * Called when folders are updated in .
 *
 * @param {array} updatedFolders
 * @type void
 * @memberOf MessageFoldersChangeCallback
 * @returns {void}
 */
MessageFoldersChangeCallback.prototype.foldersupdated = function(updatedFolders){ return; };

/**
 * Called when folders are removed from .
 *
 * @param {array} removedFolders
 * @type void
 * @memberOf MessageFoldersChangeCallback
 * @returns {void}
 */
MessageFoldersChangeCallback.prototype.foldersremoved = function(removedFolders){ return; };

/**
 * Method invoked when an asynchronous query completes successfully.
 *
 * @param {array} conversations
 * @type void
 * @memberOf MessageConversationArraySuccessCallback
 * @returns {void}
 */
MessageConversationArraySuccessCallback.prototype.onsuccess = function(conversations){ return; };

/**
 * Gets the messaging service of a given type for a given account, or all existing services supporting the given type, if is not given.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value, the encoding is not valid or onsuccess is null. 
Please note that to allow developers to ignore errors, errorCallback accepts null as a valid value.              </li>
              <li>
UnknownError - In any other error case.              </li>
            </ul>
           
 *
 * @param {MessageServiceTag} messageServiceType
 * @param {MessageServiceArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Messaging
 * @returns {void}
 */
Messaging.prototype.getMessageServices = function(messageServiceType, successCallback, errorCallback){ return; };

/**
 * Method invoked when an asynchronous query completes successfully.
 *
 * @param {array} folders
 * @type void
 * @memberOf MessageFolderArraySuccessCallback
 * @returns {void}
 */
MessageFolderArraySuccessCallback.prototype.onsuccess = function(folders){ return; };

/**
 * Called when the message sending is finished.
 *
 * @param {array} recipients
 * @type void
 * @memberOf MessageRecipientsCallback
 * @returns {void}
 */
MessageRecipientsCallback.prototype.onsuccess = function(recipients){ return; };

/**
 * Called when the asynchronous query completes successfully.
 *
 * @param {Message} message
 * @type void
 * @memberOf MessageBodySuccessCallback
 * @returns {void}
 */
MessageBodySuccessCallback.prototype.onsuccess = function(message){ return; };

/**
 * The conversation identifier.
 * <p>
The ID is locally unique and persistent property, assigned by the device or the Web runtime (WRT).
            </p>
 *
 * @type MessageConvId
 */
MessageConversation.prototype.id = new MessageConvId();

/**
 * The type of a given conversation.
 *
 * @type MessageServiceTag
 */
MessageConversation.prototype.type = new MessageServiceTag();

/**
 * The timestamp of the latest message in a conversation.
 * <p>
This property is set up by the device or the Web runtime environment.
            </p>
 *
 * @type Date
 */
MessageConversation.prototype.timestamp = new Date();

/**
 * The count of messages in a conversation.
 *
 * @type Number
 */
MessageConversation.prototype.messageCount = new Number();

/**
 * The count of unread messages in a conversation.
 *
 * @type Number
 */
MessageConversation.prototype.unreadMessages = new Number();

/**
 * A preview of the latest message in a conversation.
 *
 * @type String
 */
MessageConversation.prototype.preview = new String();

/**
 * The subject of a conversation (applicable for group chats, MMS, email).
 *
 * @type String
 */
MessageConversation.prototype.subject = new String();

/**
 * An attribute to indicate whether the latest message in a conversation has been read or not.
 * <p>
This property is set to <var>true</var> if the message has been read, else it is set to <var>false</var>.
            </p>
 *
 * @type Boolean
 */
MessageConversation.prototype.isRead = new Boolean();

/**
 * The source address (or source phone number) of the latest message in the conversation.
 * <p>
This property is set up by the device or the Web runtime environment.
            </p>
 *
 * @type String
 */
MessageConversation.prototype.from = new String();

/**
 * The destination of the latest message in a conversation.
 *
 * @type array
 */
MessageConversation.prototype.to = new array();

/**
 * The carbon copy (cc) address of the latest message in a conversation.
 * <p>
This property is used only for email.
            </p>
 *
 * @type array
 */
MessageConversation.prototype.cc = new array();

/**
 * The blind carbon copy (bcc) address of the latest message in a conversation.
 * <p>
This property is used only for email.
            </p>
 *
 * @type array
 */
MessageConversation.prototype.bcc = new array();

/**
 * The identifier of a latest message in a conversation.
 * <p>
This property is set up by the device or the Web runtime environment.
            </p>
 *
 * @type MessageId
 */
MessageConversation.prototype.lastMessageId = new MessageId();

/**
 * Method invoked when an asynchronous query completes successfully.
 *
 * @param {array} messages
 * @type void
 * @memberOf MessageArraySuccessCallback
 * @returns {void}
 */
MessageArraySuccessCallback.prototype.onsuccess = function(messages){ return; };

/**
 * Called when finding message services is successful.
 *
 * @param {array} services
 * @type void
 * @memberOf MessageServiceArraySuccessCallback
 * @returns {void}
 */
MessageServiceArraySuccessCallback.prototype.onsuccess = function(services){ return; };

/**
 * The ID of a parent message.
 * <p>
It holds the ID of the message containing this body.
            </p>
 *
 * @type MessageId
 */
MessageBody.prototype.messageId = new MessageId();

/**
 * An attribute to indicate whether the message body has been loaded or not.
 * <p>
It is set to <var>true </var>if the message body is loaded, else it is set to<var> false </var>if the object is not loaded.
The default value is <var>false</var>.
            </p>
 *
 * @type Boolean
 */
MessageBody.prototype.loaded = new Boolean();

/**
 * The plain text representation of a message body.
 *
 * @type String
 */
MessageBody.prototype.plainBody = new String();

/**
 * The HTML representation of a message body.
 * <p>
This attribute holds an empty string if the message does not have any HTML body content.
This property is used only with email messages.
            </p>
 *
 * @type String
 */
MessageBody.prototype.htmlBody = new String();

/**
 * The list of the inline attachments.
 * <p>
This array is empty, if the message does not have inline attachment or the message body is not loaded and attachments info is inaccessible (in this case the <em>loaded</em> attribute is checked).
            </p>
 * <p>
To indicate where to show an inline attachment within the HTML body, a link of the following format should be provided:
"&lt;img src="The file name of a inline attachment"&gt;" 
This property is used only with email messages.
            </p>
 *
 * @type array
 */
MessageBody.prototype.inlineAttachments = new array();

/**
 * The ID of an attachment.
 * <p>
It holds the identifier of the attachment within its parent message.
            </p>
 * <p>
By default, this attribute is set to <var>null</var>.
            </p>
 *
 * @type MessageAttachmentId
 */
MessageAttachment.prototype.id = new MessageAttachmentId();

/**
 * The ID of a parent message.
 * <p>
By default, this attribute is set to <var>null</var>.
            </p>
 *
 * @type MessageId
 */
MessageAttachment.prototype.messageId = new MessageId();

/**
 * The attachment MIME type.
 * <p>
It describes the MIME type of an attachment, for example; "text/html".
            </p>
 * <p>
By default, this attribute is set to <var>null</var>.
            </p>
 *
 * @type String
 */
MessageAttachment.prototype.mimeType = new String();

/**
 * The location path to a loaded attachment file.
 * <p>
It holds the location path to a loaded attachment file, appropriate for the Filesystem API. It is set to <var>null</var> if the attachment is not loaded from the remote servaer.
            </p>
 *
 * @type String
 */
MessageAttachment.prototype.filePath = new String();

/**
 * Adds a draft message to and these messages are stored in the Drafts folder.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {Message} message
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf MessageStorage
 * @returns {void}
 */
MessageStorage.prototype.addDraftMessage = function(message, successCallback, errorCallback){ return; };

/**
 * Finds messages from .
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 InvalidValuesError - If any of the input parameters contains an invalid value.              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {AbstractFilter} filter
 * @param {MessageArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {SortMode} sort
 * @param {Number} limit
 * @param {Number} offset
 * @type void
 * @memberOf MessageStorage
 * @returns {void}
 */
MessageStorage.prototype.findMessages = function(filter, successCallback, errorCallback, sort, limit, offset){ return; };

/**
 * Removes messages from .
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {array} messages
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf MessageStorage
 * @returns {void}
 */
MessageStorage.prototype.removeMessages = function(messages, successCallback, errorCallback){ return; };

/**
 * Updates messages in .
            <p>
The backend must check whether the required updates can be applied and invoke the errorCallback method, if they cannot be checked.
Depending on the backend synchronization settings, the local changes in <em>MessageStorage</em> can be rewritten as a result of invoking the sync() or syncFolder() methods of the related message service.
            </p>
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 InvalidValuesError - If any of the input parameters contains an invalid value.              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {array} messages
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf MessageStorage
 * @returns {void}
 */
MessageStorage.prototype.updateMessages = function(messages, successCallback, errorCallback){ return; };

/**
 * Finds conversations from .
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 InvalidValuesError - If any of the input parameters contains an invalid value.              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {AbstractFilter} filter
 * @param {MessageConversationArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {SortMode} sort
 * @param {Number} limit
 * @param {Number} offset
 * @type void
 * @memberOf MessageStorage
 * @returns {void}
 */
MessageStorage.prototype.findConversations = function(filter, successCallback, errorCallback, sort, limit, offset){ return; };

/**
 * Removes conversations from .
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 InvalidValuesError - If any of the input parameters contains an invalid value.              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {array} conversations
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf MessageStorage
 * @returns {void}
 */
MessageStorage.prototype.removeConversations = function(conversations, successCallback, errorCallback){ return; };

/**
 * Queries folders from MessageStorage.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 InvalidValuesError: If any of the input parameters contains an invalid value.              </li>
              <li>
 UnknownError: In any other error case.               </li>
            </ul>
           
 *
 * @param {AbstractFilter} filter
 * @param {MessageFolderArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf MessageStorage
 * @returns {void}
 */
MessageStorage.prototype.findFolders = function(filter, successCallback, errorCallback){ return; };

/**
 * Adds a listener to subscribe to notification for MessageStorage changes.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 InvalidValuesError - If any of the input parameters contains an invalid value.              </li>
              <li>
 UnknownError - If any other error occurs.               </li>
            </ul>
           
 *
 * @param {MessagesChangeCallback} messagesChangeCallback
 * @param {AbstractFilter} filter
 * @type Number
 * @memberOf MessageStorage
 * @returns {Number}
 */
MessageStorage.prototype.addMessagesChangeListener = function(messagesChangeCallback, filter){ var ret = new Number(); return ret; };

/**
 * Adds a listener to subscribe to notifications for MessageConversation changes.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 InvalidValuesError - If any of the input parameters contains an invalid value.              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {MessageConversationsChangeCallback} conversationsChangeCallback
 * @param {AbstractFilter} filter
 * @type Number
 * @memberOf MessageStorage
 * @returns {Number}
 */
MessageStorage.prototype.addConversationsChangeListener = function(conversationsChangeCallback, filter){ var ret = new Number(); return ret; };

/**
 * Adds a listener to subscribe to notifications for MessageFolder changes.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 InvalidValuesError - If any of the input parameters contains an invalid value.              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {MessageFoldersChangeCallback} foldersChangeCallback
 * @param {AbstractFilter} filter
 * @type Number
 * @memberOf MessageStorage
 * @returns {Number}
 */
MessageStorage.prototype.addFoldersChangeListener = function(foldersChangeCallback, filter){ var ret = new Number(); return ret; };

/**
 * Removes a listener to unsubscribe from receiving message notifications.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 InvalidValuesError - If any of the input parameters contains an invalid value.              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
            <p>
If the <em>subscriptionId </em>argument is valid and corresponds to a subscription already in place, the subscription process must stop immediately and further <em>MessagingStorage </em>change notifications must not be invoked.
If the <em>subscriptionId argument does not correspond to a valid subscription, the method will return without any further action.
</em>            </p>
           
 *
 * @param {Number} watchId
 * @type void
 * @memberOf MessageStorage
 * @returns {void}
 */
MessageStorage.prototype.removeChangeListener = function(watchId){ return; };

/**
 * Method invoked when messages are added to the MessageStorage.
 *
 * @param {array} addedMessages
 * @type void
 * @memberOf MessagesChangeCallback
 * @returns {void}
 */
MessagesChangeCallback.prototype.messagesadded = function(addedMessages){ return; };

/**
 * Method invoked when messages are updated in MessageStorage.
 *
 * @param {array} updatedMessages
 * @type void
 * @memberOf MessagesChangeCallback
 * @returns {void}
 */
MessagesChangeCallback.prototype.messagesupdated = function(updatedMessages){ return; };

/**
 * Method invoked when messages are removed from MessageStorage.
 *
 * @param {array} removedMessages
 * @type void
 * @memberOf MessagesChangeCallback
 * @returns {void}
 */
MessagesChangeCallback.prototype.messagesremoved = function(removedMessages){ return; };

/**
 * Called when the asynchronous query completes successfully.
 *
 * @param {MessageAttachment} attachment
 * @type void
 * @memberOf MessageAttachmentSuccessCallback
 * @returns {void}
 */
MessageAttachmentSuccessCallback.prototype.onsuccess = function(attachment){ return; };

/**
 * The folder identifier. The ID is locally unique and persistent property, assigned by the device or the Web runtime (WRT).
 *
 * @type MessageFolderId
 */
MessageFolder.prototype.id = new MessageFolderId();

/**
 * The identifier for the parent folder of a specified folder.
 * <p>
If this folder is a root folder, the parent folder ID is <var>null</var>.
            </p>
 *
 * @type MessageFolderId
 */
MessageFolder.prototype.parentId = new MessageFolderId();

/**
 * The identifier of the service to which a specified folder belongs.
 *
 * @type String
 */
MessageFolder.prototype.serviceId = new String();

/**
 * The type of the messages contained within a folder.
 *
 * @type MessageServiceTag
 */
MessageFolder.prototype.contentType = new MessageServiceTag();

/**
 * The visible name of a folder.
 * <p>
Can be modified. By default, it contains the folder name from the server.
            </p>
 * <p>
In case the current Messaging service does not support remote folders on the server (and this folder is the only one that the current service has), this attribute contains the service name, by default.
            </p>
 *
 * @type String
 */
MessageFolder.prototype.name = new String();

/**
 * The whole path of a remote folder on the server.
 * <p>
If the current Messaging service does not support remote folders on the server,
this attribute will be empty.
            </p>
 *
 * @type String
 */
MessageFolder.prototype.path = new String();

/**
 * The standard type of a folder.
 * <p>
It can be one of the following values:
            </p>
 * <ul>
 * <li>INBOX
 * <li>OUTBOX
 * <li>DRAFTS
 * <li>SENTBOX
 * </ul>
 * <p>
If this folder is not a standard folder, an empty value must be returned.
            </p>
 * <p>
This property is unique for each type within one Messaging service.
            </p>
 *
 * @type String
 */
MessageFolder.prototype.type = new String();

/**
 * An attribute to show whether this folder should be synchronized or not.
 * <p>
This attribute affects the behavior of the MessageService.sync() method.
            </p>
 *
 * @type Boolean
 */
MessageFolder.prototype.synchronizable = new Boolean();

/**
 * This API provides interfaces and methods for managing SMS, MMS, and email messages.
 * <p>
The Messaging API provides access to these capabilities:
        </p>
 * <ul>
 * <li>Sending messages through different technologies: SMS, MMS, and email messages.
 * <li>Retrieving available message services.
 * <li>Searching for messages.
 * <li>Managing messages: update, delete, and add.
 * <li>Subscribing to receive notifications of message storage modifications.
 * <li>Fetching conversations and subscribing to conversation updates.
 * </ul>
 * <p>
For more information on the Messaging features, see <a href="http://127.0.0.1:50053/help/topic/org.tizen.web.appprogramming/html/guide/communication_guide/messaging.htm">Messaging Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/network.telephony
 * @type Messaging
 */
Tizen.prototype.messaging = new Messaging();

/**
 * This interface provides a success callback specific to NetworkBearerSelection.
          <p>
It is used in asynchronous operations with requestRouteToHost().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {NetworkSuccessCallback}
 */
function NetworkSuccessCallback() {};
NetworkSuccessCallback.prototype = new Object();

/**
 * This entry interface provides methods to query the network bearer selection.
          <p>
This API offers methods for network bearer selection.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {NetworkBearerSelection}
 */
function NetworkBearerSelection() {};
NetworkBearerSelection.prototype = new Object();

/**
 * Defines what is instantiated the Tizen object from the Tizen Platform.
          <p>
There is a <em>tizen.networkbearerselection </em>object that allows accessing the functionality of the Networkbearerselection API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {NetworkBearerSelectionObject}
 */
function NetworkBearerSelectionObject() {};
NetworkBearerSelectionObject.prototype = new Object();

/**
 * Called when a network is connected successfully.
 *
 * @type void
 * @memberOf NetworkSuccessCallback
 * @returns {void}
 */
NetworkSuccessCallback.prototype.onsuccess = function(){ return; };

/**
 * Called when a network is disconnected.
 *
 * @type void
 * @memberOf NetworkSuccessCallback
 * @returns {void}
 */
NetworkSuccessCallback.prototype.ondisconnected = function(){ return; };

/**
 * Requests a specific network connection.
            <p>
The function must asynchronously acquire success or fail.
            </p>
            <p>
When called, it starts a request process defined with these set of steps:
            </p>
            <ul>
              <li>
1. Open "networkType" network connection.              </li>
              <li>
2. Resolve "domainName" to IP.              </li>
              <li>
3. Change the routing path bound to domainName's IP to use the specific network type.              </li>
              <li>
4. If previous steps have been successfully accomplished, call onsuccess() callback function.<br/>If previous steps have failed, call ondisconnected() callback function.<br/>If network is disconnected, the routing path will be deleted and ondisconnected() is called.              </li>
            </ul>
           
 *
 * @param {NetworkType} networkType
 * @param {String} domainName
 * @param {NetworkSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf NetworkBearerSelection
 * @returns {void}
 */
NetworkBearerSelection.prototype.requestRouteToHost = function(networkType, domainName, successCallback, errorCallback){ return; };

/**
 * Releases a specific network connection.
            <p>
The function must asynchronously acquire success or fail.
            </p>
            <p>
When called, it closes a network connection.
            </p>
           
 *
 * @param {NetworkType} networkType
 * @param {String} domainName
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf NetworkBearerSelection
 * @returns {void}
 */
NetworkBearerSelection.prototype.releaseRouteToHost = function(networkType, domainName, successCallback, errorCallback){ return; };

/**
 * This specification defines interfaces and methods providing Web applications to access the devices.
 * <p>
This API provides interfaces and methods for users to set network bearer selection.
        </p>
 *
 * @feature http://tizen.org/feature/network.telephony
 * @type NetworkBearerSelection
 */
NetworkBearerSelectionObject.prototype.networkbearerselection = new NetworkBearerSelection();

/**
 * This specification defines interfaces and methods providing Web applications to access the devices.
 * <p>
This API provides interfaces and methods for users to set network bearer selection.
        </p>
 *
 * @feature http://tizen.org/feature/network.telephony
 * @type NetworkBearerSelection
 */
Tizen.prototype.networkbearerselection = new NetworkBearerSelection();

/**
 * The NDEFRecord that has URI type payload.
 *
 * @super Object
 * @constructor
 * @return {NDEFRecordURI}
 */
function NDEFRecordURI() {};
NDEFRecordURI.prototype = new NDEFRecord();

/**
 * Accesses to the NFC tag/target.
          <p>
It provides access to the API functionalities through the tizen.nfc interface.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {NFCManager}
 */
function NFCManager() {};
NFCManager.prototype = new Object();

/**
 * The success callback to be invoked when an NFC tag is detected or lost.
          <p>
This callback interface specifies two methods:
          </p>
          <ul>
            <li>
 onattach: invoked when an NFC tag is detected            </li>
            <li>
 ondetach: invoked when the NFC tag is lost            </li>
          </ul>
          <p>
It is used in NFCAdapter.setTagListener().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {NFCTagDetectCallback}
 */
function NFCTagDetectCallback() {};
NFCTagDetectCallback.prototype = new Object();

/**
 * This interface defines what is instantiated by the object from the Tizen Platform. There will be a object that allows access to the functionality of the NFC API.
 *
 * @super Object
 * @constructor
 * @return {NFCManagerObject}
 */
function NFCManagerObject() {};
NFCManagerObject.prototype = new Object();

/**
 * The NDEFMessage interface.
 *
 * @super Object
 * @constructor
 * @return {NDEFMessage}
 */
function NDEFMessage() {};
NDEFMessage.prototype = new Object();

/**
 * This interface provides accesses to the NFC tag.
 *
 * @super Object
 * @constructor
 * @return {NFCTag}
 */
function NFCTag() {};
NFCTag.prototype = new Object();

/**
 * The success callback to be invoked when an NFC peer-to-peer target is detected or lost.
          <p>
This callback interface specifies two methods:
          </p>
          <ul>
            <li>
 onattach: invoked when an NFC peer-to-peer target is detected            </li>
            <li>
 ondetach: invoked when the NFC peer-to-peer target is lost            </li>
          </ul>
          <p>
It is used in NFCAdapter.setPeerListener().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {NFCPeerDetectCallback}
 */
function NFCPeerDetectCallback() {};
NFCPeerDetectCallback.prototype = new Object();

/**
 * The NDEFRecord that has the text type payload.
 *
 * @super Object
 * @constructor
 * @return {NDEFRecordText}
 */
function NDEFRecordText() {};
NDEFRecordText.prototype = new NDEFRecord();

/**
 * The NDEFRecord interface.
 *
 * @super Object
 * @constructor
 * @return {NDEFRecord}
 */
function NDEFRecord() {};
NDEFRecord.prototype = new Object();

/**
 * The success callback to be invoked when data has been read successfully from the NFC tag or target.
          <p>
This callback interface specifies a success method with 
an NDEF message as an input parameter.
It is used in asynchronous
operations, such as NFCTag.readNDEF() or NFCPeer.setReceiveNDEFListener().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {NDEFMessageReadCallback}
 */
function NDEFMessageReadCallback() {};
NDEFMessageReadCallback.prototype = new Object();

/**
 * The NDEFRecord that has mime type payload.
 *
 * @super Object
 * @constructor
 * @return {NDEFRecordMedia}
 */
function NDEFRecordMedia() {};
NDEFRecordMedia.prototype = new NDEFRecord();

/**
 * This interface provides access to control the adapter by offering methods to control local NFC behaviors, such as turning on/off an adapter.
 *
 * @super Object
 * @constructor
 * @return {NFCAdapter}
 */
function NFCAdapter() {};
NFCAdapter.prototype = new Object();

/**
 * The success callback to be invoked when NFCTag.transceive() completes successfully.
          <p>
This callback interface specifies a success method, with
a raw data as an input parameter. It is used in NFCTag.transceive().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ByteArraySuccessCallback}
 */
function ByteArraySuccessCallback() {};
ByteArraySuccessCallback.prototype = new Object();

/**
 * An interface that provides access to the NFC peer-to-peer target.
 *
 * @super Object
 * @constructor
 * @return {NFCPeer}
 */
function NFCPeer() {};
NFCPeer.prototype = new Object();

/**
 * The URI string that is stored in the payload.
 *
 * @type String
 */
NDEFRecordURI.prototype.uri = new String();

/**
 * A constant to indicate empty format of NDEF record's type field.
 *
 * @type Number
 */
NFCManager.NFC_RECORD_TNF_EMPTY = new Number();

/**
 * A constant to indicate Record Type Definition (RTD) format of NDEF record's type field.
 *
 * @type Number
 */
NFCManager.NFC_RECORD_TNF_WELL_KNOWN = new Number();

/**
 * A constant to indicate MIME media types format in RFC 2046 [RFC 2046] of NDEF record's type field.
 *
 * @type Number
 */
NFCManager.NFC_RECORD_TNF_MIME_MEDIA = new Number();

/**
 * A constant to indicate absolute URI, as defined in RFC 3986 [RFC 3986] format in RFC 2046 [RFC 2046] of NDEF record's type field.
 *
 * @type Number
 */
NFCManager.NFC_RECORD_TNF_URI = new Number();

/**
 * A constant to indicate NFC forum external type [NFC RTD] format in RFC 2046 [RFC 2046] of NDEF record's type field.
 *
 * @type Number
 */
NFCManager.NFC_RECORD_TNF_EXTERNAL_RTD = new Number();

/**
 * A constant to indicate unknown type format in RFC 2046 [RFC 2046] of NDEF record's type field.
 *
 * @type Number
 */
NFCManager.NFC_RECORD_TNF_UNKNOWN = new Number();

/**
 * A constant to indicate whether the payload is an intermediate or final chunk of a chunked NDEF record.
 *
 * @type Number
 */
NFCManager.NFC_RECORD_TNF_UNCHANGED = new Number();

/**
 * Gets the default NFC adapter of the device.
 *
 * @type NFCAdapter
 * @memberOf NFCManager
 * @returns {NFCAdapter}
 */
NFCManager.prototype.getDefaultAdapter = function(){ var ret = new NFCAdapter(); return ret; };

/**
 * Gives priority to the current application for NFC operations over other applications when it is in the foreground.
            <p>
If the current application gets priority and it is in the foreground, 
the system stops sending application controls that are usually sent to pick an application to handle the request 
when detecting NFC Tag or receiving NDEF Message from the connected NFC peer-to-peer target.
            </p>
            <p>
But when the current application goes to the background, it loses the priority.
            </p>
           
 *
 * @param {Boolean} mode
 * @type void
 * @memberOf NFCManager
 * @returns {void}
 */
NFCManager.prototype.setExclusiveMode = function(mode){ return; };

/**
 * The method invoked when a tag is attached.
 *
 * @param {NFCTag} nfcTag
 * @type void
 * @memberOf NFCTagDetectCallback
 * @returns {void}
 */
NFCTagDetectCallback.prototype.onattach = function(nfcTag){ return; };

/**
 * The method invoked when the connected tag is detached.
 *
 * @type void
 * @memberOf NFCTagDetectCallback
 * @returns {void}
 */
NFCTagDetectCallback.prototype.ondetach = function(){ return; };

/**
 * This interface specifies a protocol for simple wireless interconnection of closely coupled devices operating at 13.56 MHz using Near Field Communication (NFC), which is an international standard (ISO/IEC 18092). To know more, see .
 * <p>
There are three groups of application scenarios for NFC:
        </p>
 * <ul>
 * <li>Exchanging some digital information or data by holding a device close to a wireless tag.
 * <li>Exchanging some information or data between two devices by holding them close to each other.
 * <li>Making payments by holding mobile phones close to point of sales terminals instead of swiping smart cards.
 * </ul>
 * <p>
For more information on the NFC features, see <a href="http://127.0.0.1:50053/help/topic/org.tizen.web.appprogramming/html/guide/communication_guide/nfc.htm">NFC Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/network.nfc
 * @type NFCManager
 */
NFCManagerObject.prototype.nfc = new NFCManager();

/**
 * The number of records in the NDEFMessage.
 *
 * @type Number
 */
NDEFMessage.prototype.recordCount = new Number();

/**
 * The array of NDEFRecord objects in the NDEFMessage.
 *
 * @type array
 */
NDEFMessage.prototype.records = new array();

/**
 * Gets the serial byte array of the NDEF message.
            <p>
If the operation completes successfully, it returns the serial byte array of the NDEF message.
            </p>
           
 *
 * @type array
 * @memberOf NDEFMessage
 * @returns {array}
 */
NDEFMessage.prototype.toByte = function(){ var ret = new array(); return ret; };

/**
 * The type of the NFC tag.
 *
 * @type NFCTagType
 */
NFCTag.prototype.type = new NFCTagType();

/**
 * An attribute to check if the NFC Tag supports NDEF format.
 *
 * @type Boolean
 */
NFCTag.prototype.isSupportedNDEF = new Boolean();

/**
 * The size of NDEF message stored in the tag.
 *
 * @type Number
 */
NFCTag.prototype.ndefSize = new Number();

/**
 * The value is all tag information.
 * <p>
It is pairs of key and value.
The array's index is the pair's key and value is its value.
            </p>
 *
 * @type object
 */
NFCTag.prototype.properties = new object();

/**
 * The value is necessary to check if this tag is connected.
 *
 * @type Boolean
 */
NFCTag.prototype.isConnected = new Boolean();

/**
 * Reads the NDEF data from the NFC tag.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError - If the NFC service is not available.              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {NDEFMessageReadCallback} readCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf NFCTag
 * @returns {void}
 */
NFCTag.prototype.readNDEF = function(readCallback, errorCallback){ return; };

/**
 * Writes the NDEF data to the NFC tag.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 InvalidValuesError: If any of the input parameters contain an invalid value.              </li>
              <li>
 ServiceNotAvailableError: If the NFC service is not available.               </li>
              <li>
 UnknownError: In any other error case.               </li>
            </ul>
           
 *
 * @param {NDEFMessage} ndefMessage
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf NFCTag
 * @returns {void}
 */
NFCTag.prototype.writeNDEF = function(ndefMessage, successCallback, errorCallback){ return; };

/**
 * Access the raw format card. The transceive function is the only way to access the raw format card (not formatted). Each tag type requires its own command to access tags. This API provides low level access of tag operation. (Note that you must know each tag technology.)
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
 ServiceNotAvailableError - If the NFC service is not available.              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {array} data
 * @param {ByteArraySuccessCallback} dataCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf NFCTag
 * @returns {void}
 */
NFCTag.prototype.transceive = function(data, dataCallback, errorCallback){ return; };

/**
 * The method invoked when the NFC peer-to-peer target is attached.
 *
 * @param {NFCPeer} nfcPeer
 * @type void
 * @memberOf NFCPeerDetectCallback
 * @returns {void}
 */
NFCPeerDetectCallback.prototype.onattach = function(nfcPeer){ return; };

/**
 * The method invoked when the NFC peer-to-peer target connected is detached.
 *
 * @type void
 * @memberOf NFCPeerDetectCallback
 * @returns {void}
 */
NFCPeerDetectCallback.prototype.ondetach = function(){ return; };

/**
 * The encoded text.
 *
 * @type String
 */
NDEFRecordText.prototype.text = new String();

/**
 * The language code string value, followed by IANA[RFC 3066] (for example, en-US, ko-KR).
 *
 * @type String
 */
NDEFRecordText.prototype.languageCode = new String();

/**
 * The encoding type. By default, this attribute is set to UTF8.
 *
 * @type NDEFRecordTextEncoding
 */
NDEFRecordText.prototype.encoding = new NDEFRecordTextEncoding();

/**
 * The value of the record type (TNF value).
 * <p>
At least the following values must be supported:
            </p>
 * <ul>
 * <li>NFC_RECORD_TNF_EMPTY - The record type is empty
 * <li>NFC_RECORD_TNF_WELL_KNOWN - Record Type Definition (RTD) format [NFC RTD]
 * <li>NFC_RECORD_TNF_MIME_MEDIA - MIME media types in RFC 2046 [RFC 2046]
 * <li>NFC_RECORD_TNF_URI - Absolute URI as defined in RFC 3986 [RFC 3986]
 * <li>NFC_RECORD_TNF_EXTERNAL_RTD - NFC forum external type [NFC RTD]
 * <li>NFC_RECORD_TNF_UNKNOWN - The payload type is unknown
 * <li>NFC_RECORD_TNF_UNCHANGED - It means the payload is an intermediate or final chunk of a chunked NDEF record
 * </ul>
 *
 * @type Number
 */
NDEFRecord.prototype.tnf = new Number();

/**
 * The specified type in byte array.
 * <p>
The byte array contains <var>0</var> to <var>255</var> bytes.
            </p>
 *
 * @type array
 */
NDEFRecord.prototype.type = new array();

/**
 * The record ID.
 * <p>
The byte array contains <var>0</var> to <var>255</var> bytes.
            </p>
 * <p>
By default, this attribute is set to an empty array.
            </p>
 *
 * @type array
 */
NDEFRecord.prototype.id = new array();

/**
 * The record payload.
 * <p>
The byte array contains <var>0</var> to <var>(2 ** 32 - 1)</var> bytes.
            </p>
 *
 * @type array
 */
NDEFRecord.prototype.payload = new array();

/**
 * The method invoked when the asynchronous call completes successfully.
 *
 * @param {NDEFMessage} ndefMessage
 * @type void
 * @memberOf NDEFMessageReadCallback
 * @returns {void}
 */
NDEFMessageReadCallback.prototype.onsuccess = function(ndefMessage){ return; };

/**
 * The mime type [RFC 2046] (for example, text/plain, image/jpeg ).
 *
 * @type String
 */
NDEFRecordMedia.prototype.mimeType = new String();

/**
 * The state of the NFC adapter.
 *
 * @type Boolean
 */
NFCAdapter.prototype.powered = new Boolean();

/**
 * Sets the power of an NFC adapter to either a on state or a off state.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError - If the NFC device is busy.              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {Boolean} state
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.setPowered = function(state, successCallback, errorCallback){ return; };

/**
 * Registers a callback function to invoke when an NFC tag is detected.
            <p>
If the registration completes successfully, the detectCallback must be
invoked when NFC tag is detected. 
            </p>
            <p>
If no tagFilter is passed, it shall consider the default tagFilter, that is to set all tag types.
            </p>
           
 *
 * @param {NFCTagDetectCallback} detectCallback
 * @param {array} tagFilter
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.setTagListener = function(detectCallback, tagFilter){ return; };

/**
 * Registers a callback function to be invoked when NFC peer-to-peer target is detected.
            <p>
If the registration completes successfully, the detectCallback must be
invoked when NFC peer-to-peer target is detected. 
            </p>
           
 *
 * @param {NFCPeerDetectCallback} detectCallback
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.setPeerListener = function(detectCallback){ return; };

/**
 * Unregisters the listener for detecting an NFC tag.
 *
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.unsetTagListener = function(){ return; };

/**
 * Unregisters the listener for detecting an NFC peer-to-peer target.
 *
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.unsetPeerListener = function(){ return; };

/**
 * Gets the NDEF message cached when the tag is detected.
            <p>
If the operation completes successfully, the NDEF Message that was last read
before launching your application should be returned. 
            </p>
           
 *
 * @type NDEFMessage
 * @memberOf NFCAdapter
 * @returns {NDEFMessage}
 */
NFCAdapter.prototype.getCachedMessage = function(){ var ret = new NDEFMessage(); return ret; };

/**
 * The method invoked when the asynchronous call completes successfully.
 *
 * @param {array} data
 * @type void
 * @memberOf ByteArraySuccessCallback
 * @returns {void}
 */
ByteArraySuccessCallback.prototype.onsuccess = function(data){ return; };

/**
 * The value is necessary to check if this NFC peer-to-peer target is connected.
 *
 * @type Boolean
 */
NFCPeer.prototype.isConnected = new Boolean();

/**
 * Registers a callback function to be invoked when an NDEF message is received from the connected NFC peer-to-peer target.
 *
 * @param {NDEFMessageReadCallback} successCallback
 * @type void
 * @memberOf NFCPeer
 * @returns {void}
 */
NFCPeer.prototype.setReceiveNDEFListener = function(successCallback){ return; };

/**
 * Unregisters the listener for receiving NDEF messages from the NFC peer-to-peer target connected.
 *
 * @type void
 * @memberOf NFCPeer
 * @returns {void}
 */
NFCPeer.prototype.unsetReceiveNDEFListener = function(){ return; };

/**
 * Sends data to the NFC peer-to-peer target.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 InvalidValuesError: If any of the input parameters contain an invalid value.              </li>
              <li>
 ServiceNotAvailableError: If the NFC service is not available.               </li>
              <li>
 UnknownError: In any other error case.               </li>
            </ul>
           
 *
 * @param {NDEFMessage} ndefMessage
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf NFCPeer
 * @returns {void}
 */
NFCPeer.prototype.sendNDEF = function(ndefMessage, successCallback, errorCallback){ return; };

/**
 * This interface specifies a protocol for simple wireless interconnection of closely coupled devices operating at 13.56 MHz using Near Field Communication (NFC), which is an international standard (ISO/IEC 18092). To know more, see .
 * <p>
There are three groups of application scenarios for NFC:
        </p>
 * <ul>
 * <li>Exchanging some digital information or data by holding a device close to a wireless tag.
 * <li>Exchanging some information or data between two devices by holding them close to each other.
 * <li>Making payments by holding mobile phones close to point of sales terminals instead of swiping smart cards.
 * </ul>
 * <p>
For more information on the NFC features, see <a href="http://127.0.0.1:50053/help/topic/org.tizen.web.appprogramming/html/guide/communication_guide/nfc.htm">NFC Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/network.nfc
 * @type NFCManager
 */
Tizen.prototype.nfc = new NFCManager();

/**
 * Defines what is instantiated by the object.
          <p>
There is a <em>tizen.notification</em> object that allows access to the
Notification API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {NotificationObject}
 */
function NotificationObject() {};
NotificationObject.prototype = new Object();

/**
 * Notification manager interface that provides access to the API.
          <p>
This interface provides access to the notification object.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {NotificationManager}
 */
function NotificationManager() {};
NotificationManager.prototype = new Object();

/**
 * The NotificationDetailInfo object that contains the detail information to the notification.
          <p>
By default, each of the attributes of this interface are undefined.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {NotificationDetailInfo}
 */
function NotificationDetailInfo() {};
NotificationDetailInfo.prototype = new Object();

/**
 * This interface offers common attributes to represent object.
 *
 * @super Object
 * @constructor
 * @return {Notification}
 */
function Notification() {};
Notification.prototype = new Object();

/**
 * This interface represents status notification and offers additional attributes to represent notification displayed in notification tray.
          <p>
All notification must have a title attribute.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {StatusNotification}
 */
function StatusNotification() {};
StatusNotification.prototype = new Notification();

/**
 * The Notification API provides a way to notify users of events that happen in an application.
 * <p>
For more information on the Notification features, see <a href="http://127.0.0.1:50053/help/topic/org.tizen.web.appprogramming/html/guide/ui_guide/notification.htm">Notification Guide</a>.
        </p>
 *
 * @type NotificationManager
 */
NotificationObject.prototype.notification = new NotificationManager();

/**
 * Posts a notification to display.
 *
 * @param {Notification} notification
 * @type void
 * @memberOf NotificationManager
 * @returns {void}
 */
NotificationManager.prototype.post = function(notification){ return; };

/**
 * Updates a previously posted notification.
 *
 * @param {Notification} notification
 * @type void
 * @memberOf NotificationManager
 * @returns {void}
 */
NotificationManager.prototype.update = function(notification){ return; };

/**
 * Removes a previously posted notification.
 *
 * @param {NotificationId} id
 * @type void
 * @memberOf NotificationManager
 * @returns {void}
 */
NotificationManager.prototype.remove = function(id){ return; };

/**
 * Removes all notifications that have been posted by the current application.
 *
 * @type void
 * @memberOf NotificationManager
 * @returns {void}
 */
NotificationManager.prototype.removeAll = function(){ return; };

/**
 * Gets a notification that has previously been posted by the current application.
 *
 * @param {NotificationId} id
 * @type Notification
 * @memberOf NotificationManager
 * @returns {Notification}
 */
NotificationManager.prototype.get = function(id){ var ret = new Notification(); return ret; };

/**
 * Gets all notifications that have previously been posted by the current application.
 *
 * @type array
 * @memberOf NotificationManager
 * @returns {array}
 */
NotificationManager.prototype.getAll = function(){ var ret = new array(); return ret; };

/**
 * The main content of the detail information. This attribute is available on simple status notifications.
 *
 * @type String
 */
NotificationDetailInfo.prototype.mainText = new String();

/**
 * The secondary content of the detail information.
 * <p>
By default, this attribute is set to undefined.
            </p>
 *
 * @type String
 */
NotificationDetailInfo.prototype.subText = new String();

/**
 * The Notification identifier. Before the notification is posted, this value is undefined.
 *
 * @type NotificationId
 */
Notification.prototype.id = new NotificationId();

/**
 * The Notification type.
 *
 * @type NotificationType
 */
Notification.prototype.type = new NotificationType();

/**
 * The time that the notification is posted.
 *
 * @type Date
 */
Notification.prototype.postedTime = new Date();

/**
 * The title to display in a notification.
 *
 * @type String
 */
Notification.prototype.title = new String();

/**
 * The content to display in a notification.
 *
 * @type String
 */
Notification.prototype.content = new String();

/**
 * The status notification type.
 *
 * @type StatusNotificationType
 */
StatusNotification.prototype.statusType = new StatusNotificationType();

/**
 * The icon path to display in the notification.
 *
 * @type String
 */
StatusNotification.prototype.iconPath = new String();

/**
 * The sub icon path to display in the notification.
 *
 * @type String
 */
StatusNotification.prototype.subIconPath = new String();

/**
 * The number of events to display in the notification.
 *
 * @type Number
 */
StatusNotification.prototype.number = new Number();

/**
 * Appends lines of the detail information to the notification. This attribute is available in simple status notification. By default, this attribute is initialized with an empty array. The maximum number of detail information elements in the array is 2.
 *
 * @type array
 */
StatusNotification.prototype.detailInfo = new array();

/**
 * The image path to use as the background of the notification. This attribute is available on simple or thumbnail status notifications.
 *
 * @type String
 */
StatusNotification.prototype.backgroundImagePath = new String();

/**
 * The image paths associated with the thumbnail status notification. By default, this attribute is initialized with an empty array. The maximum number of thumbnail path elements in the array is 4.
 *
 * @type array
 */
StatusNotification.prototype.thumbnails = new array();

/**
 * The path of a sound file to play when the notification is shown.
 *
 * @type String
 */
StatusNotification.prototype.soundPath = new String();

/**
 * Holds whether to vibrate when the notification is shown. By default, this attribute is set to false.
 *
 * @type Boolean
 */
StatusNotification.prototype.vibration = new Boolean();

/**
 * Holds the application control to launch an application when the notification is selected from the notification tray.
 *
 * @type ApplicationControl
 */
StatusNotification.prototype.appControl = new ApplicationControl();

/**
 * Holds the application ID to launch when the notification is selected from the notification tray.
 *
 * @type ApplicationId
 */
StatusNotification.prototype.appId = new ApplicationId();

/**
 * Defines the type for an ongoing notification's progress. By default, this attribute is set to PERCENTAGE.
 *
 * @type NotificationProgressType
 */
StatusNotification.prototype.progressType = new NotificationProgressType();

/**
 * The current progress value of notification.
 * <p>
If progressValue is set, the progressbar will be displayed in notification.
If not, the progressbar will not be shown.
This attribute is only available for StatusNotifcation of type <em>PROGRESS</em>.
            </p>
 * <p>
Application should keep the progress value for its job because 
the saved value in the notification status tray would be different from 
exact progress value.
            </p>
 * <p>
Range of <em>progressValue</em>: percent (0 to 100).
            </p>
 *
 * @type Number
 */
StatusNotification.prototype.progressValue = new Number();

/**
 * The Notification API provides a way to notify users of events that happen in an application.
 * <p>
For more information on the Notification features, see <a href="http://127.0.0.1:50053/help/topic/org.tizen.web.appprogramming/html/guide/ui_guide/notification.htm">Notification Guide</a>.
        </p>
 *
 * @type NotificationManager
 */
Tizen.prototype.notification = new NotificationManager();

/**
 * This interface invokes the success callback with an array of objects as an input parameter when the installed package list is retrieved.
          <p>
It is used in <em>tizen.package.getPackagesInfo()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PackageInformationArraySuccessCallback}
 */
function PackageInformationArraySuccessCallback() {};
PackageInformationArraySuccessCallback.prototype = new Object();

/**
 * This interface defines what is instantiated by the object from the Tizen Platform.
          <p>
There is a <em>tizen.package </em>object that allows access to Package API functionality.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PackageManagerObject}
 */
function PackageManagerObject() {};
PackageManagerObject.prototype = new Object();

/**
 * This callback interface specifies methods that are invoked when a package is installed, updated, or uninstalled.
 *
 * @super Object
 * @constructor
 * @return {PackageInformationEventCallback}
 */
function PackageInformationEventCallback() {};
PackageInformationEventCallback.prototype = new Object();

/**
 * This interface defines the metadata information available to an installed package.
 *
 * @super Object
 * @constructor
 * @return {PackageInformation}
 */
function PackageInformation() {};
PackageInformation.prototype = new Object();

/**
 * This interface defines the package manager.
 *
 * @super Object
 * @constructor
 * @return {PackageManager}
 */
function PackageManager() {};
PackageManager.prototype = new Object();

/**
 * This callback interface specifies subscriptions for any notification on the progress or completion of requests.
 *
 * @super Object
 * @constructor
 * @return {PackageProgressCallback}
 */
function PackageProgressCallback() {};
PackageProgressCallback.prototype = new Object();

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {array} informationArray
 * @type void
 * @memberOf PackageInformationArraySuccessCallback
 * @returns {void}
 */
PackageInformationArraySuccessCallback.prototype.onsuccess = function(informationArray){ return; };

/**
 * This API provides functionalities to install or uninstall packages, and retrieve information about installed packages.It also provides a listener method so that an application is able to be notified when there is a change on the installed packages. For more information on the Package features, see .
 *
 * @type PackageManager
 */
PackageManagerObject.prototype.package = new PackageManager();

/**
 * Called when a package is installed.
 *
 * @param {PackageInformation} info
 * @type void
 * @memberOf PackageInformationEventCallback
 * @returns {void}
 */
PackageInformationEventCallback.prototype.oninstalled = function(info){ return; };

/**
 * Called when a package is updated.
 *
 * @param {PackageInformation} info
 * @type void
 * @memberOf PackageInformationEventCallback
 * @returns {void}
 */
PackageInformationEventCallback.prototype.onupdated = function(info){ return; };

/**
 * Called when a package is uninstalled.
 *
 * @param {PackageId} id
 * @type void
 * @memberOf PackageInformationEventCallback
 * @returns {void}
 */
PackageInformationEventCallback.prototype.onuninstalled = function(id){ return; };

/**
 * An attribute to store the identifier of a package.
 *
 * @type PackageId
 */
PackageInformation.prototype.id = new PackageId();

/**
 * An attribute to store the package name.
 *
 * @type String
 */
PackageInformation.prototype.name = new String();

/**
 * An attribute to store the icon path of a package.
 *
 * @type String
 */
PackageInformation.prototype.iconPath = new String();

/**
 * An attribute to store the package version.
 *
 * @type String
 */
PackageInformation.prototype.version = new String();

/**
 * An attribute to store the total installed size(package + data) of a package.
 *
 * @type Number
 */
PackageInformation.prototype.totalSize = new Number();

/**
 * An attribute to store the current data size of a package.
 *
 * @type Number
 */
PackageInformation.prototype.dataSize = new Number();

/**
 * An attribute to store the latest installed or updated time of a package.
 *
 * @type Date
 */
PackageInformation.prototype.lastModified = new Date();

/**
 * An attribute to store the author of a package.
 *
 * @type String
 */
PackageInformation.prototype.author = new String();

/**
 * An attribute to store the package description.
 *
 * @type String
 */
PackageInformation.prototype.description = new String();

/**
 * An attribute to store the application ID list of a package.
 *
 * @type array
 */
PackageInformation.prototype.appIds = new array();

/**
 * Installs a package with a specified package path on a device.
            <p>
This API provides a way to notify the progress and completion of an installation request through PackageProgressCallback.
            </p>
            <p>
The <em>ErrorCallback() </em>is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If the package is not found in the specified path.              </li>
              <li>
UnknownError - If it is not allowed to install the package by platform or any other platform error occurs.              </li>
            </ul>
           
 *
 * @param {String} path
 * @param {PackageProgressCallback} progressCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf PackageManager
 * @returns {void}
 */
PackageManager.prototype.install = function(path, progressCallback, errorCallback){ return; };

/**
 * Uninstalls the package with a specified package ID.
            <p>
This API provides a way to notify about the progress and completion of an uninstallation request through PackageProgressCallback.
            </p>
            <p>
The <em>ErrorCallback() </em>is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If the package is not found with specified ID.              </li>
              <li>
UnknownError - If it is not allowed to uninstall the package from the platform or any other platform error occurs.              </li>
            </ul>
           
 *
 * @param {PackageId} id
 * @param {PackageProgressCallback} progressCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf PackageManager
 * @returns {void}
 */
PackageManager.prototype.uninstall = function(id, progressCallback, errorCallback){ return; };

/**
 * Gets information of the installed packages.
            <p>
The result contains the snapshots of the installed packages information.
            </p>
            <p>
The <em>errorCallback()</em> is launched with this error type:
            </p>
            <ul>
              <li>
UnknownError - If any other platform error occurs.              </li>
            </ul>
           
 *
 * @param {PackageInformationArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf PackageManager
 * @returns {void}
 */
PackageManager.prototype.getPackagesInfo = function(successCallback, errorCallback){ return; };

/**
 * Gets information of an installed package.
            <p>
If the ID is set to <var>null</var> or not set at all, it returns package information of the current application.
The list of installed packages and their package IDs is obtained using <em>getPackagesInfo()</em>.
            </p>
           
 *
 * @param {PackageId} id
 * @type PackageInformation
 * @memberOf PackageManager
 * @returns {PackageInformation}
 */
PackageManager.prototype.getPackageInfo = function(id){ var ret = new PackageInformation(); return ret; };

/**
 * Sets a listener to receive notifications for any changes made to the list of installed packages.
            <p>
This method sets a <em>PackageInformationEventCallback</em> type callback that is triggered when a package is installed, removed or updated.
            </p>
            <p>
The callback lasts until <em>unsetPackageInfoEventListener()</em> method is called.
            </p>
           
 *
 * @param {PackageInformationEventCallback} eventCallback
 * @type void
 * @memberOf PackageManager
 * @returns {void}
 */
PackageManager.prototype.setPackageInfoEventListener = function(eventCallback){ return; };

/**
 * Unsets the listener to stop receiving package notifications.
 *
 * @type void
 * @memberOf PackageManager
 * @returns {void}
 */
PackageManager.prototype.unsetPackageInfoEventListener = function(){ return; };

/**
 * Called while the request is in progress.
 *
 * @param {PackageId} id
 * @param {Number} progress
 * @type void
 * @memberOf PackageProgressCallback
 * @returns {void}
 */
PackageProgressCallback.prototype.onprogress = function(id, progress){ return; };

/**
 * Called while the request is completed.
 *
 * @param {PackageId} id
 * @type void
 * @memberOf PackageProgressCallback
 * @returns {void}
 */
PackageProgressCallback.prototype.oncomplete = function(id){ return; };

/**
 * This API provides functionalities to install or uninstall packages, and retrieve information about installed packages.It also provides a listener method so that an application is able to be notified when there is a change on the installed packages. For more information on the Package features, see .
 *
 * @type PackageManager
 */
Tizen.prototype.package = new PackageManager();

/**
 * This callback interface defines notification for the screen state changes.
 *
 * @super Object
 * @constructor
 * @return {ScreenStateChangeCallback}
 */
function ScreenStateChangeCallback() {};
ScreenStateChangeCallback.prototype = new Object();

/**
 * This interface is used to request resource states, however, these requests can be overridden by the system. If the requests are overridden, the application is notified with the provided listener callback.
 *
 * @super Object
 * @constructor
 * @return {PowerManager}
 */
function PowerManager() {};
PowerManager.prototype = new Object();

/**
 * This interface defines what is instantiated by the object from the Tizen Platform.
          <p>
There will be a <em>tizen.power </em>object that allows accessing of a functionality of the Power API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PowerManagerObject}
 */
function PowerManagerObject() {};
PowerManagerObject.prototype = new Object();

/**
 * Called on screen state change.
 *
 * @param {PowerScreenState} previousState
 * @param {PowerScreenState} changedState
 * @type void
 * @memberOf ScreenStateChangeCallback
 * @returns {void}
 */
ScreenStateChangeCallback.prototype.onchanged = function(previousState, changedState){ return; };

/**
 * Requests the minimum-state for a power resource.
 *
 * @param {PowerResource} resource
 * @param {PowerState} state
 * @type void
 * @memberOf PowerManager
 * @returns {void}
 */
PowerManager.prototype.request = function(resource, state){ return; };

/**
 * Releases the power state request for the given resource.
 *
 * @param {PowerResource} resource
 * @type void
 * @memberOf PowerManager
 * @returns {void}
 */
PowerManager.prototype.release = function(resource){ return; };

/**
 * Sets the screen state change callback and monitors its state changes.
 *
 * @param {ScreenStateChangeCallback} listener
 * @type void
 * @memberOf PowerManager
 * @returns {void}
 */
PowerManager.prototype.setScreenStateChangeListener = function(listener){ return; };

/**
 * Unsets the screen state change callback and stop monitoring it.
 *
 * @type void
 * @memberOf PowerManager
 * @returns {void}
 */
PowerManager.prototype.unsetScreenStateChangeListener = function(){ return; };

/**
 * Gets the screen brightness level of an application, from 0 to 1.
 *
 * @type Number
 * @memberOf PowerManager
 * @returns {Number}
 */
PowerManager.prototype.getScreenBrightness = function(){ var ret = new Number(); return ret; };

/**
 * Sets the screen brightness level for an application, from 0 to 1.
 *
 * @param {Number} brightness
 * @type void
 * @memberOf PowerManager
 * @returns {void}
 */
PowerManager.prototype.setScreenBrightness = function(brightness){ return; };

/**
 * Returns if the screen is on.
 *
 * @type Boolean
 * @memberOf PowerManager
 * @returns {Boolean}
 */
PowerManager.prototype.isScreenOn = function(){ var ret = new Boolean(); return ret; };

/**
 * Restores the screen brightness to the system default setting value.
 *
 * @type void
 * @memberOf PowerManager
 * @returns {void}
 */
PowerManager.prototype.restoreScreenBrightness = function(){ return; };

/**
 * Turns on the screen.
 *
 * @type void
 * @memberOf PowerManager
 * @returns {void}
 */
PowerManager.prototype.turnScreenOn = function(){ return; };

/**
 * Turns off the screen.
 *
 * @type void
 * @memberOf PowerManager
 * @returns {void}
 */
PowerManager.prototype.turnScreenOff = function(){ return; };

/**
 * This API provides support for requesting power management related resource states.
 * <p>
For more information on the Power features, see <a href="http://127.0.0.1:50053/help/topic/org.tizen.web.appprogramming/html/guide/sys_guide/power.htm">Power Guide</a>.
        </p>
 *
 * @type PowerManager
 */
PowerManagerObject.prototype.power = new PowerManager();

/**
 * This API provides support for requesting power management related resource states.
 * <p>
For more information on the Power features, see <a href="http://127.0.0.1:50053/help/topic/org.tizen.web.appprogramming/html/guide/sys_guide/power.htm">Power Guide</a>.
        </p>
 *
 * @type PowerManager
 */
Tizen.prototype.power = new PowerManager();

/**
 * This interface defines what is instantiated by the object from the Tizen Platform.
          <p>
There will be a <em>tizen.push </em>object that allows access to the functionality of the Push API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PushManagerObject}
 */
function PushManagerObject() {};
PushManagerObject.prototype = new Object();

/**
 * This interface specifies the success callback for push service registration request.
          <p>
This success callback is invoked when a push service registration request is successful.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PushRegisterSuccessCallback}
 */
function PushRegisterSuccessCallback() {};
PushRegisterSuccessCallback.prototype = new Object();

/**
 * This interface specifies the notification callback for the received push notification message.
          <p>
This notification callback is invoked when the push notification message arrives.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PushNotificationCallback}
 */
function PushNotificationCallback() {};
PushNotificationCallback.prototype = new Object();

/**
 * This interface provides methods to manage push registration and notification.
 *
 * @super Object
 * @constructor
 * @return {PushManager}
 */
function PushManager() {};
PushManager.prototype = new Object();

/**
 * This interface specifies the push message that is delivered from the push service.
 *
 * @super Object
 * @constructor
 * @return {PushMessage}
 */
function PushMessage() {};
PushMessage.prototype = new Object();

/**
 * This API provides the functionality for receiving push notifications from Tizen push server. The push service is a client daemon that maintains a permanent connection between your device and Tizen push server in order to process your registration and deregistration requests, deliver push notifications to applications on a device.
 * <p>
If the application is connected, the push service passes the notification data over
the connection. Otherwise, the push service posts UI notification with the data.
It will be delivered when a user launches the application by selecting the posting.
        </p>
 * <p>
To receive push notifications, follow the steps below:
        </p>
 * <ul>
 * <li>Get administrative permission for an application on your device
 * <li>Register the application
 * <li>Connect to the push service
 * <li>Get notification data
 * </ul>
 * <p>
For more information on the Push features, see <a href="http://127.0.0.1:50053/help/topic/org.tizen.web.appprogramming/html/guide/communication_guide/push.htm">Push Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/network.push
 * @type PushManager
 */
PushManagerObject.prototype.push = new PushManager();

/**
 * Called when a push service registration request is successful.
 *
 * @param {PushRegistrationId} id
 * @type void
 * @memberOf PushRegisterSuccessCallback
 * @returns {void}
 */
PushRegisterSuccessCallback.prototype.onsuccess = function(id){ return; };

/**
 * Called when the push notification message arrives.
 *
 * @param {PushMessage} message
 * @type void
 * @memberOf PushNotificationCallback
 * @returns {void}
 */
PushNotificationCallback.prototype.onsuccess = function(message){ return; };

/**
 * Registers an application to the Tizen push server.
 *
 * @param {ApplicationControl} appControl
 * @param {PushRegisterSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf PushManager
 * @returns {void}
 */
PushManager.prototype.registerService = function(appControl, successCallback, errorCallback){ return; };

/**
 * Unregisters an application from the Tizen push server.
 *
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf PushManager
 * @returns {void}
 */
PushManager.prototype.unregisterService = function(successCallback, errorCallback){ return; };

/**
 * Connects to the push service and receives push notifications.
 *
 * @param {PushNotificationCallback} notificationCallback
 * @type void
 * @memberOf PushManager
 * @returns {void}
 */
PushManager.prototype.connectService = function(notificationCallback){ return; };

/**
 * Disconnects to the push service and stop receiving push notifications.
 *
 * @type void
 * @memberOf PushManager
 * @returns {void}
 */
PushManager.prototype.disconnectService = function(){ return; };

/**
 * Gets the push service registration ID for this application if the registration process was successful. is returned if the application has not been registered yet.
 *
 * @type PushRegistrationId
 * @memberOf PushManager
 * @returns {PushRegistrationId}
 */
PushManager.prototype.getRegistrationId = function(){ var ret = new PushRegistrationId(); return ret; };

/**
 * An attribute to store the push notification data.
 * <p>
This data is the message that the sender wants to send and its length must be less than 1 KB.
            </p>
 *
 * @type String
 */
PushMessage.prototype.appData = new String();

/**
 * An attribute to store the push notification message that is displayed as an alert message to the user.
 *
 * @type String
 */
PushMessage.prototype.alertMessage = new String();

/**
 * An attribute to store the date/time when a push notification message is received.
 *
 * @type Date
 */
PushMessage.prototype.date = new Date();

/**
 * This API provides the functionality for receiving push notifications from Tizen push server. The push service is a client daemon that maintains a permanent connection between your device and Tizen push server in order to process your registration and deregistration requests, deliver push notifications to applications on a device.
 * <p>
If the application is connected, the push service passes the notification data over
the connection. Otherwise, the push service posts UI notification with the data.
It will be delivered when a user launches the application by selecting the posting.
        </p>
 * <p>
To receive push notifications, follow the steps below:
        </p>
 * <ul>
 * <li>Get administrative permission for an application on your device
 * <li>Register the application
 * <li>Connect to the push service
 * <li>Get notification data
 * </ul>
 * <p>
For more information on the Push features, see <a href="http://127.0.0.1:50053/help/topic/org.tizen.web.appprogramming/html/guide/communication_guide/push.htm">Push Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/network.push
 * @type PushManager
 */
Tizen.prototype.push = new PushManager();

/**
 * This interface specifies the success callback that is invoked when completes successfully.
          <p>
This callback interface specifies a success method with an array of bytes as an input parameter. It is used in <em>Channel.transmit()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {TransmitSuccessCallback}
 */
function TransmitSuccessCallback() {};
TransmitSuccessCallback.prototype = new Object();

/**
 * This interface specifies the success callback that is invoked when a channel is open to communicate with a specific applet.
          <p>
This callback interface specifies a success method with a <em>Channel</em> object as an input parameter.
It is used in asynchronous operations such as <em>Session.openBasicChannel() </em>or <em>Session.openLogicalChannel()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ChannelSuccessCallback}
 */
function ChannelSuccessCallback() {};
ChannelSuccessCallback.prototype = new Object();

/**
 * This interface is open to a Secure Element and offers methods to send Application Protocol Data Units(APDU) to the Secure Element. The channel is defined in the ISO7816-4.
 *
 * @super Object
 * @constructor
 * @return {Channel}
 */
function Channel() {};
Channel.prototype = new Object();

/**
 * This interface is connected to one of the readers and offers methods to control channels in a session.
 *
 * @super Object
 * @constructor
 * @return {Session}
 */
function Session() {};
Session.prototype = new Object();

/**
 * Defines what is instantiated by the Tizen object from the Tizen Platform.
          <p>
There is a <em>tizen.seService</em> object that allows access to the functionalities of the Secure Element API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SEServiceManagerObject}
 */
function SEServiceManagerObject() {};
SEServiceManagerObject.prototype = new Object();

/**
 * This callback interface provides a success callback that is invoked when a list of available Secure Element readers is retrieved.
          <p>
It specifies a success method with an array of <em>Reader</em> objects as an input parameter.
It is used in asynchronous operations such as <em>SEService.getReaders()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ReaderArraySuccessCallback}
 */
function ReaderArraySuccessCallback() {};
ReaderArraySuccessCallback.prototype = new Object();

/**
 * This interface provides the success callback that is invoked when a Secure Element reader is detected or lost.
          <p>
It is used in <em>SEService.registerSEListener()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SEChangeListener}
 */
function SEChangeListener() {};
SEChangeListener.prototype = new Object();

/**
 * This interface specifies the success callback that is invoked when a session on a specific reader is open.
          <p>
This callback interface specifies a success method with a <em>Session</em> object as an input parameter.
It is used in asynchronous operations such as <em>Reader.openSession()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SessionSuccessCallback}
 */
function SessionSuccessCallback() {};
SessionSuccessCallback.prototype = new Object();

/**
 * This interface provides access to the available Secure Element readers.
          <p>
It provides access to the API functionalities through the <em>tizen.seService</em> interface.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SEService}
 */
function SEService() {};
SEService.prototype = new Object();

/**
 * Reader interface that is connected to this device.
          <p>
This interface offers methods to control sessions on the reader.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {Reader}
 */
function Reader() {};
Reader.prototype = new Object();

/**
 * Called when an asynchronous call completes successfully.
 *
 * @param {array} response
 * @type void
 * @memberOf TransmitSuccessCallback
 * @returns {void}
 */
TransmitSuccessCallback.prototype.onsuccess = function(response){ return; };

/**
 * Called when an asynchronous call completes successfully.
 *
 * @param {Channel} channel
 * @type void
 * @memberOf ChannelSuccessCallback
 * @returns {void}
 */
ChannelSuccessCallback.prototype.onsuccess = function(channel){ return; };

/**
 * An attribute to check whether it is a basic channel or not.
 *
 * @type Boolean
 */
Channel.prototype.isBasicChannel = new Boolean();

/**
 * Closes a channel.
 *
 * @type void
 * @memberOf Channel
 * @returns {void}
 */
Channel.prototype.close = function(){ return; };

/**
 * Transmits an APDU command to a Secure Element. The APDU command is defined in ISO7816-4.
            <p>
Some commands that are not allowed to be sent are:
            </p>
            <ul>
              <li>
 MANAGE_CHANNEL commands.               </li>
              <li>
 SELECT by DF Name (p1=04).               </li>
              <li>
 The commands that CLA bytes with channel numbers are de-masked.               </li>
            </ul>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 InvalidValuesError - If the command contain an invalid value.              </li>
              <li>
 IOError - An error occurred while communicating with the Secure Element in the reader.              </li>
              <li>
 SecurityError - If the command is not allowed.              </li>
              <li>
 InvalidStateError - If this channel is closed.              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {array} command
 * @param {TransmitSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Channel
 * @returns {void}
 */
Channel.prototype.transmit = function(command, successCallback, errorCallback){ return; };

/**
 * An attribute to check whether a session is closed or not.
 *
 * @type Boolean
 */
Session.prototype.isClosed = new Boolean();

/**
 * Opens a basic channel in a session. The basic channel (defined in the ISO7816-4 specification) is opened by default and its channel ID is . Once this channel has been opened by an application, it is considered to be "locked" to other applications, and they cannot open any channel, until the basic channel is closed. Some Secure Elements might always deny opening a basic channel.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 IOError - If an error occurs while communicating with the Secure Element in the reader.              </li>
              <li>
 SecurityError - If access to this AID or the default application on this session is not allowed .              </li>
              <li>
 InvalidStateError - If this session is closed.               </li>
              <li>
 NotFoundError - If the application of the AID does not exist in the Secure Element.              </li>
              <li>
 NoChannelError - If basic channel is unavailable.              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {array} aid
 * @param {ChannelSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Session
 * @returns {void}
 */
Session.prototype.openBasicChannel = function(aid, successCallback, errorCallback){ return; };

/**
 * Opens a logical channel in a session by the specified applet id. The logical channel is defined in the ISO7816-4 specification.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 IOError - If an error occurs while communicating with the Secure Element in the reader.              </li>
              <li>
 SecurityError - If access to this AID or the default application in this session is not allowed.              </li>
              <li>
 InvalidStateError - If this session is closed.              </li>
              <li>
 NotFoundError - If the application of the AID does not exist in the Secure Element.              </li>
              <li>
 NoChannelError - If logical channel is unavailable.              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {array} aid
 * @param {ChannelSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Session
 * @returns {void}
 */
Session.prototype.openLogicalChannel = function(aid, successCallback, errorCallback){ return; };

/**
 * Gets the answer to reset(ATR) of a Secure Element.
 *
 * @type array
 * @memberOf Session
 * @returns {array}
 */
Session.prototype.getATR = function(){ var ret = new array(); return ret; };

/**
 * Closes a session.
 *
 * @type void
 * @memberOf Session
 * @returns {void}
 */
Session.prototype.close = function(){ return; };

/**
 * Closes all channels on this session.
 *
 * @type void
 * @memberOf Session
 * @returns {void}
 */
Session.prototype.closeChannels = function(){ return; };

/**
 * Secure Element is a secure smart card chip. It can be UICC/SIM, embedded Secure Element, or Secure SD card that is inserted in a device.
 * <p>
This API provides functionality to communicate with applications in several Secure Elements.
        </p>
 *
 * @feature http://tizen.org/feature/network.secure_element
 * @type SEService
 */
SEServiceManagerObject.prototype.seService = new SEService();

/**
 * Called when an asynchronous call completes successfully.
 *
 * @param {array} readers
 * @type void
 * @memberOf ReaderArraySuccessCallback
 * @returns {void}
 */
ReaderArraySuccessCallback.prototype.onsuccess = function(readers){ return; };

/**
 * Called when a Secure Element reader is detected.
 *
 * @param {Reader} reader
 * @type void
 * @memberOf SEChangeListener
 * @returns {void}
 */
SEChangeListener.prototype.onSEReady = function(reader){ return; };

/**
 * Called when a Secure Element reader is lost.
 *
 * @param {Reader} reader
 * @type void
 * @memberOf SEChangeListener
 * @returns {void}
 */
SEChangeListener.prototype.onSENotReady = function(reader){ return; };

/**
 * Called when an asynchronous call completes successfully.
 *
 * @param {Session} session
 * @type void
 * @memberOf SessionSuccessCallback
 * @returns {void}
 */
SessionSuccessCallback.prototype.onsuccess = function(session){ return; };

/**
 * Gets all the available Secure Element readers.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 UnknownError - If any error occurs during retrieval.              </li>
            </ul>
           
 *
 * @param {ReaderArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf SEService
 * @returns {void}
 */
SEService.prototype.getReaders = function(successCallback, errorCallback){ return; };

/**
 * Registers a callback function that is invoked when an available Secure Element reader is detected.
 *
 * @param {SEChangeListener} listener
 * @type Number
 * @memberOf SEService
 * @returns {Number}
 */
SEService.prototype.registerSEListener = function(listener){ var ret = new Number(); return ret; };

/**
 * Unregisters the listener from notifying any detection of an available Secure Element reader.
 *
 * @param {Number} id
 * @type void
 * @memberOf SEService
 * @returns {void}
 */
SEService.prototype.unregisterSEListener = function(id){ return; };

/**
 * Shuts down Secure Elements after releasing all resources.
 *
 * @type void
 * @memberOf SEService
 * @returns {void}
 */
SEService.prototype.shutdown = function(){ return; };

/**
 * An attribute to check whether a Secure Element is present on a reader.
 *
 * @type Boolean
 */
Reader.prototype.isPresent = new Boolean();

/**
 * Gets reader's name.
 *
 * @type String
 * @memberOf Reader
 * @returns {String}
 */
Reader.prototype.getName = function(){ var ret = new String(); return ret; };

/**
 * Opens a session on a reader.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 IOError - An error occurred in communication with the Secure Element in this reader.              </li>
              <li>
 InvalidStateError - If a Secure Element is not present on this reader.              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {SessionSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Reader
 * @returns {void}
 */
Reader.prototype.openSession = function(successCallback, errorCallback){ return; };

/**
 * Closes all sessions opened on a reader.
 *
 * @type void
 * @memberOf Reader
 * @returns {void}
 */
Reader.prototype.closeSessions = function(){ return; };

/**
 * Secure Element is a secure smart card chip. It can be UICC/SIM, embedded Secure Element, or Secure SD card that is inserted in a device.
 * <p>
This API provides functionality to communicate with applications in several Secure Elements.
        </p>
 *
 * @feature http://tizen.org/feature/network.secure_element
 * @type SEService
 */
Tizen.prototype.seService = new SEService();

/**
 * This property reflects the information of the device orientation in this system.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoDeviceOrientation}
 */
function SystemInfoDeviceOrientation() {};
SystemInfoDeviceOrientation.prototype = new SystemInfoProperty();

/**
 * This property reflects the locale information of the current device.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoLocale}
 */
function SystemInfoLocale() {};
SystemInfoLocale.prototype = new SystemInfoProperty();

/**
 * This property reflects the information of the current device.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoBuild}
 */
function SystemInfoBuild() {};
SystemInfoBuild.prototype = new SystemInfoProperty();

/**
 * This property reflects the state of the CPUs available to this system.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoCpu}
 */
function SystemInfoCpu() {};
SystemInfoCpu.prototype = new SystemInfoProperty();

/**
 * This property exposes the data storage devices connected to this system.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoStorage}
 */
function SystemInfoStorage() {};
SystemInfoStorage.prototype = new SystemInfoProperty();

/**
 * Defines what is instantiated by the object from the Tizen Platform.
          <p>
There will be a tizen.systeminfo object that allows accessing the
functionality of the SystemInfo API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SystemInfoObject}
 */
function SystemInfoObject() {};
SystemInfoObject.prototype = new Object();

/**
 * SystemInfoDeviceCapability object.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoDeviceCapability}
 */
function SystemInfoDeviceCapability() {};
SystemInfoDeviceCapability.prototype = new Object();

/**
 * This property reflects the general state of the system's battery
 *
 * @super Object
 * @constructor
 * @return {SystemInfoBattery}
 */
function SystemInfoBattery() {};
SystemInfoBattery.prototype = new SystemInfoProperty();

/**
 * This property reflects the information of the Wi-Fi network in this system.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoWifiNetwork}
 */
function SystemInfoWifiNetwork() {};
SystemInfoWifiNetwork.prototype = new SystemInfoProperty();

/**
 * This property reflects the peripheral information of the current device.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoPeripheral}
 */
function SystemInfoPeripheral() {};
SystemInfoPeripheral.prototype = new SystemInfoProperty();

/**
 * Systemfinfo specific success callback.
          <p>
This callback interface specifies a success callback with SystemInfoProperty as input argument. 
It is used in asynchronous
operations, such as getPropertyValue() or addPropertyValueChangeListener()
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SystemInfoPropertySuccessCallback}
 */
function SystemInfoPropertySuccessCallback() {};
SystemInfoPropertySuccessCallback.prototype = new Object();

/**
 * This property reflects the information of the Display.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoDisplay}
 */
function SystemInfoDisplay() {};
SystemInfoDisplay.prototype = new SystemInfoProperty();

/**
 * This entry interface queries the information of a system.
          <p>
This API offers methods for retrieving system information
and for subscribing notifications of system information changes.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SystemInfo}
 */
function SystemInfo() {};
SystemInfo.prototype = new Object();

/**
 * This property reflects the information of the SIM card information.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoSIM}
 */
function SystemInfoSIM() {};
SystemInfoSIM.prototype = new SystemInfoProperty();

/**
 * This is a common abstract interface used by different types of system information objects.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoProperty}
 */
function SystemInfoProperty() {};
SystemInfoProperty.prototype = new Object();

/**
 * This property reflects the information of the Cellular network in this system.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoCellularNetwork}
 */
function SystemInfoCellularNetwork() {};
SystemInfoCellularNetwork.prototype = new SystemInfoProperty();

/**
 * This property reflects the information of the data network in this system.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoNetwork}
 */
function SystemInfoNetwork() {};
SystemInfoNetwork.prototype = new SystemInfoProperty();

/**
 * This property exposes a single storage device connected to this system.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoStorageUnit}
 */
function SystemInfoStorageUnit() {};
SystemInfoStorageUnit.prototype = new SystemInfoProperty();

/**
 * Represents the status of the current device orientation.
 *
 * @type SystemInfoDeviceOrientationStatus
 */
SystemInfoDeviceOrientation.prototype.status = new SystemInfoDeviceOrientationStatus();

/**
 * Indicates the current language setting in the (LANGUAGE)_(REGION) syntax. The language setting is in the ISO 630-2 format and the region setting is in the ISO 3166-1 format. The language setting is case-sensitive.
 *
 * @type String
 */
SystemInfoLocale.prototype.language = new String();

/**
 * Indicates the current country setting in the (LANGUAGE)_(REGION) syntax. The language setting is in the ISO 630-2 format and the region setting is in the ISO 3166-1 format. The country setting is case-sensitive.
 *
 * @type String
 */
SystemInfoLocale.prototype.country = new String();

/**
 * Represents the model name of the current device.
 *
 * @type String
 */
SystemInfoBuild.prototype.model = new String();

/**
 * Represents the manufacturer of the device.
 *
 * @type String
 */
SystemInfoBuild.prototype.manufacturer = new String();

/**
 * An attribute to indicate the current CPU load, as a number between and , representing the minimum and maximum values allowed on this system. Any threshold parameter used in a watch function to monitor this property applies to this attribute.
 *
 * @type Number
 */
SystemInfoCpu.prototype.load = new Number();

/**
 * The array of storage units connected to this device.
 *
 * @type array
 */
SystemInfoStorage.prototype.units = new array();

/**
 * This specification defines interfaces and methods that provide web applications with access to various properties of a system.
 * <p>
This API also provides interfaces and methods that can retrieve statuses of hardware devices, get the value of selected properties, and subscribe to asynchronous notifications of changes for selected values. 
        </p>
 * <p>
The following provides an overview of the tree data structure:
        </p>
 * <ul>
 * <li>BATTERY
 * <li>CPU
 * <li>STORAGE
 * <li>DISPLAY
 * <li>DEVICE_ORIENTATION
 * <li>BUILD
 * <li>LOCALE
 * <li>NETWORK
 * <li>WIFI_NETWORK
 * <li>CELLULAR_NETWORK
 * <li>SIM
 * <li>PERIPHERAL
 * </ul>
 * <p>
For more information on the SystemInfo features, see <a href="http://127.0.0.1:50053/help/topic/org.tizen.web.appprogramming/html/guide/sys_guide/systeminfo.htm">System Information Guide</a>.
        </p>
 *
 * @type SystemInfo
 */
SystemInfoObject.prototype.systeminfo = new SystemInfo();

/**
 * Indicates whether the device supports Bluetooth.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.bluetooth = new Boolean();

/**
 * Indicates whether the device supports NFC.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.nfc = new Boolean();

/**
 * Indicates whether the device supports NFC reserved push.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.nfcReservedPush = new Boolean();

/**
 * The number of point in Multi-point touch.
 *
 * @type Number
 */
SystemInfoDeviceCapability.prototype.multiTouchCount = new Number();

/**
 * Indicates whether the device supports Keyboard.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.inputKeyboard = new Boolean();

/**
 * Indicates whether the device supports the built-in keyboard layout.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.inputKeyboardLayout = new Boolean();

/**
 * Indicates whether the device supports Wi-Fi.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.wifi = new Boolean();

/**
 * Indicates whether the device supports Wi-Fi direct.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.wifiDirect = new Boolean();

/**
 * Indicates whether the device supports OpenGL-ES.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.opengles = new Boolean();

/**
 * The device 3DC texture format for OpenGL-ES. One example of possible output is as follows: "3dc/atc/etc/ptc/pvrtc/utc"
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.openglestextureFormat = new String();

/**
 * Indicates whether the device supports OpenGL-ES version 1.1.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.openglesVersion1_1 = new Boolean();

/**
 * Indicates whether the device supports OpenGL-ES version 2.0.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.openglesVersion2_0 = new Boolean();

/**
 * Indicates whether the device supports FM radio.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.fmRadio = new Boolean();

/**
 * The version of the platform in the format. For example, represents a platform version where the major version is and the minor and build versions are .
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.platformVersion = new String();

/**
 * The version of the Web API in the format. For example, represents a web api version where the major version is and the minor version is .
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.webApiVersion = new String();

/**
 * The version of the native API in the format.For example, represents a native api version where the major version is and the minor version is .
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.nativeApiVersion = new String();

/**
 * The name of the platform.
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.platformName = new String();

/**
 * Indicates whether the device supports camera.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.camera = new Boolean();

/**
 * Indicates whether the device supports front camera.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.cameraFront = new Boolean();

/**
 * Indicates whether the device supports flash on the front camera.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.cameraFrontFlash = new Boolean();

/**
 * Indicates whether the device supports back-side camera.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.cameraBack = new Boolean();

/**
 * Indicates whether the device supports flash on the back-side camera.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.cameraBackFlash = new Boolean();

/**
 * Indicates whether the device supports CPS or not.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.location = new Boolean();

/**
 * Indicates whether the device supports GPS based location feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.locationGps = new Boolean();

/**
 * Indicates whether the device supports WPS based location feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.locationWps = new Boolean();

/**
 * Indicates whether the device supports microphone.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.microphone = new Boolean();

/**
 * Indicates whether the device supports USB host.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.usbHost = new Boolean();

/**
 * Indicates whether the device supports USB accessory.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.usbAccessory = new Boolean();

/**
 * Indicates whether the device supports RCA output.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.screenOutputRca = new Boolean();

/**
 * Indicates whether the device supports HDMI output.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.screenOutputHdmi = new Boolean();

/**
 * The device CPU architecture. The possible values for this attribute are: armv6, armv7, x86, llvm.
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.platformCoreCpuArch = new String();

/**
 * The device FPU architecture. The possible values for this attribute are: vfpv3 / sse2 / sse3 / ssse3.
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.platformCoreFpuArch = new String();

/**
 * Indicates whether the device supports VOIP.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.sipVoip = new Boolean();

/**
 * The device unique ID.
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.duid = new String();

/**
 * Indicates whether the device supports speech recognition.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.speechRecognition = new Boolean();

/**
 * Indicates whether the device supports speech synthesis.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.speechSynthesis = new Boolean();

/**
 * Indicates whether the device supports Accelerometer sensor.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.accelerometer = new Boolean();

/**
 * Indicates whether the device supports Accelerometer sensor wake-up feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.accelerometerWakeup = new Boolean();

/**
 * Indicates whether the device supports Barometer sensor.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.barometer = new Boolean();

/**
 * Indicates whether the device supports Barometer sensor wake-up feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.barometerWakeup = new Boolean();

/**
 * Indicates whether the device supports Gyroscope sensor.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.gyroscope = new Boolean();

/**
 * Indicates whether the device supports Gyroscope sensor wake-up feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.gyroscopeWakeup = new Boolean();

/**
 * Indicates whether the device supports Magnetometer sensor.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.magnetometer = new Boolean();

/**
 * Indicates whether the device supports Magnetometer sensor wake-up feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.magnetometerWakeup = new Boolean();

/**
 * Indicates whether the device supports Photometer sensor.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.photometer = new Boolean();

/**
 * Indicates whether the device supports Photometer sensor wake-up feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.photometerWakeup = new Boolean();

/**
 * Indicates whether the device supports Proximity sensor.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.proximity = new Boolean();

/**
 * Indicates whether the device supports Proximity sensor wake-up feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.proximityWakeup = new Boolean();

/**
 * Indicates whether the device supports Tiltmeter sensor.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.tiltmeter = new Boolean();

/**
 * Indicates whether the device supports Tiltmeter sensor wake-up feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.tiltmeterWakeup = new Boolean();

/**
 * Indicates whether the device supports data encryption.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.dataEncryption = new Boolean();

/**
 * Indicates whether the device supports hardware acceleration for 2D/3D graphics.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.graphicsAcceleration = new Boolean();

/**
 * Indicates whether the device supports push service.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.push = new Boolean();

/**
 * Indicates whether the device supports the telephony feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.telephony = new Boolean();

/**
 * Indicates whether the device supports the mms feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.telephonyMms = new Boolean();

/**
 * Indicates whether the device supports the sms feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.telephonySms = new Boolean();

/**
 * Indicates whether the device supports the screen normal size.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.screenSizeNormal = new Boolean();

/**
 * Indicates whether the device supports the 480 * 800 screen size.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.screenSize480_800 = new Boolean();

/**
 * Indicates whether the device supports the 720 * 1280 screen size.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.screenSize720_1280 = new Boolean();

/**
 * Indicates whether the device supports auto rotation.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.autoRotation = new Boolean();

/**
 * Indicates whether the device supports shell app widget.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.shellAppWidget = new Boolean();

/**
 * Indicates whether the device supports vision image recognition.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.visionImageRecognition = new Boolean();

/**
 * Indicates whether the device supports vision qrcode generation.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.visionQrcodeGeneration = new Boolean();

/**
 * Indicates whether the device supports vision qrcode recognition.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.visionQrcodeRecognition = new Boolean();

/**
 * Indicates whether the device supports vision face recognition.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.visionFaceRecognition = new Boolean();

/**
 * Indicates whether the device supports secure element.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.secureElement = new Boolean();

/**
 * Indicates whether the device supports native osp API.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.nativeOspCompatible = new Boolean();

/**
 * An attribute to specify the remaining level of an internal battery, scaled from to :
 * <ul>
 * <li>indicates that the battery level is the lowest and the system is about to enter shutdown mode.
 * <li>indicates that the system's charge is maximum.
 * </ul>
 * <p>
Any threshold parameter used in a watch operation to monitor this property applies to this attribute.
            </p>
 *
 * @type Number
 */
SystemInfoBattery.prototype.level = new Number();

/**
 * Indicates whether the battery source is currently charging.
 *
 * @type Boolean
 */
SystemInfoBattery.prototype.isCharging = new Boolean();

/**
 * Represents the status (ON or OFF) of the Wi-Fi interface.
 *
 * @type String
 */
SystemInfoWifiNetwork.prototype.status = new String();

/**
 * Represents the SSID of a Wi-Fi network.
 *
 * @type String
 */
SystemInfoWifiNetwork.prototype.ssid = new String();

/**
 * Represents the IPv4 address of Wi-Fi network.
 *
 * @type String
 */
SystemInfoWifiNetwork.prototype.ipAddress = new String();

/**
 * Represents the IPv6 address of Wi-Fi network.
 *
 * @type String
 */
SystemInfoWifiNetwork.prototype.ipv6Address = new String();

/**
 * This connection's signal strength, as a normalized value between 0 (no signal detected) and 1 (the level is at its maximum value).
 *
 * @type Number
 */
SystemInfoWifiNetwork.prototype.signalStrength = new Number();

/**
 * Represents the video out status.
 *
 * @type Boolean
 */
SystemInfoPeripheral.prototype.isVideoOutputOn = new Boolean();

/**
 * Method invoked when the asynchronous call completes successfully.
 *
 * @param {SystemInfoProperty} prop
 * @type void
 * @memberOf SystemInfoPropertySuccessCallback
 * @returns {void}
 */
SystemInfoPropertySuccessCallback.prototype.onsuccess = function(prop){ return; };

/**
 * The total number of addressable pixels in the horizontal direction of a rectangular entity (such as Camera, Display, Image, Video, ...) when held in its default orientation.
 *
 * @type Number
 */
SystemInfoDisplay.prototype.resolutionWidth = new Number();

/**
 * The total number of addressable pixels in the vertical direction of a rectangular element (such as Camera, Display, Image, Video, ...) when held in its default orientation.
 *
 * @type Number
 */
SystemInfoDisplay.prototype.resolutionHeight = new Number();

/**
 * Resolution of this device, along its width, in dots per inch.
 *
 * @type Number
 */
SystemInfoDisplay.prototype.dotsPerInchWidth = new Number();

/**
 * Resolution of this device, along its height, in dots per inch.
 *
 * @type Number
 */
SystemInfoDisplay.prototype.dotsPerInchHeight = new Number();

/**
 * The display's physical width in millimeters.
 *
 * @type Number
 */
SystemInfoDisplay.prototype.physicalWidth = new Number();

/**
 * The display's physical height in millimeters.
 *
 * @type Number
 */
SystemInfoDisplay.prototype.physicalHeight = new Number();

/**
 * The current brightness of a display ranging between to .
 *
 * @type Number
 */
SystemInfoDisplay.prototype.brightness = new Number();

/**
 * Gets the capabilities of the device.
            <p>
The function must synchronously acquire the capabilities of the device. 
            </p>
           
 *
 * @type SystemInfoDeviceCapability
 * @memberOf SystemInfo
 * @returns {SystemInfoDeviceCapability}
 */
SystemInfo.prototype.getCapabilities = function(){ var ret = new SystemInfoDeviceCapability(); return ret; };

/**
 * Gets the current value of a specified system property.
            <p>
The function must asynchronously acquire the current value of the requested property. If it is successful,
the successCallback must be invoked with an object containing the information provided by the property.
            </p>
            <p>
The <em>errorCallback() </em>can be launched with any of these error types:
            </p>
            <ul>
              <li>
NotFoundError - If the property is not recognized.              </li>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {SystemInfoPropertyId} property
 * @param {SystemInfoPropertySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf SystemInfo
 * @returns {void}
 */
SystemInfo.prototype.getPropertyValue = function(property, successCallback, errorCallback){ return; };

/**
 * Adds a listener to allow tracking of changes in one or more system properties.
            <p>
When called, it immediately returns and then asynchronously starts a watch process defined by the following steps:
            </p>
            <p>
1. Acquire the system's current values for the property requested. 
If successful, it invokes the associated successCallback,
passing the resulting property value. 
The type of the passed object is indicated by the property's value type in the definitions below.
For example, when <var>BATTERY</var> is passed for <em>SystemInfoPropertyId</em>, <em>SystemInfoBattery </em>object is returned.<br/>            </p>
            <p>
2. Register the successCallback to receive system events that the status of the requested properties may have changed.
            </p>
            <p>
3. When a system event is successfully received invoke the associated successCallback with an object containing the property
values.
            </p>
            <p>
4. Repeat step 3 until removePropertyValueChangeListener function is called.
            </p>
           
 *
 * @param {SystemInfoPropertyId} property
 * @param {SystemInfoPropertySuccessCallback} successCallback
 * @param {SystemInfoOptions} options
 * @type Number
 * @memberOf SystemInfo
 * @returns {Number}
 */
SystemInfo.prototype.addPropertyValueChangeListener = function(property, successCallback, options){ var ret = new Number(); return ret; };

/**
 * Unsubscribes notifications for property changes set up by addPropertyValueChangeListener.
            <p>
If a valid listenerId argument is passed that corresponds to a subscription
already place, then the watch process MUST immediately terminate and no further
callback is invoked. If the listenerId argument does not correspond to a valid subscription,
the method should return without any further action.
            </p>
           
 *
 * @param {Number} listenerId
 * @type void
 * @memberOf SystemInfo
 * @returns {void}
 */
SystemInfo.prototype.removePropertyValueChangeListener = function(listenerId){ return; };

/**
 * Represents the SIM card state.
 *
 * @type SystemInfoSimState
 */
SystemInfoSIM.prototype.state = new SystemInfoSimState();

/**
 * Represents the Operator Name String (ONS) of Common PCN Handset Specification (CPHS) in SIM card.
 *
 * @type String
 */
SystemInfoSIM.prototype.operatorName = new String();

/**
 * Represents the SIM card subscriber number.
 *
 * @type String
 */
SystemInfoSIM.prototype.msisdn = new String();

/**
 * Represents the Integrated Circuit Card ID.
 *
 * @type String
 */
SystemInfoSIM.prototype.iccid = new String();

/**
 * Represents the Mobile Country Code (MCC) of SIM provider.
 *
 * @type Number
 */
SystemInfoSIM.prototype.mcc = new Number();

/**
 * Represents the Mobile Network Code (MNC) of SIM provider.
 *
 * @type Number
 */
SystemInfoSIM.prototype.mnc = new Number();

/**
 * Represents the Mobile Subscription Identification Number (MSIN) of SIM provider.
 *
 * @type String
 */
SystemInfoSIM.prototype.msin = new String();

/**
 * Represents the Service Provider Name (SPN) of SIM card.
 *
 * @type String
 */
SystemInfoSIM.prototype.spn = new String();

/**
 * Represents the status (ON or OFF) of the cellular network.
 *
 * @type String
 */
SystemInfoCellularNetwork.prototype.status = new String();

/**
 * Represents an Access Point Name of the cellular network.
 *
 * @type String
 */
SystemInfoCellularNetwork.prototype.apn = new String();

/**
 * Represents the IPv4 address of the cellular network.
 *
 * @type String
 */
SystemInfoCellularNetwork.prototype.ipAddress = new String();

/**
 * Represents the IPv6 address of the cellular network.
 *
 * @type String
 */
SystemInfoCellularNetwork.prototype.ipv6Address = new String();

/**
 * Represents Mobile Country Code (MCC) of the cellular network.
 *
 * @type Number
 */
SystemInfoCellularNetwork.prototype.mcc = new Number();

/**
 * Represents Mobile Network Code (MNC) of the cellular network. MNC is used in combination with MCC (also known as a "MCC / MNC tuple") to uniquely identify a mobile phone operator/carrier using the GSM, CDMA, iDEN, TETRA and UMTS public land mobile networks and some satellite mobile networks.
 *
 * @type Number
 */
SystemInfoCellularNetwork.prototype.mnc = new Number();

/**
 * Represents Cell Id.
 *
 * @type Number
 */
SystemInfoCellularNetwork.prototype.cellId = new Number();

/**
 * Represents Location Area Code.
 *
 * @type Number
 */
SystemInfoCellularNetwork.prototype.lac = new Number();

/**
 * Whether the connection is set up while the device is roaming.
 *
 * @type Boolean
 */
SystemInfoCellularNetwork.prototype.isRoaming = new Boolean();

/**
 * Indicates whether the device is in flight mode.
 *
 * @type Boolean
 */
SystemInfoCellularNetwork.prototype.isFlightMode = new Boolean();

/**
 * Represents the International Mobile Equipment Identity (IMEI).
 *
 * @type String
 */
SystemInfoCellularNetwork.prototype.imei = new String();

/**
 * Represents the network type of the current data network.
 *
 * @type SystemInfoNetworkType
 */
SystemInfoNetwork.prototype.networkType = new SystemInfoNetworkType();

/**
 * The type of a storage device. The value is one of the constants defined for this type.
 * <p>
The supported storage unit types are:
            </p>
 * <ul>
 * <li>UNKNOWN
 * <li>INTERNAL
 * <li>USB_HOST
 * <li>MMC
 * </ul>
 *
 * @type String
 */
SystemInfoStorageUnit.prototype.type = new String();

/**
 * The amount of data that this device can hold, in bytes.
 *
 * @type Number
 */
SystemInfoStorageUnit.prototype.capacity = new Number();

/**
 * The amount of available data that this device can hold, in bytes.
 *
 * @type Number
 */
SystemInfoStorageUnit.prototype.availableCapacity = new Number();

/**
 * An attribute to indicate whether a device can be removed or not.
 * <p>
The following values are supported:
            </p>
 * <ul>
 * <li>- If this storage unit can be removed from the system (such as an sdcard unplugged)
 * <li>- If this storage unit cannot be removed from the system
 * </ul>
 *
 * @type Boolean
 */
SystemInfoStorageUnit.prototype.isRemovable = new Boolean();

/**
 * true if this unit can be removed from the system (such as an sdcard unplugged), false otherwise.
 *
 * @type Boolean
 */
SystemInfoStorageUnit.prototype.isRemoveable = new Boolean();

/**
 * This specification defines interfaces and methods that provide web applications with access to various properties of a system.
 * <p>
This API also provides interfaces and methods that can retrieve statuses of hardware devices, get the value of selected properties, and subscribe to asynchronous notifications of changes for selected values. 
        </p>
 * <p>
The following provides an overview of the tree data structure:
        </p>
 * <ul>
 * <li>BATTERY
 * <li>CPU
 * <li>STORAGE
 * <li>DISPLAY
 * <li>DEVICE_ORIENTATION
 * <li>BUILD
 * <li>LOCALE
 * <li>NETWORK
 * <li>WIFI_NETWORK
 * <li>CELLULAR_NETWORK
 * <li>SIM
 * <li>PERIPHERAL
 * </ul>
 * <p>
For more information on the SystemInfo features, see <a href="http://127.0.0.1:50053/help/topic/org.tizen.web.appprogramming/html/guide/sys_guide/systeminfo.htm">System Information Guide</a>.
        </p>
 *
 * @type SystemInfo
 */
Tizen.prototype.systeminfo = new SystemInfo();

/**
 * This is the top-level interface for the SystemSetting API that provides access to the module functionalities.
 *
 * @super Object
 * @constructor
 * @return {SystemSettingManager}
 */
function SystemSettingManager() {};
SystemSettingManager.prototype = new Object();

/**
 * The success callback for getProperty().
 *
 * @super Object
 * @constructor
 * @return {SystemSettingSuccessCallback}
 */
function SystemSettingSuccessCallback() {};
SystemSettingSuccessCallback.prototype = new Object();

/**
 * This interface defines what is instantiated by the object from the Tizen Platform.
          <p>
There will be a <em>tizen.systemsetting </em>object that allows accessing the functionality of the SystemSetting API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SystemSettingObject}
 */
function SystemSettingObject() {};
SystemSettingObject.prototype = new Object();

/**
 * Sets the property of a device.
            <p>
This method allows the user to set the image or sound file specified as an input parameter as the wallpaper or ringtone of a device.
            </p>
           
 *
 * @param {SystemSettingType} type
 * @param {String} value
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf SystemSettingManager
 * @returns {void}
 */
SystemSettingManager.prototype.setProperty = function(type, value, successCallback, errorCallback){ return; };

/**
 * Gets the value of the property of a device.
            <p>
This method allows the user to get the value of the specified system property as wallpaper or ringtone of a device.
            </p>
           
 *
 * @param {SystemSettingType} type
 * @param {SystemSettingSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf SystemSettingManager
 * @returns {void}
 */
SystemSettingManager.prototype.getProperty = function(type, successCallback, errorCallback){ return; };

/**
 * 
 *
 * @param {String} value
 * @type void
 * @memberOf SystemSettingSuccessCallback
 * @returns {void}
 */
SystemSettingSuccessCallback.prototype.onsuccess = function(value){ return; };

/**
 * This API provides interfaces and methods providing Web applications with access to various values of the system.
 * <p>
This API provides an interface and method through features such as:
        </p>
 * <ul>
 * <li>HOME_SCREEN
 * <li>LOCK_SCREEN
 * <li>INCOMING_CALL
 * <li>NOTIFICATION_EMAIL
 * </ul>
 * <p>
For more information on the SystemSetting features, see <a href="http://127.0.0.1:50053/help/topic/org.tizen.web.appprogramming/html/guide/sys_guide/systemsetting.htm">System Setting Guide</a>.
        </p>
 *
 * @type SystemSettingManager
 */
SystemSettingObject.prototype.systemsetting = new SystemSettingManager();

/**
 * This API provides interfaces and methods providing Web applications with access to various values of the system.
 * <p>
This API provides an interface and method through features such as:
        </p>
 * <ul>
 * <li>HOME_SCREEN
 * <li>LOCK_SCREEN
 * <li>INCOMING_CALL
 * <li>NOTIFICATION_EMAIL
 * </ul>
 * <p>
For more information on the SystemSetting features, see <a href="http://127.0.0.1:50053/help/topic/org.tizen.web.appprogramming/html/guide/sys_guide/systemsetting.htm">System Setting Guide</a>.
        </p>
 *
 * @type SystemSettingManager
 */
Tizen.prototype.systemsetting = new SystemSettingManager();

/**
 * Defines what is instantiated in the tizen object by the Tizen Platform.
          <p>
There will be a tizen.time object that allows accessing the
functionality of the Time API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {TimeManagerObject}
 */
function TimeManagerObject() {};
TimeManagerObject.prototype = new Object();

/**
 * The TimeUtil class that provides access to the time API.
          <p>
This interface offers methods to manage date / time as well as timezones such as:
          </p>
          <ul>
            <li>
Get the current date / time using getCurrentDateTime().            </li>
            <li>
Get timezones using getLocalTimezone() and getAvailableTimezones().            </li>
          </ul>
         
 *
 * @super Object
 * @constructor
 * @return {TimeUtil}
 */
function TimeUtil() {};
TimeUtil.prototype = new Object();

/**
 * The TZDate object represents information regarding a given date / time in a predefined timezone.
 *
 * @super Object
 * @constructor
 * @return {TZDate}
 */
function TZDate() {};
TZDate.prototype = new Object();

/**
 * The TimeDuration object that contains the length and its associated time unit.
 *
 * @super Object
 * @constructor
 * @return {TimeDuration}
 */
function TimeDuration() {};
TimeDuration.prototype = new Object();

/**
 * The Time API provides information regarding date / time and time zones.
 * <p>
The JavaScript Date object does not have full timezone support.
Date objects allow only simple representations to denote a particular location's
offset from Universal Coordinated Time (UTC). This is typically provided as a +/-
offset from UTC-0 (also known as Greenwich Mean Time, or GMT) for example, +05:30 denotes
that a location is 5 hours and 30 minutes ahead of UTC +00:00.
The issue with this method is not getting the correct
local time for a given date. The existing methods are sufficient for this purpose.
The issue is correctly converting to and from local time and UTC for all points in
time - in any of the past, present, and future - based on an initial time provided.
This is important for defining relative dates, where a time in a given location may
observe different UTC offsets, according to any Daylight Savings Rules (DST) in effect
or any other changes that may occur to a location's time zone over time.
Without the communication of the explicit time zone rules governing a given date and
time, the ability to effectively calculate the offset of the local time to UTC or to
any other time zone at any point in the past or future is lost. 
        </p>
 * <p>
This API can be used to get TZDate objects with full tim zone support, convert them
between timezones, retrieve available timezones.
        </p>
 * <p>
For more information on the Time features, see <a href="http://127.0.0.1:50053/help/topic/org.tizen.web.appprogramming/html/guide/sys_guide/time.htm">Time Guide</a>. 
        </p>
 *
 * @type TimeUtil
 */
TimeManagerObject.prototype.time = new TimeUtil();

/**
 * Returns the current date / time.
 *
 * @type TZDate
 * @memberOf TimeUtil
 * @returns {TZDate}
 */
TimeUtil.prototype.getCurrentDateTime = function(){ var ret = new TZDate(); return ret; };

/**
 * Returns identifier of the local system timezone.
 *
 * @type String
 * @memberOf TimeUtil
 * @returns {String}
 */
TimeUtil.prototype.getLocalTimezone = function(){ var ret = new String(); return ret; };

/**
 * Returns synchronously the identifiers of the timezones supported by the device.
            <p>
Zero or more slashes separate different components of a timezone identifier,
with the most general descriptor first and the most specific one last. For example,
'Europe/Berlin', 'America/Argentina/Buenos_Aires'.
            </p>
           
 *
 * @type array
 * @memberOf TimeUtil
 * @returns {array}
 */
TimeUtil.prototype.getAvailableTimezones = function(){ var ret = new array(); return ret; };

/**
 * 
            <p>
Returns the date format according to the system's locale settings.
            </p>
            <p>
These expressions may be used in the returned string:
            </p>
            <ul>
              <li>
"d" = day number (1 to 31)              </li>
              <li>
"D" = day name              </li>
              <li>
"m" = month number (1 to 12)              </li>
              <li>
"M" = month name              </li>
              <li>
"y" = year              </li>
            </ul>
            <p>
Examples of string formats include: "d/m/y", "y-d-m", "D, M d y".
            </p>
           
 *
 * @param {Boolean} shortformat
 * @type String
 * @memberOf TimeUtil
 * @returns {String}
 */
TimeUtil.prototype.getDateFormat = function(shortformat){ var ret = new String(); return ret; };

/**
 * 
            <p>
Returns the time format according to the system's locale settings.
            </p>
            <p>
These expressions may be used in the returned string:
            </p>
            <ul>
              <li>
"h" = hours (0 to 23 or 1 to 12 if AM/PM display)              </li>
              <li>
"m" = minutes (0 to 59)              </li>
              <li>
"s" = seconds (0 to 59)              </li>
              <li>
"ap" = AM/PM display              </li>
            </ul>
            <p>
Examples of string formats include: "h:m:s ap", "h:m:s".
            </p>
           
 *
 * @type String
 * @memberOf TimeUtil
 * @returns {String}
 */
TimeUtil.prototype.getTimeFormat = function(){ var ret = new String(); return ret; };

/**
 * Returns if the given year is a leap year.
 *
 * @param {Number} year
 * @type Boolean
 * @memberOf TimeUtil
 * @returns {Boolean}
 */
TimeUtil.prototype.isLeapYear = function(year){ var ret = new Boolean(); return ret; };

/**
 * Returns the day of the month (from 1-31).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getDate = function(){ var ret = new Number(); return ret; };

/**
 * Sets the day of the month (from 1-31).
 *
 * @param {Number} date
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setDate = function(date){ return; };

/**
 * Returns the day of the week (from 0-6).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getDay = function(){ var ret = new Number(); return ret; };

/**
 * Returns the year (four digits).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getFullYear = function(){ var ret = new Number(); return ret; };

/**
 * Sets the year (four digits).
 *
 * @param {Number} year
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setFullYear = function(year){ return; };

/**
 * Returns the hour (0-23).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getHours = function(){ var ret = new Number(); return ret; };

/**
 * Sets the hour (0-23).
 *
 * @param {Number} hours
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setHours = function(hours){ return; };

/**
 * Returns the milliseconds (from 0-999).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getMilliseconds = function(){ var ret = new Number(); return ret; };

/**
 * Sets the milliseconds (from 0-999).
 *
 * @param {Number} ms
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setMilliseconds = function(ms){ return; };

/**
 * Returns the minutes (from 0-59).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getMinutes = function(){ var ret = new Number(); return ret; };

/**
 * Sets the minutes (from 0-59).
 *
 * @param {Number} minutes
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setMinutes = function(minutes){ return; };

/**
 * Returns the month (from 0-11).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getMonth = function(){ var ret = new Number(); return ret; };

/**
 * Sets the month (from 0-11).
 *
 * @param {Number} month
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setMonth = function(month){ return; };

/**
 * Returns the seconds (from 0-59).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getSeconds = function(){ var ret = new Number(); return ret; };

/**
 * Sets the seconds (from 0-59).
 *
 * @param {Number} seconds
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setSeconds = function(seconds){ return; };

/**
 * Returns the day of the month, according to universal time (from 1-31).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCDate = function(){ var ret = new Number(); return ret; };

/**
 * Sets the day of the month, according to universal time (from 1-31).
 *
 * @param {Number} date
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setUTCDate = function(date){ return; };

/**
 * Returns the day of the week, according to universal time (from 0-6).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCDay = function(){ var ret = new Number(); return ret; };

/**
 * Returns the year, according to universal time (four digits).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCFullYear = function(){ var ret = new Number(); return ret; };

/**
 * Sets the year, according to universal time (four digits).
 *
 * @param {Number} year
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setUTCFullYear = function(year){ return; };

/**
 * Returns the hour, according to universal time (0-23).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCHours = function(){ var ret = new Number(); return ret; };

/**
 * Sets the hour, according to universal time (0-23).
 *
 * @param {Number} hours
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setUTCHours = function(hours){ return; };

/**
 * Returns the milliseconds, according to universal time (from 0-999).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCMilliseconds = function(){ var ret = new Number(); return ret; };

/**
 * Sets the milliseconds, according to universal time (from 0-999).
 *
 * @param {Number} ms
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setUTCMilliseconds = function(ms){ return; };

/**
 * Returns the minutes, according to universal time (from 0-59).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCMinutes = function(){ var ret = new Number(); return ret; };

/**
 * Sets the minutes, according to universal time (from 0-59).
 *
 * @param {Number} minutes
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setUTCMinutes = function(minutes){ return; };

/**
 * Returns the month, according to universal time (from 0-11).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCMonth = function(){ var ret = new Number(); return ret; };

/**
 * Sets the month, according to universal time (from 0-11).
 *
 * @param {Number} month
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setUTCMonth = function(month){ return; };

/**
 * Returns the seconds, according to universal time (from 0-59).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCSeconds = function(){ var ret = new Number(); return ret; };

/**
 * Sets the seconds, according to universal time (from 0-59).
 *
 * @param {Number} seconds
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setUTCSeconds = function(seconds){ return; };

/**
 * Returns timezone identifier.
            <p>
Zero or more slashes separate different components, with the most general
descriptor first and the most specific one last. For example,
'Europe/Berlin', 'America/Argentina/Buenos_Aires'.
            </p>
            <p>
This attribute uniquely identifies the timezone.
            </p>
           
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.getTimezone = function(){ var ret = new String(); return ret; };

/**
 * Returns a copy of the TZDate converted to a given time zone.
 *
 * @param {String} tzid
 * @type TZDate
 * @memberOf TZDate
 * @returns {TZDate}
 */
TZDate.prototype.toTimezone = function(tzid){ var ret = new TZDate(); return ret; };

/**
 * Returns a copy of the TZDate converted to the local time zone.
 *
 * @type TZDate
 * @memberOf TZDate
 * @returns {TZDate}
 */
TZDate.prototype.toLocalTimezone = function(){ var ret = new TZDate(); return ret; };

/**
 * Returns a copy of the TZDate converted to Coordinated Universal Time (UTC).
 *
 * @type TZDate
 * @memberOf TZDate
 * @returns {TZDate}
 */
TZDate.prototype.toUTC = function(){ var ret = new TZDate(); return ret; };

/**
 * Calculates the difference with another TZDate object.
            <p>
Calculates the difference in time between <em>this</em> and other.
This comparison method takes timezones into consideration for the comparison.
            </p>
            <p>
The TimeDuration that is returned is effectively <em>this</em> - other.
The return value is a duration in milliseconds both TZDate objects have a time component, in days, otherwise.
The result value will be:
            </p>
            <ul>
              <li>
Negative, if other is in the future              </li>
              <li>
0 if the two date / times are equal              </li>
              <li>
Positive, if other is in the past              </li>
            </ul>
           
 *
 * @param {TZDate} other
 * @type TimeDuration
 * @memberOf TZDate
 * @returns {TimeDuration}
 */
TZDate.prototype.difference = function(other){ var ret = new TimeDuration(); return ret; };

/**
 * Checks if the TZDate is equal to another.
            <p>
This method takes the timezones into consideration and will return <em>true</em>if the two TZDate objects represent the same instant in different timezones.
            </p>
           
 *
 * @param {TZDate} other
 * @type Boolean
 * @memberOf TZDate
 * @returns {Boolean}
 */
TZDate.prototype.equalsTo = function(other){ var ret = new Boolean(); return ret; };

/**
 * Checks if the TZDate is earlier than another.
            <p>
This method takes the timezones into consideration.
            </p>
           
 *
 * @param {TZDate} other
 * @type Boolean
 * @memberOf TZDate
 * @returns {Boolean}
 */
TZDate.prototype.earlierThan = function(other){ var ret = new Boolean(); return ret; };

/**
 * Checks if the TZDate is later than another.
            <p>
This method takes the timezones into consideration.
            </p>
           
 *
 * @param {TZDate} other
 * @type Boolean
 * @memberOf TZDate
 * @returns {Boolean}
 */
TZDate.prototype.laterThan = function(other){ var ret = new Boolean(); return ret; };

/**
 * Returns a new date by adding a duration to the current TZDate object.
            <p>
If the length of duration is negative, the new date / time will be
earlier than it used to.
            </p>
            <p>
Note that calling this method does not alter the current object.
            </p>
           
 *
 * @param {TimeDuration} duration
 * @type TZDate
 * @memberOf TZDate
 * @returns {TZDate}
 */
TZDate.prototype.addDuration = function(duration){ var ret = new TZDate(); return ret; };

/**
 * Returns the date portion of a TZDate object as a string, using locale conventions.
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.toLocaleDateString = function(){ var ret = new String(); return ret; };

/**
 * Returns the time portion of a TZDate object as a string, using locale conventions.
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.toLocaleTimeString = function(){ var ret = new String(); return ret; };

/**
 * Converts a TZDate object to a string, using locale conventions.
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.toLocaleString = function(){ var ret = new String(); return ret; };

/**
 * Returns the date portion of a TZDate object as a string.
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.toDateString = function(){ var ret = new String(); return ret; };

/**
 * Returns the time portion of a TZDate object as a string.
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.toTimeString = function(){ var ret = new String(); return ret; };

/**
 * Converts a TZDate object to a string.
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.toString = function(){ var ret = new String(); return ret; };

/**
 * Determines the time zone abbreviation to be used at a particular date in the time zone.
            <p>
For example, in Toronto this is currently "EST" during the winter months and "EDT" during the
summer months when daylight savings time is in effect.
            </p>
           
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.getTimezoneAbbreviation = function(){ var ret = new String(); return ret; };

/**
 * Gets the number of seconds from Coordinated Universal Time (UTC) offset for the timezone.
            <p>
Returns the offset (in seconds) from UTC of the timezone, accounting for daylight
savings if in effect in the timezone.
            </p>
           
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.secondsFromUTC = function(){ var ret = new Number(); return ret; };

/**
 * Indicates if Daylight Saving Time(DST) is active for this TZDate.
            <p>
Indicates if daylight savings are in effect for the time zone and instant
identified by the TZDate object.
            </p>
           
 *
 * @type Boolean
 * @memberOf TZDate
 * @returns {Boolean}
 */
TZDate.prototype.isDST = function(){ var ret = new Boolean(); return ret; };

/**
 * Returns the date of the previous daylight saving time transition for the timezone.
 *
 * @type TZDate
 * @memberOf TZDate
 * @returns {TZDate}
 */
TZDate.prototype.getPreviousDSTTransition = function(){ var ret = new TZDate(); return ret; };

/**
 * Returns the date of the next daylight saving time transition for the timezone.
 *
 * @type TZDate
 * @memberOf TZDate
 * @returns {TZDate}
 */
TZDate.prototype.getNextDSTTransition = function(){ var ret = new TZDate(); return ret; };

/**
 * Duration length.
 * <p>
The unit of the duration length (milliseconds, seconds, minutes, hours, or days)
is determined by the duration unit attribute.
            </p>
 *
 * @type Number
 */
TimeDuration.prototype.length = new Number();

/**
 * Duration unit (milliseconds, seconds, minutes, hours, or days).
 * <p>
The default value is "MSECS" (milliseconds unit).
            </p>
 *
 * @type TimeDurationUnit
 */
TimeDuration.prototype.unit = new TimeDurationUnit();

/**
 * Calculates the difference between two TimeDuration objects.
            <p>
Calculates the difference in time between <em>this</em> and <em>other</em>.
The TimeDuration that is returned is effectively <em>first</em> - <em>other</em> (that is: positive if the first parameter is larger).
            </p>
            <p>
The returned TimeDuration is the biggest possible unit without losing the precision.
            </p>
           
 *
 * @param {TimeDuration} other
 * @type TimeDuration
 * @memberOf TimeDuration
 * @returns {TimeDuration}
 */
TimeDuration.prototype.difference = function(other){ var ret = new TimeDuration(); return ret; };

/**
 * Checks if the TimeDuration is equal to another.
            <p>
This method takes the units into consideration and will return true
if the two TimeDuration objects represent the same duration in different units.
            </p>
           
 *
 * @param {TimeDuration} other
 * @type Boolean
 * @memberOf TimeDuration
 * @returns {Boolean}
 */
TimeDuration.prototype.equalsTo = function(other){ var ret = new Boolean(); return ret; };

/**
 * Checks if the TimeDuration is lower than another.
            <p>
This method takes the units into consideration when doing the comparison.
            </p>
           
 *
 * @param {TimeDuration} other
 * @type Boolean
 * @memberOf TimeDuration
 * @returns {Boolean}
 */
TimeDuration.prototype.lessThan = function(other){ var ret = new Boolean(); return ret; };

/**
 * Checks if the TimeDuration is greater than another.
            <p>
This method takes the units into consideration when doing the comparison.
            </p>
           
 *
 * @param {TimeDuration} other
 * @type Boolean
 * @memberOf TimeDuration
 * @returns {Boolean}
 */
TimeDuration.prototype.greaterThan = function(other){ var ret = new Boolean(); return ret; };

/**
 * The Time API provides information regarding date / time and time zones.
 * <p>
The JavaScript Date object does not have full timezone support.
Date objects allow only simple representations to denote a particular location's
offset from Universal Coordinated Time (UTC). This is typically provided as a +/-
offset from UTC-0 (also known as Greenwich Mean Time, or GMT) for example, +05:30 denotes
that a location is 5 hours and 30 minutes ahead of UTC +00:00.
The issue with this method is not getting the correct
local time for a given date. The existing methods are sufficient for this purpose.
The issue is correctly converting to and from local time and UTC for all points in
time - in any of the past, present, and future - based on an initial time provided.
This is important for defining relative dates, where a time in a given location may
observe different UTC offsets, according to any Daylight Savings Rules (DST) in effect
or any other changes that may occur to a location's time zone over time.
Without the communication of the explicit time zone rules governing a given date and
time, the ability to effectively calculate the offset of the local time to UTC or to
any other time zone at any point in the past or future is lost. 
        </p>
 * <p>
This API can be used to get TZDate objects with full tim zone support, convert them
between timezones, retrieve available timezones.
        </p>
 * <p>
For more information on the Time features, see <a href="http://127.0.0.1:50053/help/topic/org.tizen.web.appprogramming/html/guide/sys_guide/time.htm">Time Guide</a>. 
        </p>
 *
 * @type TimeUtil
 */
Tizen.prototype.time = new TimeUtil();

/**
 * represents a set of filters.
          <p>
The composite filters can be one of the 2 types:
          </p>
          <ul>
            <li>
The union - used to filter objects that match any of the filters it includes.            </li>
            <li>
The intersection - used to filter objects that match all filters it includes.            </li>
          </ul>
         
 *
 * @super Object
 * @constructor
 * @return {CompositeFilter}
 */
function CompositeFilter() {};
CompositeFilter.prototype = new AbstractFilter();

/**
 * This interface is used in methods that require only an error as input parameter in the error callback. If an invalid function (such as null) is passed to the API that accepts ErrorCallback, it silently fails and there is no further action.
 *
 * @super Object
 * @constructor
 * @return {ErrorCallback}
 */
function ErrorCallback() {};
ErrorCallback.prototype = new Object();

/**
 * Generic exception interface.
          <p>
This interface will be used by the APIs to throw errors synchronously.
          </p>
          <p>
The attempt to set an attribute value may or may not raise WebAPIException synchronously with error type TypeMismatchError or InvalidValuesError.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {WebAPIException}
 */
function WebAPIException() {};
WebAPIException.prototype = new Object();

/**
 * represents a filter based on an object attribute which has values that are within a particular range.
          <p>
Range filters, where only one boundary is set, are available.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {AttributeRangeFilter}
 */
function AttributeRangeFilter() {};
AttributeRangeFilter.prototype = new AbstractFilter();

/**
 * represents a point (latitude and longitude) in map coordinate system.
          <p>
Latitude and longitude are of the WGS84 datum.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SimpleCoordinates}
 */
function SimpleCoordinates() {};
SimpleCoordinates.prototype = new Object();

/**
 * This interface represents a set of filter.
          <p>
It represents the query statement for the specified value of the <em>matchValue</em> by the rule of <em>matchFlag</em>.
          </p>
          <p>
If no <em>matchValue</em> is defined, the filter will match all objects that have the attribute
defined (same as the "EXISTS" filter works), otherwise, it will only match objects which have an attribute that matches
the specified value.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {AttributeFilter}
 */
function AttributeFilter() {};
AttributeFilter.prototype = new AbstractFilter();

/**
 * Generic error interface.
          <p>
This interface will be used by the APIs in order to return them in the error callback of asynchronous methods.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {WebAPIError}
 */
function WebAPIError() {};
WebAPIError.prototype = new Object();

/**
 * This interface is used in methods that do not require any return value in the success callback. In case of successful execution of an asynchronous call, or an API defined callback must be called immediately to notify the user.
 *
 * @super Object
 * @constructor
 * @return {SuccessCallback}
 */
function SuccessCallback() {};
SuccessCallback.prototype = new Object();

/**
 * Defines the tizen interface as a part of the window global object.
          <p>
The <em>Tizen</em> interface is always available within the <em>Window </em>object in the ECMAScript hierarchy.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {TizenObject}
 */
function TizenObject() {};
TizenObject.prototype = new Object();

/**
 * The root of Tizen Web Device API.
          <p>
This is the Tizen root interface.
It is a property of the ECMAScript global object, as specified by the <em>TizenObject</em> interface.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {Tizen}
 */
function Tizen() {};
Tizen.prototype = new Object();

/**
 * This is a common interface used by different types of object filters.
          <p>
Never use this base interface directly, instead use <em>AbstractFilter</em> subtypes,
such as <em>AttributeFilter</em>, <em>AttributeRangeFilter</em>, and <em>CompositeFilter</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {AbstractFilter}
 */
function AbstractFilter() {};
AbstractFilter.prototype = new Object();

/**
 * is a common interface used for sorting of queried data.
          <p>
Note that the sorting result of list type attributes is not determined.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SortMode}
 */
function SortMode() {};
SortMode.prototype = new Object();

/**
 * The composite filter type.
 *
 * @type CompositeFilterType
 */
CompositeFilter.prototype.type = new CompositeFilterType();

/**
 * The list of filters in the composite filter.
 *
 * @type array
 */
CompositeFilter.prototype.filters = new array();

/**
 * Method that is invoked when the error occurs.
 *
 * @param {WebAPIError} error
 * @type void
 * @memberOf ErrorCallback
 * @returns {void}
 */
ErrorCallback.prototype.onerror = function(error){ return; };

/**
 * The index is not in the allowed range.
 *
 * @type Number
 */
WebAPIException.INDEX_SIZE_ERR = new Number();

/**
 * The specified range of text is too large.
 *
 * @type Number
 */
WebAPIException.DOMSTRING_SIZE_ERR = new Number();

/**
 * The operation would yield an incorrect node tree.
 *
 * @type Number
 */
WebAPIException.HIERARCHY_REQUEST_ERR = new Number();

/**
 * The object is in the wrong document.
 *
 * @type Number
 */
WebAPIException.WRONG_DOCUMENT_ERR = new Number();

/**
 * The string contains invalid characters.
 *
 * @type Number
 */
WebAPIException.INVALID_CHARACTER_ERR = new Number();

/**
 * Data is specified for a node that does not support data.
 *
 * @type Number
 */
WebAPIException.NO_DATA_ALLOWED_ERR = new Number();

/**
 * The object cannot be modified.
 *
 * @type Number
 */
WebAPIException.NO_MODIFICATION_ALLOWED_ERR = new Number();

/**
 * The object cannot be found here.
 *
 * @type Number
 */
WebAPIException.NOT_FOUND_ERR = new Number();

/**
 * The operation is not supported.
 *
 * @type Number
 */
WebAPIException.NOT_SUPPORTED_ERR = new Number();

/**
 * The specified attribute is already in use elsewhere.
 *
 * @type Number
 */
WebAPIException.INUSE_ATTRIBUTE_ERR = new Number();

/**
 * The object is in an invalid state.
 *
 * @type Number
 */
WebAPIException.INVALID_STATE_ERR = new Number();

/**
 * The string did not match the expected pattern.
 *
 * @type Number
 */
WebAPIException.SYNTAX_ERR = new Number();

/**
 * The object cannot be modified in this way.
 *
 * @type Number
 */
WebAPIException.INVALID_MODIFICATION_ERR = new Number();

/**
 * The operation is not allowed by Namespaces in XML.
 *
 * @type Number
 */
WebAPIException.NAMESPACE_ERR = new Number();

/**
 * The object does not support the operation or argument.
 *
 * @type Number
 */
WebAPIException.INVALID_ACCESS_ERR = new Number();

/**
 * The operation would cause the node to fail validation.
 *
 * @type Number
 */
WebAPIException.VALIDATION_ERR = new Number();

/**
 * The type of the object does not match the expected type.
 *
 * @type Number
 */
WebAPIException.TYPE_MISMATCH_ERR = new Number();

/**
 * The operation is insecure.
 *
 * @type Number
 */
WebAPIException.SECURITY_ERR = new Number();

/**
 * A network error occurred.
 *
 * @type Number
 */
WebAPIException.NETWORK_ERR = new Number();

/**
 * The operation was aborted.
 *
 * @type Number
 */
WebAPIException.ABORT_ERR = new Number();

/**
 * The given URL does not match another URL.
 *
 * @type Number
 */
WebAPIException.URL_MISMATCH_ERR = new Number();

/**
 * The quota has been exceeded.
 *
 * @type Number
 */
WebAPIException.QUOTA_EXCEEDED_ERR = new Number();

/**
 * The operation timed out.
 *
 * @type Number
 */
WebAPIException.TIMEOUT_ERR = new Number();

/**
 * The supplied node is incorrect or has an incorrect ancestor for this operation.
 *
 * @type Number
 */
WebAPIException.INVALID_NODE_TYPE_ERR = new Number();

/**
 * The object cannot be cloned.
 *
 * @type Number
 */
WebAPIException.DATA_CLONE_ERR = new Number();

/**
 * 16-bit error code. For the possible values for this attribute, see .
 *
 * @type Number
 */
WebAPIException.prototype.code = new Number();

/**
 * An error type. The name attribute must return the value it was initialized with. This attribute can have one of the following values:
 * <ul>
 * <li>UnknownError - An unknown error has occurred.
 * <li>InvalidValuesError - The content of an object does not contain valid values.
 * <li>IOError - An error occurred in communication with the underlying implementation and so the requested method cannot be completed.
 * <li>ServiceNotAvailableError - The requested service is not available.
 * </ul>
 * <p>
For other possible values for this attribute, see the values defined in <a href="http://www.w3.ohttp://127.0.0.1:50053/help/topic/dom/#error-types">DOM error types</a> 
            </p>
 *
 * @type String
 */
WebAPIException.prototype.name = new String();

/**
 * An error message that describes the details of an encountered error. This attribute is mainly intended to be used for developers rather than end users, so it should not be used directly in the user interfaces as it is.
 *
 * @type String
 */
WebAPIException.prototype.message = new String();

/**
 * The name of the object attribute used for filtering.
 * <p>
The value of this attribute is exactly as it is defined in the object's interface. For attributes of complex type, use fully-qualified names
(such as 'organizations.role' to filter on a contact's role in an organization).
            </p>
 * <p>
For attributes of array type, the filter will match if any value in the array
matches.
            </p>
 *
 * @type String
 */
AttributeRangeFilter.prototype.attributeName = new String();

/**
 * Objects with an attribute that is greater than or equal to will match.
 * <p>
By default, this attribute is set to <var>null</var>.
            </p>
 *
 * @type any
 */
AttributeRangeFilter.prototype.initialValue = new any();

/**
 * Objects with an attribute that is strictly lower than to will match.
 * <p>
By default, this attribute is set to <var>null</var>.
            </p>
 *
 * @type any
 */
AttributeRangeFilter.prototype.endValue = new any();

/**
 * Latitude.
 *
 * @type Number
 */
SimpleCoordinates.prototype.latitude = new Number();

/**
 * Longitude.
 *
 * @type Number
 */
SimpleCoordinates.prototype.longitude = new Number();

/**
 * The name of the object attribute used for filtering.
 * <p>
This is the name of the object attribute exactly as it is defined in
the object's interface. For attributes of complex type, use fully-qualified names
(such as 'organizations.role' to filter on a contact's role in an organization).
            </p>
 * <p>
For attributes of an array type, the filter will match if any value in the array
matches.
            </p>
 *
 * @type String
 */
AttributeFilter.prototype.attributeName = new String();

/**
 * The match flag used for attribute-based filtering.
 * <p>
By default, this attribute is set to "EXACTLY".
            </p>
 *
 * @type FilterMatchFlag
 */
AttributeFilter.prototype.matchFlag = new FilterMatchFlag();

/**
 * The value used for matching.
 * <p>
The filter will match if the attribute value matches the given matchValue.
            </p>
 * <p>
This value is not used if the <em>matchFlag</em> is set to "EXISTS".
By default, this attribute is set to null.
            </p>
 *
 * @type any
 */
AttributeFilter.prototype.matchValue = new any();

/**
 * 16-bit error code. Possible values are defined in .
 *
 * @type Number
 */
WebAPIError.prototype.code = new Number();

/**
 * An error type. The name attribute must return the value it was initialized with. This attribute can have one of the following values:
 * <ul>
 * <li>UnknownError - An unknown error has occurred.
 * <li>InvalidValuesError - The content of an object does not contain valid values.
 * <li>IOError - An error occurred in communication with the underlying implementation and so the requested method cannot be completed.
 * <li>ServiceNotAvailableError - The requested service is not available.
 * </ul>
 * <p>
For other possible values for this attribute, see the values defined in <a href="http://www.w3.ohttp://127.0.0.1:50053/help/topic/dom/#error-types">DOM error types</a> 
            </p>
 *
 * @type String
 */
WebAPIError.prototype.name = new String();

/**
 * An error message that describes the details of the error encountered. This attribute is not intended to be used directly in the user interfaces as it is mainly intended to be useful for developers rather than end users.
 *
 * @type String
 */
WebAPIError.prototype.message = new String();

/**
 * Method invoked when the asynchronous call completes successfully.
 *
 * @type void
 * @memberOf SuccessCallback
 * @returns {void}
 */
SuccessCallback.prototype.onsuccess = function(){ return; };

/**
 * This API provides common Tizen functionality.
 * <p>
The API provides the basic definitions that are used in all other Tizen Web Device APIs.
These include generic callbacks that are invoked when the operations succeed or fail,
WebAPIError and WebAPIException that gives information of the platform's error and
filters interfaces that are used to make query for searching.
        </p>
 * <p>
Additionally, this API specifies the location in the ECMAScript hierarchy in which
the Tizen Web Device API is instantiated (<em>window.tizen</em>).
        </p>
 * <p>
For more information on the Tizen features, see <a href="http://127.0.0.1:50053/help/topic/org.tizen.web.appprogramming/html/guide/tizen_guide/tizen.htm">Tizen Guide</a>.  
        </p>
 *
 * @type Tizen
 */
TizenObject.prototype.tizen = new Tizen();

/**
 * The name of the object attribute used for sorting.
 *
 * @type String
 */
SortMode.prototype.attributeName = new String();

/**
 * The type of the sorting.
 * <p>
By default, this attribute is set to <var>ASC</var>.
            </p>
 *
 * @type SortModeOrder
 */
SortMode.prototype.order = new SortModeOrder();

/**
 * This API provides common Tizen functionality.
 * <p>
The API provides the basic definitions that are used in all other Tizen Web Device APIs.
These include generic callbacks that are invoked when the operations succeed or fail,
WebAPIError and WebAPIException that gives information of the platform's error and
filters interfaces that are used to make query for searching.
        </p>
 * <p>
Additionally, this API specifies the location in the ECMAScript hierarchy in which
the Tizen Web Device API is instantiated (<em>window.tizen</em>).
        </p>
 * <p>
For more information on the Tizen features, see <a href="http://127.0.0.1:50053/help/topic/org.tizen.web.appprogramming/html/guide/tizen_guide/tizen.htm">Tizen Guide</a>.  
        </p>
 *
 * @type Tizen
 */
Window.prototype.tizen = new Tizen();

