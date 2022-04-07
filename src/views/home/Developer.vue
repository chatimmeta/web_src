<template>
  <div class="immeta-developer" id="developer">
    <h2 class="immeta-title-bar">{{ $t('developer.tit') }}</h2>
    <div class="process-bar">
      <dl 
        v-for="item in deveData" 
        :key="item.id" 
        :class="{on: item.isOn}"
      >
        <dt>
          <span :class="{on: item.isFocus}"
          >{{item.time}}</span>
          </dt>
        <dd v-for="(v, i) in item.contents" :key="i" ref="trans" :class="{zh: isZh}">
          <em>{{ $t(v) }}</em>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Developer',
  data() {
    return {
      isZh: false,
      deveData: [
        {
          id: 'd1',
          isOn: true,
          time: '2022.04.30',
          isFocus: true,
          contents: [
            'developer.i1.t1',
            'developer.i1.t2',
            'developer.i1.t3',
            'developer.i1.t4',
            'developer.i1.t5'
          ]
        },
        {
          id: 'd2',
          isOn: false,
          time: '2022.08.30',
          isFocus: false,
          contents: [
            'developer.i2.t1',
            'developer.i2.t2'
          ]
        },
        {
          id: 'd3',
          isOn: false,
          time: '2022.12.30',
          isFocus: false,
          contents: [
            'developer.i3.t1',
            'developer.i3.t2'
          ]
        },
        {
          id: 'd4',
          isOn: false,
          time: '2023.04.30',
          isFocus: false,
          contents: [
            'developer.i4.t1',
            'developer.i4.t2',
            'developer.i4.t3',
            'developer.i4.t4'
          ]
        },
        {
          id: 'd5',
          isOn: false,
          time: '2023.12.30',
          isFocus: false,
          contents: [
            'developer.i5.t1',
            'developer.i5.t2',
            'developer.i5.t3',
            'developer.i5.t4'
          ]
        }
      ]
    }
  },
  watch: {
    // isZh(val) {
    //   console.log(val)
    // }
  },
  updated() {
    return this.isZh = this.$i18n.locale == 'zh-CN' ? true : false
  }
}
</script>

<style lang="scss" scoped>
.immeta-developer {
  overflow: hidden;
  // margin-left: auto;
  
}
h3 {
  font-size: 48px;
  color: #2E2E2E;
  margin: 0 auto 70px;
}
.process-bar {
  max-width: 1600px;
  margin: 60px 0 88px auto;
  overflow:hidden;
  padding-left: 40px;
  display: flex;
  justify-content: space-around;
  align-items: top;
  $c1: #D8D8D8;
  $c2: #25EA3F;
  dl {
    position: relative;
    flex: 1;
    text-align: center;
    dt {
      margin: 0 auto 70px;
      font-size: 18px;
    }
    dd {
      font-size: 16px;
      line-height: 19px;
      text-align: left;
      padding-left: 10px;
      position: relative;
      em {
        display: inline-block;
        font-style: normal;
      }
      &::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        margin: auto 0;
        width: 6px;
        height: 6px;
        background: $c1;
        border-radius: 50%;
        color: red;
      }
      &.zh {
        text-align: center;
        &::before {
          display: none;
        }
      }
    }
    &::before, &::after {
      content: '';
      display: block;
      position: absolute;
    }
    $p1: 55px;
    $p2: 8px;
    $p3: 32px;
    &::before {
      top: $p1;
      left: 0;
      right: -10px;
      height: $p2;
      background: $c1;
    }
    &::after {
      width: $p3;
      height: $p3;
      background: $c1;
      left: 0;
      right: 0;
      top: $p1 - ($p3 / 2) + ($p2 / 2) ;
      border-radius: 50%;
      margin: auto;
    }
    &:first-child {
      &::before {
        border-radius: 4px;
      }
    }
    span {
      padding: 4px 8px;
      border-radius: 4px;
      position: relative;
      &.on {
        background: $c2;
        color: #FFF;
        &::after {
          display: block;
        }
      }
      &::after {
        content: "";
        display: none;
        position: absolute;
        width: 0;
        height: 0;
        margin: 0 auto;
        bottom: -15px;
        left: 0;
        right: 0;
        border: {
          top: 8px solid $c2;
          bottom: 8px solid transparent;
          left: 8px solid transparent;
          right: 8px solid transparent;
        }
      }
    }
    &.on {
      dd {
        &::before {
          background: $c2;
        }
      }
      &::after,
      &::before {
        background: $c2;
      }
    } 
  }
}
</style>