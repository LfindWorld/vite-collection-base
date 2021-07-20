<template>
  <div class="home">
    <img class="img" alt="Vue logo" src="@/assets/images/but.jpg">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <router-link to="/"><el-button>Go to Home</el-button></router-link>
     <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
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
  .img {
    width: 320px;
  }
</style>
