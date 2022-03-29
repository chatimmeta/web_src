<template>
  <div id="app">
    <router-view  v-cloak/>
  </div>
</template>
<script>
export default {
  name: 'App',
  metaInfo: {
    title: 'immeta',
    meta: [
      // { name: "viewport", content: 'width=device-width, target-densitydpi=560' }
      { name: "viewport", content: 'width=device-width' },
      { name: "description", content: 'a portal for block chain base social networking' },
      { name: "keywords", content: 'block chain, social networking, NFT, token, crypto' }
    ]
  }
}
</script>