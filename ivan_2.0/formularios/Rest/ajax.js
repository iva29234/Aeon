
<!-- *******************  CARGA AUTOMATICA de la Bd MySQL AL INICIAR *********************** -->
$(document).ready(function() {
//Carga los datos del CURSO de la BASE de DATOS en el campo (refCategoria) del form "Insertar Alumnos"
$.ajax({
		url:"http://www.ivanapp.hol.es/AppProfesorCore/funciones-ajax.php?formid=3",
		dataType: 'jsonp',
    	jsonp: 'jsoncallback',
		crossDomain: true,
    	timeout: 10000,
	    success: function(data, status){
        $.each(data, function(i, item){
            var datocategoria = '<option value="'+item.idCurso+'">'+item.strCurso+'</option>';
            $('#refCategoria').append(datocategoria);
        });
    	},
    	error: function(){
        output.text('Error accediendo a los datos');
    }
	});
//Carga los datos del CURSO de la BASE de DATOS en el campo (refCategoriaLista) del form "Ver Alumnos"
$.ajax({
		url:"http://www.ivanapp.hol.es/AppProfesorCore/funciones-ajax.php?formid=3",
		dataType: 'jsonp',
    	jsonp: 'jsoncallback',
		crossDomain: true,
    	timeout: 10000,
	    success: function(data, status){
        $.each(data, function(i, item){
            var datocategoria = '<option value="'+item.idCurso+'">'+item.strCurso+'</option>';
            $('#refCategoriaLista').append(datocategoria);
        });
    	},
    	error: function(){
        output.text('Error accediendo a los datos');
    }
	});
//Carga los datos del CURSO de la BASE de DATOS en el campo (refCategoriaListaModifcar) del form "MODIFICAR"
$.ajax({
		url:"http://www.ivanapp.hol.es/AppProfesorCore/funciones-ajax.php?formid=3",
		dataType: 'jsonp',
    	jsonp: 'jsoncallback',
		crossDomain: true,
    	timeout: 10000,
	    success: function(data, status){
        $.each(data, function(i, item){
            var datocategoria = '<option value="'+item.idCurso+'">'+item.strCurso+'</option>';
            $('#refCategoriaListaModificar').append(datocategoria);
        });
    	},
    	error: function(){
        output.text('Error accediendo a los datos');
    }
	});
});

	
//**************************************************************
//   TERMINA LA CARGA AUTOMATICA 
//**************************************************************


<!-- ********************  Boton insertar MODIFICAR del formulario (MODIFICAR) *************** -->

$('#botonmodificar').click(function (){
$("#exito3").hide("fast");
if (validateformmodificar())
	{	
	var nombre = document.formmodificar.strNombreForm.value;
	var apellido = document.formmodificar.strApellidoForm.value;
	var dni = document.formmodificar.strDniForm.value;
	var categoria = document.formmodificar.refCategoriaForm.value;
	$.ajax({
		type: "POST",
		url:"http://www.ivanapp.hol.es/AppProfesorCore/funciones.php",
		data: 'strNombre='+nombre+'&strApellido='+apellido+'&strDni='+dni+'&refCategoria='+categoria+'&formid=22',
		success: function(resp)
		{  
			if (resp==1)
			{
				 $("#exito3").show("slow");
				 setTimeout("$('#exito3').hide('slow');", 2000);
				 document.formmodificar.strNombreForm.value="";
				 document.formmodificar.strApellidoForm.value="";
				 document.formmodificar.strDniForm.value="";
				 document.formmodificar.refCategoriaForm.value="";
			}
		}
		});
	}
});


