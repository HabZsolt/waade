<?php
/*
 Template Name: Gift
 *
 * This is your custom page template. You can create as many of these as you need.
 * Simply name is "page-whatever.php" and in add the "Template Name" title at the
 * top, the same way it is here.
 *
 * When you create your page, you can just select the template and viola, you have
 * a custom page template to call your very own. Your mother would be so proud.
 *
 * For more info: http://codex.wordpress.org/Page_Templates
*/

	if(isset($_GET['id']) && isset($_GET['uid'])) {
		$lead_id = $_GET['id'];
		$uid = $_GET['uid'];
		$permalink = site_url().'/send/gift/?id='.$lead_id.'&uid='.$uid;
		if (RGFormsModel::get_lead( $lead_id )) {
			$lead = RGFormsModel::get_lead( $lead_id ); 
		    $form = GFFormsModel::get_form_meta( $lead['form_id'] ); 

		    $count=0;
		    foreach( $form['fields'] as $field ) {
					$txt_entry[$count] = $lead[ $field['id'] ];
					$count++;
		    }
		    $count=0;

			$hearts = explode(',', $txt_entry[10]);
			$email = $txt_entry[1];
			$name = $txt_entry[2];
			$headline = $txt_entry[7];
			$message = $txt_entry[8];
			$sender_name = $txt_entry[5];
			$entry_uid = $txt_entry[11];

			if (!$message && !$headline) {
				$headline = 'Three hearts in a box for you';
				$message = 'Congratulations, someone has sent you a virtual treat!';
			}

		    if ($uid !== $entry_uid) {
		    	$lead_id= null;
		    }

		    if(isset($_GET['sucess']) && $_GET['sucess'] == 'true') {
		    	$condition = 'generated';
		    	if ($email) {
		    		$condition = 'sent';
		    	}
				echo '<div class="notification sucess"><i class="icon-cancel"></i>Your virtual greeting was sucessfully '.$condition.'. Link to share: <a target="_blank" href="'.$permalink.'">'.$permalink.'</a></div>';
			}

		}

		

	}else{
		$lead_id= null;
	}

	if (is_null($lead_id)) {
		header("Location: 404.html");
	}

	get_header(); 



	?>

	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

				<section id="heartbox">
						<div class="heart-box-wrapper">
							
			  			
			  			<div class="intro-message"><?php echo $sender_name.' wants to surprise you with a heartfelt greeting, <strong>CLICK ON THE BOX</strong> to open it!'; ?></div>
						<div id="heart-box">
							<ul>
								<?php 
											$the_hearts = array(
												'post_type' => 'product',
												'posts_per_page' => 3,
												'post__in' => $hearts
											);
											$query = query_posts($the_hearts);

											if (have_posts()) : while (have_posts()) : the_post();
												$count++;
												$thumb_id = get_field('alternate_thumbnail');
												$thumb_url = wp_get_attachment_image_src($thumb_id,'product', true);
												echo '<li class="slot-'.$count.'"><div class="chosen"><img src="'.$thumb_url[0].'" /><p>'.get_the_title().'</p></div>';
												echo '<div class="info"><i class="icon-cancel"></i>'.get_the_content().'</div></li>';
											
											endwhile; endif;
											$count = 0;
											wp_reset_query();
								?>
								<div style="clear:both"></div>
							</ul>
							<!--<a href="#" class="lid-close"></a>-->
							<img class="lid-one" src="<?php echo get_template_directory_uri().'/library/images/lid1.png';?>" />
							<img class="lid-two" src="<?php echo get_template_directory_uri().'/library/images/lid2.png';?>" />
							<img class="box-base" src="<?php echo get_template_directory_uri().'/library/images/box.png';?>" />
						</div>

						<div class="message">
							<h1 class="page-title" itemprop="headline"><?php echo $headline; ?></h1>
							<p><?php echo $message; ?></p>
							<p><a class="btn blue" href="../../our-hearts">Learn more about our hearts >></a></p>
						</div>

						</div>
						
					<div id="content">
					<div id="inner-content" class="wrap cf">

						<div id="main" class="m-all t-2of3 d-5of7 cf" role="main">

							<article id="post-<?php the_ID(); ?>" <?php post_class( 'cf' ); ?> role="article">
							<section class="entry-content cf" itemprop="articleBody">
								
								<?php the_content(); ?>
							</section>
							<section>
							<ul class="share-link">
								<h3>Share this:</h3>
								<li class="col six"><a href="http://www.facebook.com/sharer.php?u=<?php echo $permalink; ?>" class="icon-facebook-rect btn"></a></li>
								<li class="col six"><a href="http://twitter.com/share?url=<?php echo $permalink?>" class="icon-twitter-bird btn"></a></li>
								<li class="col twelve link"><h3>Link:</h3><textarea readonly><?php echo $permalink; ?></textarea></li>
								<div style="clear:both"></div>
							</ul>
							</section>
							<section class="end-gift">
							<a class="btn blue" href="../">Send your own virtual gift! >></a>
							</section>
							</article>

						</div>

				</div>
			</div>


			</section>
			<?php endwhile; endif;?>

<?php get_footer(); ?>

