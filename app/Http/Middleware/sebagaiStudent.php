<?php

namespace App\Http\Middleware;

use Closure;

class sebagaiStudent
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
        if (auth()->check() && $request->user()->sebagai == ‘Student’)
        {
        return redirect()->guest('home2');
        }
        return $next($request);
    }
}
