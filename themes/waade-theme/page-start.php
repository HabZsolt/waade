<?php
/**
 * Template Name: Start Page
 *
 * @package WordPress
 * @subpackage waade-theme
 * @since Twenty Fourteen 1.0
 */
?>

<?php get_header(); ?>

			<div id="content"></div>
			
			<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
			<?php if( have_rows('page_teaser') ): ?>
								 
					
								 
					<?php
							$i = 0;

							while( have_rows('page_teaser') ): the_row(); 
								 	
										// vars
										$image = get_sub_field('image');
										$image_src = wp_get_attachment_image_src($image,'product', true);
										$btn_text = get_sub_field('button_text');
										$page = get_sub_field('page');
										$disabled = get_sub_field('disable');

										$custom_headline_conditional = get_sub_field('custom_headline_conditional');
										$custom_excerpt_conditional = get_sub_field('custom_excerpt_conditional');

										 if($i%2 == 0){
										      $evenodd= 'even';
										 }
										   else
										 {
										      $evenodd = 'odd';
										 }
										
										if (!$btn_text) {
											$btn_text = 'Läs mer >>';
										}



										if ($disabled && is_array($disabled) && in_array( 'Disable', $disabled )) {
											$is_disabled = true;
										}else{
											$is_disabled = false;
										}

										if( $page && !$is_disabled): 
												 	
											$post = $page;
											setup_postdata( $post );
											if (is_array($custom_excerpt_conditional) && in_array( 'Enable Custom Excerpt', $custom_excerpt_conditional )) {
											$custom_excerpt = get_sub_field('excerpt');
											if (strlen($custom_excerpt) > 0) {
												$custom_excerpt = $custom_excerpt.'...';
											}
										}
										if( is_array($custom_headline_conditional) && in_array( 'Enable Custom Headline', $custom_headline_conditional ) ){
											$headline = get_sub_field('headline');
											$subheadline = get_sub_field('subheadline');
										}
												else{
													$headline		= get_the_title();
													$subheadline	= get_field('subheadline');
												}
												if (isset($custom_excerpt)) {
													$excerpt 		= $custom_excerpt;
												}else{
													$excerpt 		= wp_trim_words( get_the_content(), 40, '...' );
												}
												$link 			= get_the_permalink();
												$slug			= get_the_slug(get_the_ID());
												
												echo '<div class="content-row '.$slug.' '.$evenodd.'">';
												echo '<section class="page-teaser">';
												echo '<div class="page-teaser-wrapper">';

													
													if ($slug == 'send') {
														echo '<div class="opening-soon"><h3>Opening soon,</h3> in the meantime<i></i></div>';
														$image_src = wp_get_attachment_image_src($image,'full', true);
													}
													echo '<div class="specialheadline"><h2>'.$headline.'</h2><h3>'.$subheadline.'</h3><span></span></div>';
													if ($image && $slug !== 'send' && $slug !== 'projekt'){
														echo '<div class="col four">';
														echo '<img src="'.$image_src[0].'" />';
														echo '</div>';
														echo '<div class="col eight">';
													}elseif($image && $slug == 'send'){
														echo '<div class="col twelve">';
														echo '<img src="'.$image_src[0].'" />';
														echo '</div>';
														echo '<div class="col center">';
													}elseif($slug == 'projekt'){
														
														echo '<div id="heart-gallery" class="royalSlider rsDefault visibleNearby">';
														$project_args = array(
																'post_type' => 'project',
																'posts_per_page' => 9,
																'order' => 'ASC',
																'orderby' => 'date'
															);
														
														$query = query_posts($project_args);

														if (have_posts()) : while (have_posts()) : the_post();

															$thumb_id = get_post_thumbnail_id();
															$thumb_url = wp_get_attachment_image_src($thumb_id,'product', true);

														echo '<a id="'.get_the_ID().'" class="rsImg" href="'.$thumb_url[0].'" data-rsw="480" data-rsh="480">'.get_the_title().'<span>'.get_the_excerpt().'</span></a>';
														
														endwhile; endif;
														wp_reset_query();
														//echo '<a class="rsImg" href="'.get_template_directory_uri().'/library/images/more.jpg" data-rsw="480" data-rsh="480"></a>';
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
										
										$i++;

										$custom_excerpt = null;

									endwhile; 
								?>
								 
								<?php endif; ?>

							<?php endwhile; ?>
							<?php endif; ?>

<?php get_footer(); ?>
