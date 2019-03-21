<?php

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

// Route::get('/', function () {
//     return view('index');
// });


Route::get('/paket', function () {
    return view('paket/paket');
});

//API route
// Route::resource('datamapel','mapelAPI');

Auth::routes(['verify' => true]);

Route::get('/member', 'HomeController@index')->name('member')->middleware('verified');

Route::view('/{path?}', 'App');




