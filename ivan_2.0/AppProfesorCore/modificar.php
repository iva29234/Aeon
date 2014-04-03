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
 $nombre=$_POST['strNombreForm'];
 $apellido=$_POST['strApellidoForm'];
 $dni=$_POST['strDniForm'];
 $categoria=$_POST['refCategoriaListaModificarForm'];

 /*
 $categoria=$_POST['strCategoriaForm'];
*/


mysql_query("UPDATE tblAlumno SET strNombre='$nombre',strApellido='$apellido',strDni='$dni',refCategoria='$categoria' WHERE idAlumno='$id'");

echo "datos modificados con exito";

?>