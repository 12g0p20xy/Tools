<template>
  <div class="container">
    <h2>
      <img id="logo" src="../assets/logo.png" alt="">
      Index
    </h2>
    <div v-for="id in 10" class="links">
      <router-link :to="{name: 'page', params: { id: id }}">page{{ id }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>