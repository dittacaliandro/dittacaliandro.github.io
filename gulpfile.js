// Import Plugins
var gulp 						= require('gulp'),
		browserSync 		= require('browser-sync').create(),
		svgstore 				= require('gulp-svgstore'),
		svgmin 					= require('gulp-svgmin'),
		inject 					= require('gulp-inject'),
	//	plumber					= require('gulp-plumber'),
		concat 					= require('gulp-concat'),
		uglify 					= require('gulp-uglify'),
		sass 						= require('gulp-sass'),
		sourcemaps 			= require('gulp-sourcemaps'),
		autoprefixer 		= require('gulp-autoprefixer'),
		minifyCss				= require('gulp-minify-css'),
		imageOptim			= require('gulp-imageoptim'),
		imageResize			= require('gulp-image-resize'),
		cache 					= require('gulp-cache'), // https://www.npmjs.com/package/gulp-cache
		rename					= require('gulp-rename');

// JavaScript
gulp.task('js', function(){

	return gulp.src(['js/lib/sss.min.js', 'js/func.js'])
		//.pipe(plumber())
		.pipe(concat('func.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./js/'));

});

// Makes sure the javascript files are all concatenated and minified before reloading
gulp.task('js-watch', ['js'], function() {
    browserSync.reload();
});

// Styles
gulp.task('styles', function() {

	gulp.src('_sass/**/*.+(scss|sass)')
		//.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
      browsers: ['last 2 version'],
      cascade: false
    }))
		.pipe(minifyCss({compatibility: 'ie8'}))
		.pipe(rename({suffix: '.min'}))
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('./css/'))
		.pipe(browserSync.stream({match: '**/*.css'}));
});

// Images



// SVG
// gulp.task('svg', function () {

// 	var svgs = gulp
//         .src('img/svg/*.svg', { base: 'img/svg' })
//         .pipe(rename({prefix: 'icon-'}))
//         .pipe(svgmin())
//         .pipe(svgstore({ inlineSvg: true }));

//     function fileContents (filePath, file) {
//         return file.contents.toString();
//     }

//     return gulp
//         .src('index.html')
//         .pipe(inject(svgs, { transform: fileContents }))
//         .pipe(gulp.dest('.'));
// });

// Watch
gulp.task('watch', function(){

	browserSync.init({
        server: {
            baseDir: "./"
        },
        notify: false
    });

	//gulp.watch('img/svg/*', ['svg']);
	gulp.watch('js/**/*.js', ['js-watch']);
	gulp.watch('_sass/**/*.+(scss|sass)', ['styles']);
	gulp.watch('./**/*.html').on('change', browserSync.reload);

});

gulp.task('default', ['js', 'styles', 'watch'])