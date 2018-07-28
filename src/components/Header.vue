<template lang="pug">
  v-toolbar.mt-0(app dark color="primary")
    v-toolbar-side-icon.noclick
      v-avatar(size="48")
        img.sd-avatar(:src='src' :alt='alt')
    v-toolbar-title.ml-4.mt-3
      p.title Smellydog Coding
        br
        | #[span.body-1 Clean coding from a big smelly dog]
    v-spacer
    v-toolbar-items.hidden-xs-only
      v-btn(to="/" flat) Home
      v-btn(to="/about" flat) About
      v-btn(href="mailto:smellydogcoding@gmail.com" flat) Contact
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

<style scoped>
  .sd-avatar {
    /* avatar logo size */
    width: 48px;
  }
  .noclick {
    /* change cursor to default when hovering on the avatar since it doesn't have an associated link */
    cursor: default;
  }
</style>
