<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import HomePage from './components/HomePage'
import AboutUsPage from './components/AboutUsPage'
export default {
  components:{
    HomePage,
    AboutUsPage
  }
}
</script>

<style >

</style>
