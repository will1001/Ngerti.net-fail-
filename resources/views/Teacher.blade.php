@extends('layouts.app2')

@section('content')
<div class="container">

    <div class="row">
        <div class="col-md-12">
           <h3>Kelola Akun</h3>
           <span><button type="submit" class="btn btn-primary"> Aktifkan </button></span>
           <span><button type="submit" class="btn btn-primary"> Non Aktifkan </button></span>
        </div>
    </div>


     <div class="row">
        <div class="col-md-12">
           <h3>Saldo & Poin</h3>
           <span>Saldo Saat ini : 999999999</span> <button type="submit" class="btn btn-primary"> Tambah Saldo </button>
           <p>Poin Saat ini : 999999999</p>
        </div>
    </div>

    <div class="row">
        <div class="col-md-12">
           <h3>Riwayat Pengguna</h3>
        </div>
    </div>

    <div class="row">

        <div class="col-md-3">
            <h5>Penambahan Saldo :</h5> 
        </div>

        <div class="col-md-9">
           <table>
               <thead>
                   <tr>
                    <th>Tanggal</th>
                    <th>Waktu</th>
                   </tr>
               </thead>
               <tbody>
                   <tr>
                       <td>DD/MM/YY</td>
                       <td>time</td>
                   </tr>
                   <tr>
                       <td>DD/MM/YY</td>
                       <td>time</td>
                   </tr>
                   <tr>
                       <td>DD/MM/YY</td>
                       <td>time</td>
                   </tr>
                   <tr>
                       <td>DD/MM/YY</td>
                       <td>time</td>
                   </tr>
                   <tr>
                       <td>DD/MM/YY</td>
                       <td>time</td>
                   </tr>
                   <tr>
                       <td>DD/MM/YY</td>
                       <td>time</td>
                   </tr>
           </table>
        </div>
    </div>

    <div class="row">
        <div class="col-md-3">
           <h5>Pencairan Saldo :</h5>
        </div>

        <div class="col-md-9">
            <table>
               <thead>
                   <tr>
                    <th>Tanggal</th>
                    <th>Waktu</th>
                   </tr>
               </thead>
               <tbody>
                   <tr>
                       <td>DD/MM/YY</td>
                       <td>time</td>
                   </tr>
                   <tr>
                       <td>DD/MM/YY</td>
                       <td>time</td>
                   </tr>
                   <tr>
                       <td>DD/MM/YY</td>
                       <td>time</td>
                   </tr>
                   <tr>
                       <td>DD/MM/YY</td>
                       <td>time</td>
                   </tr>
                   <tr>
                       <td>DD/MM/YY</td>
                       <td>time</td>
                   </tr>
                   <tr>
                       <td>DD/MM/YY</td>
                       <td>time</td>
                   </tr>
           </table>
        </div>
    </div>
            
    <div class="row">
        <div class="col-md-2">
           <a href="/" class="btn btn-primary">Edit Profil</a>
           <br>
           <br>
           <br>
           <a href="/" class="btn btn-primary">Materi Pelajaran</a>
           <br>
           <br>
           <br>
        </div>
    </div>           
</div>
@endsection
