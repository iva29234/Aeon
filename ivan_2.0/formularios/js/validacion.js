
//*************************************************************************************
//    VALIDACIONES para ver si han rellenado todos los campos de los formularios
//
//        "Añadir nuevo Curso",  "Insertar Nuevo Alumno",  y "Modificar Alumno"
//
//************************************************************************************


function nl2br (str, is_xhtml) {
  var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br ' + '/>' : '<br>'; 
  return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
}

function validateformcurso()
{
    valid = true;
	$("#aviso1").hide("slow");
	document.formcurso.strCurso.style.border='1px solid #EEEEEE';
	//COLORES
	if (document.formcurso.strCurso.value == ""){
		$("#aviso1").show("slow");
		document.formcurso.strCurso.style.border='1px solid red';
	    valid = false;
	}
	return valid;
}

function validateforminsertar()
{
    valid = true;
	$("#aviso2").hide("slow");
	document.forminsertar.strNombre.style.border='1px solid #EEEEEE';
	document.forminsertar.strApellido.style.border='1px solid #EEEEEE';
	document.forminsertar.strDni.style.border='1px solid #EEEEEE';
	//COLORES
	if (document.forminsertar.strNombre.value == ""){
		$("#aviso2").show("slow");
		document.forminsertar.strNombre.style.border='1px solid red';
	    valid = false;
	}
	if (document.forminsertar.strApellido.value == ""){
		$("#aviso2").show("slow");
		document.forminsertar.strApellido.style.border='1px solid red';
	    valid = false;
	}
	if (document.forminsertar.strDni.value == ""){
		$("#aviso2").show("slow");
		document.forminsertar.strDni.style.border='1px solid red';
	    valid = false;
	}
	return valid;
}

function validateformmodificar()
{
    valid = true;
	$("#aviso3").hide("slow");
	document.formmodificar.strNombreForm.style.border='1px solid #EEEEEE';
	document.formmodificar.strApellidoForm.style.border='1px solid #EEEEEE';
	document.formmodificar.strDniForm.style.border='1px solid #EEEEEE';
	
	//COLORES
	if (document.formmodificar.strNombreForm.value == ""){
		$("#aviso3").show("slow");
		document.formmodificar.strNombreForm.style.border='1px solid red';
	    valid = false;
	}
	if (document.formmodificar.strApellidoForm.value == ""){
		$("#aviso3").show("slow");
		document.formmodificar.strApellidoForm.style.border='1px solid red';
	    valid = false;
	}
	if (document.formmodificar.strDniForm.value == ""){
		$("#aviso3").show("slow");
		document.formmodificar.strDniForm.style.border='1px solid red';
	    valid = false;
	}
	return valid;
}