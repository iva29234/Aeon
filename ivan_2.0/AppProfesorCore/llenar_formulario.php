<?php
include('config.php');
header('Access-Control-Allow-Origin: *');
?>
<?php
/**
 * @author Aeon1
 * @copyright 2014   http://www.phonegapspain.com/forums/phonegap/
 */

$id = $_POST['id'];
$sql=mysql_query("select * from tblalumno where idAlumno='$id'");
$arr = array();
    $obj = mysql_fetch_object($sql);
    $arr[] = array('id' => $obj->idAlumno,
                   'nombre' => utf8_encode($obj->strNombre),
                   'apellido' => utf8_encode($obj->strApellido),
                   'dni' => $obj->strDni,
                   'categoria' => $obj->refCategoria,
                   
        );

echo '' . json_encode($arr) . '';

?>
