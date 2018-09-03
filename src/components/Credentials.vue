<template lang="pug">
  div.mx-2
    h2.accent--text.mb-2 Credentials
    v-list
      v-list-tile(v-for="credential in credentials" :key="credential.index" @click="goto(credential.website)")
        v-list-tile-content
          v-list-tile-title.text-xs-center.blue--text {{ credential.title }}
</template>

<script>
export default {
  data () {
    return {
      credentials: [
        {
          index: 0,
          title: 'Treehouse Full Stack JavaScript Degree',
          website: 'https://www.credential.net/0qxmcvzi'
        },
        {
          index: 1,
          title: 'VueJS 2 - The Complete Guide',
          website: 'https://www.udemy.com/certificate/UC-AUBVE1AB/'
        },
        {
          index: 2,
          title: 'MongoDB for NodeJS Developers',
          website: 'http://university.mongodb.com/course_completion/a86e6989-ad53-4a7e-b2e8-cc10713c'
        }
      ]
    }
  },
  methods: {
    goto (website) {
      window.open(website)
      return false
    }
  }
}
</script>

<style>
/* compact the tiles in the credentials list */
.v-list__tile {
  height: 40px;
}
</style>
