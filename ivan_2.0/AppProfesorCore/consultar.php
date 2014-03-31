<?php
include('config.php');
/**
 * @author Aeon1
 * @copyright 2014  http://www.phonegapspain.com/forums/phonegap/
 */

$sql=mysql_query( "SELECT * FROM tblalumno");
$arr = array();
while ($obj = mysql_fetch_object($sql)) {
    $arr[] = array('id' => $obj->idAlumno,
                   'nombre' => utf8_encode($obj->strNombre),
                   'apellido' => utf8_encode($obj->strApellido),
        );
}
echo '' . json_encode($arr) . '';
?>

