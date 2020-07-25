<template>
  <div class="footer-container">
    <div class="container">
      <div class="row h-100 mt-4 align-top">
        <div class="col-md-3 m-0">
          <h6 class="title mb-4"><strong>HUBUNGI KAMI</strong></h6>
          <a href="#"><h6 class="footer-link">0274-5305505</h6></a>
          <a href="#"><h6 class="footer-link">Senin - Minggu</h6></a>
          <a href="#"><h6 class="footer-link">24 Jam Nonstop</h6></a>

          <a href="#"><h6 class="footer-link mt-4">Jl. Selokan Mataram Monjali</h6></a>
          <a href="#"><h6 class="footer-link">Karangjati MT I/304</h6></a>
          <a href="#"><h6 class="footer-link">Sinduadi, Mlati, Sleman</h6></a>
          <a href="#"><h6 class="footer-link">Yogyakarta 55284</h6></a>
        </div>
        
        <div class="col-md-3 m-0">
          <h6 class="title mb-4"><strong>LAYANAN</strong></h6>
          <a href="#"><h6 class="footer-link">Domain</h6></a>
          <a href="#"><h6 class="footer-link">Shared Hosting</h6></a>
          <a href="#"><h6 class="footer-link">Cloud VPS Hosting</h6></a>
          <a href="#"><h6 class="footer-link">Managed VPS Hosting</h6></a>
          <a href="#"><h6 class="footer-link">Web Builder</h6></a>
          <a href="#"><h6 class="footer-link">Keamanan SSL / HTTPS</h6></a>
          <a href="#"><h6 class="footer-link">Jasa Pembuatan Website</h6></a>
          <a href="#"><h6 class="footer-link">Program Afiliasi</h6></a>
        </div>
        
        <div class="col-md-3 m-0">
          <h6 class="title mb-4"><strong>SERVICE HOSTING</strong></h6>
          <a href="#"><h6 class="footer-link">Hosting Muran</h6></a>
          <a href="#"><h6 class="footer-link">Hosting Indonesia</h6></a>
          <a href="#"><h6 class="footer-link">Hosting Singapura SG</h6></a>
          <a href="#"><h6 class="footer-link">Hosting PHP</h6></a>
          <a href="#"><h6 class="footer-link">Hosting Wordpress</h6></a>
          <a href="#"><h6 class="footer-link">Hosting Laravel</h6></a>
        </div>
        
        <div class="col-md-3 m-0">
          <h6 class="title mb-4"><strong>TUTORIAL</strong></h6>
          <a href="#"><h6 class="footer-link">Knowledgebase</h6></a>
          <a href="#"><h6 class="footer-link">Blog</h6></a>
          <a href="#"><h6 class="footer-link">Cara Pembayaran</h6></a>
        </div>
      </div>

      <div class="row h-100 mt-4 align-top">
        <div class="col-md-3 m-0">
          <h6 class="title mb-4"><strong>TENTANG KAMI</strong></h6>
          <a href="#"><h6 class="footer-link">Tim Niagahoster</h6></a>
          <a href="#"><h6 class="footer-link">Karir</h6></a>
          <a href="#"><h6 class="footer-link">Events</h6></a>
          <a href="#"><h6 class="footer-link">Penawaran & Promo Spesial</h6></a>
          <a href="#"><h6 class="footer-link">Kentak Kami</h6></a>
        </div>
        
        <div class="col-md-3 m-0">
          <h6 class="title mb-4"><strong>KENAPA PILIH NIAGAHOSTER</strong></h6>
          <a href="#"><h6 class="footer-link">Support Terbaik</h6></a>
          <a href="#"><h6 class="footer-link">Garansi Harga Termurah</h6></a>
          <a href="#"><h6 class="footer-link">Domain Gratis Selamanya</h6></a>
          <a href="#"><h6 class="footer-link">Datacenter Hosting Terbaik</h6></a>
          <a href="#"><h6 class="footer-link">Review Pelanggan</h6></a>
        </div>
        
        <div class="col-md-3 m-0">
          <h6 class="title mb-4"><strong>NEWSLETTER</strong></h6>

        </div>
        
        <div class="col-md-3 m-0 justify-content-center align-items-center d-flex">
          <a href="#" class="btn m-2">
            <h4 class="m-1 mt-2 mb-2"><font-awesome-icon :icon="['fab', 'facebook-f']" class="sosmed"/></h4>
          </a>
          <a href="#" class="btn m-2">
            <h4 class="m-1 mt-2 mb-2"><font-awesome-icon :icon="['fab', 'twitter']" class="sosmed"/></h4>
          </a>
          <a href="#" class="btn m-2">
            <h4 class="m-1 mt-2 mb-2"><font-awesome-icon :icon="['fab', 'google-plus-g']" class="sosmed"/></h4>
          </a>
        </div>
      </div>
      
      <div class="row h-100 mt-4 align-top">
        <div class="col-md-3 m-0">
          <h6 class="title mb-4"><strong>PEMBAYARAN</strong></h6>

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
  .footer-container{
    width: 100%;
    margin: auto;
    background-color: #303030;
    color: white;
  }

  .title{
    color: darkgrey;
  }
  .footer-link{
    color: floralwhite;
  }

  .sosmed{
    color: darkgrey;
    width: 35px;
    height: 35px;
  }

  .btn{
    border: 3px solid darkgrey;
    border-radius: 50px;
  }
</style>