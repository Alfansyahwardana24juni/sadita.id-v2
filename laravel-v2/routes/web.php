<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/produk', function () {
    return view('pages.home');
});

Route::get('/kategori/{slug}', function ($slug) {
    return view('pages.home');
});

Route::get('/artikel', function () {
    return view('pages.home');
});

Route::get('/tentang', function () {
    return view('pages.home');
});

// Toko routes
Route::prefix('toko')->group(function () {
    Route::get('/', function () {
        return view('toko.home');
    })->name('toko.home');

    Route::get('/katalog', [ProductController::class, 'index'])->name('toko.katalog');

    Route::get('/kategori/{slug}', [ProductController::class, 'category'])->name('toko.kategori');

    Route::get('/produk/{slug}', [ProductController::class, 'show'])->name('toko.produk.show');

    Route::get('/keranjang', function () {
        return view('toko.keranjang');
    })->name('toko.keranjang');
});
