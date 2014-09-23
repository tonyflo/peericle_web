/* @file sign_up.js
 * @date 2014-09-21
 * @author Tony Florida
 * @brief Leverages ajax via javascript to support sign_upg up
 */

/* @brief The event handler that reacts to the sign up button being pressed
 */
function sign_up()
{
   ajax_sign_up_request();
} //end sign_up()

/* @brief Create the XMLHttpRequest object, according browser
 */
function get_XmlHttp()
{
   // create the variable that will contain the instance of the
   // XMLHttpRequest object (initially with null value)
   var xmlHttp = null;

   // for Forefox, IE7+, Opera, Safari, ...
   if(window.XMLHttpRequest)
   {
      xmlHttp = new XMLHttpRequest();
   }
   // for Internet Explorer 5 or 6
   else if(window.ActiveXObject)
   {
      xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
   }

   return xmlHttp;
} //end get_XmlHttp()

/* @brief Sends data to a php file, via POST, and displays the received answer.
 * Specifically, queries the db given an email and password and returns a valid
 * pk
 */
function ajax_sign_up_request()
{
   // call the function for the XMLHttpRequest instance
   var request =  get_XmlHttp();
   // create pairs index=value with data that must be sent to server
   var the_data = 'title=' + document.getElementById("title").value +
	'&' + 'first_name=' + document.getElementById("first_name").value +
	'&' + 'last_name=' + document.getElementById("last_name").value +
	'&' + 'email=' + document.getElementById("email").value +
	'&' + 'phone=' + document.getElementById("phone").value +
	'&' + 'password=' + document.getElementById("password").value +
	'&' + 'dob=' + document.getElementById("dob").value +
	'&' + 'topic_id=' + document.getElementById("topic_id").value +
	'&' + 'gender=' + document.getElementById("gender").value;

   // set the request
   request.open("POST", "scripts/sign_up.php", true);

   //adds a header to tell the PHP script to recognize the data as is sent
   //via POST
   request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

   // calls the send() method with datas as parameter
   request.send(the_data);

   // Check request status
   request.onreadystatechange = function()
   {
      if (request.readyState == 4) {
         if(request.responseText <= 0)
         {
            //the credentials that were entered were not correct
            document.getElementById("status").innerHTML =  "Error " + request.responseText + ".";
            document.getElementById("status").style.color="red";
         }
         else
         {
            document.getElementById("status").innerHTML =  "Yay " + request.responseText + " EOF";
         }
      }
   }
} //end ajax_sign_up_request()
