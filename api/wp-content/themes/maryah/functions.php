<?php
// define('WP_URL', 'http://localhost:8086');

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

