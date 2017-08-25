var gulp = require("gulp");
var babel = require('gulp-babel');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var gls = require('gulp-live-server');
var watch = require("gulp-watch");
var res={
    html:'./*.html',
    pages:'./layout/*.html',
    js:'./static/js/*',
    css:'./static/sass/**/*',
    imgs:'./static/imgs/*'
}
var outpath = {
    js:'./public/static/js/',
    css:'./public/static/css/',
    html:'./public/',
    imgs:'./public/static/imgs/'
}

gulp.task('t-sass', function () {
    return gulp.src(res.css)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest(outpath.css));
});

// for es6 -> es5 || coffe script
gulp.task('t-js', () =>
    gulp.src(res.js)
    .pipe(sourcemaps.init())
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(outpath.js))
);

gulp.task('t-imgs',function(){
    gulp.src(res.imgs)
        .pipe(gulp.dest(outpath.imgs))
});

gulp.task('t-html',function(){
    gulp.src([res.html,res.pages])
        .pipe(gulp.dest(outpath.html))
});

gulp.task('serve', function() {
    //2. serve at custom port
    var server = gls.static('public', 8888);
    server.start();

    // for file change serve reload
    //use gulp.watch to trigger server actions(notify, start or stop)
    gulp.watch([res.js,res.css,res.html], function (file) {
        server.notify.apply(server, [file]);
    });
});

gulp.task('watch',function(){
    watch(res.css,['t-sass']);
    watch(res.js,['t-js']);
    watch([res.html,res.pages],['t-html']);
    watch(res.imgs,['t-imgs']);
});
gulp.task('build',['t-sass','t-js','t-html','t-imgs']);
gulp.task('default',['watch','serve']);
