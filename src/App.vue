// App.vue

<template>  
<div id='app'>
    <Laff />
    <transition name="fade">
      <router-view></router-view>
    </transition>
</div>
</template>

<style src="./components/Register.css" scoped>  
    
</style>

<script>
  import Laff from './Laff.vue'
    export default {
      name: 'app',
      components: {
        Laff
      }
    }
</script>