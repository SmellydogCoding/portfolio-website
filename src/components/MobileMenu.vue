<template lang="pug">
  div
    v-toolbar-side-icon(@click="drawer = !drawer")
    v-navigation-drawer.pb-0(v-model="drawer" dark fixed hide-overlay right :width="width" :height="height")
      v-list.pa-1
        v-list-tile(avatar tag="div")
          v-list-tile-content
            v-list-tile-title {{ title }}
          v-list-tile-action
            v-btn(icon @click="drawer = !drawer")
              v-icon close
      v-list.pt-0(dense)
        v-divider(light)
        router-link(to="/" tag="v-list-tile" active-class="active")
          v-list-tile-content
            v-list-tile-title.subheading.text-xs-center Home
        router-link(to="/about" tag="v-list-tile" active-class="active")
          v-list-tile-content
            v-list-tile-title.subheading.text-xs-center About
        a.v-list__tile.v-list__tile--link(href="mailto:smellydogcoding@gmail.com")
          v-list-tile-content
            v-list-tile-title.subheading.text-xs-center Contact
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      width: '350',
      height: '250',
      src: require('../assets/sdlogo.png'),
      alt: 'logo',
      title: 'Menu'
    }
  }
}
</script>
