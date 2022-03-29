<template>
  <div class="introduce-bar" id="introduce">
    <h2 class="immeta-title-bar">{{ $t('introduce.tit') }}</h2>
    <div class="wrap">
      <div class="intro-item" v-for="(item, index) in introData" :key="item.id">
        <div class="img-box">
          <div class="img-wrap">
            <img ref="introImg" :src="item.picUrl.en" :alt="$t(item.title)" :title="$t(item.title)">
          </div>
        </div>
        <dl class="txt-box" :data-index="'0' + (index + 1)">
          <dt>{{ $t(item.title) }}</dt>
          <dd v-if="item.content.model == 'a'" >
            <p v-for="(value,index) in item.content.data" :key="index">{{ $t(value) }}</p>
          </dd>
          <dd v-else-if="item.content.model == 'b'">
            <div v-for="(value,index) in item.content.data" :key="index">
              <p>{{ $t(value.text) }}</p>
              <span>{{ $t(value.step) }}</span>
            </div>
          </dd>
          <dd v-else></dd>
        </dl>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Introduce',
  data() {
    return {
      introData: [
        {
          id: 'i1',
          title: 'introduce.i1.tit',
          picUrl: {
            en: require("images/intro01_img_en.svg"),
            zh: require("images/intro01_img.svg")
          },
          content: {
            model: 'a',
            data: [
              'introduce.i1.txt.t1',
              'introduce.i1.txt.t2',
              'introduce.i1.txt.t3',
              'introduce.i1.txt.t4'
            ]
          }
        },
        {
          id: 'i2',
          title: 'introduce.i2.tit',
          picUrl: {
            en: require("images/intro02_img_en.svg"),
            zh: require("images/intro02_img.svg")
          },
          content: {
            model: 'a',
            data: [
              'introduce.i2.txt.t1',
              'introduce.i2.txt.t2',
              'introduce.i2.txt.t3',
              'introduce.i2.txt.t4',
              'introduce.i2.txt.t5',
            ]
          }
        },
        {
          id: 'i3',
          title: 'introduce.i3.tit',
          picUrl: {
            en: require("images/intro03_img_en.svg"),
            zh: require("images/intro03_img.svg")
          },
          content: {
            model: 'b',
            data: [
              {
                text: 'introduce.i3.txt.t1',
                step: 'introduce.i3.txt.t2'
              },
              {
                text: 'introduce.i3.txt.t3',
                step: 'introduce.i3.txt.t4'
              },
              {
                text: 'introduce.i3.txt.t5',
                step: 'introduce.i3.txt.t6'
              }
            ]
          }
        }
      ]
    }
  },
  updated: function() {
    let introData = this.introData;
    for(let i=0; i<introData.length; i++){
      if (this.$i18n.locale == 'zh-CN') {
        this.$refs.introImg[i].src = introData[i].picUrl.zh;
      }else {
        this.$refs.introImg[i].src = introData[i].picUrl.en;
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.introduce-bar {
  background: #F8FCFD;
  overflow: hidden;
  color: #2E2E2E;
  // padding: 100px 0;
}
.wrap {
  display: block;
  justify-content: initial;
  align-items: initial;
}
.intro-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
  // flex-wrap: wrap;
  &:nth-child(odd) {
    .txt-box {
      padding-left: 20px;
    }
  }
  &:nth-child(even) {
    flex-direction: row-reverse;
    .txt-box {
      padding-right: 20px;
      &::before, &::after {
        left: 0;
      }
    }
  }
  // &:first-child {
    // .img-box, .txt-box {
    //   flex: initial;
    // }
  // }
}
.img-box {
  flex: 0.85;
  padding: 50px;
  // margin: 0 20px;
  max-width: 50%;
  box-sizing: border-box;
  background: rgba(#fff, 1);
  .img-wrap {
    width: 100%;
    height: 100%;
    // flex: 1;
    // min-width: 320px;
    // width: 600px;
    // height: 320px;
    text-align: center;
    // position: relative;
  }
  img{
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   bottom: 0;
  //   margin: auto;
    max-width: 100%;
    width: 100%;
  }
}
.txt-box {
  flex: 1;
  max-width: 40%;
  min-width: 320px;
  position: relative;
  &::before, &::after {
    content: "";
    display: block;
    position: absolute;
    top: -25px;
    left: 20px;
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
    font-size: 42px;
    font-weight: bold;
    display: block;
    line-height: 56px;
  }
  dd {
    font-size: 20px;
    line-height: 24px;
    p {
      position: relative;
      padding-left: 12px;
      color: #4F4F4F;
      &::before {
        content: '';
        display: block;
        position: absolute;
        top: 11px;
        bottom: 0;
        // margin: auto 0;
        left: 0;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        border: 1px solid #979797;
      }
    }
    span {
      display: block;
      color: #858585;
      padding-left: 12px;
      // padding-left: 1.2em;
    }
  }
}

</style>
