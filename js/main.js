$(document).ready(function() {
    $('.slider, .reviews-slide').slick({
        arrows: true,
        nextArrow: '<img src="img/arrow-right.png" alt="" class="arrow-left">',
        prevArrow: '<img src="img/arrow-left.png" alt="" class="arrow-right">',
        dots: false,
        variableWidth: true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
    var $head = $('#ha-header');
    $('.ha-waypoint').each(function(i) {
        var $el = $(this),
            animClassDown = $el.data('animateDown'),
            animClassUp = $el.data('animateUp');

        $el.waypoint(function(direction) {
            if (direction === 'down' && animClassDown) {
                $head.attr('class', 'ha-header ' + animClassDown);
            } else if (direction === 'up' && animClassUp) {
                $head.attr('class', 'ha-header ' + animClassUp);
            }
        }, {
            offset: '100%'
        });
    });
    $("#slide-to-format, #slide-to-reviews, #slide-to-contact, #slide-to-main").click(function() {
        var elementClick = '#' + $(this).attr("href").split("#")[1]
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 1200);
        return false;
    });
});