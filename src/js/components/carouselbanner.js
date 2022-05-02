/**
 * @description Funcion para iniciar el carusel del banner principal.
 * 
 */

/*INIT SLICK CAROUSEL VISITOR WINDOWS*/

var carouselvisitorwindows = (function () {
    var init = function (element) {
      $(".evr-carrusel").slick({
          slidesToShow: 1,
        arrows: false,
        autoplay: true,
        // centerMode: true,
      });
    };
  return {
  init: init
};

})();

/*END INIT SLICK CARROUSEL*/