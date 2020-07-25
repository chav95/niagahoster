<template>
  <div class="container">
    <div class="row h-100 mt-5 justify-content-center align-items-center">
      <h1><strong>Paket Hosting Singapura Yang Tepat</strong></h1>
      <h2>Diskon 40% + Domain dan SSL Gratis untuk Anda</h2>
    </div>
    
    <div class="row h-100 mt-5 justify-content-center">
      <div :class="`col-md-3 p-0 text-center align-top ${index == best_seller ? 'best-seller' : ''}`" v-for="(item, index) in hosting_package" :key="index">
        <div class="pricing p-1 mb-0">
          <h2><strong>{{item.name}}</strong></h2>
          <h6><del>Rp {{formatThousand(item.price)}}</del></h6>
          <h5 class="mb-0">Rp <strong><span class="oversized align-top">{{getThousand(item.disc_price)}}</span>.{{getLastDigit(item.disc_price)}}</strong>/ bln</h5>
        </div>
        <div class="pengguna p-2">
          <h6 class="pengguna m-1"><strong>{{formatThousand(item.users)}}</strong> Pengguna Terdaftar</h6>
        </div>
        <div class="include p-2">
          <div :class="perk === null ? 'd-none' : 'd-block m-1'" v-for="(perk, key, perk_idx) in item.perks" :key="perk_idx">
            <span :class="perk_idx == 0 ? 'font-weight-bold' : ''"><strong>{{perk}}</strong> {{key.replace('_', ' ')}}</span>
            <div v-if="key == 'Layanan_Support' && perk == 'Prioritas'" class="m-0">
              <font-awesome-icon icon="star" class="star"/>
              <font-awesome-icon icon="star" class="star"/>
              <font-awesome-icon icon="star" class="star"/>
              <font-awesome-icon icon="star" class="star"/>
              <font-awesome-icon icon="star" class="star"/>
            </div>
          </div>
        </div>
        <button class="btn pl-3 pr-3 mt-3"><strong>Pilih Sekarang</strong></button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      console.log('Component mounted.')
    },
    data(){
      return{
        hosting_package: [
          {
            name: 'Bayi',
            price: 19900,
            disc_price: 14900,
            users: 938,
            perks: {
              RESOURCE_POWER: '0.5X',
              Disk_Space: '500 MB',
              Bandwidth: 'Unlimited',
              POP3_Email: null,
              Database: 'Unlimited',
              Domain: '1',
              Backup: 'Instant',
              Selamanya: null,
              Gratis_Selamanya: 'Unlimited SSL',
              Name_Server: null,
              Layanan_Support: null,
              Mail_Protection: null,
            }
          },
          {
            name: 'Pelajar',
            price: 46900,
            disc_price: 23450,
            users: 4168,
            perks: {
              RESOURCE_POWER: '1X',
              Disk_Space: 'Unlimited',
              Bandwidth: 'Unlimited',
              POP3_Email: 'Unlimited',
              Database: 'Unlimited',
              Domain: '10',
              Backup: 'Instant',
              Selamanya: 'Domain Gratis',
              Gratis_Selamanya: 'Unlimited SSL',
              Name_Server: null,
              Layanan_Support: null,
              Mail_Protection: null,
            }
          },
          {
            name: 'Personal',
            price: 58900,
            disc_price: 38900,
            users: 10017,
            perks: {
              RESOURCE_POWER: '2X',
              Disk_Space: 'Unlimited',
              Bandwidth: 'Unlimited',
              POP3_Email: 'Unlimited',
              Database: 'Unlimited',
              Domain: 'Unlimited',
              Backup: 'Instant',
              Selamanya: 'Domain Gratis',
              Gratis_Selamanya: 'Unlimited SSL',
              Name_Server: 'Private',
              Layanan_Support: 'SpamAssassin',
              Mail_Protection: null,
            }
          },
          {
            name: 'Bisnis',
            price: 109900,
            disc_price: 65900,
            users: 3552,
            perks: {
              RESOURCE_POWER: '3X',
              Disk_Space: 'Unlimited',
              Bandwidth: 'Unlimited',
              POP3_Email: 'Unlimited',
              Database: 'Unlimited',
              Domain: 'Unlimited',
              Backup: 'Magic Auto',
              Selamanya: 'Domain Gratis',
              Gratis_Selamanya: 'Unlimited SSL',
              Name_Server: 'Private',
              Layanan_Support: 'Prioritas',
              Mail_Protection: 'Spam Expert Pro',
            }
          },
        ],
      }
    },
    computed: {
      best_seller(){
        let best_seller_idx = 0
        this.hosting_package.forEach((item, idx) => {
          best_seller_idx = item.users > this.hosting_package[best_seller_idx].users
            ? idx
            : best_seller_idx
        });

        return best_seller_idx
      }
    },
    methods: {
      formatThousand(num){
        return num.toLocaleString().replace(',', '.')
      },
      getThousand(num){
        return num.toLocaleString().split(',')[0]
      },
      getLastDigit(num){
        return num.toLocaleString().split(',')[1]
      },
    },
  }
</script>

<style lang="scss" scoped>
  .oversized{
    font-size: 2.1em;
  }

  .best-seller{
    border: 1px solid #008fee !important;
    border-radius: 5px;

    & > .pricing{
      color: white !important;
      background-color: #008fee !important;
    }

    & > .pengguna{
      color: white !important;
      background-color: #007fde !important;
    }

    & > button{
      color: white;
      background-color: #008fee !important;
      border: 2px solid #008fee !important;
    }
  }

  button{
    border: 2px solid black;
    border-radius: 30px;
  }

  .star{
    color: #007fde !important;
  }
</style>