/**
 * @description Funcion para hacer los botones del carusel funcionales.
 * 
 */

/**************** CAROUSEL VISITOR WINDOWS SLICK ****************/


var slickvisitorwindows = (function () {
    var init = function (element) {
        var btnFirts = document.querySelector('.evr-carrusel__btn-last');
        var btnLeft = document.querySelector('.evr-carrusel__btn-left');
        var btnRight = document.querySelector('.evr-carrusel__btn-right');
        var btnLast = document.querySelector('.evr-carrusel__btn-next');
        var btnPlay = document.querySelector('[data-button-type="play"]');
        var btnStop = document.querySelector('[data-button-type="stop"]');
        $(btnStop).click(function() {
            $('.evr-carrusel').slick('slickPause');
            $(btnStop).attr("data-button-state","deactive");
            $(btnPlay).attr("data-button-state","active");
        });
        $(btnPlay).click(function() {
            $('.evr-carrusel').slick('slickPlay');
            $(btnPlay).attr("data-button-state","deactive");
            $(btnStop).attr("data-button-state","active");
        });
        $(btnLeft).click(function() {
            $('.evr-carrusel').slick('slickPrev');
        });
        $(btnRight).click(function() {
            $('.evr-carrusel').slick('slickNext');
        });
        $(btnFirts).click(function() {
            $('.evr-carrusel').slick('slickGoTo', 0);
        });
        $(btnLast).click(function() {
            $('.evr-carrusel').slick('slickGoTo', 999);
        });
    };
    return {
        init: init
    };
})();

/**************** FIN CAROUSEL VISITOR WINDOWS SLICK ****************/
