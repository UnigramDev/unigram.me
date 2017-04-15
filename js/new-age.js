(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 48)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#main-nav',
        offset: 54
    });

    // Closes responsive menu when a link is clicked
    $('.navbar-collapse>ul>li>a').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Collapse the navbar when page is scrolled
    $(window).scroll(function() {
        if ($("#main-nav").offset().top > 100) {
            $("#main-nav").addClass("navbar-shrink");
        } else {
            $("#main-nav").removeClass("navbar-shrink");
        }
    });

    // Slide of screenshots
    $('.carousel').carousel({
        interval: 3500
    })
    $('.carousel').carousel('cycle');

    // Github button
    $( "#github-check" ).click(function() {
       window.location.href = "https://github.com/UnigramDev/Unigram";
    });

    // Twitter button
    $( "#unigram-twitter" ).click(function() {
       window.location.href = "https://twitter.com/UnigramApp";
    });

    // Insiders button
    $( "#unigram-insiders" ).click(function() {
       window.location.href = "https://t.me/joinchat/AAAAAD851oqVwhp9oy9WbQ";
    });

})(jQuery); // End of use strict
