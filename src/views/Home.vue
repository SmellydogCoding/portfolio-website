<template lang="pug">
  div
    app-banner(:bannerStyles="bannerStyles" :quoteBlock="quoteBlock")
    v-container(text-xs-center)
      app-intro
      app-gallery
</template>

<script>
import Intro from '../components/Intro'
import Gallery from '../components/Gallery'
import Banner from '../components/Banner'

export default {
  name: 'sd-home',
  data () {
    return {
      bannerStyles: {
        height: '300px',
        background: `linear-gradient(rgba(0, 18, 122, 0.65), rgba(0, 18, 122, 0.65)), url(${require('../assets/mountain.jpg')}) no-repeat center`,
        'justify-content': 'center'
      },
      quoteBlock: {
        quote: 'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.',
        attribution: 'Patrick McKenzie'
      }
    }
  },
  components: {
    appIntro: Intro,
    appGallery: Gallery,
    appBanner: Banner
  }
}
</script>
