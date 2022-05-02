var slidetabs = (function () {
    var init = function (element) {
    $('.evr-tabs').find(".nav-tabs").scrollingTabs({
        scrollToTabEdge: true,
        enableSwiping: true,
        disableScrollArrowsOnFullyScrolled: true,
    });
    };
return {
    init: init
};
})();