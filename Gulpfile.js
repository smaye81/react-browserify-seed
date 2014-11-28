var gulp = require('gulp');
var gutil = require('gulp-util');
var vinylSource = require('vinyl-source-stream');
var browserify = require('browserify');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var es6ify = require('es6ify');
var watchify = require('watchify');

gulp.task('watch', function () {

	gulp.watch('./app/index.html', ['copy-index']);
});

gulp.task('copy', ['copy-index', 'copy-vendor']);

gulp.task('copy-index', function () {
	gulp.src('app/index.html')
		.pipe(gulp.dest('dist'));
});
gulp.task('copy-vendor', function () {
	gulp.src('app/bower_components/bootstrap/dist/css/*', {base: 'app'})
		.pipe(gulp.dest('dist'));
});

gulp.task('bundle', function() {
	var bundler = watchify(browserify('./app/js/main.js', watchify.args));

	bundler.transform('reactify');
	bundler.transform(es6ify);

	bundler.on('update', rebundle);

	function rebundle() {
		return bundler.bundle()
			// log errors if they happen
			.on('error', gutil.log.bind(gutil, 'Browserify Error'))
			.pipe(vinylSource('bundle.js'))
			.pipe(gulp.dest('./dist'));
	}

	return rebundle();
});

gulp.task('connect', function () {

	// Uses gulp-connect plugin to start up a server
	connect.server({
		root: ['dist'],
		port: 9000
	});
});


gulp.task('default', ['bundle', 'copy', 'watch', 'connect']);