var elixir = require('laravel-elixir');

var bower_path = "./vendor/bower_components";
var paths = {
    'jquery'     : bower_path + "/jquery/dist",
    'bootstrap'  : bower_path + "/bootstrap-sass-official/assets/stylesheets",
    'normalize'  : bower_path + "/normalize.css",
    'fontawesome': bower_path + "/fontawesome/scss",
    'bourbon': bower_path + "/bourbon/app/assets/stylesheets",
    'neat': bower_path + "/neat/app/assets/stylesheets",
    'bitters': bower_path + "/bitters/app/assets/stylesheets"
};

elixir(function (mix) {
    /**
     * build css.
     */
    mix.rubySass("app.scss", "public/css", {
        loadPath: [
            paths.bootstrap,
            paths.bourbon,
            paths.neat,
            paths.fontawesome,
            paths.normalize,
            paths.bitters
        ],
        precision:8
    }).version("public/css/app.css");

    /**
     * build app js.
     */
    mix.scripts("app.js", "public/js/app.js");

    /**
     * build dependent js.
     */
    mix.scripts([
        paths.jquery + '/jquery.min.js',
        //paths.bootstrap + '/javascripts/bootstrap.min.js'
    ], 'public/js/dependencies.js', '.');

    /**
     * copy fonts to new location.
     */
    mix.copy(paths.fontawesome + '/fonts', 'public/fonts');
});