<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
    <a class="navbar-brand w-75" href="#">
      <img class="" src="/storage/asset/img/logo.png" alt="">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Hosting</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Domain</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Server</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Website</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Afiliasi</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Promo</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pembayaran</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Website</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Review</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Kontak</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Blog</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    mounted() {
      console.log('Component mounted.')
    }
  }
</script>

<style lang="scss" scoped>
  nav{
    padding: 0;  
  }

  .nav-link{
    font-weight: bold;
  }
</style>