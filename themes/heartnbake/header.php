<!doctype html>

<!--[if lt IE 7]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8 lt-ie7"><![endif]-->
<!--[if (IE 7)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8"><![endif]-->
<!--[if (IE 8)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><!--> <html <?php language_attributes(); ?> class="no-js"><!--<![endif]-->

	<head>
		<meta charset="utf-8">

		<?php // Google Chrome Frame for IE ?>
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

		<title><?php wp_title(' - '); ?></title>

		<?php // mobile meta (hooray!) ?>
		<meta name="HandheldFriendly" content="True">
		<meta name="MobileOptimized" content="320">
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

		<?php // icons & favicons (for more: http://www.jonathantneal.com/blog/understand-the-favicon/) ?>
		<link rel="apple-touch-icon" href="<?php echo get_template_directory_uri(); ?>/library/images/apple-icon-touch.png">
		<link rel="icon" href="<?php echo get_template_directory_uri(); ?>/favicon.png">
		<!--[if IE]>
			<link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico">
		<![endif]-->
		<?php // or, set /favicon.ico for IE10 win ?>
		<meta name="msapplication-TileColor" content="#f01d4f">
		<meta name="msapplication-TileImage" content="<?php echo get_template_directory_uri(); ?>/library/images/win8-tile-icon.png">

		<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">


		<?php // wordpress head functions ?>
		<?php wp_head(); ?>
		<?php // end of wordpress head ?>

		<?php // drop Google Analytics Here ?>
		<?php // end analytics ?>

	</head>

	<body <?php body_class(get_the_slug(get_the_ID())); ?>>
			<?php  if (is_page_template('page-heartgreeting.php')): ?>
				<div class="slinky-nav">
				<div class="slinky-scroller">
				<section id="start">
					<span></span>
			<?php endif; ?>
			
				
				<header class="top-menu header inner-header-wrapper nav-collapse closed">
					
					<div class="nav-toggle"><a class="icon-menu" href="#"></a></div>
						<div class="inner-header" class="wrap cf">
							<nav role="navigation" class="main-nav-left">
								<?php wp_nav_menu(array(
		    					'container' => false,                           // remove nav container
		    					'container_class' => 'menu cf',                 // class of container (should you choose to use it)
		    					'menu' => __( 'The Main Menu LEFT', 'bonestheme' ),  // nav name
		    					'menu_class' => 'nav top-nav cf',               // adding custom nav class
		    					'theme_location' => 'main-nav-left',                 // where it's located in the theme
		    					'before' => '',                                 // before the menu
		        				'after' => '',                                  // after the menu
		        				'link_before' => '',                            // before each link
		        				'link_after' => '',                             // after each link
		        				'depth' => 0,                                   // limit the depth of the nav
		    					'fallback_cb' => ''                             // fallback function (if there is one)
								)); ?>

							</nav>

							<nav role="navigation" class="main-nav-right">
								<?php wp_nav_menu(array(
		    					'container' => false,                           // remove nav container
		    					'container_class' => 'menu cf',                 // class of container (should you choose to use it)
		    					'menu' => __( 'The Main Menu RIGHT', 'bonestheme' ),  // nav name
		    					'menu_class' => 'nav top-nav cf',               // adding custom nav class
		    					'theme_location' => 'main-nav-right',                 // where it's located in the theme
		    					'before' => '',                                 // before the menu
		        				'after' => '',                                  // after the menu
		        				'link_before' => '',                            // before each link
		        				'link_after' => '',                             // after each link
		        				'depth' => 0,                                   // limit the depth of the nav
		    					'fallback_cb' => ''                             // fallback function (if there is one)
								)); ?>

							</nav>
				</div>
				</header>
				<header id="bignav" class="header inner-header-wrapper nav-collapse closed">
				<div class="nav-toggle"><a class="home-link" href="<?php echo get_site_url(); ?>"></a><a class="icon-menu" href="#"></a></div>
				<div class="inner-header" class="wrap cf">

					<nav role="navigation" class="main-nav-left">
						<?php wp_nav_menu(array(
    					'container' => false,                           // remove nav container
    					'container_class' => 'menu cf',                 // class of container (should you choose to use it)
    					'menu' => __( 'The Main Menu LEFT', 'bonestheme' ),  // nav name
    					'menu_class' => 'nav top-nav cf',               // adding custom nav class
    					'theme_location' => 'main-nav-left',                 // where it's located in the theme
    					'before' => '',                                 // before the menu
        			'after' => '',                                  // after the menu
        			'link_before' => '',                            // before each link
        			'link_after' => '',                             // after each link
        			'depth' => 0,                                   // limit the depth of the nav
    					'fallback_cb' => ''                             // fallback function (if there is one)
						)); ?>

					</nav>


					<?php // to use a image just replace the bloginfo('name') with your img src and remove the surrounding <p> ?>
					<a class="logo" href="<?php echo home_url(); ?>" rel="nofollow"><img src="<?php echo get_template_directory_uri().'/library/images/logo.svg' ?>"></img></a>

					<?php // if you'd like to use the site description you can un-comment it below ?>
					<?php // bloginfo('description'); ?>


					<nav role="navigation" class="main-nav-right">
						<?php wp_nav_menu(array(
    					'container' => false,                           // remove nav container
    					'container_class' => 'menu cf',                 // class of container (should you choose to use it)
    					'menu' => __( 'The Main Menu RIGHT', 'bonestheme' ),  // nav name
    					'menu_class' => 'nav top-nav cf',               // adding custom nav class
    					'theme_location' => 'main-nav-right',                 // where it's located in the theme
    					'before' => '',                                 // before the menu
        				'after' => '',                                  // after the menu
        				'link_before' => '',                            // before each link
        				'link_after' => '',                             // after each link
        				'depth' => 0,                                   // limit the depth of the nav
    					'fallback_cb' => ''                             // fallback function (if there is one)
						)); ?>

					</nav>
					<div style="clear:both"></div>

				</div>
			</header>
			<div class="poster" role="banner">
					<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

						<?php if (is_page()) :
								if (!is_page_template('page-heartgreeting.php')):
								if (!is_page_template('page-gift.php')):
								if (!is_404()):
								$thumb_id = get_post_thumbnail_id();
								$thumb_url = wp_get_attachment_image_src($thumb_id,'poster-full', true);
								$thumb_url_mobile = wp_get_attachment_image_src($thumb_id,'poster-mobile', true);
								if (/*is_page_template('page-products.php') ||*/ is_page('Contact')) {
									$thumb_url = wp_get_attachment_image_src($thumb_id,'poster-slim', true);
									$thumb_url_mobile = wp_get_attachment_image_src($thumb_id,'poster-mobile-slim', true);
								}
								
							?>
							<a class="logo top-menu" href="<?php echo home_url(); ?>" rel="nofollow"><img src="<?php echo get_template_directory_uri().'/library/images/logo.svg' ?>"></img></a>
						    <div class="cover">

						        <div class="cover-image mobile" style="background-image: url(<?php echo $thumb_url_mobile[0]; ?>);"></div>
						        <div class="cover-image desktop" style="background-image: url(<?php echo $thumb_url[0]; ?>);"></div>
						        
						        <div class="preview-content slideUp fadeIn">
						            <a href="#content">
						            <div class="info">
						                    <h2 class="preview-title"><?php echo get_the_title(); ?></h2>
						                    <?php 
						                    	if (is_page()) {
						                    	   echo '<p>'.get_field('subheadline').'</p>';
						                    	}
						                    ?>
						                     <i class="icon-down-open-big"></i>
						            </div>
						        	</a>
						       </div>

						    </div>
						<?php 	endif;
								endif;
								endif;
							endif;
						 ?>

					<?php endwhile; ?>
					<?php endif; wp_reset_query(); ?>

			</div>