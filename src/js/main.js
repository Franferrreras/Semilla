/* document ready */
// $(document).ready(function() {
/* Jquery ui selectmenu */
// selectmenu.init();
// slidetabs.init();
// datepicker.init(); Ocultamos DatePicker repetido
// videohtml5.init();
// collapsesearchmap.init();
// collapsesocialnetwork.init();
// showmeteocont.init();
// });

// /* ***************** jQuery DOCUMENT READY ***************** */
// $(document).ready(function () {

//     seatchButtonHeader();
//     slides();
//     carousel();
//     initselect();
//     scrollsocial();
//     $('.evr-main-navigation__link-icon').on('click', function(){
//         $(this).siblings('.evr-main-navigation__link').toggleClass("dropdown");
//     });
//     showMeteoCont();
// });


/**************** HEADER **************************/
function seatchButtonHeader() {
    var button = $(".evr-search__icon-search");
    if (button.length > 0) {
        button.click(function () {
            $(".evr-search__content").removeClass("t-hide");
            $(this).addClass("open");
        });
    }
    var close = $(".evr-search__icon-search-close");
    if (close.length > 0) {
        close.click(function () {
            $(".evr-search__content").addClass("t-hide");
            $(".evr-search__icon-search").removeClass("open");

        });
    }
}
function visitform() {
    var btn = $("[data-visitform]")[0];
    if(btn){
        var ipt = $(btn).siblings("input")[0];
        if(ipt){
            btn.onkeyup = function(ev) {
                if (ev.keyCode === 13) {
                    ipt.click();
                }
            };
        }
    }
}
if($('#ControlMenu') != null && $('#ControlMenu').length > 0) {
    $("header").css("top", "66px");
}
/**************** FIN HEADER **************************/

/**************** MAIN MENU RESPONSIVE **************************/
function slides() {

    // $('.toggleMainMenu').sideNavigation({
    //     typeMobile: 'fixed-push',
    //     position: 'right',
    //     width: '100%'
    // });
    var id = $("#toggleMainMenu");
    var nav = $('.evr-main-navigation');
    var idClose = $('#toggleMainMenuClose');
    var overlay = $(".evr-overlay");
    var item = $('.evr-main-navigation__item');

    if (id.length > 0 && nav.length > 0) {
        $("#toggleMainMenu").click(function () {
            $("#toggleMainMenu").toggleClass('btn-menu-close');
            $('.evr-main-navigation').toggleClass('open-responsive');
        });
    }
    if (overlay.length > 0 && idClose > 0){
        $(".evr-overlay").click(function () {
            $('#toggleMainMenuClose').click();
            $(this).removeClass("open");
            $('body').removeClass("overflow");
        });
    }
    if (id.length > 0 && item.length > 0){
        $("#toggleMainMenu").click(function () {
            $('.evr-main-navigation__item').show();
        });
    }

}
/**************** FIN MAIN MENU RESPONSIVE **************************/

/*INIT SELECT LANGUAGE*/
function initselect() {
    var language = $(".evr-language .dropdown-menu li button");
    if (language.length > 0) {
        $(".evr-language .dropdown-menu li button").click(function () {
            $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
            $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
        });
    }
}

/* FUNCTION STICKY HEADER */
function sticky() {
    var header = document.getElementById("banner");
    var content = document.getElementById("evr-main-content");

    if (header !== null && content !== null) {
        var sticky = header.offsetTop;
        if (window.pageYOffset >= sticky) {
            header.classList.add("evr-header__sticky");
            content.classList.add("evr-main-content__sticky");
        } else {
            header.classList.remove("evr-header__sticky");
            content.classList.remove("evr-main-content__sticky");
        }
    }
}

/* END FUNCTION STICKY HEADER */

/**************** PARALAX **************************/

function parallax() {
    var pax = $(".parallax");
    if (pax.length > 0) {
        $(".parallax").each(function () {
            var scrollPosition = $(window).scrollTop();
            var innerBox = $(this)[0];
            var dist = innerBox.getBoundingClientRect().top / 4;
            var limit = $(this).offset().top - $(window).height();
            if (scrollPosition > limit) {
                $(this).addClass("active");
                $(this).css("background-position-y", "calc(0px - " + dist + "px)");
            } else {
                $(this).removeClass("active");
                $(this).css("background-position-y", "0px")
            }
        });

        var paxR = pax.find('.parallax--dot-right');
        var paxL = pax.find('.parallax--dot-left');
        var paxA = pax.find('.parallax--arrow');

        if (paxL.length > 0) {
            $(".parallax").find('.parallax--dot-left').each(function () {
                var scrollPosition = $(window).scrollTop();
                var innerBox = $(this)[0];
                var dist = innerBox.getBoundingClientRect().top / 4;
                var limit = $(this).offset().top - $(window).height();
                if (scrollPosition > limit) {
                    $(this).css("background-position-y", "calc(100% - " + dist + "px)");
                } else {
                    $(this).css("background-position-y", "100%")
                }
            });
        }

        if (paxR.length > 0) {
            $(".parallax").find('.parallax--dot-right').each(function () {
                var scrollPosition = $(window).scrollTop();
                var innerBox = $(this)[0];
                var dist = innerBox.getBoundingClientRect().top / 4;
                var limit = $(this).offset().top - $(window).height();
                if (scrollPosition > limit) {
                    $(this).css("background-position-y", "calc(100% - " + dist + "px)");
                } else {
                    $(this).css("background-position-y", "100%")
                }
            });
        }

        if (paxA.length > 0) {
            $(".parallax").find('.parallax--arrow').each(function () {
                var scrollPosition = $(window).scrollTop();
                var innerBox = $(this)[0];
                var dist = innerBox.getBoundingClientRect().top / 4;
                var limit = $(this).offset().top - $(window).height();
                if (scrollPosition > limit) {
                    $(this).css("background-position-y", "calc(100% + 97px - " + dist + "px)");
                } else {
                    $(this).css("background-position-y", "calc(100% + 97px)")
                }
            });
        }
    }
}
function adaptiveHeightImg() {
    var imagen = $(".evr-present__cont-img");
    var imagenSearch = $(".evr-article-collage-map__collection .evr-article-result__image-150");
    var imagenCarr = $(".evr-carousel__figure");
    var imagenResult = $(".evr-article-result__thumb");
    var imagenResult2 = $(".evr-article-collage-map__thumb");
    var imagenCont = $(".evr-content-links__cont-img");
    var imagenVisit = $(".evr-visitcollage__figure");

    if(imagenVisit.length>0) {
        imagenVisit.each(function() {
            var width = $(this).width();
            var height = width*2/3;
            $(this).css("height", height);
        })
    }
    if(imagenResult2.length>0) {
        imagenResult2.each(function() {
            var width = $(this).width();
            var height = width*2/3;
            $(this).css("height", height);
        })
    }
    if(imagenCont.length>0) {
        imagenCont.each(function() {
            var width = $(this).width();
            var height = width*2/3;
            $(this).css("height", height);
        })
    }
    if(imagen.length>0) {
        imagen.each(function() {
            var width = $(this).width();
            var height = width*2/3;
            $(this).css("height", height);
        })
    }
    if(imagenResult.length>0) {
        imagenResult.each(function() {
            var width = $(this).width();
            var height = width*2/3;
            $(this).css("height", height);
        })
    }
    if(imagenSearch.length>0) {
        imagenSearch.each(function() {
            var figure = $(this).parent("figure");
            if(figure.length > 0) {
                var width = figure.width();
                var height = width*2/3;
                figure.css("height", height);
            }
        })
    }


    if(imagenCarr.length>0) {
        imagenCarr.each(function() {
            var width = $(this).width();
            var height = width*2/3;
            $(this).css("height", height);
        })
    }

}

/**************** FIN PARALAX **************************/

/**************** START HIDDEN BLOCK METEO ****************/
// function showMeteoConts (){
//         var openMeteoBtn = $('.evr-meteo-time__btn-notice-level');
//         var closeMeteoBtn = $('.evr-meteo-time__btn-close');

//         openMeteoBtn.each(function() {
//             $(this).click(function(){
//                 $(this).parent().find('.evr-meteo-time__cont-notice-level').css("display", 'block');
//             })
//         });

//         closeMeteoBtn.each(function() {
//             $(this).click(function(){
//                 $(this).parents('.evr-meteo-time__cont-notice-level').css("display", 'none');
//             })
//         });
// }
/**************** FIN HIDDEN BLOCK METEO ****************/
function initCarrusel(){
    var carouselCont = $('.evr-carousel__slider-container');
    var carouselNav = $('.evr-carousel__slider-nav');
    if (carouselCont.length > 0) {
        $('.evr-carousel__slider-container').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.evr-carousel__slider-nav'
        });
    }
    if (carouselNav.length > 0) {
        $('.evr-carousel__slider-nav').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            asNavFor: '.evr-carousel__slider-container',
            centerMode: true,
            centerPadding: '40px',
            focusOnSelect: true,
            arrows: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: true,
                        centerMode: true,
                        centerPadding: '30px',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: true,
                        centerMode: true,
                        centerPadding: '20px',
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
}
/*INIT SLICK*/
function carousel() {

    var carousel = $(".evr-carrusel");
    var carouselBanner = $(".evr-banner--slider");
    var carouselBanner2 = $(".evr-banner--simple");
    var carouselAside = $(".evr-aside-gallery");
    var carouselNet = $(".evr-social-networks");
    var carouselPortlet = $(".evr-social-networks .portlet-dropzone");
    var carouselNatural = $(".evr-space-natural-social-networks");

    var carouselCont2 = $('.evr-carousel__slider-container2');
    var carouselNav2 = $('.evr-carousel__slider-nav2');

    var btnFirts = $('.evr-carrusel__btn-last');
    var btnLeft = $('.evr-carrusel__btn-left');
    var btnRight = $('.evr-carrusel__btn-right');
    var btnLast = $('.evr-carrusel__btn-next');
    var btnPlay = $('[data-button-type="play"]');
    var btnStop = $('[data-button-type="stop"]');

    if (carousel.length > 0) {
        $(".evr-carrusel").slick({
            slidesToShow: 1,
            arrows: false,
            autoplay: true,
            // centerMode: true,
        });

        if (btnStop.length > 0 && btnPlay.length > 0) {
            $(btnStop).click(function () {
                $('.evr-carrusel').slick('slickPause');
                $(btnStop).attr("data-button-state", "deactive");
                $(btnPlay).attr("data-button-state", "active");
            });
            $(btnPlay).click(function () {
                $('.evr-carrusel').slick('slickPlay');
                $(btnPlay).attr("data-button-state", "deactive");
                $(btnStop).attr("data-button-state", "active");
            });
        }
        if (btnLeft.length > 0) {
            $(btnLeft).click(function () {
                $('.evr-carrusel').slick('slickPrev');
            });
        }
        if (btnRight.length > 0) {
            $(btnRight).click(function () {
                $('.evr-carrusel').slick('slickNext');
            });
        }
        if (btnFirts.length > 0) {
            $(btnFirts).click(function () {
                $('.evr-carrusel').slick('slickGoTo', 0);
            });
        }
        if (btnLast.length > 0) {
            $(btnLast).click(function () {
                $('.evr-carrusel').slick('slickGoTo', 999);
            });
        }
    }

    if (carouselBanner.length > 0) {
        $(".evr-banner--slider").slick({
            autoplay: true
        });
    }
    if (carouselBanner2.length > 0) {
        $(".evr-banner--simple").slick({
            autoplay: true,
            arrows: false
        });
    }
    if (carouselAside.length > 0) {
        $(".evr-aside-gallery").slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: true,
            autoplay: true
        });
    }
    if (carouselPortlet.length > 0) {
        $(".evr-social-networks .portlet-dropzone").slick( {
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }]
        });
    }

    if (carouselNatural.length > 0) {
        $(".evr-space-natural-social-networks").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }]
        });
    }


    if (carouselCont2.length > 0) {
        $('.evr-carousel__slider-container2').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.evr-carousel__slider-nav2'
        });
    }
    if (carouselNav2.length > 0) {
        $('.evr-carousel__slider-nav2').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            asNavFor: '.evr-carousel__slider-container2',
            centerMode: true,
            focusOnSelect: true,
            arrows: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: true,
                        centerMode: true,
                        centerPadding: '30px',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: true,
                        centerMode: true,
                        centerPadding: '20px',
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
}
/*END INIT SLICK*/

/*INIT CUSTOM SCROLLBAR */
function scrollsocial() {
    var socialScroll = $(".evr-social-networks__scroll");
    if (socialScroll.length > 0) {
        $(".evr-social-networks__scroll").mCustomScrollbar();
    }
}
/*END INIT CUSTOM SCROLLBAR */

/* FUNCTION RESIZE MENU RESPONSIVE */
function menuResize() {
    var menuResponsive = $("[data-menuResponsive='initial']");
    if (menuResponsive.length > 0) {
        if (window.innerWidth > 1200) {
            $("[data-menuResponsive='initial']").removeClass("responsive");
            $("[data-menuResponsive='initial']").removeClass("open-reponsive");
        } else if (window.innerWidth < 1200) {
            $("[data-menuResponsive='initial']").addClass("responsive");
        }
    }
}
/* END FUNCTION RESIZE MENU RESPONSIVE */

/* SELECTMENU GENERIC */
function selectmenu() {
    // if (typeof element === 'undefined') {
    var allSelectmenu = $('[data-selectmenu]');
    if (allSelectmenu.length > 0) {
        allSelectmenu.each(function () {
            var $this = $(this),
                $parent = $this.parents('.evr-selectmenu__ipt').length > 0 ? $this.parents('.evr-selectmenu__ipt') : $this.parents('.evr-selectmenu');
            $this.selectmenu({
                appendTo: $parent
            });
        })
    }
    // };
}
/* FIN SELECTMENU GENERIC */

/* TABS */
function slidetabs() {
    var tabs = $('.evr-tabs').find(".nav-tabs");
    if (tabs.length > 0) {
        $('.evr-tabs').find(".nav-tabs").scrollingTabs({
            scrollToTabEdge: true,
            enableSwiping: true,
            disableScrollArrowsOnFullyScrolled: true,
        });
    }
}

/* FIN TABS */

/* REPRODUCIR VIDEOS */
function videohtml5() {
    var $videos = $('[data-video]');
    if ($videos.length > 0) {
        $videos.each(function () {
            var $this = $(this),
                $button = $this.find('[data-video-play]'),
                $vid = $this.find('video');
            if ($this.length > 0 && $button.length > 0 && $vid.length > 0){
                $button.click(function () {
                    $this.toggleClass('evr-video--active');
                    if ($this.hasClass('evr-video--active')) {
                        $vid.get(0).play();
                        $this.removeClass('evr-video--play');
                    } else {
                        $vid.get(0).pause();
                        $this.addClass('evr-video--play');
                    }
                });
                $vid.get(0).addEventListener('ended', function () {
                    $this.removeClass('evr-video--active');
                    $this.addClass('evr-video--play');
                });
            }
        });
    }
}
/* REPRODUCIR VIDEOS */

/*OCULTAR MOSTRAR BUSCADOR*/
function collapsesearchmap() {
    var items = $("#toggle-btn");
    var toggle = $("#toggle-example");
    var btnText = $(".evr-search-map__btn-text");
    if (items.length > 0 && toggle.length > 0 && btnText.length > 0) {
        $("#toggle-btn").click(function () {
            $("#toggle-example").slideToggle(800); // Modificamos la velocidad del collapse, por defecto es 400
            $(this).toggleClass("evr-search-map__btn-hidden--active")
            if ($(this).hasClass("evr-search-map__btn-hidden--active")) {
                var a = Liferay.Language.get('vv.search.map.jsp.filtro.busqueda');
                $(".evr-search-map__btn-text").text(a);
            } else {
                var b = Liferay.Language.get('vv.search.map.jsp.ocultar');
                $(".evr-search-map__btn-text").text(b);
            }
        });
    }
}
/* FIN OCULTAR MOSTRAR BUSCADOR */

/* REDES SOCIALES */
function collapsesocialnetwork() {
    var item1 = $("#shareRoundIcons");
    var item2 = $('#rrss-trigger');
    var item = $('#shareGenericButton');
    if (item1.length > 0 && item.length > 0) {
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
        $('#shareGenericButton').addClass('hidden');
    }
    if (item2.length > 0 && item.length > 0) {
        $('#rrss-trigger').click(function () {
            $(this).toggleClass('active');
            $('#shareGenericButton').toggleClass('hidden').toggleClass('block');
        });
    }
}
/* FIN REDES SOCIALES */

/* MOSTRAR MENU DESPLEGABLE U OCULTARLO */
function showmeteocont() {
    var openMeteoBtn = $('.evr-meteo-time__btn-notice-level');
    var closeMeteoBtn = $('.evr-notice-level__btn');
    if (openMeteoBtn.length > 0) {
        openMeteoBtn.each(function () {
            $(this).click(function () {
                $(this).parent().find('.evr-notice-level').css("display", 'block');
            })
        });
    }
    if (closeMeteoBtn.length > 0) {
        closeMeteoBtn.each(function () {
            $(this).click(function () {
                $(this).parents('.evr-notice-level').css("display", 'none');
            })
        });
    }
}
/* FIN MOSTRAR MENU DESPLEGABLE U OCULTARLO */

/* initMainNavigation */
function initMainNavigation() {
    var mainNav = $('.evr-main-navigation__link-icon');
    if (mainNav.length > 0) {
        var mainLink = mainNav.siblings('.evr-main-navigation__link');
        if (mainLink.length > 0) {
            $('.evr-main-navigation__link-icon').on('click', function () {
                $(this).siblings('.evr-main-navigation__link').toggleClass("dropdown");
            });
        }
    }
}
/* FIN initMainNavigation */

/* initMultiSelect */
function initMultiSelect() {
    var select = $('[data-multiselect]');
    if (select.length > 0) {
        select.multiselect();
        $("[data-for*=itemList]").each(function(){
            $(this).appendTo("#"+$(this).attr("data-for"));
        });
        select.each(function(){
            var input = "#" + $(this).attr("id") + "_input";
            $(input).attr("placeholder", $(this).attr("placeholder"));
            $(input).on("click", function(){
                $("#" + $(this).attr("id") + "_itemList").removeClass("active");
            })
            $("#" + $(this).attr("id") + "_itemList > span:first-child > label > span").html(Liferay.Language.get('vv.search.map.jsp.selecciona.un.tipo.de.equipamiento.todo'));
            $(input).change(function() {
                changeText();
                if($(this).val().length > 0 && $(this).val() != "All selected"){
                    $(this).val("Seleccionados");
                }
                if($(this).val() == "All selected"){
                    $(this).val("Todos seleccionados");
                }
            });

        })
    }
}
/* FIN initMultiSelect */

/* multiselectOptions */
function multiselectOptions() {
    var clear = $("[data-clear]");
    var close = $("[data-close]");
    close.on("click",function() {
        $('#' + $(this).attr("data-close") + '_itemList').removeClass("active");
    });
    clear.on("click", function() {
        // $('#' + $(this).attr("data-clear")).multiselect().deselectAll();
        var itemsChecked = $(".multiselect-checkbox:checked");
        if(itemsChecked.length > 0){
            for (let index = 0; index < itemsChecked.length; index++) {
                var item = itemsChecked[index];
                if (!$(item).is('[data-val="-1"]')) {
                    item.click();
                }
            }
        }
    });
}
/* FIN multiselectOptions */

/* select custom hover */

function eventsSelect(){
    var item = $(".equipamiento-selectmenu-select");
    if(item.length > 0){
        item.change(function(){
            changeText();
            countSelect();
        });
    }
    changeText();
    countSelect();
}

function clickInput(){
    var item = $(".multiselect-checkbox");
    if(item.length >  0){
        item.change(function(){
            changeText();
        })
    }
}

function initSpan(){
    var item = $(".multiselect-wrapper .multiselect-input-div");
    if(item.length > 0){
        item.append("<span class='evr-custom-select__placeholder-sp t-hide'></span>");
        $(".multiselect-wrapper .multiselect-input-div .multiselect-input").attr("readonly",true)
        $(".evr-custom-select__placeholder-sp").click(function(){
            if($(".multiselect-input").length > 0){
                $(".multiselect-input").click();
            }
        });
    }
}

function changeInput(entry){
    var text = Liferay.Language.get("seleccionados");
    var span = $(".evr-custom-select__placeholder-sp");
    if(span.length > 0){
        if(entry){
            span.removeClass("t-hide");
            span.html(text);
        }else{
            span.addClass("t-hide");
        }
    }

}
function changeText(){
    var itemsChecked = $(".multiselect-checkbox:checked");
    var stringValue = "";
    var container = $("[data-values]");
    var entry = true;
    if(itemsChecked.length > 0 && container.length > 0){
        for (let index = 0; index < itemsChecked.length; index++) {
            var item = itemsChecked[index];
            if (item.nextElementSibling != null) {
                stringValue += "<p>"+ item.nextElementSibling.innerHTML.trim() + "</p>";
            }
        }
        container.html(stringValue);
        entry = true;
    }else{
        container.html("");
        entry = false;
    }
    changeInput(entry);
}

function countSelect(){
    var checkedCount = $(".equipamiento-selectmenu-option:checked");
    var placeholder = $("[data-placeholder]"); //(SPAN)
    if(checkedCount.length > 0 && checkedCount.length > 0){
        $(placeholder).html(Liferay.Language.get('select-label') + " ("+checkedCount.length+")");
    }else{
        if(placeholder.length > 0){
            //instruccion de volver a la normalidad
            $(placeholder).html($(placeholder).data().placeholder);
        }
    }
}

var checkedCount = $(".equipamiento-selectmenu-option:checked");
var placeholder = $("[data-placeholder]"); //(SPAN)
if(checkedCount.length > 0 && checkedCount.length > 0){
    $(placeholder).html(Liferay.Language.get('select-label') + " ("+checkedCount.length+")");
}else{
    if(placeholder.length > 0){
        //instruccion de volver a la normalidad
        $(placeholder).html($(placeholder).data().placeholder);
    }
}

/* FIN select custom hover */

/* ********* LIMPIAR COOKIES ***************/
window.onpopstate = function () {
    cleanCookiesBuscadores();
    history.go(-1);
};

/* ********* LIMPIAR COOKIES ***************/
function cleanCookiesBuscadores() {
    if (sessionStorage.idPag == undefined) {
        sessionStorage.idPag = Liferay.ThemeDisplay.getLayoutId();
    } else {
        if (sessionStorage.idPag != Liferay.ThemeDisplay.getLayoutId()) {
            try {
                document.cookie.split(";").forEach(function (c) {
                    if (c.indexOf(' searchFromCookies_') > -1) {
                        document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
                    }
                });
            } catch (e) {
                console.log('<---EXECUTE FUNCTION : cleanCookiesBuscadores');
            }
            sessionStorage.idPag = Liferay.ThemeDisplay.getLayoutId();
        }
    }
}


/* ***************** jQuery DOCUMENT READY ***************** */
$(document).ready(function () {

    initCarrusel();
    checkHistory();
    visitform();
    seatchButtonHeader();
    slides();
    carousel();
    initselect();
    scrollsocial();
    //    showMeteoCont();
    selectmenu();
    slidetabs();
    videohtml5();
    collapsesearchmap();
    collapsesocialnetwork();
    showmeteocont();
    initMainNavigation();
    initMultiSelect();
    multiselectOptions();
    /* Jquery ui selectmenu */
    // selectmenu.init();
    // slidetabs.init();
    // datepicker.init(); Ocultamos DatePicker repetido
    // videohtml5.init();
    // collapsesearchmap.init();
    // collapsesocialnetwork.init();
    // showmeteocont.init();
    checkRSS();
    eventsSelect();
    clickInput();
    initSpan();
    buscadorCookiesClear();
    createIfNotExistsSessionStorage();
    setInterval(function(){ adaptiveHeightImg() }, 1000);
    cleanCookiesBuscadores();
});


/* ***************** jQuery IF HISTORY <= 1 THEN HIDDE BACK BUTTON ***************** */
function checkHistory() {
    if(history.length <= 1){
        $('#backButton').addClass('hidden');
    }
}

/* ***************** jQuery checkRSS ***************** */
function checkRSS() {
    var permission = $('#permission').val();
    if (permission == "false") {
        var instagram = $('.evr-social-networks__content--instagram').length;
        if (instagram == 0) {
            $('.portlet-boundary_instagram_').remove();
        }
        var facebook = $('.evr-social-networks__content--facebook').length;
        if (facebook == 0) {
            $('.portlet-boundary_facebook_').remove();
        }
        var twitter = $('.evr-social-networks__content--twitter').length;
        if (twitter == 0) {
            $('.portlet-boundary_twitter_').remove();
        }
    }
}

/* ***************** jQuery RESIZE ***************** */

$(window).resize(function () {

    menuResize();
    adaptiveHeightImg();
});

/* ***************** jQuery ON SCROLL ***************** */

$(window).scroll(function () {
    parallax();
    sticky();
});



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
        $('.evr-footer').remove();
        $('.evr-caminame__jssocials').remove();
        $('.evr-caminame-mobile').remove();

        var doc = new jsPDF();
        var elementHTML = $('#evr-wrapper').html();

        html2canvas(document.body,{
            onrendered:function(canvas){

                var img=canvas.toDataURL("image/png");
                var doc = new jsPDF();
                doc.addImage(img,'JPEG',20,20);
                doc.save('test.pdf');
            }

        });




        //Imprimible Equipamiento
        //$('.portlet-breadcrumb').remove();
        //$('.evr-header__container').remove();
        //$('.scrtabs-tab-container').remove();
        //$('.hide').removeAttr('hidden');
        //$('.hide').css("display:","block");
        //$('.hide').removeClass("hide");
        //$('.evr-social-network').remove();
        //$('.evr-rest-content').remove(); //para eliminar el div restante  (aemet, rrss, botones descargas, etc)
    };
    return {
        init: init
    };
})();

/* *************** CREATE SESSION STORAGE FOR BACK URL BUTTON ********** */
function createIfNotExistsSessionStorage(){

    if (window.sessionStorage.length == 0) {
        sessionStorage.setItem('userNavigation', new Array());
    }

    var arrayUserStorage = sessionStorage.getItem("userNavigation");
    if (arrayUserStorage != ""){
        arrayUserStorage = arrayUserStorage.split(",");
    }else{
        arrayUserStorage = Array(sessionStorage.getItem("userNavigation"));
    }

    var ultimaPaginaAnadida = String(arrayUserStorage[arrayUserStorage.length - 1]);
    var paginaActual = String(window.location.href);
    if (arrayUserStorage.length >= 0 && ultimaPaginaAnadida.localeCompare(paginaActual) != 0){
        arrayUserStorage.push(window.location.href);
        sessionStorage.setItem("userNavigation", arrayUserStorage);
    }
}

/* ***************** BACK URL BUTTON ***************** */
function goBack() {

    var arrayUserStorage = String(sessionStorage.getItem("userNavigation")).split(",");

    if (arrayUserStorage.length > 0){
        borrarUltimo = arrayUserStorage.pop();
        locationBack = String(arrayUserStorage.pop());
        sessionStorage.setItem("userNavigation", arrayUserStorage);

        if(locationBack.localeCompare(String("undefined")) != 0
            && locationBack.localeCompare(String("")) != 0){
            window.location.href = locationBack;
        }
    }
}
/* *************** CLEAR COOKIES FROM BUSCADOR ********** */
function buscadorCookiesClear(){
    var currentURLCookie = document.URL;
    if(!currentURLCookie.includes("buscador-de-espacios-naturales-y-equipamientos")
        && !currentURLCookie.includes("detalle-buscador-mapa")){
        document.cookie = "searchFromCookies=false;path=/;";
        document.cookie = "cookieSearchCategory1=;path=/;";
        document.cookie = "cookieSearchCategory0=;path=/;";
        document.cookie = "cookieSearchCategoryEspaciosNaturales=;path=/;";
        document.cookie = "cookieSearchCategorySearchTextInput=;path=/;";
        document.cookie = "cookieSearchCategoryCheck=false;path=/;";
        document.cookie = "cookieSearchCategoryEquipamientos=;path=/;";
    }
}

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.togpx = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
        var JXON = require("jxon");
        JXON.config({attrPrefix: '@'});

        function togpx( geojson, options ) {
            options = (function (defaults, options) {
                for (var k in defaults) {
                    if (options.hasOwnProperty(k))
                        defaults[k] = options[k];
                }
                return defaults;
            })({
                creator: "togpx",
                metadata: undefined,
                featureTitle: get_feature_title,
                featureDescription: get_feature_description,
                featureLink: undefined,
                featureCoordTimes: get_feature_coord_times,
            }, options || {});

            // is featureCoordTimes is a string -> look for the specified property
            if (typeof options.featureCoordTimes === 'string') {
                var customTimesFieldKey = options.featureCoordTimes;
                options.featureCoordTimes = function (feature) {
                    return feature.properties[customTimesFieldKey];
                }
            }

            function get_feature_title(props) {
                // a simple default heuristic to determine a title for a given feature
                // uses a nested `tags` object or the feature's `properties` if present
                // and then searchs for the following properties to construct a title:
                // `name`, `ref`, `id`
                if (!props) return "";
                if (typeof props.tags === "object") {
                    var tags_title = get_feature_title(props.tags);
                    if (tags_title !== "")
                        return tags_title;
                }
                if (props.name)
                    return props.name;
                if (props.ref)
                    return props.ref;
                if (props.id)
                    return props.id;
                return "";
            }
            function get_feature_description(props) {
                // constructs a description for a given feature
                // uses a nested `tags` object or the feature's `properties` if present
                // and then concatenates all properties to construct a description.
                if (!props) return "";
                if (typeof props.tags === "object")
                    return get_feature_description(props.tags);
                var res = "";
                for (var k in props) {
                    if (typeof props[k] === "object")
                        continue;
                    res += k+"="+props[k]+"\n";
                }
                return res.substr(0,res.length-1);
            }
            function get_feature_coord_times(feature) {
                if (!feature.properties) return null;
                return feature.properties.times || feature.properties.coordTimes || null;
            }
            function add_feature_link(o, f) {
                if (options.featureLink)
                    o.link = { "@href": options.featureLink(f.properties) }
            }
            // make gpx object
            var gpx = {"gpx": {
                    "@xmlns":"http://www.topografix.com/GPX/1/1",
                    "@xmlns:xsi":"http://www.w3.org/2001/XMLSchema-instance",
                    "@xsi:schemaLocation":"http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd",
                    "@version":"1.1",
                    "metadata": null,
                    "wpt": [],
                    "trk": [],
                }};
            if (options.creator)
                gpx.gpx["@creator"] = options.creator;
            if (options.metadata)
                gpx.gpx["metadata"] = options.metadata;
            else
                delete options.metadata;

            var features;
            if (geojson.type === "FeatureCollection")
                features = geojson.features;
            else if (geojson.type === "Feature")
                features = [geojson];
            else
                features = [{type:"Feature", properties: {}, geometry: geojson}];
            features.forEach(function mapFeature(f) {
                switch (f.geometry.type) {
                    // POIs
                    case "Point":
                    case "MultiPoint":
                        var coords = f.geometry.coordinates;
                        if (f.geometry.type == "Point") coords = [coords];
                        coords.forEach(function (coordinates) {
                            o = {
                                "@lat": coordinates[1],
                                "@lon": coordinates[0],
                                "name": options.featureTitle(f.properties),
                                "desc": options.featureDescription(f.properties)
                            };
                            if (coordinates[2] !== undefined) {
                                o.ele = coordinates[2];
                            }
                            add_feature_link(o,f);
                            gpx.gpx.wpt.push(o);
                        });
                        break;
                    // LineStrings
                    case "LineString":
                    case "MultiLineString":
                        var coords = f.geometry.coordinates;
                        var times = options.featureCoordTimes(f);
                        if (f.geometry.type == "LineString") coords = [coords];
                        o = {
                            "name": options.featureTitle(f.properties),
                            "desc": options.featureDescription(f.properties)
                        };
                        add_feature_link(o,f);
                        o.trkseg = [];
                        coords.forEach(function(coordinates) {
                            var seg = {trkpt: []};
                            coordinates.forEach(function(c, i) {
                                var o = {
                                    "@lat": c[1],
                                    "@lon":c[0]
                                };
                                if (c[2] !== undefined) {
                                    o.ele = c[2];
                                }
                                if (times && times[i]) {
                                    o.time = times[i];
                                }
                                seg.trkpt.push(o);
                            });
                            o.trkseg.push(seg);
                        });
                        gpx.gpx.trk.push(o);
                        break;
                    // Polygons / Multipolygons
                    case "Polygon":
                    case "MultiPolygon":
                        o = {
                            "name": options.featureTitle(f.properties),
                            "desc": options.featureDescription(f.properties)
                        };
                        add_feature_link(o,f);
                        o.trkseg = [];
                        var coords = f.geometry.coordinates;
                        var times = options.featureCoordTimes(f);
                        if (f.geometry.type == "Polygon") coords = [coords];
                        coords.forEach(function(poly) {
                            poly.forEach(function(ring) {
                                var seg = {trkpt: []};
                                var i = 0;
                                ring.forEach(function(c) {
                                    var o = {
                                        "@lat": c[1],
                                        "@lon":c[0]
                                    };
                                    if (c[2] !== undefined) {
                                        o.ele = c[2];
                                    }
                                    if (times && times[i]) {
                                        o.time = times[i];
                                    }
                                    i++;
                                    seg.trkpt.push(o);
                                });
                                o.trkseg.push(seg);
                            });
                        });
                        gpx.gpx.trk.push(o);
                        break;
                    case "GeometryCollection":
                        f.geometry.geometries.forEach(function (geometry) {
                            var pseudo_feature = {
                                "properties": f.properties,
                                "geometry": geometry
                            };
                            mapFeature(pseudo_feature);
                        });
                        break;
                    default:
                        console.log("warning: unsupported geometry type: "+f.geometry.type);
                }
            });
            gpx_str = JXON.stringify(gpx);
            return gpx_str;
        };

        module.exports = togpx;

    },{"jxon":2}],2:[function(require,module,exports){
        /*
         * JXON framework - Copyleft 2011 by Mozilla Developer Network
         *
         * Revision #1 - September 5, 2014
         *
         * https://developer.mozilla.org/en-US/docs/JXON
         *
         * This framework is released under the GNU Public License, version 3 or later.
         * http://www.gnu.org/licenses/gpl-3.0-standalone.html
         *
         * small modifications performed by the iD project:
         * https://github.com/openstreetmap/iD/commits/18aa33ba97b52cacf454e95c65d154000e052a1f/js/lib/jxon.js
         *
         * small modifications performed by user @bugreport0
         * https://github.com/tyrasd/JXON/pull/2/commits
         *
         * some additions and modifications by user @igord
         * https://github.com/tyrasd/JXON/pull/5/commits
         *
         * bugfixes and code cleanup by user @laubstein
         * https://github.com/tyrasd/jxon/pull/32
         *
         * adapted for nodejs and npm by @tyrasd (Martin Raifer <tyr.asd@gmail.com>)
         */

        (function(root, factory) {
            if (typeof define === 'function' && define.amd) {
                // AMD. Register as an anonymous module.
                define([], factory(window));
            } else if (typeof exports === 'object') {
                if (typeof window === 'object' && window.DOMImplementation && window.XMLSerializer && window.DOMParser) {
                    // Browserify. hardcode usage of browser's own XMLDom implementation
                    // see https://github.com/tyrasd/jxon/issues/18

                    module.exports = factory(window);
                } else {
                    // Node. Does not work with strict CommonJS, but
                    // only CommonJS-like environments that support module.exports,
                    // like Node.

                    module.exports = factory(require('xmldom'), true);
                }
            } else {
                // Browser globals (root is window)

                root.JXON = factory(window);
            }
        }(this, function(xmlDom, isNodeJs) {
                var opts = {
                    valueKey: '_',
                    attrKey: '$',
                    attrPrefix: '$',
                    lowerCaseTags: false,
                    trueIsEmpty: false,
                    autoDate: false,
                    ignorePrefixedNodes: false,
                    parseValues: false
                };
                var aCache = [];
                var rIsNull = /^\s*$/;
                var rIsBool = /^(?:true|false)$/i;
                var DOMParser;

                return new (function() {

                    this.config = function(cfg) {
                        for (var k in cfg) {

                            opts[k] = cfg[k];
                        }
                        if (opts.parserErrorHandler) {
                            DOMParser = new xmlDom.DOMParser({
                                errorHandler: opts.parserErrorHandler,
                                locator: {}
                            });
                        }
                    };

                    function parseText(sValue) {
                        if (!opts.parseValues) {
                            return sValue;
                        }

                        if (rIsNull.test(sValue)) {
                            return null;
                        }

                        if (rIsBool.test(sValue)) {
                            return sValue.toLowerCase() === 'true';
                        }

                        if (isFinite(sValue)) {
                            return parseFloat(sValue);
                        }

                        if (opts.autoDate && isFinite(Date.parse(sValue))) {
                            return new Date(sValue);
                        }

                        return sValue;
                    }
                    function EmptyTree() {
                    }
                    EmptyTree.prototype.toString = function() {
                        return 'null';
                    };

                    EmptyTree.prototype.valueOf = function() {
                        return null;
                    };

                    function objectify(vValue) {
                        return vValue === null ? new EmptyTree() : vValue instanceof Object ? vValue : new vValue.constructor(vValue);
                    }

                    function createObjTree(oParentNode, nVerb, bFreeze, bNesteAttr) {
                        var CDATA = 4,
                            TEXT = 3,
                            ELEMENT = 1,
                            nLevelStart = aCache.length,
                            bChildren = oParentNode.hasChildNodes(),
                            bAttributes = oParentNode.nodeType === oParentNode.ELEMENT_NODE && oParentNode.hasAttributes(),
                            bHighVerb = Boolean(nVerb & 2),
                            nLength = 0,
                            sCollectedTxt = '',
                            vResult = bHighVerb ? {} : /* put here the default value for empty nodes: */ (opts.trueIsEmpty ? true : ''),
                            sProp,
                            vContent;

                        if (bChildren) {
                            for (var oNode, nItem = 0; nItem < oParentNode.childNodes.length; nItem++) {

                                oNode = oParentNode.childNodes.item(nItem);
                                if (oNode.nodeType === CDATA) {
                                    sCollectedTxt += oNode.nodeValue;
                                } /* nodeType is "CDATASection" (4) */
                                else if (oNode.nodeType === TEXT) {
                                    sCollectedTxt += oNode.nodeValue.trim();
                                } /* nodeType is "Text" (3) */
                                else if (oNode.nodeType === ELEMENT && !(opts.ignorePrefixedNodes && oNode.prefix)) {
                                    aCache.push(oNode);
                                }
                                /* nodeType is "Element" (1) */
                            }
                        }

                        var nLevelEnd = aCache.length,
                            vBuiltVal = parseText(sCollectedTxt);

                        if (!bHighVerb && (bChildren || bAttributes)) {
                            vResult = nVerb === 0 ? objectify(vBuiltVal) : {};
                        }

                        for (var nElId = nLevelStart; nElId < nLevelEnd; nElId++) {

                            sProp = aCache[nElId].nodeName;
                            if (opts.lowerCaseTags) {
                                sProp = sProp.toLowerCase();
                            }

                            vContent = createObjTree(aCache[nElId], nVerb, bFreeze, bNesteAttr);
                            if (vResult.hasOwnProperty(sProp)) {
                                if (vResult[sProp].constructor !== Array) {
                                    vResult[sProp] = [vResult[sProp]];
                                }

                                vResult[sProp].push(vContent);
                            } else {
                                vResult[sProp] = vContent;

                                nLength++;
                            }
                        }

                        if (bAttributes) {
                            var nAttrLen = oParentNode.attributes.length,
                                sAPrefix = bNesteAttr ? '' : opts.attrPrefix,
                                oAttrParent = bNesteAttr ? {} : vResult;

                            for (var oAttrib, oAttribName, nAttrib = 0; nAttrib < nAttrLen; nLength++, nAttrib++) {

                                oAttrib = oParentNode.attributes.item(nAttrib);

                                oAttribName = oAttrib.name;
                                if (opts.lowerCaseTags) {
                                    oAttribName = oAttribName.toLowerCase();
                                }

                                oAttrParent[sAPrefix + oAttribName] = parseText(oAttrib.value.trim());
                            }

                            if (bNesteAttr) {
                                if (bFreeze) {
                                    Object.freeze(oAttrParent);
                                }

                                vResult[opts.attrKey] = oAttrParent;

                                nLength -= nAttrLen - 1;
                            }

                        }

                        if (nVerb === 3 || (nVerb === 2 || nVerb === 1 && nLength > 0) && sCollectedTxt) {
                            vResult[opts.valueKey] = vBuiltVal;
                        } else if (!bHighVerb && nLength === 0 && sCollectedTxt) {
                            vResult = vBuiltVal;
                        }
                        if (bFreeze && (bHighVerb || nLength > 0)) {
                            Object.freeze(vResult);
                        }

                        aCache.length = nLevelStart;

                        return vResult;
                    }
                    function loadObjTree(oXMLDoc, oParentEl, oParentObj) {
                        var vValue,
                            oChild,
                            elementNS;

                        if (oParentObj.constructor === String || oParentObj.constructor === Number || oParentObj.constructor === Boolean) {
                            oParentEl.appendChild(oXMLDoc.createTextNode(oParentObj.toString())); /* verbosity level is 0 or 1 */
                            if (oParentObj === oParentObj.valueOf()) {
                                return;
                            }

                        } else if (oParentObj.constructor === Date) {
                            oParentEl.appendChild(oXMLDoc.createTextNode(oParentObj.toISOString()));
                        }
                        for (var sName in oParentObj) {

                            vValue = oParentObj[sName];
                            if ( vValue === undefined ) {
                                continue;
                            }
                            if ( vValue === null ) {
                                vValue = {};
                            }

                            if (isFinite(sName) || vValue instanceof Function) {
                                continue;
                            }

                            /* verbosity level is 0 */
                            if (sName === opts.valueKey) {
                                if (vValue !== null && vValue !== true) {
                                    oParentEl.appendChild(oXMLDoc.createTextNode(vValue.constructor === Date ? vValue.toISOString() : String(vValue)));
                                }

                            } else if (sName === opts.attrKey) { /* verbosity level is 3 */
                                for (var sAttrib in vValue) {
                                    oParentEl.setAttribute(sAttrib, vValue[sAttrib]);
                                }
                            } else if (sName === opts.attrPrefix + 'xmlns') {
                                if (isNodeJs) {
                                    oParentEl.setAttribute(sName.slice(1), vValue);
                                }
                                // do nothing: special handling of xml namespaces is done via createElementNS()
                            } else if (sName.charAt(0) === opts.attrPrefix) {
                                oParentEl.setAttribute(sName.slice(1), vValue);
                            } else if (vValue.constructor === Array) {
                                for (var nItem in vValue) {
                                    if (!vValue.hasOwnProperty(nItem)) continue;
                                    elementNS = (vValue[nItem] && vValue[nItem][opts.attrPrefix + 'xmlns']) || oParentEl.namespaceURI;
                                    if (elementNS) {
                                        oChild = oXMLDoc.createElementNS(elementNS, sName);
                                    } else {
                                        oChild = oXMLDoc.createElement(sName);
                                    }

                                    loadObjTree(oXMLDoc, oChild, vValue[nItem] || {});
                                    oParentEl.appendChild(oChild);
                                }
                            } else {
                                elementNS = (vValue || {})[opts.attrPrefix + 'xmlns'] || oParentEl.namespaceURI;
                                if (elementNS) {
                                    oChild = oXMLDoc.createElementNS(elementNS, sName);
                                } else {
                                    oChild = oXMLDoc.createElement(sName);
                                }
                                if (vValue instanceof Object) {
                                    loadObjTree(oXMLDoc, oChild, vValue);
                                } else if (vValue !== null && (vValue !== true || !opts.trueIsEmpty)) {
                                    oChild.appendChild(oXMLDoc.createTextNode(vValue.toString()));
                                }
                                oParentEl.appendChild(oChild);
                            }
                        }
                    }
                    this.xmlToJs = this.build = function(oXMLParent, nVerbosity /* optional */ , bFreeze /* optional */ , bNesteAttributes /* optional */ ) {
                        var _nVerb = arguments.length > 1 && typeof nVerbosity === 'number' ? nVerbosity & 3 : /* put here the default verbosity level: */ 1;
                        return createObjTree(oXMLParent, _nVerb, bFreeze || false, arguments.length > 3 ? bNesteAttributes : _nVerb === 3);
                    };

                    this.jsToXml = this.unbuild = function(oObjTree, sNamespaceURI /* optional */ , sQualifiedName /* optional */ , oDocumentType /* optional */ ) {
                        var documentImplementation = xmlDom.document && xmlDom.document.implementation || new xmlDom.DOMImplementation();
                        var oNewDoc = documentImplementation.createDocument(sNamespaceURI || null, sQualifiedName || '', oDocumentType || null);
                        loadObjTree(oNewDoc, oNewDoc.documentElement || oNewDoc, oObjTree);
                        return oNewDoc;
                    };

                    this.stringToXml = function(xmlStr) {
                        if (!DOMParser) {
                            DOMParser = new xmlDom.DOMParser();
                        }

                        return DOMParser.parseFromString(xmlStr, 'application/xml');
                    };

                    this.xmlToString = function(xmlObj) {
                        if (typeof xmlObj.xml !== 'undefined') {
                            return xmlObj.xml;
                        } else {
                            return (new xmlDom.XMLSerializer()).serializeToString(xmlObj);
                        }
                    };

                    this.stringToJs = function(str) {
                        var xmlObj = this.stringToXml(str);
                        return this.xmlToJs(xmlObj);
                    };

                    this.jsToString = this.stringify = function(oObjTree, sNamespaceURI /* optional */ , sQualifiedName /* optional */ , oDocumentType /* optional */ ) {
                        return this.xmlToString(
                            this.jsToXml(oObjTree, sNamespaceURI, sQualifiedName, oDocumentType)
                        );
                    };

                    this.each = function(arr, func, thisArg) {
                        if (arr instanceof Array) {
                            arr.forEach(func, thisArg);
                        } else {
                            [arr].forEach(func, thisArg);
                        }
                    };
                })();

            }

        ));

    },{"xmldom":3}],3:[function(require,module,exports){

    },{}]},{},[1])(1)
});
