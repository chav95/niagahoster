<template>
  <div class="container">
    <div class="row h-100 mt-5 justify-content-center align-items-center">
      <h2>Mendukung Penuh Framework Laravel</h2>
    </div>

    <div class="row h-100 m5-2 justify-content-center align-items-center align-top">
      <div class="col-md-6">
        <h5>
          Tak perlu menggunakan dedicated server ataupun VPS yang mahal.
          Layanan hostingan murah kami mendukung penuh framework favorit Anda.
        </h5>
        <div class="mt-3">
          <h5><small>
            <font-awesome-icon icon="check-circle" class="mr-2 color-green"/>
            Install Laravel <strong>1 klik</strong> dengan Softaculous Installer.
          </small></h5>
          <h5><small>
            <font-awesome-icon icon="check-circle" class="mr-2 color-green"/>
            Mendukung extensi <strong>PHP MCrypt, phar, mbstring, json,</strong> dan <strong>fileinfo.</strong>
          </small></h5>
          <h5><small>
            <font-awesome-icon icon="check-circle" class="mr-2 color-green"/>
            Tersedia <strong>Composer</strong> dan <strong>SSH</strong> untuk menginstall package pilihan Anda.
          </small></h5>
        </div>
        <div class="mt-3">
          <h6><small>Nb. Composer dan SSH hanya tersedia pada paket Personal dan Bisnis</small></h6>
        </div>
        <div class="mt-4">
          <button class="btn pl-4 pr-4 pt-2 pb-2"><h5 class="mb-0"><strong>Pilih Hosting Anda</strong></h5></button>
        </div>
      </div>
      <div class="col-md-5">
        <div>
          <img src="/storage/asset/svg/illustration banner support laravel hosting.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      console.log('Component mounted.')
    }
  }
</script>

<style lang="scss" scoped>
  button{
    color: white;
    border-radius: 50px;
    background-color: #008fee !important;
    border: 2px solid #008fee !important;
  }
</style>