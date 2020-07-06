// sticky navigation
$(document).ready(() => {

    $('.js--section-features').waypoint(direction => {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
       
    }, {
        offset: '80px'
    });

    // scroll on buttons
    $('.js--scroll-to-plan').click((e) => {
        e.preventDefault()
        $('html, body').animate({scrollTop: $('.js--section-plan').offset().top}, 1000)
    });

    //button not working
    $('.js--scroll-to-start').click((e) => {
        e.preventDefault()
        $('html, body').animate({scrollTop: $('js--section-features').offset().top}, 1000)
    });


    $('.')




    

});

