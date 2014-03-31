<?php require_once('Connections/appconexion.php'); 
header('Access-Control-Allow-Origin: *');
?>
<?php

//INSERCIÓN DE CATEGORIA EN LA BASE DE DATOS: CATEGORIA
//************************************************
//************************************************
//************************************************
if ($_POST["formid"]==11)
  {
  $insertSQL = sprintf("INSERT INTO tblcurso (strCurso) VALUES (%s)",
                       GetSQLValueString(utf8_decode($_POST['strCurso']), "text"));

  mysql_select_db($database_appconexion, $appconexion);
  $Result1 = mysql_query($insertSQL, $appconexion) or die(mysql_error());
  echo "1";
 }
//INSERCIÓN DE DATOS EN LA BASE DE DATOS: ALUMNOS
//************************************************
//************************************************
//************************************************
if ($_POST["formid"]==2)
	{
  $insertSQL = sprintf("INSERT INTO tblAlumno (strNombre, strApellido, strDni, refCategoria) VALUES (%s, %s, %s, %s)",
                       GetSQLValueString(utf8_decode($_POST['strNombre']), "text"),
                       GetSQLValueString(utf8_decode($_POST['strApellido']), "text"),
                       GetSQLValueString(utf8_decode($_POST['strDni']), "int"),
                       GetSQLValueString(utf8_decode($_POST['refCategoria']), "int"));

  mysql_select_db($database_appconexion, $appconexion);
  $Result1 = mysql_query($insertSQL, $appconexion) or die(mysql_error());
  echo "1";
 }
 
//MOSTRAR EL DESPLEGABLE DE CURSOS EN EL FORMULARIO
//**************************************************
//**************************************************
//**************************************************
if ($_POST["formid"]==3)
	{
  $query_DatosFrecuentes = "SELECT * FROM tblcurso ORDER BY strCurso ASC";

  mysql_set_charset('utf8', $appconexion);
  mysql_select_db($database_appconexion, $appconexion);
  
    $DatosFrecuentes = mysql_query($query_DatosFrecuentes, $appconexion) or die(mysql_error());
	$row_DatosFrecuentes = mysql_fetch_assoc($DatosFrecuentes);
	$totalRows_DatosFrecuentes = mysql_num_rows($DatosFrecuentes);
	

    echo '<label for="refCategoria" class="select">Curso:</label><select name="refCategoria" id="refCategoria">';

do {
		
	echo '<option value="'.$row_DatosFrecuentes['idCurso'].'">'.$row_DatosFrecuentes['strCurso'].'</option>';
	
	} while ($row_DatosFrecuentes = mysql_fetch_assoc($DatosFrecuentes)); 

	echo "</select>";
	mysql_free_result($DatosFrecuentes);

}

if ($_POST["formid"]==4)
	{
	 $query_DatosFrecuentes = "SELECT * FROM tblvaloracion WHERE strIP='".$_SERVER['REMOTE_ADDR']."' AND refChiste=".$_POST['refChiste'];

	mysql_set_charset('utf8', $appconexion);
    mysql_select_db($database_appconexion, $appconexion);
    $DatosFrecuentes = mysql_query($query_DatosFrecuentes, $appconexion) or die(mysql_error());
	$row_DatosFrecuentes = mysql_fetch_assoc($DatosFrecuentes);
	$totalRows_DatosFrecuentes = mysql_num_rows($DatosFrecuentes);
	
	//HA ENCONTRADO YA UNA VALORACION
	if ($totalRows_DatosFrecuentes>0)
	echo "0";
	else
	{
	
  $insertSQL = sprintf("INSERT INTO tblvaloracion (refChiste, refValoracion, strIP) VALUES (%s, %s, %s)",
                       GetSQLValueString(utf8_decode($_POST['refChiste']), "int"),
                       GetSQLValueString(utf8_decode($_POST['refValoracion']), "int"),
                       GetSQLValueString($_SERVER['REMOTE_ADDR'], "text"));

  mysql_select_db($database_appconexion, $appconexion);
  $Result1 = mysql_query($insertSQL, $appconexion) or die(mysql_error());
  echo "1";
	}
 }
?>