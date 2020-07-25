<template>
  <div class="container">
    <div class="row h-100 mt-5 justify-content-center align-items-center">
      <div class="col-md-6">
        <div>
          <h2>Linux Hosting yang Stabil dengan Teknologi LVE</h2>
          <h5 class="mt-3"><small>
            SuperMicro <strong>Intel Xeon 24-Cores</strong> server dengan RAM <strong>128 GB</strong> dan teknologi <strong>LVE Cloud Linux</strong> untuk stabilitas server Anda.
            Dilengkapi dengan <strong>SSD</strong> untuk kecepatan <strong>MySQL</strong> dan caching, Apache load balancer berbasis LiteSpeed Technologies, <strong>CageFS</strong> security, <strong>Raid-10</strong> protection dan auto-backup untuk keamanan website PHP Anda.
          </small></h5>
        </div>
        <div class="mt-4">
          <button class="btn pl-4 pr-4 pt-2 pb-2"><h5 class="mb-0"><strong>Pilih Hosting Anda</strong></h5></button>
        </div>
      </div>
      <div class="col-md-6">
        <div>
          <img src="/storage/asset/img/image support.png" alt="">
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