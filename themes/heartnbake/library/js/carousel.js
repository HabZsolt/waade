jQuery(document).ready(function($) {

    $( window ).load(function() {
        $('.js body').delay(100).fadeIn(300, function(){
              

            var slider = $('#heart-gallery').royalSlider({
              addActiveClass: true,
              arrowsNav: false,
              controlNavigation: 'none',
              autoScaleSlider: true, 
              autoScaleSliderWidth: 480,     
              autoScaleSliderHeight: 320,
              loop: true,
              fadeinLoadedSlide: false,
              globalCaption: true,
              keyboardNavEnabled: true,
              globalCaptionInside: false,

              visibleNearby: {
                enabled: true,
                centerArea: 0.5,
                center: true,
                breakpoint: 650,
                breakpointCenterArea: 0.64,
                navigateByCenterClick: true
              }
            }).data('royalSlider');

            if (slider.slides.length > 0) {
              slider.updateSliderSize();
              $('#heart-gallery').animate({opacity:1},2000);
            };

            
        });
    });



});