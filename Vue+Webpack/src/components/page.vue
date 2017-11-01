<template>
  <div class="container">
    <h3>Here is page{{ page }}.</h3>
    <img id="static-img" src="/static/smile.gif" alt="">
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  computed: {
    page() {
      return this.$route.params.id
    }
  }
}
</script>