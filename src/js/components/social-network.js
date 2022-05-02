/**
 * @description Funcion para hacer un desplegable con Jquery en el componente de redes sociales
 * 
 */

/**************** START COLLAPSE ****************/

var collapsesocialnetwork = (function () {
    var init = function (element) {
        $("#shareRoundIcons").jsSocials({
            showLabel: false,
            showCount: false,
            shareIn: "popup",
            shares: ["facebook", "twitter"]
        });
                
        $("#shareGenericButton").jsSocials({
            showLabel: false,
            showCount: false,
            shareIn: "popup",
            shares: ["whatsapp", "pinterest", "email"]
        });
        
        var icon = $('#rrss-trigger i');
        $('#shareGenericButton').addClass('hidden');
        $('#rrss-trigger').click(function () {
            $(this).toggleClass('active');
            $('#shareGenericButton').toggleClass('hidden').toggleClass('block');
        });
    };
    return {
        init: init
    };
})();

/**************** FIN COLLAPSE ****************/