/**
 * @description Funcion para inicializar el componente selectmenu de jQuery UI
 * @returns {Object} Devuelve la instancia selectmenu de jQuery UI.
 */
var carousel2  = (function () {
    var init = function () {
    
        $('.evr-carousel__slider-container').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.evr-carousel__slider-nav'
        });

        $('.evr-carousel__slider-nav').slick({
            slidesToShow: 3,
            centerPadding: 0,
            slidesToScroll: 1,
            asNavFor: '.evr-carousel__slider-container',
            centerMode: true,
            focusOnSelect: true
        });
    };

    return {
        init: init
    }

})();