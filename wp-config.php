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
define( 'DB_NAME', 'ebazar' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

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
define( 'AUTH_KEY',         '9JBni783R&h5GK5>Zvv}1a9caje97[`Nu<W?U1,8Pp;zu4TD3][v;`:c.pUOv,L`' );
define( 'SECURE_AUTH_KEY',  ';(;2vm]E1(#QoM,v|xyv(#m?eFO-)-/;]aBmnrdTl UTmZh{:(*xoU)Q`fkFO6Xc' );
define( 'LOGGED_IN_KEY',    '~glK1{x47bjqCm=lMd&@&P)~SRt1gUshq0eEoE)e},2Wom9x6Mi&7,k^^>*t}mQr' );
define( 'NONCE_KEY',        '=h}s6yzjeA0,mhbN4Dwjxl=vu#Wu9{g3NIyDc%D5`D4m%g#|#^0Wumqhe;~ov*hq' );
define( 'AUTH_SALT',        'w(K|j]cxbGeX]AwOe+@K$>w|J_YoFr^Zc(%he#`Ccv*jl]oOG9X#+&W3##pcY2^U' );
define( 'SECURE_AUTH_SALT', '6lX`iq/5]iQr)ocNJNi@[17Wv, m^%@/mZ@|T=jNed.2rO.6{,p2=3:QH3W[A8%q' );
define( 'LOGGED_IN_SALT',   'm&~ =LtIhA>Q) 3TPl,}FQ}ASRX!<u=]A4Gnh&Wq{~9j],ifE_y~~$gl[~t0YU Y' );
define( 'NONCE_SALT',       'fmGz`QHwWtn|A<@D}vL``hq<r8%;rLV&M,o<yFn@ePauIjB+zA|e>?]$wdIaj[:^' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_admin';

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
