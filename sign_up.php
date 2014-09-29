<html>
<head>
	<title>Peericle - Sign Up</title>
	<script type="text/javascript" src="scripts/sign_up.js"></script>
	<meta name="description" content="Allows user to sign up.">
	<meta name="author" content="Tony Florida">
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
	Password: <input type="password" id="password" name="password" value="">
	<br>
	Date of Birth: <input type="date" id="dob" name="date" value="">
	<br>
	Topic: <select name="Topic" id="topic_id"><br>
	<?php
		include "helpers/topic.php";
	?>
	</select>
</form>
<button onclick="sign_up()" id="sign_up">Sign Up</button>

<p id="status"></p>

</body>
</html>

