<template lang="pug">
  v-toolbar.mt-0(dark color="primary")
    router-link(to="/" tag="v-toolbar-side-icon")
      v-avatar(size="48")
        img.sd-avatar(:src='src' :alt='alt')
    v-toolbar-title.ml-4.mt-3
      p.title Smellydog Coding
        br
        | #[span.body-1 Clean coding from a big smelly dog]
    v-spacer
    v-toolbar-items
      v-btn(to="/" flat) Home
      v-btn(to="/about" flat) About
      v-btn(href="mailto:smellydogcoding@gmail.com" flat) Contact
</template>

<script>
import logo from '../assets/sdlogo.png'

export default {
  name: 'sd-header',
  data() {
    return {
      src: logo,
      alt: "Smellydog Logo"
    }
  }
}
</script>

<style scoped>
  .sd-avatar { width: 48px; }
</style>
