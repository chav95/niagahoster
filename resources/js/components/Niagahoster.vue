<template>
  <div class="container h-100">
    <top-nav></top-nav>
    <header-nav></header-nav>
    <php-hosting></php-hosting>
    <paket-hosting></paket-hosting>
    <paket-include></paket-include>
    <laravel-support></laravel-support>
    <modul-lengkap></modul-lengkap>
    <linux-hosting></linux-hosting>
  </div>
</template>

<script>
  import TopNav from './sections/TopNav'
  import HeaderNav from './sections/HeaderNav'
  import PhpHosting from './sections/PhpHosting'
  import PaketHosting from './sections/PaketHosting'
  import PaketInclude from './sections/PaketInclude'
  import LaravelSupport from './sections/LaravelSupport'
  import ModulLengkap from './sections/ModulLengkap'
  import LinuxHosting from './sections/LinuxHosting'

  export default {
    components:{
      TopNav,
      HeaderNav,
      PhpHosting,
      PaketHosting,
      PaketInclude,
      LaravelSupport,
      ModulLengkap,
      LinuxHosting,
    },
    mounted() {
      console.log('Component mounted.')
    },
    data(){
      return{
        
      }
    }
  }
</script>

<style lang="css">
  .footer{
    background-color: #303030;
    color: white;
  }
</style>