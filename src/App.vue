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
    appFooter: Footer
  }
}
</script>

<style>
  .container {
    /* enlarge the container */
    max-width: 1300px;
    /* adding the app attribute to the toolbar (to make the mobile menu render about the main content of the page)
    moves part of the main content up under the toolbar
    adding top margin to the main content element moves the main content out from under the toolbar */
    margin-top: 40px;
  }
  .v-card__actions {
    /* center action buttons in cards */
    justify-content: center;
  }
</style>
