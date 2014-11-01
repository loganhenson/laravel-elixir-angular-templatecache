var elixir = require('laravel-elixir');
var gulp = require("gulp");
var templateCache = require('gulp-angular-templatecache');
var insert = require('gulp-insert');

elixir.extend("angulartemplatecache", function(module, from, to, wrap) {

    if(wrap){

        gulp.task("angulartemplatecache", function() {
            gulp.src(from)
                .pipe(templateCache({module: module}))
                .pipe(insert.wrap('(function(angular) {', '})(angular);'))
                .pipe(gulp.dest(to));
        });

    } else{

        gulp.task("angulartemplatecache", function() {
            gulp.src(from)
                .pipe(templateCache({module: module}))
                .pipe(gulp.dest(to));
        });

    }

    this.registerWatcher("angulartemplatecache", from);
    return this.queueTask("angulartemplatecache");

});