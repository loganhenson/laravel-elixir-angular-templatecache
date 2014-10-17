var elixir = require('laravel-elixir');
var gulp = require("gulp");
var templateCache = require('gulp-angular-templatecache');

elixir.extend("angulartemplatecache", function(module, from, to) {

    gulp.task("angulartemplatecache", function() {
        gulp.src(from)
            .pipe(templateCache({module: module}))
            .pipe(gulp.dest(to));
    });

    this.registerWatcher("angulartemplatecache", from);
    return this.queueTask("angulartemplatecache");

});