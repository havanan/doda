<?php

namespace App\Http\Middleware;

use App\Providers\RouteServiceProvider;
use Closure;

class Admin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if(auth()->user() && auth()->user()->is_admin == 1){
            return $next($request);
        }

        return redirect(RouteServiceProvider::HOME)->with('error',"Only admin can access!");
    }
}
