<template lang="pug">
  v-footer(color="primary" height="64px")
      p.copy.ml-4.mb-0.white--text &copy; 2018 #[span.blue--text--darken-4 Smellydog Coding]
      v-spacer
      div.mr-4
        v-btn.white--text.mr-4(v-for="icon in icons" :key="icon.index" icon :href="icon.link" target="new")
          v-icon {{ icon.classes }}
</template>

<script>
export default {
  name: 'sd-footer',
  data () {
    return {
      icons: [
        {index: 0, link: 'https://twitter.com/SmellydogCoding', classes: 'fab fa-twitter'},
        {index: 1, link: 'https://linkedin.com/in/daniel-mcneil', classes: 'fab fa-linkedin'},
        {index: 2, link: 'mailto:smellydogcoding@gmail.com', classes: 'fas fa-envelope'}
      ]
    }
  }
}
</script>

<style scoped>
  @media screen and (min-width: 600px) {
    .copy { font-size: 1.25rem; }
  }
  /* Adjust margins for very small screens */
  @media screen and (max-width: 440px) {
    .ml-4 { margin-left: 8px !important; }
    .mr-4 { margin-right: 3px !important; }
  }
</style>
