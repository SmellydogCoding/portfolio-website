<template lang="pug">
  div.mx-2
    h2.mb-2 Credentials
    v-list
      v-list-tile(v-for="credential in credentials" :key="credential.index" @click="goto(credential.website)")
        v-list-tile-content
          v-list-tile-title.text-xs-center.blue--text {{ credential.title }}
</template>

<script>
export default {
  data() {
    return {
      credentials: [
        {
          index: 0,
          title: 'Treehouse Full Stack JavaScript Degree',
          website: 'http://www.google.com'
        },
        {
          index: 1,
          title: 'VueJS 2 - The Complete Guide',
          website: 'http://www.google.com'
        },
        {
          index: 2,
          title: 'MongoDB for NodeJS Developers',
          website: 'http://www.google.com'
        }
      ]
    }
  },
  methods: {
    goto(website) {
      window.open(website)
      return false
    }
  }
}
</script>

<style>
.v-list__tile {
	height: 40px;
}

.v-list__tile .v-list__tile__avatar {
  height: 35px;
  width: 35px;
}
</style>
