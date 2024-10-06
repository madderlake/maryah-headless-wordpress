<?php
// define('WP_URL', 'http://localhost:8086');
// Menus
require_once('inc/menus.php');
// CORS
require_once('inc/cors.php');

// Custom Post Types
require_once('inc/custom-post-types/portfolio.php');

require_once('inc/disable-editor.php');

// Enqueue WordPress REST API
function maryah_headless_theme_setup() {
    // Enable support for Post Thumbnails
    add_theme_support('post-thumbnails');

    // Enable support for Title Tag
    add_theme_support('title-tag');
}

add_action('after_setup_theme', 'maryah_headless_theme_setup');

// Disable the front-end theme rendering
function disable_wp_frontend() {
    if (!is_admin()) {
        wp_redirect(home_url());
        exit;
    }
}
add_action('template_redirect', 'disable_wp_frontend');

// Load ACF Css for Admin

function my_acf_admin_head()
{
	wp_enqueue_style( 'styles/acf-custom-css', get_template_directory_uri() . '/styles/acf.css', array(), '1.0.0', '' );
}

add_action('acf/input/admin_head', 'my_acf_admin_head');