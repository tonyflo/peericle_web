<?php
	/*
	 */
	 
	include "../peericle_private/credentials.php";

	//query database for list of topics
	$query="select TOPIC.topic_id, TOPIC.name from TOPIC order by name asc";
	$sql=$db->prepare($query);
	$sql->execute();
	$sql->bind_result($topic_id, $topic);
	
	//the first option in the select element
	echo "<option value='-1'>Select Your Topic</option>";
	
	//populate the select element
	while($sql->fetch())
	{
		echo "<option value=".$topic_id.">".$topic."</option>";
	}
	
	$sql->free_result();
?>