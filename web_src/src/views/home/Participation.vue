<template>
  <div class="immeta-participation" id="participation">
    <h2 class="immeta-title-bar">{{ $t('participation.tit') }}</h2>
    <div class="wrap">
      <figure
        v-for="item in involData"
        :key="item.id">
        <img :src="item.picUrl" :alt="item.title">
        <figcaption>{{ $t(item.title) }}</figcaption>
      </figure>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Participation',
  data() {
    return {
      involData: [
        {
          id: 'i1',
          picUrl: require('images/investor_img_en.svg'),
          title: 'participation.txt.t1'
        },
        {
          id: 'i2',
          picUrl: require('images/broker_img_en.svg'),
          title: 'participation.txt.t2'
        },
        {
          id: 'i3',
          picUrl: require('images/miner_img_en.svg'),
          title: 'participation.txt.t3'
        },
        {
          id: 'i4',
          picUrl: require('images/developer_img_en.svg'),
          title: 'participation.txt.t4'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.immeta-participation {
  margin: 0 auto 68px;
}
// h3{
//   font-size: 72px;
//   max-width: 1400px;
//   padding: 0 40px;
//   line-height: 141px;
//   color: #2E2E2E;
//   margin: 26px auto 20px;
// }
// .rg {
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   flex-wrap: wrap;
// }
figcaption {
  text-align: center;
  margin: 10px auto;
}
// .lf {
//   flex: 2;
//   h3, i {
//     display: inline-block;
//     vertical-align: middle;
//   }
//   $p1: 70px;
//   i.arrow {
//     width: 0;
//     height: 0;
//     margin-left: 50px;
//     border: {
//       top: $p1/2 solid transparent;
//       bottom: $p1/2 solid transparent;
//       left: $p1 solid #25EA3F;
//       right: $p1 solid transparent;
//     }
//     position: relative;
//     &::after{
//       content: "";
//       position: absolute;
//       display: block;
//       top: 0;
//       bottom: 0;
//       margin: auto 0;
//       left: -$p1 - 25px;
//       width: 25px;
//       height: 12px;
//       background: #25EA3F;
//     }
//   }
// }
// .rg {
//   flex: 4;
//   justify-content: space-evenly;
// }

</style>