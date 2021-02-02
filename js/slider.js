$(document).ready(function(){
    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
      $page.animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 800);
      return false;
    });



    $('.planets').slick({
        slidesToScroll:1,
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        adaptiveHeight: true,
        autoplay:true,
        rtl:true,
        infinite: true,
        nextArrow: '<div class="arrow-left d-flex align-items-center justify-content-center"><i class="fas fa-jedi"></i></div>',
        prevArrow: '<div class="arrow-right d-flex align-items-center justify-content-center"><i class="fas fa-jedi"></i></div>',
    });



    $('.charts').slick({
        slidesToScroll:1,
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        // adaptiveHeight: true,
        autoplay:true,
        nextArrow: '<div class="arrow-left d-flex align-items-center justify-content-center"><i class="fas fa-jedi"></i></div>',
        prevArrow: '<div class="arrow-right d-flex align-items-center justify-content-center"><i class="fas fa-jedi"></i></div>',
    });


});

