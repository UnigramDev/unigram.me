(function($) {
    "use strict"; // Start of use strict

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
        interval: 4000
    })
    $('.carousel').carousel('cycle');

})(jQuery); // End of use strict
