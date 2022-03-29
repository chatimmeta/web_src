<template>
  <footer class="immeta-footer">
    <div class="wrap">
      <div class="lf">
        <p>{{ $t('footer.t1')}}：</p>
      </div>
      <div class="rg">
        <p>{{ $t('footer.t2')}}：</p>
        <a v-for="item in contactData" :key="item.id" :href="item.href" :title="item.name">
          <img :src="item.logo" :alt="item.name">
        </a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
  data() {
    return {
      contactData: [
        {
          id: 'c1',
          name: 'facebook',
          href: 'javascript：void(0);',
          logo: require('images/Facebook_icon.png')
        },
        {
          id: 'c2',
          name: 'github',
          href: 'javascript：void(0);',
          logo: require('images/Github_icon.png')
        },
        {
          id: 'c3',
          name: 'twitter',
          href: 'javascript：void(0);',
          logo: require('images/Twitter_icon.png')
        },
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.immeta-footer {
  box-shadow: -1px 0 3px #DEDEDE;
  padding: 20px 0;
}
.wrap {
  color: #858585;
  font-size: 14px;
}
.rg {
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    padding-right: 15px;
  }
}
</style>