<template lang="pug">
  div.mx-2
    h2.mb-2 Connect
    v-layout(row wrap)
      v-flex(xs4 v-for="connection in connections" :key="connection.index")
          v-card.text-xs-center.px-2.mx-2.mb-4
            v-card-media.my-2.py-2(:src="connection.src" height="64px")
            v-card-actions
              v-btn.white--text(:href="connection.website" target="new" :color="connection.color") {{ connection.name}}
</template>

<script>
export default {
  data() {
    return {
      connections: [
        {
          index: 0,
          src: require('../assets/pdf.png'),
          name: 'Resume',
          website: 'https://www.dropbox.com/s/jaank532aw9p3mb/resume.pdf?raw=1',
          color: 'success'
        },
        {
          index: 1,
          src: require('../assets/linkedin.png'),
          name: 'LinkedIn',
          website: 'https://linkedin.com/in/daniel-mcneil',
          color: 'primary'
        },
        {
          index: 2,
          src: require('../assets/twitter.png'),
          name: 'Twitter',
          website: 'https://twitter.com/SmellydogCoding',
          color: 'blue lighten-1'
        }
      ]
    }
  }
}
</script>

<style>
  /* fit the entire image to the card */
  .v-card__media__background { 
    background-size: contain !important; 
    margin-top: 0.5rem;
  }
</style>
