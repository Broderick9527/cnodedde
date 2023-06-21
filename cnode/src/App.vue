<template>
  <div class="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
         <el-backtop>▲</el-backtop>
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang='less' scoped>

</style>
