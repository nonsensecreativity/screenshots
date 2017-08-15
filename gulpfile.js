const gulp            = require('gulp');
const clean 		  = require('gulp-clean');
const imagemin        = require('gulp-imagemin');

const paths = {
	dest: './images',
	temp: './temp/**/*'
};

const options = [
	imagemin.gifsicle({
		interlaced: true
	}),
	imagemin.jpegtran({
		progressive: true
	}),
	imagemin.optipng({
		optimizationLevel: 7
	}),
	imagemin.svgo({
		plugins: [{
			removeViewBox: true
		}]
	})
];

gulp.task('build', () => {
	gulp.src(paths.temp)
		.pipe(imagemin(options))
		.pipe(gulp.dest(paths.dest));
});

gulp.task('default', ['build'], () => {
	gulp.src(paths.temp)
		.pipe(clean());
});