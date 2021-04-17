<template lang="pug">
q-page
  banner(:overlay="overlay" :background="background" :alt="alt" :position="position" :quote="quote" :attribution="attribution")
  div.row
    div.col-12.text-center.q-px-md
      p.q-mb-none.q-my-md.text-h6.text-secondary Clean Coding from a Big Smelly Dog
      p.q-mt-none.text-body1 Hello!&nbsp;&nbsp;My name is Dan and this is my software development portfolio.&nbsp;&nbsp;I am a full stack JavaScript and Android developer.&nbsp;&nbsp;I create single page applications with VueJS, static web pages, and Android applications.
  projects
</template>

<script>
import { defineComponent } from 'vue'
import Banner from '../components/Banner'
import Projects from '../components/Projects'
export default defineComponent({
  name: 'Home',
  components: { Banner, Projects },
  setup () {
    const overlay = 'index-banner-background'
    const background = require('../assets/mountain.jpg')
    const alt = 'a banner image with a person overlooking a mountain lake'
    const position = '50% 50%'
    const quote = 'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.'
    const attribution = 'Patrick McKenzie'

    return { overlay, background, alt, position, quote, attribution }
  }
})
</script>
