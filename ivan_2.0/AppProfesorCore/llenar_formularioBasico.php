<?php
include('config.php'); 
$sql=mysql_query("select * from tblAlumno") or die("existe un error"); 
while($row=mysql_fetch_array($sql)){
    echo $row[1];
}
?>