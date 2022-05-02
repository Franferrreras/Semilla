/**
 * @description Funcion para imprimir los contenidos que contenga el boton "version imprimible"
 * 
 */

/**************** START PRINT PAGES ****************/

var printpages = (function () {
    var init = function() {
        //Imprimible Espacio Natural
        	//Eliminamos cabecera
        	$('.portlet-breadcrumb').remove();
        	$('.evr-header__container').remove();
        	$('.scrtabs-tab-container').remove();
        	$('.hide').removeAttr('hidden');
        	$('.hide').css("display:","block");
        	$('.hide').removeClass("hide");
        	$('.evr-social-network').remove();
        	$('.evr-rest-content').remove(); //para eliminar el div restante  (aemet, rrss, botones descargas, etc)
        	//Imprimible Equipamiento
        	$('.portlet-breadcrumb').remove();
            $('.evr-header__container').remove();
            $('.scrtabs-tab-container').remove();
            $('.hide').removeAttr('hidden');
            $('.hide').css("display:","block");
            $('.hide').removeClass("hide");
            $('.evr-social-network').remove();
            $('.evr-rest-content').remove(); //para eliminar el div restante  (aemet, rrss, botones descargas, etc)
    };
    return {
        init: init
    };
})();
/**************** END PRINT PAGES ****************/