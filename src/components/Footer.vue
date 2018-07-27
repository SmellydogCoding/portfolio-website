<template lang="pug">
  v-footer(app color="primary")
      p.ml-2.mb-0.pr-2.white--text &copy; 2018 #[span.blue--text--darken-4 Smellydog Coding]
      v-spacer
      v-btn.white--text(v-for="icon in icons" :key="icon" icon :href="icon.link" target="new")
        v-icon {{ icon.classes }}
</template>

<script>
export default {
  name: 'sd-footer',
  data() {
    return {
      icons: [
        {link: 'https://twitter.com/SmellydogCoding', classes: 'fab fa-twitter'},
        {link: 'https://linkedin.com/in/daniel-mcneil', classes: 'fab fa-linkedin'},
        {link: 'mailto:smellydogcoding@gmail.com', classes: 'fas fa-envelope'}
      ]
    }
  }
}
</script>
