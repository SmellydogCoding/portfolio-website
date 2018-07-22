<template lang="pug">
  v-app
    app-header
    v-fade-transition
      router-view
    app-footer
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  data () {
    return {
      
    }
  },
  components: {
    appHeader: Header,
    appFooter: Footer,
  }
}
</script>

<style>
  .container { max-width: 1300px; }
</style>
