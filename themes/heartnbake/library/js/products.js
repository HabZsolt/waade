//Products
function getPosition(element) {
    var xPosition = 0;
    var yPosition = 0;
  
    while(element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }
    return { x: xPosition, y: yPosition };
}


jQuery(document).ready(function($) {
	    $( window ).load(function() {
        $('.js body').delay(100).fadeIn(300, function(){
			    
				/*var $imgs = $('img.lazyload'),
			        $win = $(window);

			    $imgs.lazyload({
			        failure_limit : Math.max($imgs.length - 1, 0),
			        effect : "fadeIn"
			    });*/
				
				$('.btn.clear').on( 'click touchstart', function(event){
								event.preventDefault();
								$.jStorage.flush();
								$('.heart-btn.active').removeClass('active');
								set_ids();
				});

			    var $container = $('.grid-container').isotope({
				    itemSelector: '.grid-item',
				    layoutMode: 'fitRows',
				    onLayout: function() {
				        $win.trigger("scroll");
				    }
				});

				// bind filter button click
				$('#sorting a').each(function(){
						$(this).on( 'click touchstart', function(e) {
						e.preventDefault();
						$('.sorting a').removeClass('active');
						$(this).addClass('active');
				    	var filterValue = $( this ).attr('data-filter');
				    	$container.isotope({ filter: filterValue });
				  	});
				});

				var status = $('blockquote.heart.box .btn span'),
					items = $.jStorage.index(),
					key_1_id = $.jStorage.get('slot_1_id'),
					key_2_id = $.jStorage.get('slot_2_id'),
					key_3_id = $.jStorage.get('slot_3_id');


					$.jStorage.listenKeyChange("*", function(key, action){
					    console.log(key + " has been " + action);
					});

				    function set_ids(){
					      var chosen_ids = [],
					      	  id;
					      $('.heart-btn.active').each(function() { 
					         id = $(this).parent().parent().attr('id');
					         chosen_ids.push(id);
					      });
					      var item_count = chosen_ids.length;

							if (item_count > 0) {
								status.text(item_count);
								status.parent().parent().find('.btn').addClass('active');
								if (item_count > 2) {
									var href = status.parent().attr('href');
									status.parent().addClass('full');
									status.parent().attr('href',href+'#finish');
								}else{
									status.parent().removeClass('full');
								};
							}else{
								status.text('');
								status.parent().removeClass('full');
								status.parent().parent().find('.btn').removeClass('active');
							};


							if (item_count > 2) {
								$('.status p').eq(0).html('Great, you have chosen your three favourite hearts!');
							}else{
								$('.status').removeClass('fixed');
								$('.status p').eq(0).html('Surprise a friend with a fun virtual gift with images of your favourite Hearts. Save up to three of your favourites by clicking on Hearts with this <span class="icon-heart_filled"></span> icon.');
							};

					      console.log(item_count);
					}
					function stickstatus(){

								function status_scroll(){
									if ($('.heart-btn.active').length > 2) {
									var scrollTop = $(window).scrollTop(),
										statusblock = document.querySelector(".status"),
										position = getPosition(statusblock);

									if (scrollTop > (position.y+275)) {
										$('.status').addClass('fixed');
									}else{
										$('.status').removeClass('fixed');
									};
									}else{
										$('.status').removeClass('fixed');
									}
								}
								
								status_scroll();
								window.onscroll = status_scroll;
	
								console.log($('.heart-btn.active').length);
					}
    			    function populate_box(){

							$('.grid-item.a-featured').each(function() {
								var item = $(this),
									slot_id = item.attr('id');
								
								if (key_1_id == slot_id) {
									item.find('.heart-btn').addClass('active');
								};

								if (key_2_id == slot_id) {
									item.find('.heart-btn').addClass('active');
								};

								if (key_3_id == slot_id) {
									item.find('.heart-btn').addClass('active');
								};

							});
						set_ids();
				    }

				populate_box();

			    $('.grid-item.a-featured').each(function() {
			        
			    	var item = $(this),
			    		slot_imgsrc = item.find('.alt_thumb').text(),
			       		slot_id = item.attr('id');

			        item.find('.heart-btn').click(function(event){
			          event.preventDefault();
			          
			          if (items.length < 7) {

			          	 function addtoSlot(id){
			              
			              function setstorage(callback) {
			                   $.jStorage.set('slot_'+id,slot_imgsrc);
			                   $.jStorage.set('slot_'+id+'_id',slot_id);
			                   //$('#heart-box ul li.slot-'+id).css({opacity: '0'}).html('<div class="chosen"><img class="'+slot_id+'" src="'+slot_imgsrc+'" /></div>').animate({opacity:'1',scale: '0.95'});
			                   item.find('.heart-btn').addClass('active');
			              	callback();
			              }
			              
			              setstorage(function() {
			                  set_ids();
			                  stickstatus();
			                  //console.log(items);
			              });
			            }

			          	function removefromSlot(id){
								function deletestorage(callback) {
						            $.jStorage.deleteKey('slot_'+id);
						            $.jStorage.deleteKey('slot_'+id+'_id');
	            					item.find('.heart-btn').removeClass('active');
            					callback();
            					}

            					deletestorage(function(){
            						console.log('deleted key: '+id);
            						//console.log(items);
            						set_ids();
            						stickstatus();
            					});
							}

						var	key_1_id = $.jStorage.get('slot_1_id'),
							key_2_id = $.jStorage.get('slot_2_id'),
							key_3_id = $.jStorage.get('slot_3_id');
						if (key_1_id == slot_id || key_2_id == slot_id || key_3_id == slot_id) {
			          		if (key_1_id == slot_id){
			          			removefromSlot(1);
			          		}
			          		if (key_2_id == slot_id){
								removefromSlot(2);
			          		}
			          		if (key_3_id == slot_id){
			          			removefromSlot(3);
			          		}
			          	}else{
			           
						    var key_1 = $.jStorage.get('slot_1'),
			                key_2 = $.jStorage.get('slot_2'),
			                key_3 = $.jStorage.get('slot_3');

				            if(!key_1){
				              addtoSlot(1);
				            } else if(!key_2){
				              addtoSlot(2);
				            } else if(!key_3){
				              addtoSlot(3);
				            }else if(key_1 && key_2 && key_3){
				              $('.error').remove();
				              item.find('.belowimg').before('<div class="error">Box is full!</div>');
				              $('.error').delay(1200).fadeOut(300,function(){remove();});
				            }
				           
				      
				        }

			              
			          }


			        });
    			});

				/*$('.grid-item').each(function(){

					var btn 		= $(this).find('.heart-btn'),
						heartimage 	= btn.parent().parent().find('img');

					btn.click(function(e){
						e.preventDefault();
						$('.grid-item .heart-btn').removeClass('active');
						$(this).addClass('active');
					});

					heartimage.click(function(e){
						e.preventDefault();
						$('.grid-item .heart-btn').removeClass('active');
						$(btn).addClass('active');
					});

				});*/


        });
    });

 });
