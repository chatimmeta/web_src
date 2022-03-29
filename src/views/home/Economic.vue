<template>
  <div class="immeta-economic" id="economic">
    <h2 class="immeta-title-bar">{{ $t('economic.tit') }}</h2>
    <div class="wrap">
      <div class="econ-item"
        v-for="(item, index) in econData"
        :key="item.id"
      >
        <dl class="txt-box" :data-index="'0' + (index + 1)">
          <dt>{{ $t(item.title) }}</dt>
          <dd v-for="(t, n) in item.contents" :key="n">
            <p v-if="typeof t == 'string'">{{ $t(t) }}</p>
            <p v-else-if="typeof t == 'object'">
              {{ $t(t.t) }}
              <span>{{ $t(t.s) }}</span>
            </p>
            <p v-else></p>
          </dd>
        </dl>
        <div class="img-box">
          <div class="img-wrap">
            <img ref="econImg" :src="item.picUrl.en" :alt="$t(item.title)" :title="$t(item.title)">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Economic',
  data() {
    return {
      econData: [
        {
          id: 'e1',
          title: 'economic.i1.tit',
          picUrl: {
            en: require("images/economic_M01_img_en.svg"),
            zh: require("images/economic_M01_img.svg")
          },
          contents: [
            {
              t: 'economic.i1.t1',
              s: 'economic.i1.t1s'
            },
            'economic.i1.t2',
            'economic.i1.t3',
            'economic.i1.t4',
            {
              t: 'economic.i1.t5',
              s: 'economic.i1.t5s'
            }
          ]
        },
        {
          id: 'e2',
          title: 'economic.i2.tit',
          picUrl: {
            en: require("images/economic_M02_img_en.svg"),
            zh: require("images/economic_M02_img.svg")
          },
          contents: [
            'economic.i2.t1',
            'economic.i2.t2',
            'economic.i2.t3',
            'economic.i2.t4',
            'economic.i2.t5'
          ]
        },
        {
          id: 'e3',
          title: 'economic.i3.tit',
          picUrl: {
            en: require("images/economic_M03_img_en.svg"),
            zh: require("images/economic_M03_img.svg")
          },
          contents: [
            'economic.i3.t1',
            'economic.i3.t2',
            'economic.i3.t3',
            'economic.i3.t4',
            'economic.i3.t5'
          ]
        }
      ]
    }
  },
  updated: function() {
    let econData = this.econData;
    for(let i=0; i<econData.length; i++){
      if (this.$i18n.locale == 'zh-CN') {
        this.$refs.econImg[i].src = econData[i].picUrl.zh;
      }else {
        this.$refs.econImg[i].src = econData[i].picUrl.en;
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.immeta-economic {
  background: #F8FCFD;
  overflow:hidden;
  // padding: 100px 0;
}
.wrap {
  display: block;
  justify-content: initial;
  align-items: initial;
}
.econ-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
  // flex-wrap: wrap;
  &:nth-child(even) {
    flex-direction: row-reverse;
  }
  .img-box {
    flex: 0.85;
    // height: 650px !important;
    padding: 50px;
    box-sizing: border-box;
    // margin: 0 20px;
    // border-radius: 20px;
    background: rgba(#FFFF, 1);
    .img-wrap {
      width: 100%;
      text-align: center;
      // position: relative;
      // display: flex;
      // justify-content: center;
      // align-content: center;
    }
    img {
      width: 100%;
      // position: absolute;
      // top: 0;
      // left: 0;
      // right: 0;
      // bottom: 0;
      // margin: auto;
      // max-width: 100%;
    }
  }
  .txt-box {
    max-width: 45%;
  }
}
dl {
  position: relative;
  &::before, &::after {
    content: "";
    display: block;
    position: absolute;
    top: -10px;
    left: 0;
    width: 28px;
    height: 28px;
    box-sizing: border-box;
  }
  &::after {
    // outline: #25EA3F solid thin;
    border: 1px solid #25EA3F;
  }
  &::before {
    content: attr(data-index);
    color: #25EA3F;
    text-align: center;
    font-size: 16px;
    line-height: 28px;
    border: 1px solid #25EA3F;
    border-radius: 50%;
  }
  dt {
    font-size: 48px;
    font-weight: bold;
    color: #2E2E2E;
    line-height: 2;
  }
  dd {
    font-size: 20px;
    color: #2E2E2E;
    line-height: 1.5;
    p {
      position: relative;
      padding-left: 12px;
      color: #4F4F4F;
      &::before {
        content: '';
        display: block;
        position: absolute;
        top: 13px;
        bottom: 0;
        // margin: auto 0;
        left: 0;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        border: 1px solid #979797;
      }
    }
  }
  span {
    font-size: 16px;
    color: #858585;
  }
}
</style>

