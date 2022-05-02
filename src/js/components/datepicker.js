/**
 * @description Funcion para iniciar el datepicker genérico.
 * 
 */

/*INIT DATEPICKER*/
var datepicker = (function () {
    var init = function () {
        var highlightPast = {
            dates: [
                {
                    start: new Date(2019,7,2),
                    end: new Date(2019,7,2)
                }
            ],
            backgroundColor: '#087021',
            color: '#087021'
        };
        var highlight = {
            dates: [
                {
                    start: new Date(2019,7,16),
                    end: new Date(2019,7,16)
                },
                {
                    start: new Date(2019,7,21),
                    end: new Date(2019,7,21)
                }
            ],
            backgroundColor: '#087021',
            color: '#087021'
        };
        if (document.querySelector('[data-datepicker]')) {
            var datepicker = new Datepickk({
                container: document.querySelector('[data-datepicker]'),
                inline: true,
                range: false,
                highlight: [highlightPast, highlight],
                lang: 'es'
            });
        }
    };
    return {
    init: init
    };
})();
/*END INIT SLICK CARROUSEL*/