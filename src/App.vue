<template>
  <div id="app">
       <NavBar/>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/NaveBar"

export default {
  components:{
    NavBar
  }
}
</script>

<style >
</style>