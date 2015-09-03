<?php
/*
 Template Name: Products
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

						 <div id="main" class="eightcol first clearfix" role="main">

						 	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
							<article id="post-<?php the_ID(); ?>" <?php post_class( 'cf' ); ?> role="article" itemscope itemtype="http://schema.org/BlogPosting">

								<header class="article-header">

									<h1 class="page-title" itemprop="headline"><?php the_title(); ?></h1>

								</header> <?php // end article header ?>

								<section class="entry-content cf" itemprop="articleBody" style="position:relative">
									<?php
										// the content (pretty self explanatory huh)
										the_content();

									?>
									
									<div class="status">
										<blockquote class="heart box">
										<p>Surprise a friend with a fun virtual gift with images of your favourite Hearts. Save up to three of your favourites by clicking on Hearts with this <span class="icon-heart_filled"></span> icon.</p>
										<br />
										<p><a href="../send" class="btn heart">Finalize and wrap your gift >><span></span></a><a href="#" class="btn clear i-restart">Start over</a></p>
										</blockquote>
									</div>
									<div class="blank"></div>

								</section> <?php // end article section ?>

								<footer class="article-footer cf">

								</footer>

							</article>

							<?php endwhile; endif; ?>

							<?php
							$tag_args = array(
								'orderby'       => 'slug'
								);
							$all_tags = get_terms("post_tag",$tag_args);
							echo '<div id="sorting" class="sorting">';
								echo '<div><a class="btn active" href="#" data-filter="*">All</a></div>';
								foreach ( $all_tags as $tag ) {
								   $span = '';
								    if ($tag->slug == 'a-featured') {
								   	//$span = '<span>'.$tag->count.'</span>';
								   	  $span = '<span></span>';
								    }
								    if ($tag->slug !== 'a-featured') {
								      echo '<div><a class="btn '.$tag->slug.'" href="#" data-filter=".'.$tag->slug.'">' .$tag->name.$span.'</a></div>';
							    	}
							    }
							echo '</div>';

								echo '<div class="grid-container">';

											$product_args = array(
												'post_type' => 'product',
												'posts_per_page' => -1,
												'orderby' => 'name',
												'order' => 'ASC'
											);
											$query = query_posts($product_args);

											if (have_posts()) : while (have_posts()) : the_post();
												$tags = get_the_terms( $post->ID , 'post_tag' );

												$thumb_id = get_field('alternate_thumbnail');
												$thumb_url = wp_get_attachment_image_src($thumb_id,'thumbnail', true);

												echo '<div id="'.get_the_ID().'" class="grid-item ';
												echo get_the_slug();
												foreach ( $tags as $tag ) {echo ' '.$tag->slug;}
												echo '">';
												the_post_thumbnail('product');
												echo '<div class="belowimg">';
												echo '<h4>'.get_the_title().'</h4>';
												if (has_tag('Our Favourites')) {
													echo '<a href="#" class="heart-btn icon-heart_filled"></a>';
												}
												echo '<p>'.get_the_excerpt().'</p>';
												if ( $tags && ! is_wp_error( $tags ) ) : 
													$tag_links = array();
													foreach ( $tags as $tag) {
														if ($tag->slug !== 'a-featured') {
														$tag_links[] = '<a href="#" class="genre-tag" data-filter=".'.$tag->slug.'">'.$tag->name.'</a>';
														}
													}
													$list = join( " / ", $tag_links );
													//echo '<div class="tags genre-tags">'.$list.'</div>';
												endif;
												echo '<div class="timestamp">'.get_the_time('U').'</div>';
												echo '<div class="alt_thumb">'.$thumb_url[0].'</div>';
												echo '</div>';
												echo '</div>';
											
											endwhile;
											endif;
											wp_reset_query();
											echo "</div>";
									?>

						</div>

				</div>

			</div>
			<a href="#sorting" id="scrolltop-btn" class="icon-up-open-big btn"></a>


<?php get_footer(); ?>
