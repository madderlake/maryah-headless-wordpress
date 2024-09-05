<?php

	/* ==================================================

	Portfolio Post Type Functions

	================================================== */

	$portfolio_permalinks = get_option( 'mah_portfolio_permalinks' );

	$cat_args = array(
	    "label" 						=> __('Portfolio Categories', "mah"),
	    "singular_label" 				=> __('Portfolio Category', "mah"),
	    'public'                        => true,
	    'hierarchical'                  => true,
	    'show_ui'                       => true,
	    'show_in_nav_menus'             => false,
	    'args'                          => array( 'orderby' => 'term_order' ),
		'rewrite' 						=> array(
		'slug' => empty( $portfolio_permalinks['category_base'] ) ? __( 'portfolio-category', 'mah' ) : $portfolio_permalinks['category_base'],
		'with_front'   => false,
		'hierarchical' => true,
					    	            ),
	    'query_var'                     => true
	);

	register_taxonomy('portfolio-category', array('portfolio'), $cat_args );
	register_taxonomy('project-type', array("portfolio"), array("hierarchical" => true, "label" => "Project Type", "singular_label" => "Project Type", "rewrite"=> true));
	register_taxonomy('skills', array("portfolio"), array("hierarchical" => true, "label" => "Skills", "singular_label" => "Skill", "rewrite" => true));


	add_action('init', 'portfolio_register');

	function portfolio_register() {

		$portfolio_permalinks = get_option( 'mah_portfolio_permalinks' );

		$portfolio_permalink = empty( $portfolio_permalinks['portfolio_base'] ) ? __( 'portfolio', 'mah' ) : 		  	$portfolio_permalinks['portfolio_base'];

	    $labels = array(
	        'name' => __('Portfolio', "mah"),
	        'singular_name' => __('Portfolio Item', "mah"),
	        'add_new' => __('Add New Item', 'portfolio item', "mah"),
	        'add_new_item' => __('Add New Portfolio Item', "mah"),
	        'edit_item' => __('Edit Portfolio Item', "mah"),
	        'new_item' => __('New Portfolio Item', "mah"),
	        'view_item' => __('View Portfolio Item', "mah"),
	        'search_items' => __('Search Portfolio', "mah"),
	        'not_found' =>  __('No portfolio items have been added yet', "mah"),
	        'not_found_in_trash' => __('Nothing found in Trash', "mah"),
	        'parent_item_colon' => ''
	    );

	    $args = array(
	        'labels' => $labels,
	        'public' => true,
	        'show_ui' => true,
	        'show_in_menu' => true,
	        'show_in_nav_menus' => false,
	        //'menu_icon' => 'dashicons-format-image',
	        'menu_icon' => 'dashicons-portfolio',
	        'menu_position' => 5,
	        'hierarchical' => false,
	        'rewrite' => false,
	        /*
'rewrite' => $portfolio_permalink != "portfolio" ? array(
	        				'slug' => untrailingslashit( $portfolio_permalink ),
	        				'with_front' => false,
	        				'feeds' => true )
	        			: false,
*/
	        'supports' => array('title', 'editor', 'thumbnail','page-attributes'),
	        'has_archive' => true,
	        'taxonomies' => array('portfolio-category', 'project-type', 'skills')
	       );

	    register_post_type( 'portfolio' , $args );
	}

	//add_filter("manage_edit-portfolio_columns", "portfolio_edit_columns");

//Portfolio Columns

add_filter( 'manage_edit-portfolio_columns', 'portfolio_columns' ) ;

function portfolio_columns( $columns ) {

	$columns = array(
		'cb' => '<input type="checkbox" />',
		'featured-img' => __('Featured Image'),
		'title' => __( 'Title' ),
		'portfolio-categories' => __( 'Categories' ),

	);

	return $columns;
}

add_action( 'manage_portfolio_posts_custom_column', 'manage_portfolio_columns', 10, 2 );
function get_post_featured_img($post_id) {
				$img_id = get_post_thumbnail_id($post_id);
				if ($img_id) {
					$post_thumbnail_img = wp_get_attachment_image_src($img_id, 'featured_img');
					return $post_thumbnail_img[0];
    			}
			}
function manage_portfolio_columns( $column, $post_id ) {
	global $post;

	switch( $column ) {

		/* If displaying the 'duration' column. */
		case 'featured-img' :

			/* Get the post meta. */

			/* If no duration is found, output a default message. */
			$post_featured_img = get_post_featured_img($post_id);
			if ( empty( $post_featured_img ) )
				echo __( '--' );

			/* If there is a duration, append 'minutes' to the text string. */
			else
				echo '<a href="'.$post_featured_img . '" target="_blank"><img src="'. $post_featured_img .'"></a>';
			break;

		/* If displaying the 'genre' column. */
		case 'portfolio-categories' :

			/* Get the categories for the post. */
			$terms = get_the_terms( $post_id, 'portfolio-category' );

			/* If terms were found. */
			if ( !empty( $terms ) ) {

				$out = array();

				/* Loop through each term, linking to the 'edit posts' page for the specific term. */
				foreach ( $terms as $term ) {
					$out[] = sprintf( '<a href="%s">%s</a>',
						esc_url( add_query_arg( array( 'post_type' => $post->post_type, 'portfolio-categories' => $term->slug ), 'edit.php' ) ),
						esc_html( sanitize_term_field( 'name', $term->name, $term->term_id, 'portfolio-categories', 'display' ) )
					);
				}

				/* Join the terms, separating them with a comma. */
				echo join( ', ', $out );
			}

			/* If no terms were found, output a default message. */
			else {
				_e( '--' );
			}

			break;

		/* Just break out of the switch statement for everything else. */
		default :
			break;
	}
}

add_filter( 'manage_edit-portfolio_sortable_columns', 'portfolio_sortable_columns' );

function portfolio_sortable_columns( $columns ) {

	$columns['portfolio-categories'] = 'portfolio-categories';

	return $columns;
}

/* Only run our customization on the 'edit.php' page in the admin. */
add_action( 'load-edit.php', 'my_edit_movie_load' );

function my_edit_movie_load() {
	add_filter( 'request', 'mah_sort_portfolio' );
}

/* Sorts the movies. */
function mah_sort_portfolio( $vars ) {

	/* Check if we're viewing the 'movie' post type. */
	if ( isset( $vars['post_type'] ) && 'movie' == $vars['post_type'] ) {

		/* Check if 'orderby' is set to 'duration'. */
		if ( isset( $vars['orderby'] ) && 'duration' == $vars['orderby'] ) {

			/* Merge the query vars with our custom variables. */
			$vars = array_merge(
				$vars,
				array(
					'meta_key' => 'duration',
					'orderby' => 'meta_value_num'
				)
			);
		}
	}

	return $vars;
}

?>