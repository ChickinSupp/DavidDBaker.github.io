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

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
     });
     
     
     /* Navigation scroll */
    //  $(function() {
    //    $('a[href*=#]:not([href=#])').click(function() {
    //      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    //        let target = $(this.hash);
    //        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    //        if (target.length) {
    //          $('html,body').animate({
    //            scrollTop: target.offset().top
    //          }, 1000);
    //          return false;
    //        }
    //      }
    //    });
    //  });
 




    // Animations on scroll
    $('.js--wp-1').waypoint( direction => {
        $('.js--wp-1').addClass('animated  .animate__fadeIn');
    }, {
        offset: '%50'
    })
});

