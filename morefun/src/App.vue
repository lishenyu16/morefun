<template>
  <div id="app">
    <app-header></app-header>
    <app-main></app-main>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'

export default {
  name: 'App',
  components:{
    appHeader:Header,
    appMain:Main
  }
}
</script>

<style scoped>
body{
  background:#f4f4f4;
}
html,body,#app{
  width:100%;
}
</style>
