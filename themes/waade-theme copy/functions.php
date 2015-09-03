<?php
/*
Author: Eddie Machado
URL: htp://themble.com/bones/

This is where you can drop your custom functions or
just edit things like thumbnail sizes, header images,
sidebars, comments, ect.
*/

// LOAD BONES CORE (if you remove this, the theme will break)
require_once( 'library/bones.php' );

// USE THIS TEMPLATE TO CREATE CUSTOM POST TYPES EASILY
//require_once( 'library/custom-post-type.php' );

// CUSTOMIZE THE WORDPRESS ADMIN (off by default)
require_once( 'library/admin.php' );

add_filter('show_admin_bar', '__return_false');

/*********************
LAUNCH BONES
Let's get everything up and running.
*********************/

function bones_ahoy() {

  // let's get language support going, if you need it
  load_theme_textdomain( 'bonestheme', get_template_directory() . '/library/translation' );

  // launching operation cleanup
  add_action( 'init', 'bones_head_cleanup' );
  // A better title
  add_filter( 'wp_title', 'rw_title', 10, 3 );
  // remove WP version from RSS
  add_filter( 'the_generator', 'bones_rss_version' );
  // remove pesky injected css for recent comments widget
  add_filter( 'wp_head', 'bones_remove_wp_widget_recent_comments_style', 1 );
  // clean up comment styles in the head
  add_action( 'wp_head', 'bones_remove_recent_comments_style', 1 );
  // clean up gallery output in wp
  add_filter( 'gallery_style', 'bones_gallery_style' );

  // enqueue base scripts and styles
  add_action( 'wp_enqueue_scripts', 'bones_scripts_and_styles', 999 );
  // ie conditional wrapper

  // launching this stuff after theme setup
  bones_theme_support();

  // adding sidebars to Wordpress (these are created in functions.php)
  add_action( 'widgets_init', 'bones_register_sidebars' );

  // cleaning up random code around images
  add_filter( 'the_content', 'bones_filter_ptags_on_images' );
  // cleaning up excerpt
  add_filter( 'excerpt_more', 'bones_excerpt_more' );

} /* end bones ahoy */

// let's get this party started
add_action( 'after_setup_theme', 'bones_ahoy' );


/************* OEMBED SIZE OPTIONS *************/

if ( ! isset( $content_width ) ) {
  $content_width = 640;
}

/************* THUMBNAIL SIZE OPTIONS *************/

// Thumbnail sizes
add_image_size( 'product', 480, 480, true );
add_image_size( 'poster-full', 1920, 800);
add_image_size( 'poster-slim', 1920, 500, true);
add_image_size( 'poster-mobile', 768, 641, true);
add_image_size( 'poster-mobile-slim', 768, 200, true);
add_image_size( 'admin-thumb', 60, 60, true );

/*
to add more sizes, simply copy a line from above
and change the dimensions & name. As long as you
upload a "featured image" as large as the biggest
set width or height, all the other sizes will be
auto-cropped.

To call a different size, simply change the text
inside the thumbnail function.

For example, to call the 300 x 300 sized image,
we would use the function:
<?php the_post_thumbnail( 'bones-thumb-300' ); ?>
for the 600 x 100 image:
<?php the_post_thumbnail( 'bones-thumb-600' ); ?>

You can change the names and dimensions to whatever
you like. Enjoy!
*/

add_filter( 'image_size_names_choose', 'bones_custom_image_sizes' );

function bones_custom_image_sizes( $sizes ) {
    return array_merge( $sizes, array(
        'product' => __('480px by 480px')
    ) );
}

/*
The function above adds the ability to use the dropdown menu to select
the new images sizes you have just created from within the media manager
when you add media to your content blocks. If you add more image sizes,
duplicate one of the lines in the array and name it according to your
new image size.
*/

/************* LIBRARIES ********************/
add_action( 'wp_enqueue_scripts', 'additional_libraries', 999 );
function additional_libraries() {
  global $wp_styles; // call global $wp_styles variable to add conditional wrapper around ie stylesheet the WordPress way
  if (!is_admin()) {
    wp_register_script( 'main', get_template_directory_uri() . '/library/js/min/main-ck.js', array( 'jquery' ), '', false );
    wp_enqueue_script( 'main' );
    
    if (is_page_template('page-start.php')) {
      wp_register_script( 'carousel', get_template_directory_uri() . '/library/js/min/carousel-ck.js', array( 'jquery' ), '', false );
      wp_enqueue_script( 'carousel' );
    }

    if (is_page_template('page-heartgreeting.php')) {
      wp_register_script( 'heartbox', get_template_directory_uri() . '/library/js/min/heartbox-ck.js', array( 'jquery' ), '', false );
      wp_enqueue_script( 'heartbox' );
    }
    if (is_page_template('page-products.php')) {
      wp_register_script( 'products', get_template_directory_uri() . '/library/js/min/products-ck.js', array( 'jquery' ), '', false );
      wp_enqueue_script( 'products' );
    }

  }
}


function add_editor_styles() {
    $stylesheet = get_template_directory_uri() . '/library/css/editor.css';
    add_editor_style( $stylesheet );
}
add_action( 'init', 'add_editor_styles' );

 // Add custom rewrite rules to handle things like years in custom post archives
      function add_rewrite_rules($aRules) {

          $aNewRules = array(
              'post/([^/]*)/?$' => '404.php'
          );
          $aRules = $aNewRules + $aRules;
          return $aRules;
      }

      /*function add_rewrite_rules($aRules) {
          $aNewRules = array(
              'resultat/([0-9]{4})/' => 'http://dn.se'
          );
          $aRules = $aNewRules + $aRules;
          return $aRules;
      }*/

      // hook add_rewrite_rules function into rewrite_rules_array
      add_filter('rewrite_rules_array', 'add_rewrite_rules',1);

/************* ACTIVE SIDEBARS ********************/

// Sidebars & Widgetizes Areas
function bones_register_sidebars() {

  register_sidebar(array(
    'id' => 'footer',
    'name' => __( 'The Footer - Row 1', 'tveksamt' ),
    'description' => __( 'The Footer.', 'tveksamt' ),
    'before_widget' => '<div id="%1$s" class="widget %2$s">',
    'after_widget' => '</div>',
    'before_title' => '<h4 class="widgettitle">',
    'after_title' => '</h4>',
  ));

} // don't remove this bracket!


/************* LAZY LOAD IMAGE TEMPLATE *************/
function lazyload_thumbnail($size){
  $tempimg = get_bloginfo('template_url') . "/library/images/nothing.gif";
  $src = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), $size);
  $d_attr = array(
      'data-original' => $src[0],
      'src' => $tempimg,
      'class' => 'lazyload '.$size,
  );
  $ie7_attr = array(
      'src' => $src[0],
      'class' => 'ie7 '.$size,
  );
  the_post_thumbnail($size, $d_attr);
  //the_post_thumbnail($size, $ie7_attr);
}

function get_the_slug($id){
  $slug = basename(get_permalink($id));
  do_action('before_slug', $slug);
  $slug = apply_filters('slug_filter', $slug);
  do_action('after_slug', $slug);
  return $slug;
}

function wpa_category_nav_class( $classes, $item ){
    $slug = get_the_slug( $item->object_id );
    $classes[] = 'menu-' . $slug;
    return $classes;
}
add_filter( 'nav_menu_css_class', 'wpa_category_nav_class', 10, 2 );



?>
