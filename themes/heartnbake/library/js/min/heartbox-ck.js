!function(t,o,n){"use strict";var i="slinky",e=t.fn[i]=function(s){return s=t.extend({},e.options,s),this.each(function(){function e(){a.forEach(function(t){var o="",n=t.$parent.position().top;n<=t.top?o="top":n+t.height>=p-t.bottom&&(o="bottom"),o?t.position!=o&&(t.$parent.css("paddingTop",t.height),t.$.css("position","absolute").css(o,t[o]).css("top"==o?"bottom":"top",""),t.position=o):(t.$parent.css("paddingTop",""),t.$.css("position",""),t.position="")})}function s(){p=u.outerHeight(),a=[],h=u.children(),h.each(function(){var o=t(this),n=o.children().first();a.push({$:n,$parent:o,height:n.outerHeight(),position:""})}),a.forEach(function(t,o){t.top=o>0?a[o-1].top+a[o-1].height:0,o=a.length-o-1,a[o].bottom=o<a.length-1?a[o+1].bottom+a[o+1].height:0}),e()}function r(){h.css("pointer-events",""),f=n}var c=t(this);if(!c.data(i)){c.data(i,!0);var h,a,p,f,u=c.children().first();s(),u.on("wheel."+i,function(){f?clearTimeout(f):h.css("pointer-events","none"),f=setTimeout(r,100)}).on("scroll."+i,e),t(o).on("resize."+i,s);var l=l||o.WebKitMutationObserver;if(l){var d=new l(s);d.observe(u[0],{childList:!0,characterData:!0,subtree:!0})}c.on("remove."+i,function(){u.off("wheel."+i+" scroll."+i),t(o).off("resize."+i,s),d&&d.disconnect()})}})}}(jQuery,window);

/* **********************************************
     Begin jquery.lazyload.min.js
********************************************** */

/*! Lazy Load 1.9.3 - MIT license - Copyright 2010-2013 Mika Tuupola */
!function(a,b,c,d){var e=a(b);a.fn.lazyload=function(f){function g(){var b=0;i.each(function(){var c=a(this);if(!j.skip_invisible||c.is(":visible"))if(a.abovethetop(this,j)||a.leftofbegin(this,j));else if(a.belowthefold(this,j)||a.rightoffold(this,j)){if(++b>j.failure_limit)return!1}else c.trigger("appear"),b=0})}var h,i=this,j={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return f&&(d!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),d!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),a.extend(j,f)),h=j.container===d||j.container===b?e:a(j.container),0===j.event.indexOf("scroll")&&h.bind(j.event,function(){return g()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,(c.attr("src")===d||c.attr("src")===!1)&&c.is("img")&&c.attr("src",j.placeholder),c.one("appear",function(){if(!this.loaded){if(j.appear){var d=i.length;j.appear.call(b,d,j)}a("<img />").bind("load",function(){var d=c.attr("data-"+j.data_attribute);c.hide(),c.is("img")?c.attr("src",d):c.css("background-image","url('"+d+"')"),c[j.effect](j.effect_speed),b.loaded=!0;var e=a.grep(i,function(a){return!a.loaded});if(i=a(e),j.load){var f=i.length;j.load.call(b,f,j)}}).attr("src",c.attr("data-"+j.data_attribute))}}),0!==j.event.indexOf("scroll")&&c.bind(j.event,function(){b.loaded||c.trigger("appear")})}),e.bind("resize",function(){g()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent&&b.originalEvent.persisted&&i.each(function(){a(this).trigger("appear")})}),a(c).ready(function(){g()}),this},a.belowthefold=function(c,f){var g;return g=f.container===d||f.container===b?(b.innerHeight?b.innerHeight:e.height())+e.scrollTop():a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return g=f.container===d||f.container===b?e.width()+e.scrollLeft():a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollTop():a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollLeft():a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!(a.rightoffold(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.abovethetop(b,c))},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})}(jQuery,window,document);

/* **********************************************
     Begin heartbox.js
********************************************** */

//Heartbox

/* **********************************************
     Begin heartbox-scripts.js
********************************************** */

jQuery(document).ready(function($) {
    var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
    $( window ).load(function() {
      $('.js body').delay(100).fadeIn(300, function(){
      if (iOS) {
        $('.touch .slinky-nav').slinky();
        if ($(window).width() > 767) {
        $('section#heartbox').css('margin','-335px 0 0');
        $('section#heartbox #content').css('padding','335px 0 0 0');
        $('section#heartbox .heart-box-wrapper').css('top','0');
        };
      }
      


      $('.choose-hearts').click(function(event){
        event.preventDefault();
        $.scrollTo('216',{axis:'y',easing:'easeInOutCubic', duration: 700,easing:'swing'});
      })
        function scrollfx(){
            var scrollTop = $(window).scrollTop(),
                viewport_width = $(window).width();
            $('.page .scroll').remove();    
            if (viewport_width > 767) {
            if (scrollTop>135) {
                $('section#heartbox .heart-box-wrapper').addClass('fixed');
                $('.slinky-nav').css('top','-30px');
             }else{
                $('section#heartbox .heart-box-wrapper').removeClass('fixed');
                $('.slinky-nav').css('top','0');
            };

             if (scrollTop>400) {
                $('section#heartbox .heart-box-wrapper').addClass('gradient');
             }else{
                $('section#heartbox .heart-box-wrapper').removeClass('gradient');

            };
          }
        }
        window.onscroll = scrollfx;
      });
    });




    var items = $.jStorage.index();
    console.log('There are ' + items.length + ' keys registered');
   
          $.jStorage.listenKeyChange("*", function(key, action){
              console.log(key + " has been " + action);
          });
    function set_ids(){
      var chosen_ids = [];
      var id;
      $('#heart-box ul li img').each(function() { 
         id = $(this).attr('class');
         chosen_ids.push(id);
      });
      var input_val = chosen_ids.join(",");
      $('.heart-ids input').val(input_val);
      console.log(chosen_ids);
    }

    function populate_box(){
      $('#heart-box ul li').each(function(index) {
          var slot_id = $.jStorage.get('slot_'+(index+1)+'_id');
          var slot_imgsrc = $.jStorage.get('slot_'+(index+1));
          if(slot_id){
          $('#heart-box .slot-'+ (index+1)).delay(200).html('<div class="chosen"><i class="icon-cancel"></i><img class="'+slot_id+'" src="'+slot_imgsrc+'" /></div>').delay(120*(index+1)).animate({opacity:1,scale: 0.95});
          }
        });
      set_ids();
      if(window.location.hash) {
        if(window.location.hash = 'finish'){
          $.scrollTo('1140px',{axis:'y',easing:'easeInOutCubic', duration: 1700,easing:'swing'});
          $('section#heartbox .heart-box-wrapper').addClass('fixed gradient');
        }
      }
    }

    populate_box();

    $('#heart-box li').each(function(index) {
      $('#heart-box .slot-'+ (index+1)).click(function(event){
            event.preventDefault();
          if ($.jStorage.get('slot_'+(index+1))) {
            $.jStorage.deleteKey('slot_'+(index+1));
            $.jStorage.deleteKey('slot_'+(index+1)+'_id');
            $('#heart-box .slot-'+(index+1)).html('<div class="crumbs"><img src="http://heartandbakesweden.com.hemsida.eu/wp-content/themes/heartnbake/library/images/crumbs.png" /></div>');
            console.log('deleted slot_'+(index+1));
            set_ids();
          }else{
            //alert('no key to delete');
          }
      });
    });

    $('.heart-item').each(function() {
        $(this).click(function(event){
          event.preventDefault();
          if (items.length < 7) {
            
            var item = $(this);

            function addtoSlot(id){
              var slot_imgsrc = item.find('img').attr('src');
              var slot_id = item.attr('id');
              item.fadeOut(200).fadeIn(400);
              function setstorage(callback) {
                    //Missing: if id exists, don't add duplicate
                   $.jStorage.set('slot_'+id,slot_imgsrc);
                   $.jStorage.set('slot_'+id+'_id',slot_id);
                   $('#heart-box ul li.slot-'+id).css({opacity: '0'}).html('<div class="chosen"><i class="icon-cancel"></i><img class="'+slot_id+'" src="'+slot_imgsrc+'" /></div>').animate({opacity:'1',scale: '0.95'});
              callback();
              }
              setstorage(function() {
                  console.log($.jStorage.get('slot_'+id));
                  set_ids();
                  return true;
              });
            }

            var key_1 = $.jStorage.get('slot_1'),
                key_2 = $.jStorage.get('slot_2'),
                key_3 = $.jStorage.get('slot_3');


            if(!key_1){
              addtoSlot(1);
            } else if(!key_2){
              addtoSlot(2);
            } else if(!key_3){
              addtoSlot(3);
            } else if(key_1 && key_2 && key_3){
                      $('.error').remove();
                      $(this).append('<div class="error">Box is full!</div>');
                      $('.error').delay(1200).fadeOut(300,function(){remove();});
            }
              

          }

        });
    });
}); /* end of as page load scripts */
