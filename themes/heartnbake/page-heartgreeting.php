<?php
/*
 Template Name: Heart Box
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


?>
	<?php get_header(); ?>
	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
			  		<div class="heart-box-wrapper">
			  			<article id="post-<?php the_ID(); ?>" <?php post_class( 'cf' ); ?> role="article" itemscope itemtype="http://schema.org/BlogPosting">
							<header class="article-header">
								<h1 itemprop="headline"><?php the_title(); ?></h1>
							</header>
							<section class="entry-content cf" itemprop="articleBody">
								<?php the_content(); ?>
							</section>
						</article>
												<a class="choose-hearts" href="#">
						<div class="info">
						                    <h2>Choose hearts</h2>
						                     <i class="icon-down-open-big"></i>
						            </div>
						   </a>
					</div>
				</section>
				<section id="heartbox">
						<div class="heart-box-wrapper">
			  			<div id="heart-box">
							<ul>
								<?php $placeholder = '<img src="'.get_template_directory_uri().'/library/images/nothing.gif" />';?>
								<li class="slot-1"><div class="crumbs"><?php echo $placeholder; ?></div></li>
								<li class="slot-2"><div class="crumbs"><?php echo $placeholder; ?></div></li>
								<li class="slot-3"><div class="crumbs"><?php echo $placeholder; ?></div></li>
								<div style="clear:both"></div>
							</ul>
							<img class="box-base" src="<?php echo get_template_directory_uri().'/library/images/box.png';?>" />
						</div>

						</div>
						
					<div id="content">
					<div id="inner-content" class="wrap cf">

						<div id="main" class="m-all t-2of3 d-5of7 cf" role="main">

									<div class="grid-container heart">
									<?php 
											$product_args = array(
												'post_type' => 'product',
												'posts_per_page' => -1,
												'tag' => 'a-featured'
											);
											$query = query_posts($product_args);

											if (have_posts()) : while (have_posts()) : the_post();

												$thumb_id = get_field('alternate_thumbnail');
												$thumb_url = wp_get_attachment_image_src($thumb_id,'thumbnail', true);

												if ($thumb_id) {
													echo '<div id="'.get_the_ID().'" class="heart-item"><img src="'.$thumb_url[0].'" /></div>';
												}else{
													echo get_the_title().' has no Alternate thumbnail.<br/>';
												}
												
											
											endwhile; endif;
											wp_reset_query();
									?>
									<div style="clear:both"></div>
									</div>



						</div>

				</div>
			</div>


			</section>
			<?php endwhile; endif;?>
			<section id="end">
				<header><span>Finish your greeting</span></header>
			<article <?php post_class( 'cf' ); ?> >
					<section class="entry-content cf">
						<?php echo do_shortcode('[gravityform id="2" name="Heart Box" title="false" description="false" ajax="true"]'); ?>
					</section>
			</article>
			<section>




<?php get_footer(); ?>
		</div>
	</div>
	<div id="bottom"></div>
