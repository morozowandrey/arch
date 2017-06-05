var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload,

    config = require('../config');


gulp.task('start', [
    'dev',
    'watch'
]);

gulp.task('webserver', function () {
    browserSync(config.serverConfig);
});


gulp.task('watch', function () {
    watch([config.path.watch.html], function (event, cb) {
        gulp.start(['dev:view']);
    });
    watch([config.path.watch.stylus], function (event, cb) {
        gulp.start(['dev:style']);
    });
    watch([config.path.watch.scripts], function (event, cb) {
        gulp.start(['dev:script']);
    });
    watch([config.path.watch.images], function (event, cb) {
        gulp.start(['dev:image']);
    });
    watch([config.path.watch.models], function (event, cb) {
        gulp.start(['dev:models']);
    });
    watch([config.path.watch.fonts], function (event, cb) {
        gulp.start(['dev:font']);
    });
});