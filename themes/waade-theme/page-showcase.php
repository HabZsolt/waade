<?php
/**
 * Template Name: Showcase
 * The template for displaying showcase pages.
 *
 * Used to display archive-type pages if nothing more specific matches a query.
 * For example, puts together date-based pages if no date.php file exists.
 *
 * If you'd like to further customize these archive views, you may create a
 * new template file for each specific one. For example, BuddyBoss already
 * has tag.php for Tag archives, category.php for Category archives, and
 * author.php for Author archives.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage BuddyBoss
 * @since BuddyBoss 3.0
 */

get_header();
	
 ?>

<div class="page-full-width">

	<div id="primary" class="site-content">
		<div role="main">
			<div id="content"></div>

			<?php while ( have_posts() ) : the_post(); ?>
				<?php get_template_part( 'content', 'page' ); ?>
				<?php if( have_rows('row') ):

				$evenodd = array('even', 'odd');
				$i=0;
				 ?>

				
				<!-- <div class="showcase-nav-wrapper">
					<nav class="showcase-nav">
					  <?php while( have_rows('row') ): the_row(); ?>
					  		<a href="#section-1" class="button scroll-nav__item scroll-nav__link"><?php echo get_sub_field('headline'); ?></a>
					  <?php endwhile; ?>
					</nav>
				</div> -->
				
				<div class="showcase-rows-wrapper">

				<?php while( have_rows('row') ): the_row(); 

					// vars
					$image = get_sub_field('image');
					$text = get_sub_field('text');
					$headline = get_sub_field('headline');
					$imgStyle = '';

					if (empty($image)) {
						$imgStyle = 'no-img';	
					}
					
					//$style = sanitize_key(get_sub_field('style'));
					$style = '';

					$class = $evenodd[$i%2].' '.$style.' '.$imgStyle;


					?>

					<section class="showcase-row <?php echo $class;?>">

						<div class="inner-wrap">
							
							<?php if($image): echo '<div class="thumbnail">'.wp_get_attachment_image( $image, 'large' ).'</div>';endif;?>
							
							<div class="content">
							<?php 

							if( $headline ):
								echo '<h2>'.$headline.'</h2>';
							endif;

							?>
							<p><?php echo $text; ?></p>
							</div>

							<div style="clear:both;float:none"></div>
						</div>

					    

					</section>
				<?php $i++; ?>
				<?php endwhile; ?>

					<?php if (get_field('end_text')): ?>
					<section class="showcase-row end">
						<div class="inner-wrap">
						<?php if (get_field('link')): 
		
    						echo '<a class="button-primary big button" href="'.get_field('link').'">'.get_field('end_text').'</a>';
						
						else:
						
							echo '<p>'.get_field('end_text').'</p>';
						
						endif; ?>
						</div>
					</section>
					<?php endif; ?>
				</div>

			<?php endif; ?>

			<?php endwhile; // end of the loop. ?>



		</div><!-- #content -->

	</div><!-- #primary -->

</div>




<?php get_footer(); ?>