<?php

/**
 * @author Aeon1
 * @copyright 2014  http://www.phonegapspain.com/forums/phonegap/
 */
 /*
 $dbhost = "localhost"; // Servidor
 $dbuser = "root"; // Nombre de Usuario
 $dbbase = "escuelas"; // Nombre de la base de datos
 $dbpass = "CamuchA1"; // Contraseña
*/
 $dbhost = "mysql.hostinger.es"; // Servidor
 $dbuser = "u816705532_root"; // Nombre de Usuario
 $dbbase = "u816705532_mysql"; // Nombre de la base de datos
 $dbpass = "XaPaPoTee2y"; // Contraseña

 $link = mysql_connect($dbhost,$dbuser,$dbpass);
 		mysql_select_db($dbbase,$link);
?>