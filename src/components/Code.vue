<template lang="pug">
  div.mx-2
    h2.mb-2 Code
    v-layout(row wrap)
      v-flex(xs6 v-for="codeSite in codeSites" :key="codeSite.index")
          v-card.text-xs-center.mx-2.mb-4
            v-card-media.my-2.py-2(:src="codeSite.src" height="64px")
            v-card-actions
              v-btn(:href="codeSite.website" target="new" color="primary") {{ codeSite.name}}
</template>

<script>
export default {
  data() {
    return {
      codeSites: [
        {
          index: 0,
          src: require('../assets/octocat.png'),
          name: 'Github',
          website: 'https://github.com/SmellydogCoding'
        },
        {
          index: 1,
          src: require('../assets/codepen.png'),
          name: 'Codepen',
          website: 'https://codepen.io/SmellydogCoding'
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
