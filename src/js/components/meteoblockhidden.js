/**
 * @description Funcion para hacer el botón del bloque meteorológico funcional.
 * 
 */

/**************** START HIDDEN BLOCK METEO ****************/

var showmeteocont = (function () {
    var init = function (element) {
        var openMeteoBtn = $('.evr-meteo-time__btn-notice-level');
        var closeMeteoBtn = $('.evr-notice-level__btn');

        openMeteoBtn.each(function() {
            $(this).click(function(){
                $(this).parent().find('.evr-notice-level').css("display", 'block');
            })
        });

        closeMeteoBtn.each(function() {
            $(this).click(function(){
                $(this).parents('.evr-notice-level').css("display", 'none');
            })
        });
    };
    return {
        init: init
    };
})();

/**************** FIN HIDDEN BLOCK METEO ****************/