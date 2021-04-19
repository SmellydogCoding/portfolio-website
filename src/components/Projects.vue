<template lang="pug">
div.row
  div.col-12.q-mb-md.text-h6.text-primary.text-center My Projects
div.row.q-px-md
  div.col-xs-12.col-md-4.q-px-md.q-pb-md(v-for="project in projects" :key="project.title")
    q-card
      picture
        source(media="(max-width: 600px)" :srcset="project.srcset[0]")
        source(media="(max-width: 1023px)" :srcset="project.srcset[1]")
        source(media="(max-width: 1300px)" :srcset="project.srcset[2]")
        source(media="(max-width: 1920px)" :srcset="project.srcset[3]")
        img(:src="project.srcset[4]" :alt="project.alt" style="width: 100%; height: auto;" width="1024" height="768")
      q-card-section
        div.text-h6.text-center {{ project.title }}
      q-card-section
        div {{ project.description}}
      q-card-actions
        q-btn(color="primary" :label="project.button1.label" type="a" :href="project.button1.link" target="_blank" rel="noopener")
        q-btn.q-pl-md.button2(v-if="project.button2" color="secondary" :label="project.button2.label" :to="project.button2.link" rel="noopener")
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Projects',
  setup () {
    const projects = [
      {
        src: require('../assets/fieldguide/fieldguide-4x.jpg'),
        alt: 'Logo for the electronic field guide',
        srcset: [require('../assets/fieldguide/fieldguide-2x.jpg'), require('../assets/fieldguide/fieldguide-3x.jpg'), require('../assets/fieldguide/fieldguide-1x.jpg'), require('../assets/fieldguide/fieldguide-2x.jpg'), require('../assets/fieldguide/fieldguide-4x.jpg')],
        title: 'West Virginia Electronic Field Guide',
        description: 'A website with the rules, procedures, and reference material for sanitarian field inspections.',
        button1: { label: 'website', link: 'https://wv-electronic-field-guide.firebaseapp.com/' },
        button2: { label: 'Adroid App Comming Soon', link: '' }
      },
      {
        src: require('../assets/bike/bike-4x.jpg'),
        alt: 'a person riding a moutain bike',
        srcset: [require('../assets/bike/bike-2x.jpg'), require('../assets/bike/bike-3x.jpg'), require('../assets/bike/bike-1x.jpg'), require('../assets/bike/bike-2x.jpg'), require('../assets/bike/bike-4x.jpg')],
        title: 'Bike Trail Locator',
        description: 'A website for finding bike trails using browser Location API or zip code.',
        button1: { label: 'website', link: 'https://bike-trail-locator.firebaseapp.com/' },
        button2: null
      },
      {
        src: require('../assets/pool/pool-4x.jpg'),
        alt: 'a swimming pool',
        srcset: [require('../assets/pool/pool-2x.jpg'), require('../assets/pool/pool-3x.jpg'), require('../assets/pool/pool-1x.jpg'), require('../assets/pool/pool-2x.jpg'), require('../assets/pool/pool-4x.jpg')],
        title: 'Pool Math',
        description: 'A website for practicing math problems that a person needs to master to be a successful pool operator.',
        button1: { label: 'website', link: 'https://pool-math.firebaseapp.com/' },
        button2: null
      },
      {
        src: require('../assets/random/random-4x.jpg'),
        alt: 'a background with lots of random numbers',
        srcset: [require('../assets/random/random-2x.jpg'), require('../assets/random/random-3x.jpg'), require('../assets/random/random-1x.jpg'), require('../assets/random/random-2x.jpg'), require('../assets/random/random-4x.jpg')],
        title: 'Random Number Generator',
        description: 'A website for generating random numbers.  Yes there\'s no such thing as truly random numbers, but we can pretend.',
        button1: { label: 'website', link: 'https://smellydogcoding.github.io/random-number-generator' },
        button2: null
      },
      {
        src: require('../assets/tictactoe/tictactoe-4x.jpg'),
        alt: 'a large metal tic tac toe board',
        srcset: [require('../assets/tictactoe/tictactoe-2x.jpg'), require('../assets/tictactoe/tictactoe-3x.jpg'), require('../assets/tictactoe/tictactoe-1x.jpg'), require('../assets/tictactoe/tictactoe-2x.jpg'), require('../assets/tictactoe/tictactoe-4x.jpg')],
        title: 'Tic Tac Toe',
        description: 'A website for playimg tic-tac-toe against the computer or another (local) player.',
        button1: { label: 'website', link: 'https://smellydogcoding.github.io/tic-tac-toe-v3' },
        button2: null
      },
      {
        src: require('../assets/lightbox/lightbox-4x.jpg'),
        alt: 'an art gallery',
        srcset: [require('../assets/lightbox/lightbox-2x.jpg'), require('../assets/lightbox/lightbox-3x.jpg'), require('../assets/lightbox/lightbox-1x.jpg'), require('../assets/lightbox/lightbox-2x.jpg'), require('../assets/lightbox/lightbox-4x.jpg')],
        title: 'Vanilla JavaScript Lightbox',
        description: 'A website that displays photos from Flicr and allows you to view them in a lightbox.',
        button1: { label: 'website', link: 'https://frontend-developer-technical.herokuapp.com/' },
        button2: null
      }
    ]

    return { projects }
  }
})
</script>

<style lang="scss" scoped>
  // remove left margin on button 2 on very small devices
  @media screen and (max-width: 370px) {
  .button2 {
    margin-left: 0 !important;
    margin-top: 8px;
  }
}

</style>
