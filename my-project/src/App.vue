<template lang="pug">
  #app
    img.vue(src="./assets/logo.png")
    Father
</template>

<script>
import Father from './components/father'

export default {
  name: 'app',
  components: {
    Father
  }
}
</script>

<style lang="scss">
  *{margin:0;padding: 0}
  body{
    background-image: url("/static/images/background.png");
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
      img.vue{
        width: 80px;
        height: auto;
      }
    }
  }
</style>
