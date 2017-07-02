var gulp= require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
nested = require('postcss-nested'),
cssvars = require('postcss-simple-vars'),
cssimport=require('postcss-import'),
mixins=require('postcss-mixins');


gulp.task('css', function(){
	
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([cssimport,mixins,autoprefixer,cssvars,nested]))
	.on('error', function(errorinfo){
		console.log(errorinfo.toString());
		this.emit('end');
	})
	.pipe(gulp.dest('./app/temp/styles'));
	
});