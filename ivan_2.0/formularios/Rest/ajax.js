
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
            $('#refCategoriaListaModificarForm').append(datocategoria);
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



