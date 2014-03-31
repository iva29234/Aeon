<!-- ********************** BOTON CURSO del formulario (Nuevo Curso) ************************** -->

function botoncurso1() {

$("#exito1").hide("fast");
if (validateformcurso())
	{	
	var categoria = document.formcurso.strCurso.value;
	$.ajax({
		type: "POST",
		url:"http://www.ivanapp.hol.es/AppProfesorCore/funciones.php",
		data: 'strCurso='+categoria+'&formid=11',
		success: function(resp)
		{  
			if (resp==1)
			{
				 $("#exito1").show("slow");
				 setTimeout("$('#exito1').hide('slow');", 2000);
				 document.formcurso.strCurso.value="";
			}
		}
		});
	}
};
