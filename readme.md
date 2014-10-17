## Usage

This is a simple wrapper around Laravel Elixir. Add it to your Elixir-enhanced Gulpfile, like so:

```
var elixir = require('laravel-elixir');

require('laravel-elixir-angular-templatecache');

elixir(function(mix) {
   mix.angulartemplatecache('app', 'resources/assets/js/*/**.html', 'public');
});
```

This will scan your `resources/assets/js` directory for all .html files, and put a file named `templates.js` in the public directory

Make sure you include this file after your angular module in instantiated, as it creates a run block.

If you'd like to output to a different directory than `public/`..

```
mix.angulartemplatecache('app', 'resources/assets/js/*/**.html', "public/foo/bar/");
```