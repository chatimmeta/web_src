<template>
  <header class="immeta-header">
    <div class="bg"></div>
    <div class="wrap">
      <div class="title-box">
        <h2>{{ $t('header.tit_1') }}<br>{{ $t('header.tit_2') }}</h2>
        <p>{{ $t('header.txt') }}</p>
        <div class="button-group">
          <button class="btn-android">
            <i></i>
            <span>{{ $t('header.btn_1') }}</span>
          </button>
          <button class="btn-ios">
            <i></i>
            <span>{{ $t('header.btn_2') }}</span>
          </button>
        </div>
      </div>
      <div class="image-box">
        <img ref="banner" :src="bannerUrl.en" alt="banner image">
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      bannerUrl: {
        en: require('images/banner_en.svg'),
        zh: require('images/banner.svg')
      },
    }
  },
  computed: {
  },
  watch: {
    imgUrl(val) {
      console.log(val)
    }
  },
  updated: function() {
    if (this.$i18n.locale == 'zh-CN') {
      this.$refs.banner.src = this.bannerUrl.zh;
    }else {
      this.$refs.banner.src = this.bannerUrl.en;
    }
  }
}
</script>
<style lang="scss" scoped>
$mc1: #09D315;
$mc2: #1557EF;
.immeta-header {
  padding-top: 80px;
  min-height: 600px;
  overflow: hidden;
  background: #fff;
  position: relative;
}
.bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  &::after, &::before {
    content: '';
    display: block;
    position: absolute;
  }
  &::after {
    left: -20px;
    bottom: -20px;
    width: 220px;
    height: 220px;
    opacity: 0.9;
    border-radius: 50%;
    background: $mc2;
    box-shadow: 0 0 40px 90px $mc2;
  }
  &::before {
    top: -208px;
    right: -76px;
    width: 520px;
    height: 300px;
    opacity: 0.5;
    transform: rotate(22deg);
    border-radius: 110px/50px;
    background: $mc1;
    box-shadow: 0 0 30px 30px $mc1;
  }
}
.wrap {
  z-index: 2;
  padding: 60px 40px;
  flex-wrap: nowrap;
}
.title-box {
  z-index: 2;
  min-width: 240px;
  h2 {
    font-size: 72px;
    line-height: 82px;
    color: #2E2E2E;
    margin-right: -105px;
    min-width: 560px;
  }
  p {
    font-size: 24px;
    margin-top: 10px;
  }
}
.image-box {
  z-index: 1;
  max-width: 799px;
  max-height: 707px;
  min-width: 510px;
  img {
    width: 100%;
    height: 100%;
  }
}
.button-group {
  margin-top: 46px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // max-width: 380px;
  // flex-wrap: wrap;
  button {
    border: 0 none;
    min-width: 200px;
    height: 42px;
    margin: 10px;
    line-height: 42px;
    color: #fff;
    i, span {
      display: inline-block;
      vertical-align: middle;
    }
    i {
      width: 26px;
      height: 26px;
    }
    span {
      font-size: 18px;
    }
    &.btn-android {
      background: $mc1;
      i {
        background: url('~images/android_img_en.svg') no-repeat;
      }
    }
    &.btn-ios {
      background: $mc2;
      // margin-left: 20px;
      i {
        background: url('~images/ios_img_en.svg')no-repeat;
      }
    }
  }
}
</style>
