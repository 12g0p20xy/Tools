<template>
  <transition name='fade'>
    <div id="to-top" v-show="show" @click="toTop">
      <i class="glyphicon glyphicon-menu-up"></i>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      isScroll: false
    }
  },
  mounted() {
    window.addEventListener('scroll', function() {
      this.isScroll = true
    }.bind(this))
    this.isScroll = false

    setInterval(function() {
      let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
      if (this.isScroll && scrollTop > 300) {
        this.show = true
      }
      else {
        this.show = false
      }
    }.bind(this), 1000)
  },
  methods: {
    toTop() {
      document.body.scrollTop = document.documentElement.scrollTop = 0
    }
  }
}
</script>

<style>
#to-top {
  position: fixed;
  width: 50px;
  height: 50px;
  background: #06ab1d;
  border-radius: 50%;
  bottom: 10%;
  right: 10%;
  font-size: 18px;
  color: #fff;
  text-align: center;
  line-height: 52px;
  cursor: pointer;
}
</style>