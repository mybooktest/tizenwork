//Initialize function
var init = function () {
// Normalize the various vendor prefixed versions of getUserMedia.
navigator.getUserMedia = (navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia || 
  navigator.msGetUserMedia);

  if (navigator.getUserMedia) {
    navigator.getUserMedia(// Request the camera.
      // Constraints
      {
        video: true
      },
      // Success Callback
      function(localMediaStream) {
        var URL = window.webkitURL;
        var video = document.querySelector('video');
        if(!URL) {
//          var video = document.getElementById("videoPlay");
          video.src = window.URL.createObjectURL(localMediaStream);
        } else {
          video.src =  URL.createObjectURL(localMediaStream);   
        }
        video.onloadedmetadata = function(e) {
           // Do something with the video here.
        };
      },
  
      // Error Callback
      function(err) {
        // Log the error to the console.
        console.log('The following error occurred when trying to use getUserMedia: ' + err);
      }
    );
  
  } else {
    alert('Sorry, your browser does not support getUserMedia');
  }
  console.log("init() called");
};
// window.onload can work without <body onload="">
window.onload = init;
