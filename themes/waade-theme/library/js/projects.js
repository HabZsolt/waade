jQuery(document).ready(function($) {
	    $( window ).load(function() {
        $('.js body').delay(100).fadeIn(300, function(){
			    
				/*var $imgs = $('img.lazyload'),
			        $win = $(window);

			    $imgs.lazyload({
			        failure_limit : Math.max($imgs.length - 1, 0),
			        effect : "fadeIn"
			    });*/
				

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


        });
    });

 });
