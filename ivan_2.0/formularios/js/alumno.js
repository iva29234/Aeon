
<!-- **********************  BOTON INSERTAR del formulario (Nuevo Alumno) ***************** -->

function botoninsertar1() {

$("#exito2").hide("fast");
if (validateforminsertar())
	{	
	var nombre = document.forminsertar.strNombre.value;
	var apellido = document.forminsertar.strApellido.value;
	var dni = document.forminsertar.strDni.value;
	var categoria = document.forminsertar.refCategoria.value;
	$.ajax({
		type: "POST",
		url:"http://www.ivanapp.hol.es/AppProfesorCore/funciones.php",
		data: 'strNombre='+nombre+'&strApellido='+apellido+'&strDni='+dni+'&refCategoria='+categoria+'&formid=2',
		success: function(resp)
		{  
			if (resp==1)
			{
				 $("#exito2").show("slow");
				 setTimeout("$('#exito2').hide('slow');", 2000);
				 document.forminsertar.strNombre.value="";
				 document.forminsertar.strApellido.value="";
				 document.forminsertar.strDni.value="";

			}
		}
		});
	}
};


<!-- ************************** BOTON CATEGORIA LISTA form (ver Alumnos) ***************** -->

function botoncategorialista1() {
	
	var categoria = document.formcursos.refCategoriaLista.value;
	document.botones.intActual.value=1;
	$('#bloqueformulariocategorialistaresultados').html("");
	$('#botoneraextra').html("");
	$.ajax({
		url:'http://www.ivanapp.hol.es/AppProfesorCore/funciones-ajax.php?refCategoria='+categoria+'&formid=5',
		dataType: 'jsonp',
    	jsonp: 'jsoncallback',
		crossDomain: true,
    	timeout: 10000,
		success: function(data, status){
    	    $.each(data, function(i, item){
			/*
			Como se utilizan los IDS en codigo dinamico, hice un seteo de la Variable item.Alumno, a una variable Global además de eso para poder identificar
			el item de la lista que estoy pisando, utilizé una concatenación de div + item.idAlumno, lo cual me permite realizar código de manera dinamica sin perderme 
			*/
			var datosresultados = 
			'<div data-role="collapsible" onClick="AlumnoSeleccionado='+item.idAlumno+'" id="div'+ item.idAlumno +'"><h3><span class="capellido">'+item.strApellido+'</span><span class="ccurso">'+item.strCurso+'</span><br><span class="cnombre">'+item.strNombre+'</span></h3><p><span class="cdni">'+nl2br(item.strDni, true)+'</span></p><input type="button" value="Modificar" onclick="cargar('+item.idAlumno+')" class="VistaModificar" data-transition="pop" data-inline="true"/><input type="button" class="EliminarAlumno()" value="Eliminar" id="botoneliminar" data-inline="true"/></div>';
            

			/*  PARA MOSTRARLO EN FORMA DE LISTADO.. cambiar el <div data-role="collapsible>....</div> POR <li>.....</li>*/

			$('#bloqueformulariocategorialistaresultados').append(datosresultados);
			
//			$("#bloqueformulariocategorialistaresultados").listview("refresh");
			$('#bloqueformulariocategorialistaresultados').trigger('create');
		
			})
			}
	});
  };
		


<!--  Al Pulsar sobre un ALUMNO en el COLLAPSIBLE coje el id del alumno SELECCIONADO -->

var AlumnoSeleccionado = ''; 

function EliminarAlumno() {
			if (AlumnoSeleccionado == '') {
				alert('Debe serleccionar un Alumno para Eliminar');
			} else
			 {
				//Llamada Ajax Aquí
				$.ajax({
				url:'http://www.ivanapp.hol.es/AppPruebasCore/funciones-ajax.php?refAlumnoSeleccionado='+AlumnoSeleccionado+'&formid=7',
				dataType: 'jsonp',
    			jsonp: 'jsoncallback',
				crossDomain: true,
    			timeout: 10000,
				success: function(data, status)
				  {
    	    		$.each(data, function(i, item)
					{
    	    		
					// Ahora tengo el Alumno Seleccionado ¿cómo hago para ELIMINARLO??? 
					// ¿¿con la sentencia AlumnoSeleccionado =""; ?
    	    		
					alert("Alumno Con número de identificador " + AlumnoSeleccionado + " Eliminado");
					AlumnoSeleccionado ="";
		
      				})			      
 				  }
       			});
			   }
};

	function VistaModificar() {
	// Esto para cuando ponga los botones  de MODIFICAR dentro del collapsible.... Tendrá que acabar con }); al final 
	//$('.VistaModificar').click(function(){
	
			if (AlumnoSeleccionado == '') {
				alert('Debe serleccionar un Alumno para Editar');
			} else {
			
			$.ajax({
				url:'http://www.ivanapp.hol.es/AppPruebasCore/funciones-ajax.php?refAlumnoSeleccionado='+AlumnoSeleccionado+'&formid=7',
				dataType: 'jsonp',
    			jsonp: 'jsoncallback',
				crossDomain: true,
    			timeout: 10000,
				success: function(data, status)
				  {
    	    		$.each(data, function(i, item)
					{
    	    		
					var datosresultados = 
			'<li><h3><span class="capellido">'+item.strApellido+'</span><span class="ccurso">'+item.strCurso+'</span><br><span class="cnombre">'+item.strNombre+'</span></h3><p><span class="cdni">'+nl2br(item.strDni, true)+'</span></p></li>';
		
      				})			      
			
			
			var nombre = $('.cnombre').text();
			var apellido = $('.capellido').text();
			var dni = $('.cdni').text();
			var curso = $('.ccurso').text();
			console.log(nombre);
			console.log(apellido);
			console.log(dni);
			console.log(curso);
			console.log($(this));
			$('#strNombreForm').val(nombre);
			$('#strApellidoForm').val(apellido);
			$('#strDniForm').val(dni);
			$('#refCategoriaForm').val(curso);
			AlumnoSeleccionado ="";
			}
			})
			}
};

