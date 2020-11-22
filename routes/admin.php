<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

Route::group([
    'namespace' => 'Auth',
],function(){
    Route::get('login', 'LoginController@showAdminLoginForm');
    Route::post('login', 'LoginController@adminLogin')->name('admin.login');
});

Route::group([
    'namespace' => 'Admin',
],function (){
    Route::group([
        'namesmiddlewarepace' => ['auth:admin'],
    ],function (){
        Route::get('/', 'HomeController@index')->name('admin.home');

        Route::group([
            'prefix' => 'user',
        ],function (){
            Route::get('/',             'UserController@index')->name('admin.user.index');
            Route::get('list',          'UserController@list')->name('admin.user.list');
            Route::get('create',         'UserController@create')->name('admin.user.create');
            Route::get('view/{id}',     'UserController@view')->name('admin.user.view');
            Route::get('update/{id}',   'UserController@update')->name('admin.user.update');
            Route::get('delete/{id}',   'UserController@delete')->name('admin.user.delete');
        });
    
        Route::group([
            'prefix' => 'report',
        ],function (){
            Route::get('/',             'ReportController@index')->name('admin.report.index');
            Route::get('list',          'ReportController@list')->name('admin.report.list');
            Route::get('create',         'ReportController@create')->name('admin.report.create');
            Route::get('view/{id}',     'ReportController@view')->name('admin.report.view');
            Route::get('update/{id}',   'ReportController@update')->name('admin.report.update');
            Route::get('delete/{id}',   'ReportController@delete')->name('admin.report.delete');
        });
    
        Route::group([
            'prefix' => 'bill',
        ],function (){
            Route::get('/',             'BillController@index')->name('admin.bill.index');
            Route::get('list',          'BillController@list')->name('admin.bill.list');
            Route::get('create',         'BillController@create')->name('admin.bill.create');
            Route::get('view/{id}',     'BillController@view')->name('admin.bill.view');
            Route::get('update/{id}',   'BillController@update')->name('admin.bill.update');
            Route::get('delete/{id}',   'BillController@delete')->name('admin.bill.delete');
        });
    });
});
