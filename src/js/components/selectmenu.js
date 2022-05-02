/**
 * @description Funcion para inicializar el componente selectmenu de jQuery UI
 * @returns {Object} Devuelve la instancia selectmenu de jQuery UI.
 */
var selectmenu  = (function () {
	var init = function (element) {
        if (typeof element === 'undefined') {
            var $allSelectmenu = $('[data-selectmenu]');
            $allSelectmenu.each(function() {
                var $this = $(this),
                    $parent = $this.parents('.evr-selectmenu__ipt').length > 0 ? $this.parents('.evr-selectmenu__ipt') : $this.parents('.evr-selectmenu');
                $this.selectmenu({
                    appendTo: $parent
                });
            })
        }
    };
	return {
        init: init
	};
})();