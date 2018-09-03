<template lang="pug">
  div
    h2.my-2.primary--text.text-xs-center Featured Projects
    v-layout(row wrap)
      v-flex(xs12 md6 lg4 v-for="project in projects" :key="project.index")
        v-card.text-xs-center.mx-4.mb-4
          v-card-media(:src="project.src" height="250px")
          v-card-title(primary-title)
            div
              h3 {{ project.title }}
              div.text-xs-left {{ project.description }}
          v-card-actions
            v-layout(row wrap)
              v-flex(xs6 v-if="project.website != ''")
                v-btn(:href="project.website" target="new" color="primary" flat) Website
              v-flex(xs6 v-if="project.website != ''")
                v-btn(:href="project.github" target="new" color="accent" flat) Github
              v-flex(xs12 v-else)
                v-btn(:href="project.github" target="new" color="accent" flat) Github
</template>

<script>
export default {
  name: 'sd-gallery',
  data () {
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
          description: 'A website that allows a user to find outdoor activities near their location.\u00A0\u00A0They can use Location API or zip code.',
          website: 'https://outdoor-activities-locator.herokuapp.com/',
          github: 'https://github.com/SmellydogCoding/outdoor-activities-finder'
        },
        {
          index: 2,
          src: require('../assets/fieldguide.jpg'),
          title: 'Electronic Field Guide',
          description: 'A Electron Windows desktop application that organizes documents used by Environmental Health field inspectors.',
          website: '',
          github: 'https://github.com/SmellydogCoding/electronic-field-guide'
        },
        {
          index: 3,
          src: require('../assets/tictactoe.jpg'),
          title: 'Tic Tac Toe',
          description: 'A website that lets you play tic-tac-toe against the computer or another (local) player.',
          website: 'https://smellydogcoding.github.io/tic-tac-toe-v3',
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
          website: 'https://smellydogcoding.github.io/random-number-generator',
          github: 'https://github.com/SmellydogCoding/random-number-generator'
        }
      ]
    }
  }
}
</script>
