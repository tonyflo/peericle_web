<?php
/* @file sign_up.php
 * @date 2014-09-29
 * @author Tony Florida
 * @brief Allows a user to sign in to their account
 */
   include "../../peericle_private/credentials.php";
   include "../../peericle_private/account.php";

   $table="USER";

   $email=$_POST["email"];
   $password=$_POST["password"];

   echo sign_in($email, $password, $db, $table);

   $db->close();

?>

