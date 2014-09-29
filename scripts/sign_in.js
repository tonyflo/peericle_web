/* @file sign_in.js
 * @date 2014-09-29
 * @author Tony Florida
 * @brief Leverages ajax via javascript to support sign in
 */

/* @brief The event handler that reacts to the sign up button being pressed
 */
function sign_in()
{
   document.getElementById("status").style.color="blue";
   document.getElementById("status").innerHTML = "Working...";
   ajax_sign_in_request();
} //end sign_in()

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
function ajax_sign_in_request()
{
   // call the function for the XMLHttpRequest instance
   var request =  get_XmlHttp();
   // create pairs index=value with data that must be sent to server
   var the_data = 'email=' + document.getElementById("email").value +
	'&' + 'password=' + document.getElementById("password").value;

   // set the request
   request.open("POST", "scripts/sign_in.php", true);

   //adds a header to tell the PHP script to recognize the data as is sent
   //via POST
   request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

   // calls the send() method with datas as parameter
   request.send(the_data);

   // Check request status
   request.onreadystatechange = function()
   {
      var response = request.responseText;
      if (request.readyState == 4) {
         if(response <= 0)
         {
            document.getElementById("status").style.color="red";
            if(response == -5)
            {
               document.getElementById("status").innerHTML = "Email not found";
            }
            else if(response == -6)
            {
               document.getElementById("status").innerHTML = "Invalid password";
            }
            else
            {
               document.getElementById("status").innerHTML = "Unknown error";
            }
         }
         else
         {
            document.getElementById("status").innerHTML =  "Welcome";
            document.getElementById("status").style.color="green";
         }
      }
   }
} //end ajax_sign_in_request()
