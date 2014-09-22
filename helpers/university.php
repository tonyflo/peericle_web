<?php
	include "../peericle_private/credentials.php";

	//query database for list of universities
	$query="select INSTITUTION.institution_id, INSTITUTION.name from INSTITUTION inner join UNIVERSITY on INSTITUTION.institution_id = UNIVERSITY.institution_id";
	
	$sql=$db->prepare($query);

	$sql->execute();
	$sql->bind_result($institution_id, $institution);
	echo "<option value='-1'>Pick Your University</option>";
	while($sql->fetch())
	{
		echo "<option value=".$institution_id.">".$institution."</option>";
	}
	$sql->free_result();
?>
