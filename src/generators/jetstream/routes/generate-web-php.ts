// ./src/generators/jetstream/routes/generate-web-php.ts

import projectFileDoesExist from '../../../helpers/project-file-does-exist.js'
import scrapeRoutesWebPhp from '../../../scrapers/scrape-routes-web-php.js'

const defaultCode = `<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/vueventus', function () {
        return Inertia::render('VueVentus');
    })->name('vueventus');

});
`

const matcher = "    })->name('dashboard');"

const newChunk = `${matcher}

    Route::get('/vueventus', function () {
        return Inertia::render('VueVentus');
    })->name('vueventus');`

export default function (): string {

    if ( projectFileDoesExist('/routes/web.php') ) {

        let data = scrapeRoutesWebPhp()

        let modifiedData = String(data).replace( matcher, newChunk )

        return modifiedData

    } else {

        return defaultCode

    }

}
