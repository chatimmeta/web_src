<template>
  <div class="immeta-wrap">
    <Nav />
    <Header />
    <Introduce />
    <Developer />
    <Economic />
    <Participation />
    <Footer />
  </div>
</template>

<script>
import Nav from './common/Nav'
import Developer from './home/Developer'
import Economic from './home/Economic'
import Header from './home/Header'
import Introduce from './home/Introduce'
import Participation from './home/Participation'
import Footer from './common/Footer'

export default {
  name: 'Home',
  data() {
    return {

    }
  },
  components: {
    Nav, Header, Introduce, Developer,
    Economic, Participation, Footer
  },
  methods: {
  },
  mounted: function() {
    // let anchorElement = document.getElementById('introduce');
    // if (anchorElement) {
    //   anchorElement.scrollIntoView({ behavior: 'smooth' });
    // }
  }
}
</script>

<style lang="scss">
  .immeta-wrap {
    margin: 0 auto;
    min-width: 880px;
  }
  .immeta-title-bar {
    font-size: 72px;
    max-width: 1400px;
    padding: 0 40px;
    box-sizing: border-box;
    line-height: 141px;
    color: #2E2E2E;
    margin: 26px auto 20px;
  }
</style>
