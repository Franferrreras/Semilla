var videohtml5 = (function () {
    var init = function () {
        var $videos = $('[data-video]');
        $videos.each(function() {
            var $this = $(this),
                $button = $this.find('[data-video-play]'),
                $vid    = $this.find('video');
            $button.click(function(){
                $this.toggleClass('evr-video--active');
                if ($this.hasClass('evr-video--active')) {
                    $vid.get(0).play();
                    $this.removeClass('evr-video--play');
                } else {
                    $vid.get(0).pause();
                    $this.addClass('evr-video--play');
                }
            });
            $vid.get(0).addEventListener('ended', function() {
                $this.removeClass('evr-video--active');
                $this.addClass('evr-video--play');
            });
        });
    };
    return {
        init: init
    };
})();