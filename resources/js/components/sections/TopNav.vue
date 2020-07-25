<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light d-block border-bottom">
    <a class="navbar-brand" href="#"><h6><small>Gratis Ebook 9 Cara Cerdas Menggunakan Domain</small></h6></a>
    <div class="float-right mr-3">
      <font-awesome-icon icon="user-circle" class="mr-1"/>
      <strong class="navbar-text">Member Area</strong>
    </div>
    <div class="float-right mr-3">
      <font-awesome-icon icon="comment-alt" class="mr-1"/>
      <strong class="navbar-text">Live Chat</strong>
    </div>
    <div class="float-right mr-3">
      <font-awesome-icon icon="phone-alt" class="mr-1"/>
      <strong class="navbar-text">0272-5305505</strong>
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