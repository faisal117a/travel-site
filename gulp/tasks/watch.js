var gulp= require('gulp'),
watch= require('gulp-watch'),
browsersync=require('browser-sync').create();

gulp.task('watch', function(){
    
	browsersync.init({
        notify: false,
		server:{

			baseDir: "app"

		}
	});
	

    	watch('./app/index.html', function(){
			browsersync.reload();
	});

	watch('./app/assets/styles/**/*.css', function(){
		
		gulp.start('cssinject');
	});
	
});

gulp.task('cssinject',['css'], function(){
gulp.src('./app/temp/styles/styles.css')
.pipe(browsersync.stream());

});