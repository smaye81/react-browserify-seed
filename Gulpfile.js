var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var connect = require('gulp-connect');

gulp.task('browserify', function () {
	gulp.src('app/js/main.js')
		.pipe(browserify({transform: 'reactify'}))
		.pipe(concat('main.js'))
		.pipe(gulp.dest('dist/js'));

});

gulp.task('copy', function () {
	gulp.src('app/index.html')
		.pipe(gulp.dest('dist'));

	gulp.src('app/bower_components/bootstrap/dist/css/*', {base: 'app'})
		.pipe(gulp.dest('dist'));
});

gulp.task('default', ['browserify', 'copy', 'watch', 'connect']);

// FIXME - Always copying the index.html file
gulp.task('watch', function () {
	gulp.watch('app/**/*.*', ['browserify', 'copy']);
});


gulp.task('connect', function () {

	// Uses gulp-connect plugin to start up a server
	connect.server({
		root: ['dist'],
		port: 9000
	});
});

