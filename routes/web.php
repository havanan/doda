<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;


Route::get('/', 'HomeController@index')->name('home');

Auth::routes();

//User Route
Route::group([
    'namespace' => 'Frontend',
    'middleware' => 'auth:web'
],function (){
    Route::get('profile', 'HomeController@profile')->name('profile');
});
Route::group(['prefix' => 'laravel-filemanager'], function () {
    \UniSharp\LaravelFilemanager\Lfm::routes();
});
//Admin Route
Route::group([
    'prefix' => 'adm'
],function() {
    Route::group([
        'namespace' => 'Auth',
    ],function (){
        Route::get('login',  'AdminLoginController@showLoginForm')->name('admin.login');
        Route::post('login', 'AdminLoginController@login')->name('admin.login.submit');

        Route::post('out','AdminLoginController@logout')->name('admin.logout')->middleware('auth:admin');
    });


    Route::group([
        'namespace' => 'Admin',
        'middleware' => 'auth:admin'
    ],function (){

        Route::get('/', 'HomeController@index')->name('admin.index');

        Route::group([
            'prefix' => 'user',
        ],function (){
            Route::get('/',             'UserController@index')->name('admin.user.index');
            Route::get('list',          'UserController@getList')->name('admin.user.list');
            Route::get('create',         'UserController@create')->name('admin.user.create');
            Route::get('view/{id}',     'UserController@view')->name('admin.user.view');
            Route::get('edit/{id}',     'UserController@edit')->name('admin.user.edit');
            Route::post('delete',       'UserController@delete')->name('admin.user.delete');
            Route::post('save',         'UserController@save')->name('admin.user.save');
            Route::post('update/{id}',   'UserController@update')->name('admin.user.update');


        });

        Route::group([
            'prefix' => 'staff',
        ],function (){
            Route::get('/',             'AdminController@index')->name('admin.staff.index');
            Route::get('list',          'AdminController@getList')->name('admin.staff.list');
            Route::get('create',        'AdminController@create')->name('admin.staff.create');
            Route::get('view/{id}',     'AdminController@view')->name('admin.staff.view');
            Route::get('update/{id}',   'AdminController@update')->name('admin.staff.update');
            Route::get('edit/{id}',     'AdminController@edit')->name('admin.staff.edit');
            Route::post('delete',       'AdminController@delete')->name('admin.staff.delete');
            Route::post('save',         'AdminController@save')->name('admin.staff.save');
            Route::post('update/{id}',  'AdminController@update')->name('admin.staff.update');
        });
        Route::group([
            'prefix' => 'role',
        ],function (){
            Route::get('/',             'RoleController@index')->name('admin.role.index');
            Route::get('list',          'RoleController@getList')->name('admin.role.list');
            Route::get('create',        'RoleController@create')->name('admin.role.create');
            Route::get('view/{id}',     'RoleController@view')->name('admin.role.view');
            Route::get('update/{id}',   'RoleController@update')->name('admin.role.update');
            Route::get('edit/{id}',     'RoleController@edit')->name('admin.role.edit');
            Route::post('delete',       'RoleController@delete')->name('admin.role.delete');
            Route::post('save',         'RoleController@save')->name('admin.role.save');
            Route::post('update/{id}',  'RoleController@update')->name('admin.role.update');
        });
        Route::group([
            'prefix' => 'report',
        ],function (){
            Route::get('/',             'ReportController@index')->name('admin.report.index');
            Route::get('list',          'ReportController@getList')->name('admin.report.list');
            Route::get('create',         'ReportController@create')->name('admin.report.create');
            Route::get('view/{id}',     'ReportController@view')->name('admin.report.view');
            Route::get('update/{id}',   'ReportController@update')->name('admin.report.update');
            Route::get('delete/{id}',   'ReportController@delete')->name('admin.report.delete');
        });

        Route::group([
            'prefix' => 'bill',
        ],function (){
            Route::get('/',             'BillController@index')->name('admin.bill.index');
            Route::get('list',          'BillController@getList')->name('admin.bill.list');
            Route::get('create',        'BillController@create')->name('admin.bill.create');
            Route::get('view/{id}',     'BillController@view')->name('admin.bill.view');
            Route::get('update/{id}',   'BillController@update')->name('admin.bill.update');
            Route::get('delete/{id}',   'BillController@delete')->name('admin.bill.delete');

            Route::group([
                'prefix' => 'status',
            ],function (){
                Route::get('/',             'BillStatusController@index')->name('admin.bill.status.index');
                Route::get('list',          'BillStatusController@getList')->name('admin.bill.status.list');
                Route::get('create',        'BillStatusController@create')->name('admin.bill.status.create');
                Route::get('view/{id}',     'BillStatusController@view')->name('admin.bill.status.view');
                Route::get('update/{id}',   'BillStatusController@update')->name('admin.bill.status.update');
                Route::get('delete/{id}',   'BillStatusController@delete')->name('admin.bill.status.delete');
            });
        });

        Route::group([
            'prefix' => 'brand',
        ],function (){
            Route::get('/',             'BrandController@index')->name('admin.brand.index');
            Route::get('list',          'BrandController@getList')->name('admin.brand.list');
            Route::get('create',        'BrandController@create')->name('admin.brand.create');
            Route::get('view/{id}',     'BrandController@view')->name('admin.brand.view');
            Route::get('edit/{id}',     'BrandController@edit')->name('admin.brand.edit');
            Route::post('update/{id}',  'BrandController@update')->name('admin.brand.update');
            Route::post('delete',       'BrandController@delete')->name('admin.brand.delete');
            Route::post('save',         'BrandController@save')->name('admin.brand.save');

        });

        Route::group([
            'prefix' => 'product',
        ],function (){
            Route::get('/',             'ProductController@index')->name('admin.product.index');
            Route::get('list',          'ProductController@getList')->name('admin.product.list');
            Route::get('create',        'ProductController@create')->name('admin.product.create');
            Route::get('view/{id}',     'ProductController@view')->name('admin.product.view');
            Route::get('update/{id}',   'ProductController@update')->name('admin.product.update');
            Route::get('edit/{id}',     'ProductController@edit')->name('admin.product.edit');
            Route::post('delete',       'ProductController@delete')->name('admin.product.delete');
            Route::post('save',         'ProductController@save')->name('admin.product.save');
            Route::post('update/{id}',  'ProductController@update')->name('admin.product.update');
            Route::group([
                'prefix' => 'category',
            ],function (){
                Route::get('/',             'ProductCatController@index')->name('admin.product.cat.index');
                Route::get('list',          'ProductCatController@getList')->name('admin.product.cat.list');
                Route::get('create',        'ProductCatController@create')->name('admin.product.cat.create');
                Route::get('view/{id}',     'ProductCatController@view')->name('admin.product.cat.view');
                Route::get('update/{id}',   'ProductCatController@update')->name('admin.product.cat.update');
                Route::get('edit/{id}',     'ProductCatController@edit')->name('admin.product.cat.edit');
                Route::post('delete',       'ProductCatController@delete')->name('admin.product.cat.delete');
                Route::post('save',         'ProductCatController@save')->name('admin.product.cat.save');
                Route::post('update/{id}',  'ProductCatController@update')->name('admin.product.cat.update');
            });

            Route::group([
                'prefix' => 'size',
            ],function (){
                Route::get('/',             'ProductSizeController@index')->name('admin.product.size.index');
                Route::get('list',          'ProductSizeController@getList')->name('admin.product.size.list');
                Route::get('create',        'ProductSizeController@create')->name('admin.product.size.create');
                Route::get('view/{id}',     'ProductSizeController@view')->name('admin.product.size.view');
                Route::get('update/{id}',   'ProductSizeController@update')->name('admin.product.size.update');
                Route::get('edit/{id}',     'ProductSizeController@edit')->name('admin.product.size.edit');
                Route::post('delete',       'ProductSizeController@delete')->name('admin.product.size.delete');
                Route::post('save',         'ProductSizeController@save')->name('admin.product.size.save');
                Route::post('update/{id}',  'ProductSizeController@update')->name('admin.product.size.update');
            });

            Route::group([
                'prefix' => 'color',
            ],function (){
                Route::get('/',             'ProductColorController@index')->name('admin.product.color.index');
                Route::get('list',          'ProductColorController@getList')->name('admin.product.color.list');
                Route::get('create',        'ProductColorController@create')->name('admin.product.color.create');
                Route::get('view/{id}',     'ProductColorController@view')->name('admin.product.color.view');
                Route::get('update/{id}',   'ProductColorController@update')->name('admin.product.color.update');
                Route::get('edit/{id}',     'ProductColorController@edit')->name('admin.product.color.edit');
                Route::post('delete',       'ProductColorController@delete')->name('admin.product.color.delete');
                Route::post('save',         'ProductColorController@save')->name('admin.product.color.save');
                Route::post('update/{id}',  'ProductColorController@update')->name('admin.product.color.update');
            });
            Route::group([
                'prefix' => 'media',
            ],function (){
                Route::get('/',             'ProductMediaController@index')->name('admin.media.index');
                Route::get('list',          'ProductMediaController@getList')->name('admin.media.list');
                Route::get('create',        'ProductMediaController@create')->name('admin.media.create');
                Route::get('view/{id}',     'ProductMediaController@view')->name('admin.media.view');
                Route::get('update/{id}',   'ProductMediaController@update')->name('admin.media.update');
                Route::get('edit/{id}',     'ProductMediaController@edit')->name('admin.media.edit');
                Route::post('delete',       'ProductMediaController@delete')->name('admin.media.delete');
                Route::post('save',         'ProductMediaController@save')->name('admin.media.save');
                Route::post('update/{id}',  'ProductMediaController@update')->name('admin.media.update');
            });
        });
    });
});
