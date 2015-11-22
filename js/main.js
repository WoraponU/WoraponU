$( document ).ready(function() {
                // init
                $('.logo_area').hide();
                // jarallax
                $('.bg_parallax').parallaxScroll({
                  friction: 0.5
                });

                // detect nav
                var $win = $(window);
                var winH = $win.height();
                $win.on("scroll", function () {
                    if ($(this).scrollTop() + 1 > winH ) {
                        $('.nav').addClass("tran_nav");
                        $('.logo_area').show(200);
                    } else {
                        $('.nav').removeClass("tran_nav");
                        $('.logo_area').hide();
                    }
                }).on("resize", function(){
                   winH = $(this).height();
                });
            });