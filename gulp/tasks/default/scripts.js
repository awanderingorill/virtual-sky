var gulp        = require( 'gulp' );
var gutil       = require( 'gulp-util' );

var connect     = require( 'gulp-connect' );
var cache       = require( 'gulp-cached' );

var eslint      = require( 'gulp-eslint' );

var config      = require( '../../../config.js' );


// Scripts.

gulp.task( 'eslint', function(  )
{
	return gulp.src( config.scripts )
		.pipe( eslint(  ) )
		.pipe( eslint.format(  ) );
} );

gulp.task( 'scripts', [ 'eslint' ], function(  )
{
	return gulp.src( config.scripts )
		.pipe( gulp.dest( config.destination + 'scripts' ) )
		.pipe( connect.reload(  ) );
} );

