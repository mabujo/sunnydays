var gulp        = require('gulp');
var browserSync = require('browser-sync');
var php         = require('gulp-connect-php');
var sass        = require('gulp-sass');
var autoPrefix  = require('gulp-autoprefixer');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var uglifycss   = require('gulp-uglifycss');
var imagemin    = require('gulp-imagemin');
var reload      = browserSync.reload;

// copy fonts
gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/font'))
})
// compile css
gulp.task('sass', function() {
    return gulp.src([
        "node_modules/bootstrap/dist/css/bootstrap.css",
        "node_modules/fullpage.js/dist/jquery.fullpage.css",
        "node_modules/weathericons/css/weather-icons.css",
        "app/scss/base.scss"
        ])
        .pipe(sass())
        .pipe(autoPrefix({browsers: ['last 2 versions', '> 2%', 'ie 8', 'Firefox ESR']}))
        .pipe(concat('styles.css'))
        .pipe(uglifycss())
        .pipe(gulp.dest("dist/css/"))
});
// compile js
gulp.task('js', function() {
    return gulp.src([
        "node_modules/jquery/dist/jquery.js",
        "node_modules/bootstrap/dist/js/bootstrap.js",
        "node_modules/fullpage.js/dist/jquery.fullpage.js",
        "lib/BootstrapFormHelpers/js/lang/en_US/bootstrap-formhelpers-countries.en_US.js",
        "lib/BootstrapFormHelpers/js/bootstrap-formhelpers-countries.js",
        "node_modules/chart.js/dist/Chart.js",
        "app/js/*.js"
        ])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest("dist/js/"))
});
// min images
gulp.task('img', () =>
    gulp.src('app/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
);
// php browsersync proxy
gulp.task('php', function() {
    php.server({ base: './', port: 8010, keepalive: true});
});
gulp.task('browser-sync',['php'], function() {
    browserSync({
        proxy: '127.0.0.1:8010',
        port: 8080,
        open: true,
        notify: false
    });
});
// watch tasks
gulp.task('default', ['sass', 'js', 'img', 'browser-sync'], function () {
    gulp.watch("app/img/*", ['img', reload]);
    gulp.watch("app/scss/*.scss", ['sass', reload]);
    gulp.watch("app/js/*.js", ['js', reload]);
    gulp.watch(['./**/*.php'], [reload]);
});
