<template lang="pug">
  v-toolbar(fixed flat color="background")
    router-link(to='/')
      v-toolbar-side-icon
        v-avatar(size="48")
          img(:src='src' :alt='alt')
    v-toolbar-title
      p.mb-0 Smellydog Coding
    v-spacer
    v-toolbar-items.hidden-xs-only
      v-btn(to="/" flat color='primary') Home
      v-btn(to="/about" flat color='primary') About
      v-btn(to="/contact" flat color='primary') Contact
    app-MobileMenu.hidden-sm-and-up
</template>

<script>
import logo from '../assets/sdlogo.png'
import MobileMenu from '../components/MobileMenu'

export default {
  name: 'sd-header',
  data () {
    return {
      src: logo,
      alt: 'Smellydog Logo'
    }
  },
  components: {
    appMobileMenu: MobileMenu
  }
}
</script>
