<?php
/* @file sign_up.php
 * @date 2014-09-21
 * @author Tony Florida
 * @brief Allows a user to sign up for an account
 */
   include "../../peericle_private/credentials.php";
   include "../../peericle_private/account.php";

   $table="USER";
   
   $title=$_POST["title"];
   $first_name=$_POST["first_name"];
   $last_name=$_POST["last_name"];
   $role=$_POST["role"];
   $email=$_POST["email"];
   $phone=$_POST["phone"];
   $password=$_POST["password"];
   $dob=$_POST["dob"];
   $topic_id=$_POST["topid_id"];
   $gender=$_POST["gender"];

   echo function sign_up($title, $first_name, $last_name, $role, $email, $phone, $password, $dob, $topic_id, $gender, $db, $table);

   $db->close();
?>

