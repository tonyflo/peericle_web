<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>Peericle - Sign Up</title>
	<script type="text/javascript" src="scripts/sign_up.js"></script>
</head>
<body>
<form action="">
	<h1>Sign Up</h1>
	Title: <select name="Title" id="title">
		<option value="Mr.">Mr.</option>
		<option value="Mrs.">Mrs.</option>
		<option value="Miss">Miss</option>
		<option value="Ms.">Ms.</option>
		<option value="Dr.">Dr.</option>
	</select>
	<br>
	First Name:<input name="First Name" id="first_name" type="text" value="">
	<br>
	Last Name:<input name="Last Name" id="last_name" type="text" value="">
	<br>
	Gender: <select name="Gender" id="gender">
		<option value="-1">Select Your Gender</option>
		<option value="0">Male</option>
		<option value="1">Female</option>
	</select>
	<br>
	Role: TODO
	<br>
	Email: <input type="email" id="email" name="email" value="">
	<br>
	Telephone: <input type="tel" id="phone" name="Telephone" value="">
	<br>
	Password: <input type="password" name="password" value="">
	<br>
	Date of Birth: <input type="date" name="date" value="">
	<br>
	Topic: <select name="Topic" id="topic"><br>
	<?php
		include "helpers/topic.php";
	?>
	</select>

</form>
<button onclick="sign_up()" id="sign_up">Sign Up</button>

</body>
</html>

