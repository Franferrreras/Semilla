/*
 * Tratamiento de cookies
 */

$( document ).ready(function() {
	var cookie_key_accept = "show_msg_cookies";
	var cookie_key_general = "accept_cookies_general"
	var cookie_key_statistics = "accept_cookies_statistics"
	var cookie_key_customization = "accept_cookies_customization"

	// Configuramos el tiempo de expiracion de cookies (2 anios)
	var curDate = new Date();
    var curYear = curDate.getFullYear();
    var curMonth = curDate.getMonth();
    var curDay = curDate.getDate();
    var cookie_expires = new Date(curYear + 2, curMonth, curDay);

	// Si ya habíamos aceptado la política de cookies cargamos directamente las cookies
	if (existsCookie(cookie_key_accept)) {
		$("#accept-cookies").click();

	// Sino mostramos el mensaje
	}else {
		$('#modal-cookies').dialog({
		    //   height: 600,
			//   width: 900,
			dialogClass: "evr-cookies",
		    modal: true
		});  
		$("body").css("overflow", "hidden");
		var modal = $(".evr-cookies__modal");
		if(modal.length > 0){
			modal.mCustomScrollbar();
		}
	}

	// Función auxiliar que comprueba si existe una determinada cookie
	function existsCookie(cname) {    
		var name = cname + "=";    
		var ca = document.cookie.split(';');    
		for(var i = 0; i < ca.length; i++) {                
			var c = ca[i].trim();        
			if (c.indexOf(name) == 0) {
				return true;
			}
		}    
		return false;
	}
		
	// Aquí se definen las acciones a realizar a la hora de aceptar la política
	$("#accept-cookies").click(function() {
		// Creamos una cookie propia para marcar que el usuario ha aceptado la política
		document.cookie = cookie_key_accept + "=false;path=/;expires=" + cookie_expires.toUTCString();
		
		// Creamos cookies para guardar la aceptación de cada tipo de cookies
		var cookie_value_general = $('#cookies-general').is(':checked');
		document.cookie = cookie_key_general + "=" + cookie_value_general + ";path=/;expires=" + cookie_expires.toUTCString();
		var cookie_value_statistics = $('#cookies-statistics').is(':checked');
		document.cookie = cookie_key_statistics + "=" + cookie_value_statistics + ";path=/;expires=" + cookie_expires.toUTCString();
		var cookie_value_customization = $('#cookies-customization').is(':checked');
		document.cookie = cookie_key_customization + "=" + cookie_value_customization + ";path=/;expires=" + cookie_expires.toUTCString();

		// Si el usuario acepta las cookies de analítica, se inyecta el script de Google Analitics
		if(cookie_value_statistics) {
			//TODO
		}
		
		// Se oculta el mensaje
		$('#modal-cookies').dialog('close');
		$("body").css("overflow", "auto");
	});
});