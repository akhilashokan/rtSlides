<?php
/**
 * Plugin Name: rtSlides
 * Description: Slidshow plugin made for rtCamp test
 * Version: 1.0.0
 * Author: Akhil Ashokan
 * Author URI: https://github.com/akhilashokan
 */

function create_block_rtSlides_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_rtSlides_init' );
