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
