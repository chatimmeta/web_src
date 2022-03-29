<template>
  <div class="immeta-nav">
    <div class="wrap">
      <h1 class="logo-bar lf">
        <router-link 
          class="logo"
          :to="{path: '/'}"
          title="immeta"
        >
          <img :src="logoUrl" alt="immeta logo" title="immeta" width="54" height="54">
          <!-- <span>immeta</span> -->
        </router-link>
      </h1>
      <div class="rg">
        <ul class="nav-bar">
          <li class="nav-item" 
            v-for="(item, index) in navData" 
            :key="item.id" 
            :class="{on: item.isOn }"
            @click="navSlide(item.cid, index)">
            <router-link 
                class="link"
                :to="{path: item.path}"
              >{{ $t(item.cont) }}
              </router-link>
          </li>
        </ul>
        <div class="trans-bar">
          <a :class="{on: tIsCN}" href="javascript:void(0)" @click="tZ()">中</a>
            /
          <a :class="{on: !tIsCN}" href="javascript:void(0)" @click="tE()">EN</a>
        </div>
      </div>
    
    </div>
  </div>
</template>
<script>
export default {
  name: 'Nav',
  data() {
    return {
      logoUrl: require("images/immeta_logo.svg"),
      navData: [
        {
          id: 'n1',
          name: '简介',
          cid: 'introduce',
          ofTop: 850,
          path: '/',
          cont: 'nav.i1',
          isOn: false
        },
        {
          id: 'n2',
          name: '开发规划',
          cid: 'developer',
          ofTop: 2400,
          path: '/',
          cont: 'nav.i2',
          isOn: false

        },
        {
          id: 'n3',
          name: '经济模型',
          cid: 'economic',
          ofTop: 2830,
          path: '/',
          cont: 'nav.i3',
          isOn: false
        },
        {
          id: 'n4',
          name: '参与',
          cid: 'participation',
          ofTop: 4192,
          path: '/',
          cont: 'nav.i4',
          isOn: false
        }
      ],
      tIsCN: false,
      timer: null,
      timer2: null
    }
  },

  methods: {
    tZ() {
      this.$i18n.locale = 'zh-CN'
      this.tIsCN = true
    },
    tE() {
      this.$i18n.locale = 'en-US'
      this.tIsCN = false
    },
    navSlide(id, index) {
      let anchorEle = document.getElementById(id);
      if (anchorEle) {
        anchorEle.scrollIntoView({ behavior: 'smooth', block: 'start' });
        for(let i=0; i < this.navData.length; i++) {
          this.navData[i].isOn = false;
        }
        this.navData[index].isOn = true;
      }
    },
    getOffsetTop() {
      let navData = this.navData;
      let anchorEle;
      for(let i=0; i < navData.length; i++) {
        anchorEle = document.getElementById(navData[i].cid);
        // console.log(anchorEle,anchorEle.offsetTop)
        this.navData[i].ofTop = anchorEle.offsetTop
        // console.log(this.navData[i].ofTop)
      }
    },
    // addNavClass(navData) {
        // console.log(winScr, navData)
      // this.timer2 = setTimeout(() => {
        // let winScr =  window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        // console.log(winScr)
        // for(let i=0; i<navData.length; i++) {
        //   ((j) => {
        //     this.navData[j].isOn = false;
        //     if(winScr > this.navData[i].ofTop) {
        //       console.log('第'+i+"个页面")
        //     }
        //   })(i)
        // }
      // }, 500)
      
    // } 
  },
  mounted() {
    this.getOffsetTop();
    let id = 0;
    window.onscroll = () =>  {
      let winScr =  window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      let navData = this.navData;
      let len = navData.length;
      let foot = navData[len-1].ofTop - 473;
      
      for(let i=0; i < len; i++) {
        this.navData[i].isOn = false;
        let it = navData[i].ofTop - 150;
        let nt;
        if(i < len - 1) {
          nt = this.navData[i+1].ofTop
        }
        if(winScr > it && winScr < nt) {
          id = i
        }
      }
      if(winScr == foot) {
        id = len - 1;
      }
      this.navData[id].isOn = true;
    }
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}
</script>
<style lang="scss" scoped>
%flex-params {
 display: flex;
  justify-content: space-between;
  align-items: center;
}
$mc1: #09D315;
$mc2: #1557EF;

.immeta-nav {
  margin: 0 auto;
  min-width: 560px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  box-shadow: 1px 0 3px #DEDEDE;
  z-index: 11;
  background: rgba(#fff, 0.5);
  .wrap {
    max-width: 1400px;
    height: 100%;
    margin: 0 auto;
    flex-wrap: nowrap;
  }
  .rg, .lf a, .nav-bar {
    @extend %flex-params;
  }
  .lf {
    margin-right: 20px;
  }
  .nav-bar {
    @extend %flex-params;
    display: inline-flex;
    li {
      min-width: 100px;
      padding: 0 10px;
      text-align: center;
      transition: all 1s;
      a {
        padding: 2px;
        color: #2E2E2E;
      }
      &.on a{
        color: $mc1; 
        font-weight: bold;
        border-bottom: 2px solid $mc1;
      }
      &:hover a {
        color: $mc1;
      }
      
    }
  }
}
.trans-bar {
  min-width: 100px;
  text-align: center;
  a {
    color: #DEDEDE;
    &.on {
      color: #2E2E2E;
      font-weight: bold;
    }
  }
}
</style>