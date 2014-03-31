<?php require_once('Connections/appconexion.php');
header('Content-type: application/json'); 
header('Access-Control-Allow-Origin: *');
?>
<?php
if (!function_exists("GetSQLValueString")) {
function GetSQLValueString($theValue, $theType, $theDefinedValue = "", $theNotDefinedValue = "") 
{
  if (PHP_VERSION < 6) {
    $theValue = get_magic_quotes_gpc() ? stripslashes($theValue) : $theValue;
  }

  $theValue = function_exists("mysql_real_escape_string") ? mysql_real_escape_string($theValue) : mysql_escape_string($theValue);

  switch ($theType) {
    case "text":
      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
      break;    
    case "long":
    case "int":
      $theValue = ($theValue != "") ? intval($theValue) : "NULL";
      break;
    case "double":
      $theValue = ($theValue != "") ? doubleval($theValue) : "NULL";
      break;
    case "date":
      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
      break;
    case "defined":
      $theValue = ($theValue != "") ? $theDefinedValue : $theNotDefinedValue;
      break;
  }
  return $theValue;
}
}

//MOSTRAR EL DESPLEGABLE DE CURSOS EN EL FORMULARIO
//***************************************************
//***************************************************
//***************************************************
if ($_GET["formid"]==3)
	{
	$query_DatosFrecuentes = "SELECT * FROM tblcurso ORDER BY strCurso ASC";

    mysql_set_charset('utf8', $appconexion);
    mysql_select_db($database_appconexion, $appconexion);
	
    $DatosFrecuentes = mysql_query($query_DatosFrecuentes, $appconexion) or die(mysql_error());
	$row_DatosFrecuentes = mysql_fetch_assoc($DatosFrecuentes);
	$totalRows_DatosFrecuentes = mysql_num_rows($DatosFrecuentes);
	
	$records = array();
	
    do {
		$records[] = $row_DatosFrecuentes;
	} while ($row_DatosFrecuentes = mysql_fetch_assoc($DatosFrecuentes));

	//mysql_close($DatosFrecuentes);
	echo $_GET['jsoncallback'] . '(' . json_encode($records). ');';
	//echo '(' . json_encode($records) . ')';
	mysql_free_result($DatosFrecuentes);

}

if ($_GET["formid"]==5)
	{
		$query_DatosFrecuentes = "SELECT tblAlumno.idAlumno, tblAlumno.strNombre, tblAlumno.strApellido, tblAlumno.strDni, tblAlumno.refCategoria, tblcurso.strCurso FROM tblAlumno Inner Join tblcurso ON tblAlumno.refCategoria = tblcurso.idCurso WHERE refCategoria =".$_GET["refCategoria"]." ORDER BY strNombre ASC";
  
	mysql_set_charset('utf8', $appconexion);
    mysql_select_db($database_appconexion, $appconexion);
    $DatosFrecuentes = mysql_query($query_DatosFrecuentes, $appconexion) or die(mysql_error());
	$row_DatosFrecuentes = mysql_fetch_assoc($DatosFrecuentes);
	$totalRows_DatosFrecuentes = mysql_num_rows($DatosFrecuentes);
	//echo $totalRows_DatosFrecuentes;
	$records = array();
	
    do {
		$records[] = $row_DatosFrecuentes;
	} while ($row_DatosFrecuentes = mysql_fetch_assoc($DatosFrecuentes));
	

	//mysql_close($DatosFrecuentes);
	echo $_GET['jsoncallback'] . '(' . json_encode($records) . ');';
	//echo '(' . json_encode($records) . ')';

	mysql_free_result($DatosFrecuentes);
}

if ($_GET["formid"]==6)
	{
$query_DatosFrecuentes = "SELECT tblAlumno.idAlumno, tblAlumno.strNombre, tblAlumno.strDni, tblAlumno.refCategoria, tblcurso.strCurso, AVG(refValoracion) AS valorMedia FROM tblAlumno Inner Join tblcurso ON tblAlumno.refCategoria = tblcurso.idCurso Inner Join tblvaloracion ON tblvaloracion.refChiste = tblAlumno.idAlumno GROUP BY tblAlumno.idAlumno  ORDER BY AVG(refValoracion) DESC LIMIT 0, 10";


	mysql_set_charset('utf8', $appconexion);
    mysql_select_db($database_appconexion, $appconexion);
    $DatosFrecuentes = mysql_query($query_DatosFrecuentes, $appconexion) or die(mysql_error());
	$row_DatosFrecuentes = mysql_fetch_assoc($DatosFrecuentes);
	$totalRows_DatosFrecuentes = mysql_num_rows($DatosFrecuentes);
	//echo $totalRows_DatosFrecuentes;
	$records = array();
	if ($totalRows_DatosFrecuentes>0){
    do {
		$records[] = $row_DatosFrecuentes;
	} while ($row_DatosFrecuentes = mysql_fetch_assoc($DatosFrecuentes));
	}

	//mysql_close($DatosFrecuentes);
	echo $_GET['jsoncallback'] . '(' . json_encode($records) . ');';
	//echo '(' . json_encode($records) . ')';
	mysql_free_result($DatosFrecuentes);

}


?>