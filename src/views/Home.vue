<template>
  <div class="home">
    <img class="img" alt="Vue logo" src="@/assets/images/but.jpg">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  setup () {
    console.log('setup')
  }
})
</script>

<style lang="scss" scoped>
  .home {
    padding: 0 30px;
  }
  .img {
    width: 320px;
    display: block;
    margin: 0 auto;
  }
</style>
