<template lang="pug">
  v-container(text-xs-center)
    v-layout(row wrap)
      v-flex(xs12 md6 lg4 v-for="project in projects" :key="project.index")
        v-card.text-xs-center.mx-4.mb-4
          v-card-media(:src="project.src" height="250px")
          v-card-title(primary-title)
            div
              h3 {{ project.title }}
              div.text-xs-left {{ project.description }}
          v-card-actions
            v-btn(:href="project.website" target="new" color="success" v-if="project.website != ''") Project Website
            v-btn(:href="project.github" target="new" color="primary") Project Github
</template>

<script>
name: 'sd-gallery'
export default {
  data() {
    return {
      projects: [
        {
          index: 0,
          src: require('../assets/pool.jpg'),
          title: 'Pool Math',
          description: 'A website that allows a user to practice math problems that they need to master to be a successful pool operator.',
          website: 'https://pool-math.firebaseapp.com/',
          github: 'https://github.com/SmellydogCoding/pool-math'
        },
        {
          index: 1,
          src: require('../assets/outdoor.jpg'),
          title: 'Outdoor Activities Finder',
          description: 'A website that allows a user to find outdoor activities near their location.\u00A0\u00A0You can use the location API on your device or enter a zip code.',
          website: 'https://outdoor-activities-locator.herokuapp.com/',
          github: 'https://github.com/SmellydogCoding/outdoor-activities-finder'
        },
        {
          index: 2,
          src: require('../assets/fieldguide.jpg'),
          title: 'Electronic Field Guide',
          description: 'A Windows desktop application that organizes documents used by Environmental Health field inspectors.\u00A0\u00A0Created with Electron.',
          website: '',
          github: 'https://github.com/SmellydogCoding/electronic-field-guide'
        },
        {
          index: 3,
          src: require('../assets/tictactoe.jpg'),
          title: 'Tic Tac Toe',
          description: 'A website that lets you play tic-tac-toe against the computer or another (local) player.',
          website: 'https://sdc-tic-tac-toe.herokuapp.com/',
          github: 'https://github.com/SmellydogCoding/tic-tac-toe-v3'
        },
        {
          index: 4,
          src: require('../assets/lightbox.jpg'),
          title: 'Vanilla JavaScript Lightbox',
          description: 'A website that displays photos from Flicr and allows you to view them in a lightbox.',
          website: 'https://frontend-developer-technical.herokuapp.com/',
          github: 'https://github.com/SmellydogCoding/frontend-web-developer-technical-assessment'
        },
        {
          index: 5,
          src: require('../assets/random.jpg'),
          title: 'Random Number Generator',
          description: 'A website that generates random numbers and keeps a list of the numbers choosen.',
          website: 'http://www.smellydogcoding.com/random',
          github: 'https://github.com/SmellydogCoding/portfolio/blob/master/build/server/views/random.html'
        },
      ]
    }
  }
}
</script>

<style scoped>
/* .v-card__actions { justify-content: center; } */
</style>
