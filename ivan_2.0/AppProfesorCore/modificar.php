<?php
include('config.php');
header('Access-Control-Allow-Origin: *');
?>
<?php
/**
 * @author Aeon1
 * @copyright 2014
 */
 $id=$_POST['id'];
 $nombre=$_POST['nombre'];
 $apellido=$_POST['apellido'];
 $dni=$_POST['dni'];
 $categoria=$_POST['categoria'];
mysql_query("UPDATE tblalumno SET strNombre='$nombre',strApellido='$apellido',strDni='$dni',refCategoria='$categoria' WHERE idAlumno='$id'");

echo "datos modificados con exito";
?>