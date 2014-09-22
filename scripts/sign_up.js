/* @file sign_up.js
 * @date 2014-09-21
 * @author Tony Florida
 * @brief Leverages ajax via javascript to support signing up
 */

/* @brief The event handler that reacts to the sign up button being pressed
 */
function sign_up()
{
   ajax_signup_request();
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
function ajax_signin_request()
{
   // call the function for the XMLHttpRequest instance
   var request =  get_XmlHttp();
   // create pairs index=value with data that must be sent to server
   var  the_data = 'email='+document.getElementById("email").value+'&password='+document.getElementById("password").value;

   // set the request
   request.open("POST", "scripts/signin.php", true);

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
            document.getElementById("status").innerHTML =  "Invalid username/password";
            document.getElementById("status").style.color="red";
            document.getElementById("map").src="images/map.png";
         }
         else
         {
              //valid credentials were provided. now, check if the account is paid
              ajax_account_check_request(request.responseText);
         }
      }
   }
} //end ajax_signin_request()

/* @brief Given a uid (pk), query the db to check if the account is a paid account
 * @param uid the unique identifier for the account
 * @retval the iVisited map will be displayed if the account is paid
 */
function ajax_account_check_request(uid)
{
   // call the function for the XMLHttpRequest instance
   var request =  get_XmlHttp();
   // create pairs index=value with data that must be sent to server
   var  the_data = 'uid='+uid;

   // set the request
   request.open("POST", "scripts/check_type.php", true);

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
            //inform the user that the account must be paid to view the ivisited map
            document.getElementById("status").innerHTML =  "Purchase States iVisited to view your map";
            document.getElementById("status").style.color="red";
            document.getElementById("map").src="images/map.png";
         }
         else
         {
            //display the ivisited map
            document.getElementById("status").innerHTML = "Scroll down to see your iVisited map!";
            document.getElementById("status").style.color="green";
            document.getElementById("map").src="images/maps/map"+uid+".png";
         }
      }
   }
} //end ajax_account_check_request()

