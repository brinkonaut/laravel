var elixir = require('laravel-elixir');

var bower_path = "./vendor/bower_components";
var paths = {
    'jquery'     : bower_path + "/jquery/dist",
    'bootstrap'  : bower_path + "/bootstrap-sass-official/assets",
    'fontawesome': bower_path + "/fontawesome"
};

elixir(function (mix) {
    /**
     * build css.
     */
    mix.sass("app.scss", "public/css", {
        includePaths: [
            paths.bootstrap + '/stylesheets',
            paths.fontawesome + '/scss'
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
        paths.bootstrap + '/javascripts/bootstrap.min.js'
    ], 'public/js/dependencies.js', '.');

    /**
     * copy fonts to new location.
     */
    mix.copy(paths.fontawesome + '/fonts', 'public/fonts');
});