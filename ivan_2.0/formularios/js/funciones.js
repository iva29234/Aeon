/**
 * @author Aeon1
 * @copyright 2014   http://www.phonegapspain.com/forums/phonegap/
 */

 function guardar1(){
	$("#exito3").hide("fast");
	if (validateformmodificar())
	{
     $.ajax({
		type: "POST",
		url:"http://ivanapp.hol.es/AppProfesorCore/modificar.php",	
		data: $('#formmodificar').serialize(),
		success: function(resp)
		{ 
		alert(resp);
        $.mobile.navigate( '#modificar',{transition : 'slide'} );
		}
		}); 
	}
};


$("#guardar").click(function(){
	$("#exito3").hide("fast");
	if (validateformmodificar())
	{
     $.ajax({
		type: "POST",
		url:"http://ivanapp.hol.es/AppProfesorCore/modificar.php",	
		data: $('#formmodificar').serialize(),
		success: function(resp)
		{ 
		alert(resp);
        $.mobile.navigate( '#modificar',{transition : 'slide'} );
		}
		}); 
	}
});


function cargar(id){
    
   $.ajax({
		type: "POST",
		url:"http://ivanapp.hol.es/AppProfesorCore/llenar_formulario.php",
		data: {id:id},
		success: function(resp)
		{ 
		  var datos = eval(resp);
             $('#id').val(datos[0].id);
			 $('#strNombreForm').val(datos[0].strnombreSelect);
             $('#strApellidoForm').val(datos[0].apellido);  
             $('#strDniForm').val(datos[0].dni);
             $('#refCategoriaForm').val(datos[0].categoria);
		 $.mobile.navigate( '#modificaralumno',{transition : 'slide'} );
		}
		}); 
 };