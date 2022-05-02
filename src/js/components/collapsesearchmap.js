/**
 * @description Funcion para hacer un collapse con Jquery en el componente del buscador avanzado (search map)
 * 
 */

/**************** START COLLAPSE ****************/

var collapsesearchmap = (function () {
    var init = function (element) {
        $("#toggle-btn").click(function(){
            $("#toggle-example").slideToggle(800); // Modificamos la velocidad del collapse, por defecto es 400
            $(this).toggleClass("evr-search-map__btn-hidden--active")
            if ( $(this).hasClass( "evr-search-map__btn-hidden--active" ) ) {
                $(".evr-search-map__btn-text").text( "Filtros de búsqueda" );
              } else {
                $(".evr-search-map__btn-text").text( "Ocultar" );
              }
        });
    };
    return {
        init: init
    };
})();

/**************** FIN COLLAPSE ****************/