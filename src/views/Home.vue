<template>
  <div class="home">
    <img class="img" alt="Vue logo" src="@/assets/images/but.jpg">
    <p>{{ count }}</p>
    <el-button @click="addCount">增加vuex</el-button>
    <hr>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import { useStore } from '@/store'

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  setup () {
    const store = useStore()
    console.log(store.state.user)
    return {
      count: computed(() => store.state.count),
      addCount: () => {
        store.commit('increment')
      }
    }
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
