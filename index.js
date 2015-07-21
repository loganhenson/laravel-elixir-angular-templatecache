var elixir = require('laravel-elixir');
var gulp = require("gulp");
var templateCache = require('gulp-angular-templatecache');
var insert = require('gulp-insert');

elixir.extend("angulartemplatecache", function(module, from, to, wrap) {

    var taskName = "angulartemplatecache from " + from;

    if(wrap){

        gulp.task(taskName, function() {
            gulp.src(from)
                .pipe(templateCache({module: module}))
                .pipe(insert.wrap('(function(angular) {', '})(angular);'))
                .pipe(gulp.dest(to));
        });

    } else{

        gulp.task(taskName, function() {
            gulp.src(from)
                .pipe(templateCache({module: module}))
                .pipe(gulp.dest(to));
        });

    }

    this.registerWatcher(taskName, from);
    return this.queueTask(taskName);

});
