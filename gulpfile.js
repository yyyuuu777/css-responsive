var gulp = require("gulp");
var babel = require('gulp-babel');
var res={
    js:'./static/js/*',
    css:'./static/css/*'
}
var outpath = {
    js:'./public/static/js/',
    css:'./public/static/css/'
}

// for es6 -> es5 || coffe script
gulp.task('t-js', () =>
    gulp.src(res.js)
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(gulp.dest(outpath.js))
);

gulp.task('default',function(){
    console.log('gulp start...');
});
