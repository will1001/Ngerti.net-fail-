@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Verifikasi alamat email') }}</div>

                <div class="card-body">
                    @if (session('resent'))
                        <div class="alert alert-success" role="alert">
                            {{ __('email verifikasi telah di kirim ulang,mohon cek kembali email anda.') }}
                        </div>
                    @endif

                    {{ __('Terima kasih telah mendaftar di ngerti.net , sebelum login mohon cek email verifikasi yang kami kirim ke alamat email anda.') }}
                    {{ __('Jika tidak menerima email verifikasi') }}, <a href="{{ route('verification.resend') }}">{{ __('klik disini untuk mengirim ulang email verifiaksi') }}</a>.
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
