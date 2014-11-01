## Usage

```
var elixir = require('laravel-elixir');

require('laravel-elixir-angular-templatecache');

elixir(function(mix) {
   mix.angulartemplatecache('app', 'resources/assets/js/**/*.html', 'public');
});
```

To wrap in a IFFY with angular injected, pass true as the 4th argument.