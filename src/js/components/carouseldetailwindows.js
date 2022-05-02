/**
 * @description Funcion para iniciar el carusel de noticias.
 * 
 */

/*INIT SLICK CAROUSEL NEWS-IN-DETAIL WINDOWS*/
var carouselNewsInDetailwindows = (function () {
    var init = function (element) {
        $(".evr-aside-gallery").slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: true,
            autoplay: true
        });
    };
    return {
        init: init
    };
})();
/*END INIT SLICK CARROUSEL*/