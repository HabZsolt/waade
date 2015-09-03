<?php
/*
 Template Name: Start Page
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

			<div id="content">

				<div id="inner-content" class="wrap cf">

						<div id="main" class="m-all t-2of3 d-5of7 cf" role="main">

							<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
									<blockquote class="heart">
									<?php the_content();?>
									</blockquote>

						</div>


				</div>

			</div>
			<?php if( have_rows('page_teaser') ): ?>
								 
					
								 
							<?php   while( have_rows('page_teaser') ): the_row(); 
								 	
										// vars
										$image = get_sub_field('image');
										$image_src = wp_get_attachment_image_src($image,'thumbnail', true);
										$btn_text = get_sub_field('button_text');
										$page = get_sub_field('page');

										$disabled = get_sub_field('disable');

										$custom_headline_conditional = get_sub_field('custom_headline_conditional');
										$custom_excerpt_conditional = get_sub_field('custom_excerpt_conditional');
										
										if (!$btn_text) {
											$btn_text = 'Read more >>';
										}

										if (is_array($custom_excerpt_conditional) && in_array( 'Enable Custom Excerpt', $custom_excerpt_conditional )) {
											$custom_excerpt = get_sub_field('excerpt');
											if (!$custom_excerpt) {$custom_excerpt = ' ';}
										}

										if (is_array($disabled) && in_array( 'Disable', $disabled )) {
											$is_disabled = 1;
										}

										if( $page && !$is_disabled): 
												 	
											$post = $page;
											setup_postdata( $post );
										if( is_array($custom_headline_conditional) && in_array( 'Enable Custom Headline', $custom_headline_conditional ) ){
											$headline = get_sub_field('headline');
											$subheadline = get_sub_field('subheadline');
										}
												else{
													$headline		= get_the_title();
													$subheadline	= get_field('subheadline');
												}
												if ($custom_excerpt) {
													$excerpt 		= $custom_excerpt;
												}else{
													$excerpt 		= get_the_excerpt();
												}
												$link 			= get_the_permalink();
												$slug			= get_the_slug(get_the_ID());
												
												echo '<div class="content-row '.$slug.'">';
												echo '<section class="page-teaser">';
												echo '<div class="page-teaser-wrapper">';

													
													if ($slug == 'send') {
														echo '<div class="opening-soon"><h3>Opening soon,</h3> in the meantime<i></i></div>';
														$image_src = wp_get_attachment_image_src($image,'full', true);
													}
													echo '<div class="specialheadline"><h2>'.$headline.'</h2><h3>'.$subheadline.'</h3><span></span><span></span></div>';
													if ($image && $slug !== 'send' && $slug !== 'our-hearts'){
														echo '<div class="col four">';
														echo '<img src="'.$image_src[0].'" />';
														echo '</div>';
														echo '<div class="col eight">';
													}elseif($image && $slug == 'send'){
														echo '<div class="col twelve">';
														echo '<img src="'.$image_src[0].'" />';
														echo '</div>';
														echo '<div class="col center">';
													}elseif($slug == 'our-hearts'){
														
														echo '<div id="heart-gallery" class="royalSlider rsDefault visibleNearby">';
														$product_args = array(
																'post_type' => 'product',
																'posts_per_page' => 9,
																'order' => 'ASC',
																'orderby' => 'date'
															);
														$query = query_posts($product_args);

														if (have_posts()) : while (have_posts()) : the_post();

															$thumb_id = get_post_thumbnail_id();
															$thumb_url = wp_get_attachment_image_src($thumb_id,'product', true);

														echo '<a id="'.get_the_ID().'" class="rsImg" href="'.$thumb_url[0].'" data-rsw="480" data-rsh="480">'.get_the_title().'<span>'.get_the_excerpt().'</span></a>';
														
														endwhile; endif;
														wp_reset_query();
														echo '<a class="rsImg" href="'.get_template_directory_uri().'/library/images/more.jpg" data-rsw="480" data-rsh="480"></a>';
														echo '</div>';

													}else{
														echo '<div class="col center">';
													}
													echo '<div class="excerpt">'.$excerpt.'</div>';
													echo '</div>';
													echo '<div class="col twelve"><center><a href="'.$link.'" class="btn big blue">'.$btn_text.'</a></center></div>';
													echo '<div style="clear:both"></div>';

												
												echo '</div>';
												echo '</section>';
												echo '</div>';

											wp_reset_postdata();
										endif;
										

									endwhile; 
								?>
								 
								<?php endif; ?>

							<?php endwhile; ?>
							<?php endif; ?>


<?php get_footer(); ?>
