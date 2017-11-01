<template>
  <div id="app">
    <router-view></router-view>
    <to-top></to-top>
  </div>
</template>

<script>
import toTop from './components/to-top.vue'

export default {
  name: 'app',
  components: {
    toTop
  },
  data () {
    return {}
  }
}
</script>

<!-- 全局样式 -->
<style lang="less">
@import './less/style.less';
</style>
