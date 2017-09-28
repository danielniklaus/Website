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

Route::get('/', 'HomeController@index');
Route::get('/galery','HomeController@galery');
Route::get('/profil','HomeController@profil');
Route::get('/pemasangan','HomeController@pemasangan');
Route::get('/material','HomeController@material');
Route::get('/harga','HomeController@harga');
Route::resource('admin/','ProfilPerusahaan\\ProfilController');
Route::resource('admin/atap', 'Atap\\AtapController');
Route::resource('admin/canal', 'Canal\\CanalController');
Route::resource('admin/harga', 'Harga\\HargaController');
Route::resource('admin/posts', 'Profil\\PostsController');
Route::resource('admin/profil', 'ProfilPerusahaan\\ProfilController');
Route::resource('admin/pesan', 'Pesan\\PesanController');
Route::get('admin/pesan/{},Pesan\\PesanController@pesan');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


