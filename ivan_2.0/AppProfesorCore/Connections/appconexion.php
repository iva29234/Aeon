<?php
# FileName="Connection_php_mysql.htm"
# Type="MYSQL"
# HTTP="true"
$hostname_appconexion = "mysql.hostinger.es";
$database_appconexion = "u816705532_mysql";
$username_appconexion = "u816705532_root";
$password_appconexion = "XaPaPoTee2y";


#Si acepta el servidor web la conexion PERSISTENTE poner la p en mysql_p..... 
// EN mi caso SI QUE lo acepta!!!
$appconexion = mysql_pconnect($hostname_appconexion, $username_appconexion, $password_appconexion) or trigger_error(mysql_error(),E_USER_ERROR); 
?>