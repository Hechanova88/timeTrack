// send a request about an event to the server
function fireEvent(action, message, options) {
    var loggerUrl = "/tracker.gif", parameters;
    options = options || {};
    options.url = options.url || window.location.href;
    options.user_agent = navigator.userAgent;
    options.message = message;
    for (var i in options) {
      if (options.hasOwnProperty(i)) {
        parameters += "&" + i + "=" + encodeURIComponent(options[i]);
      }
    }    
    new Image().src = loggerUrl + parameters;
  }
  
  // log script errors
  window.onerror = function(errorMessage, url, line) {   
    fireEvent("error", errorMessage, {
      url: url, 
      line: line
    });
    return true;
  };
  var currentdate = new Date();
var datetime = "Last Sync: " + currentdate.getDay() + "/" + currentdate.getMonth() 
+ "/" + currentdate.getFullYear() + " @ " 
+ currentdate.getHours() + ":" 
+ currentdate.getMinutes() + ":" + currentdate.getSeconds();
  
  // example event on the page
  fireEvent("ajaxError", "XY page failed to load");