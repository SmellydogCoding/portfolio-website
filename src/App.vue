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
  components: {
    appHeader: Header,
    appFooter: Footer
  },
  created () {
    // had to move the custom theme to App.vue since i'm using the Vuetify plugin
    this.$vuetify.theme.primary = '#127a00'
    this.$vuetify.theme.accent = '#00127a'
    this.$vuetify.theme.background = '#f4faff'
    this.$vuetify.theme.success = '#1dc700'
    this.$vuetify.theme.error = '#7a0012'
  }
}
</script>

<style>
  /* Global Styles */
  @font-face {
    font-family: "butteredToast";
    src: url("../public/fonts/DKButteredToast.woff") format('woff'), url("../public/fonts/DKButteredToast.ttf") format('truetype');
  }

  input, textarea { caret-color: #127a00; }

  .container {
    /* enlarge the container */
    max-width: 1300px;
    /* reduce top margin of a container */
    margin: auto;
  }

  .v-card__actions {
    /* center action buttons in cards */
    justify-content: center;
  }

  #app {
    background-color: #f4faff;
  }

  /* Enlarge container more for very large (greater than 1300px) screens */
  @media screen and (min-width: 1301px) {
    .container { max-width: 95%; }
  }

  /* Reduce the size of h2 on very small devices */
  @media screen and (max-width: 400px) {
    h1 { font-size: 1.5rem; }
    h2 {
      font-size: 1.25rem;
      margin-bottom: 0.35rem;
    }
  }
</style>
