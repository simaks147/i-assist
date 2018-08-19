var gulp           = require('gulp'),
	scss           = require('gulp-sass'),
	browserSync    = require('browser-sync'),
	concat         = require('gulp-concat'),
	uglify         = require('gulp-uglify'),
	cleanCSS       = require('gulp-clean-css'),
	rename         = require('gulp-rename'),
	del            = require('del'),
	autoprefixer   = require('gulp-autoprefixer'),
	notify         = require("gulp-notify");
	devip 		   = require('dev-ip');


// scripts
gulp.task('scripts', function() {
	return gulp.src([
		'app/libs/jquery.min.js',
		'app/libs/materialize/js/bin/materialize.js',
		'app/libs/slick/slick.js',
		'app/libs/scrollIt.js',
		// 'app/libs/lightgallery/lightgallery.min.js',
		'app/libs/jquery.event.move.js',
		'app/libs/twentytwenty/jquery.twentytwenty.js',
		// 'app/libs/jssor.slider.min.js',
		'app/libs/jquery.form.min.js',
		'app/libs/jquery.matchHeight.min.js',
		'app/libs/jquery.waypoints.js',
		'app/libs/animate-css.js',
		'app/js/main.js' // Всегда в конце
		])
	.pipe(concat('scripts.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'))
	.pipe(browserSync.reload({stream: true}))
	// .pipe(browserSync.stream())
	.pipe(notify("Success!"));
});


// styles
gulp.task('scss', function() {
	return gulp.src('app/scss/*.scss')
	.pipe(scss()
	.on("error", notify.onError()))
	.pipe(autoprefixer(['last 10 versions']))
	.pipe(cleanCSS())						
	.pipe(rename({basename: "style", suffix: '.min', prefix : ''}))
	.pipe(gulp.dest('app/css'))
	// .pipe(browserSync.reload({stream: true}))
	.pipe(browserSync.stream())
	.pipe(notify("Success!"))
});



// browser
gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app',
		},
		notify: false,
		port: 3007
	});
});


// watcher
gulp.task('watch', ['browser-sync'], function() {
	gulp.watch('app/scss/*.scss', ['scss']);
	gulp.watch(['app/libs/**/*.js', 'app/js/main.js'], ['scripts']);
	gulp.watch("app/*.html").on('change', browserSync.reload);
	
});


// build
gulp.task('build', ['removedist', 'scss', 'scripts'], function() {

	var buildFiles = gulp.src(
		'app/*.html'
		).pipe(gulp.dest('dist'));

	var buildCss = gulp.src([
		'app/css/style.min.css',
		]).pipe(gulp.dest('dist/css'));

	var buildJs = gulp.src([
		'app/js/scripts.min.js',
		]).pipe(gulp.dest('dist/js'));

	var buildFonts = gulp.src([
		'app/fonts/**/*',
		]).pipe(gulp.dest('dist/fonts'));

	var buildImg = gulp.src([
		'app/img/**/*',
		]).pipe(gulp.dest('dist/img'));

	var buildImage = gulp.src([
		'app/image/**/*',
		]).pipe(gulp.dest('dist/image'));
	
	var buildFavicon = gulp.src([
		'app/favicon/**/*',
		]).pipe(gulp.dest('dist/favicon'));

});



// remove the project folder
gulp.task('removedist', function() { return del.sync('dist'); });



// default task
gulp.task('default', ['watch']);
