## Laravel 5 PHP Framework with some Dev-Sugar

Basic Laravel 5 with some Dev Sugar:
* [Laravel 5 IDE Helper Generator](https://github.com/barryvdh/laravel-ide-helper)
* [Laravel 5 Generators](https://github.com/laracasts/Laravel-5-Generators-Extended)
* [Laravel 5 Bootforms](https://github.com/adamwathan/bootforms)
* Already configured Laravel Elixier gulpfile, handling Bootstrap 3, JQuery, FontAwesome and your own sass/js files
* Already configured Bower file, handling Bootstrap 3, jQuery and FontAwesome
* Laravel 5 Html and Form Support

## Setup

You need [node.js](https://nodejs.org/), if you have it already go on.

Go into your project root folder and open a terminal, type `npm install`, wait till everything has been installed (needed node.js modules will now be installed).

After that type `bower update`, bower will now update bootstrap, jQuery and so on.

Last but not least give composer a quick update by typing `composer update` into your terminal, if you don't have [Composer](https://getcomposer.org/) installed, install it now, its really helpful.

To complete this setup, type `php artisan ide-helper:generate` this command will build up a helper file for your IDE e.g. phpStorm.

Congratulation, your laravel is fine up and running.

## Hint

Try visiting the other repos for usage instructions e.g. for the nice artisan generators.