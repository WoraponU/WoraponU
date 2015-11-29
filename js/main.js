$( document ).ready(function() {
    $(window).scroll(function() {
        var viewPortHeight = $(window).height();
        var scrollHeight = $(window).scrollTop();

        if (scrollHeight > viewPortHeight - 42) {
            $('#navbar').addClass('navbar-fixed-top');
        } else {
            $('#navbar').removeClass('navbar-fixed-top');
        }
    });
});