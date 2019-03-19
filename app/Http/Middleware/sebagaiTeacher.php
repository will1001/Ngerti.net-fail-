<?php

namespace App\Http\Middleware;

use Closure;

class sebagaiTeacher
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
        if (auth()->check() && $request->user()->sebagai == ‘Teacher’)
        {
        return redirect()->guest('home');
        }
        return $next($request);
    }
}
