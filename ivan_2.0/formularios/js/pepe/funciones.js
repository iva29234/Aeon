/**
 * @author Aeon1
 * @copyright 2014   http://www.phonegapspain.com/forums/phonegap/
 */
 
$(document).ready(function(){
    $.ajax({
		url:"http://ivanapp.hol.es/AppProfesorCore/consultar.php",
		 dataType: "json",
		crossDomain: true,
    	timeout: 10000,
	    success: function(data, status){
        $.each(data, function(i, item){
            $('#refCategoria').append('<div data-role="collapsible"><h3>'+item.nombre+' '+item.apellido+'</h3><input type="button" value="modificar" onclick="cargar('+item.id+')" /></div>');
    
        });
        $('#refCategoria').collapsibleset( "refresh" );
    	},
    	error: function(objeto, exception) {
            if (objeto.status === 0) {
                alert('No conectado...');
            } else if (objeto.status == 404) {
                alert('La pagina no se encuentra. [404]');
            } else if (objeto.status == 500) {
                alert('Error Interno del Servidor [500].');
            } else if (exception === 'parsererror') {
                alert('La respuesta JSON ha Fallado.' + exception + objeto.status);
				alert(exception);
				alert(objeto.status);
            } else if (exception === 'timeout') {
                alert('Time Out.');
            } else if (exception === 'abort') {
                alert('La respuesta Ajax ha sido Abordada.');
            } else {
                alert('Error desconocido.\n' + jqXHR.responseText);
            }
	}
	});


    
$("#guardar").click(function(){
     $.ajax({
		type: "POST",
		url:"http://ivanapp.hol.es/AppProfesorCore/modificar.php",
		data: $('#modificaciones').serialize(),
		success: function(resp)
		{ 
		alert(resp);
        $.mobile.navigate( '#page7',{transition : 'slide'} );
		}
		}); 
});

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
 }