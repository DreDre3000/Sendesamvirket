<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'dredesigns_dk' );

/** MySQL database username */
define( 'DB_USER', 'dredesigns_dk' );

/** MySQL database password */
define( 'DB_PASSWORD', 'oVoeWy35HvHLJZhbPxzcfSWe' );

/** MySQL hostname */
define( 'DB_HOST', 'dredesigns.dk.mysql' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'cFHsL6>c?VQ=%^S_Ioh<bwYbDY#EGvNZ2u2&!_Wc)|6`sD5v}b@:ZW}9*Qu0h|zc' );
define( 'SECURE_AUTH_KEY',  '^j4A9`S;D4]>u@!*ib{wQ<[NRhjfNa=EP(8MF^IHnD/cNU.q]4y|L[7Z=e!K.11e' );
define( 'LOGGED_IN_KEY',    '+;5p8U:-9xF<YnJXGp[ryA7?L tLs,]`XDFBI>J0W<vox0R]Pl1_iBg}ioIUU|t>' );
define( 'NONCE_KEY',        'U@?C5lH9uCA[|FO{Hd-5qP^]u2tkOi;@)k T-FR]H;UbEEpWr#f-@:14H^9gO(LN' );
define( 'AUTH_SALT',        '-73h}r.$,%}x[LE@8AdIEPa a%hn7?JHzSrwzmM/lNlH`b8 !?T`.3p<|FNo8`:>' );
define( 'SECURE_AUTH_SALT', '8:65twa}w:9+l!2wL2(t@DfTF1Ft%r^:;Qu8dHw.X-a1okKtW=h4l1Y1F7z2VfE|' );
define( 'LOGGED_IN_SALT',   'VQzJMGn3K zCCS`XtyxR/AMshCL3mTKVFG?A+}%CWq;3L><J-7N)m-vs6.8{WhM~' );
define( 'NONCE_SALT',       '5}JDNO8BPQ-v^,jEnxA`bfIaHuBdu$]?{oWDj+QI;zlIoYcn/q^N,m,Ad,^7?2P!' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_Sendesamvirket';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
