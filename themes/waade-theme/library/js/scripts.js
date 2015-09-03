var DEBUG = true;
if(!DEBUG){
    if(!window.console) window.console = {};
    var methods = ["log", "debug", "warn", "info"];
    for(var i=0;i<methods.length;i++){
        console[methods[i]] = function(){};
    }
}

/*
 * Get Viewport Dimensions
 * returns object with viewport dimensions to match css in width and height properties
 * ( source: http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript )
*/
function updateViewportDimensions() {
	var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
	return { width:x,height:y }
}
// setting the viewport width
var viewport = updateViewportDimensions();

/*!
/**
 * Monkey patch jQuery 1.3.1+ to add support for setting or animating CSS
 * scale and rotation independently.
 * https://github.com/zachstronaut/jquery-animate-css-rotate-scale
 * Released under dual MIT/GPL license just like jQuery.
 * 2009-2012 Zachary Johnson www.zachstronaut.com
 */
(function ($) {
    // Updated 2010.11.06
    // Updated 2012.10.13 - Firefox 16 transform style returns a matrix rather than a string of transform functions.  This broke the features of this jQuery patch in Firefox 16.  It should be possible to parse the matrix for both scale and rotate (especially when scale is the same for both the X and Y axis), however the matrix does have disadvantages such as using its own units and also 45deg being indistinguishable from 45+360deg.  To get around these issues, this patch tracks internally the scale, rotation, and rotation units for any elements that are .scale()'ed, .rotate()'ed, or animated.  The major consequences of this are that 1. the scaled/rotated element will blow away any other transform rules applied to the same element (such as skew or translate), and 2. the scaled/rotated element is unaware of any preset scale or rotation initally set by page CSS rules.  You will have to explicitly set the starting scale/rotation value.
    
    function initData($el) {
        var _ARS_data = $el.data('_ARS_data');
        if (!_ARS_data) {
            _ARS_data = {
                rotateUnits: 'deg',
                scale: 1,
                rotate: 0
            };
            
            $el.data('_ARS_data', _ARS_data);
        }
        
        return _ARS_data;
    }
    
    function setTransform($el, data) {
        $el.css('transform', 'rotate(' + data.rotate + data.rotateUnits + ') scale(' + data.scale + ',' + data.scale + ')');
    }
    
    $.fn.rotate = function (val) {
        var $self = $(this), m, data = initData($self);
                        
        if (typeof val == 'undefined') {
            return data.rotate + data.rotateUnits;
        }
        
        m = val.toString().match(/^(-?\d+(\.\d+)?)(.+)?$/);
        if (m) {
            if (m[3]) {
                data.rotateUnits = m[3];
            }
            
            data.rotate = m[1];
            
            setTransform($self, data);
        }
        
        return this;
    };
    
    // Note that scale is unitless.
    $.fn.scale = function (val) {
        var $self = $(this), data = initData($self);
        
        if (typeof val == 'undefined') {
            return data.scale;
        }
        
        data.scale = val;
        
        setTransform($self, data);
        
        return this;
    };

    // fx.cur() must be monkey patched because otherwise it would always
    // return 0 for current rotate and scale values
    var curProxied = $.fx.prototype.cur;
    $.fx.prototype.cur = function () {
        if (this.prop == 'rotate') {
            return parseFloat($(this.elem).rotate());
            
        } else if (this.prop == 'scale') {
            return parseFloat($(this.elem).scale());
        }
        
        return curProxied.apply(this, arguments);
    };
    
    $.fx.step.rotate = function (fx) {
        var data = initData($(fx.elem));
        $(fx.elem).rotate(fx.now + data.rotateUnits);
    };
    
    $.fx.step.scale = function (fx) {
        $(fx.elem).scale(fx.now);
    };
    
    /*
    
    Starting on line 3905 of jquery-1.3.2.js we have this code:
    
    // We need to compute starting value
    if ( unit != "px" ) {
        self.style[ name ] = (end || 1) + unit;
        start = ((end || 1) / e.cur(true)) * start;
        self.style[ name ] = start + unit;
    }
    
    This creates a problem where we cannot give units to our custom animation
    because if we do then this code will execute and because self.style[name]
    does not exist where name is our custom animation's name then e.cur(true)
    will likely return zero and create a divide by zero bug which will set
    start to NaN.
    
    The following monkey patch for animate() gets around this by storing the
    units used in the rotation definition and then stripping the units off.
    
    */
    
    var animateProxied = $.fn.animate;
    $.fn.animate = function (prop) {
        if (typeof prop['rotate'] != 'undefined') {
            var $self, data, m = prop['rotate'].toString().match(/^(([+-]=)?(-?\d+(\.\d+)?))(.+)?$/);
            if (m && m[5]) {
                $self = $(this);
                data = initData($self);
                data.rotateUnits = m[5];
            }
            
            prop['rotate'] = m[1];
        }
        
        return animateProxied.apply(this, arguments);
    };
})(jQuery);

/* 
 * Lazy Line Painter - Path Object 
 * Generated using 'SVG to Lazy Line Converter'
 * 
 * http://lazylinepainter.info 
 * Copyright 2013, Cam O'Connell  
 *  
 */ 
 
var pathObj = {
    "drawing": {
        "strokepath": [
            {
                "path": "M497.9318,404.328677 L497.9318,802.027938 L152.820871,802.027938 L497.9318,404.328677 Z",
                "duration": 500
            },
            {
                "path": "M498.589154,463.490551 L498.589154,802.027938 L300.0682,802.027938 L498.589154,463.490551 Z",
                "duration": 300
            },

            {
                "path": "M0.328677075,802.671323 L496.945768,469.078061",
                "duration": 200
            },
            {
                "path": "M42.7000822,2.91923885e-16 L328.977814,799.671323",
                "duration": 400
            }
        ],
        "dimensions": {
            "width": 496,
            "height": 800
        }
    }
}; 
 
 
/*
 * Put all your regular jQuery in here.
*/
jQuery(document).ready(function($) {

    $('.showcase-rows-wrapper').scrollNav({
    sections: 'section h2',
    showHeadline: false,
    showTopLink: false,
    fixedMargin: -50,
    arrowKeys: true,
    scrollOffset: 300,
    onRender: function() {
        $('.scroll-nav__link').each(function(){
            $(this).attr('title', $(this).text());
        });

        if ($('.scroll-nav__item').length > 8) {
            $('.scroll-nav__wrapper').append('<i class="prev hide"></i><i class="next"></i>');
            $('.scroll-nav').addClass('overflow');

            var i = 0,    
                pos =[0],
                left,
                scrollNavWidth = $('.scroll-nav__wrapper').width(),
                listItem = $('.scroll-nav__list li'),
                pageLength = 0;

                listItem.each(function (index) {
                    pageLength = pageLength + $(this).outerWidth();

                    if (pageLength > scrollNavWidth) {
                        console.log(pageLength);
                        pos.push(pageLength - $(this).outerWidth());
                        scrollNavWidth = scrollNavWidth * 2;
                    }

                    console.log(pos);
                    
                });



            $('.scroll-nav__wrapper i').on('click',function(){

                 
                 if ($(this).is('.next')) {
                    i = (i+1)%pos.length;
                 }else{
                    i = (i-1)%pos.length;
                 }
                 left = pos[i];

                 if (left > 0) {
                    $('.scroll-nav__wrapper i').removeClass('hide');
                 }else{
                    $('.scroll-nav__wrapper i.prev').addClass('hide');
                 }

                 if (left == pos[pos.length-1]) {
                    $('.scroll-nav__wrapper i.next').addClass('cancel');
                 }else{
                    $('.scroll-nav__wrapper i.next').removeClass('cancel');
                 }



                 $('.scroll-nav__wrapper ol li').css('transform','translateX(-'+left+'px)');
                 console.log(left);
            });
        }
    }

    });
    
    $('#drawing').lazylinepainter({
        "svgData": pathObj,
        "strokeWidth": 2,
        "strokeColor": "#ffffff",
        'onComplete' : function(){
               $('#drawing').addClass('hide');
               $('#drawing_full').removeClass('hide');
               $('#drawing_full').addClass('show');
        },
    }).lazylinepainter('paint');

    $('.notification i').on('click touchstart', function(){
        $(this).parent().removeClass('out');
    });
    setTimeout(function(){$('.notification').addClass('out');}, 500);

    //If less than or equal IE9
    if (document.all && !window.atob) {
        $('.preview-content').addClass('ie');      
    };

    if (!Modernizr.svg) {

        var src = $('.logo img').attr('src');
        $('.logo img').attr('src', src.replace(/svg(\.[^.]+)?$/, 'png$1'));
        $('.logo img').css('max-width','128px');
        
    }

    $(window).load(function() {
        $('.csstransitions body').addClass('loaded');
    });

    $.fn.cleardefault = function() {

    return this.focus(function() {

        if( this.value == this.defaultValue ) {
            this.value = "";
        }

    }).blur(function() {
        if( !this.value.length ) {
            this.value = this.defaultValue;
        }
    });

  };

  $(".clearit input, .clearit textarea").cleardefault();

    $('.nav-toggle a.icon-menu').on('click touchstart', function(e) {
      $('.nav-collapse').toggleClass("open closed"); //you can list several class names 
      e.preventDefault();
    });
    


    function scroll_config(percent){
            var viewport_height = $(window).height(),
                offset = viewport_height*(percent/100);
                offset_neg = offset - (offset*2);

            console.log('height offset: '+offset_neg);

            $.localScroll({axis:'y',hash:true,easing:'easeInOutCubic',offset: offset_neg});
            //$.localScroll.hash({axis:'y',duration: 2000,easing:'easeInOutCubic'});
    }

    function shrink_header_onscroll(val){
        
        var win             = $(window),
            main_header     = $('body'),
            header          = $('.inner-header-wrapper'),
            logo            = header.find('.logo img'),
            navs            = header.find('.inner-header nav'),
            el_height       = 200,
            isMobile        = 'ontouchstart' in document.documentElement
            
            if (win.width() <= 1280 && win.height() <= 700) {
                el_height       = 170;
            };

            set_height      = function()
            {
                if (val > 0) {

                var st = win.scrollTop(),
                    newH = 0, 
                    newH2 = 0;

                header.removeClass('nav-collapse');
                if(st < (el_height/3.8))
                {
                    padtop = st;
                    newH = el_height - (st*2.75);
                    header.removeClass('header-scrolled fixed');
                    logotop = el_height/14.2 - st/5;
                }
                else
                {
                    newH = el_height/4;
                    padtop = newH;
                    header.addClass('header-scrolled fixed');
                    logotop = 2;

                }

                //logo.css({'bottom': newH2 + 'px'});
                main_header.css({'padding-top': padtop + 'px'});
                header.css({'height': newH + 'px'});
                navs.css({'line-height': newH + 'px'});
                logo.css({'margin-top': logotop + '%'});

                }else{
                  main_header.removeAttr('style');
                  header.removeAttr('style');
                  navs.removeAttr('style');
                  header.removeClass('header-scrolled fixed');
                  header.addClass('nav-collapse');
                }
            };

            if(!header.length) return false;

            if(isMobile || $('body').hasClass('deactivate_menu_resize'))
            {
                if (win.width() <= 1280 && win.height() <= 700 &&win.width() > 768) {
                    el_height       = 150,
                    header          = $('#bignav'),
                    logo            = header.find('.logo img'),
                    navs            = header.find('.inner-header nav');

                    header.css({'height': el_height + 'px'});
                    navs.css({'line-height': el_height+ 'px'});
                    logo.css({'margin-top': el_height/4});
                }
                return false;
            }

            win.scroll(set_height);
            set_height();
    }

    function scrollfx(){
        var scrollTop = $(window).scrollTop();
        
        if(scrollTop>900){
            $('#scrolltop-btn').fadeIn(200);
            }
        else { 
            $('#scrolltop-btn').fadeOut(200);
         }
    }

    function responsive_viewport(){

    /* getting viewport width */
    var responsive_viewport_width = $(window).width(),
        responsive_viewport_height = $(window).height()
    console.log('width: '+responsive_viewport_width);
    console.log('height: '+responsive_viewport_height);

    if (responsive_viewport_width > 767) {
        shrink_header_onscroll(1);
        //scroll_config(20);
        $('.inner-header-wrapper').removeClass('nav-collapse');
    }else{
        shrink_header_onscroll(0);
        window.onscroll = scrollfx;
        if (responsive_viewport_height > 640) {
            //scroll_config(9);
        }else{
            //scroll_config(0);
        }

    }
    
    }
        $(window).on('resize',_.debounce(responsive_viewport, 200));
        responsive_viewport();

}); /* end of as page load scripts */
