<template>
  <div class="container">
    <div class="row h-100 mt-5 justify-content-center align-items-center">
      <h2>Modul Lengkap untuk Menjalankan Aplikasi Anda.</h2>
    </div>

    <div class="row h-100 mt-4 justify-content-center align-items-center align-top">
      <div class="col-md-2 m-0">
        <table class="table table-borderless">
          <tr><td>IcePHP</td></tr>
          <tr><td>apc</td></tr>
          <tr><td>apcu</td></tr>
          <tr><td>apm</td></tr>
          <tr><td>ares</td></tr>
          <tr><td>bcmath</td></tr>
          <tr><td>bcompiler</td></tr>
          <tr><td>big_int</td></tr>
          <tr><td>bigset</td></tr>
          <tr><td>bloomy</td></tr>
          <tr><td>bz2_filter</td></tr>
          <tr><td>clamav</td></tr>
          <tr><td>coin_acceptor</td></tr>
          <tr><td>crack</td></tr>
          <tr><td>dba</td></tr>
        </table>
      </div>
      <div class="col-md-2 m-0">
        <table class="table table-borderless">
          <tr><td>http</td></tr>
          <tr><td>huffman</td></tr>
          <tr><td>idn</td></tr>
          <tr><td>igbinary</td></tr>
          <tr><td>imagick</td></tr>
          <tr><td>imap</td></tr>
          <tr><td>inclued</td></tr>
          <tr><td>inotify</td></tr>
          <tr><td>interbase</td></tr>
          <tr><td>intl</td></tr>
          <tr><td>ioncube_loader</td></tr>
          <tr><td>ioncube_loader_4</td></tr>
          <tr><td>jsmin</td></tr>
          <tr><td>json</td></tr>
          <tr><td>ldap</td></tr>
        </table>
      </div>
      <div class="col-md-2 m-0">
        <table class="table table-borderless">
          <tr><td>nd_pdo_mysql</td></tr>
          <tr><td>oauth</td></tr>
          <tr><td>oci8</td></tr>
          <tr><td>odbc</td></tr>
          <tr><td>opcache</td></tr>
          <tr><td>pdf</td></tr>
          <tr><td>pdo</td></tr>
          <tr><td>pdo_dblib</td></tr>
          <tr><td>pdo_firebase</td></tr>
          <tr><td>pdo_mysql</td></tr>
          <tr><td>pdo_odbc</td></tr>
          <tr><td>pdo_pgsql</td></tr>
          <tr><td>pdo_sqlite</td></tr>
          <tr><td>pgsql</td></tr>
          <tr><td>phalcon</td></tr>
        </table>
      </div>
      <div class="col-md-2 m-0">
        <table class="table table-borderless">
          <tr><td>stats</td></tr>
          <tr><td>stem</td></tr>
          <tr><td>stomp</td></tr>
          <tr><td>suhosin</td></tr>
          <tr><td>sybase_ct</td></tr>
          <tr><td>sysvmsg</td></tr>
          <tr><td>sysvsem</td></tr>
          <tr><td>sysvshm</td></tr>
          <tr><td>tidy</td></tr>
          <tr><td>timezonedb</td></tr>
          <tr><td>trader</td></tr>
          <tr><td>translit</td></tr>
          <tr><td>uploadprogress</td></tr>
          <tr><td>uri_template</td></tr>
          <tr><td>uuid</td></tr>
        </table>
      </div>
    </div>

    <div class="row h-100 mt-4 justify-content-center align-items-center align-top">
      <button class="btn mt-3 pl-5 pr-5 pt-3 pb-3"><h5 class="mb-0"><strong>Selengkapnya</strong></h5></button>
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
    border-radius: 50px;
    border: 2px solid black !important;
  }

  table > tr{
    margin: 0
  }
  table > tr > td{
    padding: 0
  }
</style>