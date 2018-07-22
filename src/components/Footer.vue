<template lang="pug">
  v-footer(app color="primary")
      span.ml-2.white--text &copy; 2018 #[span.blue--text--darken-4 Smellydog Coding]
      // v-btn.white--text(v-for="icon in icons" :key="icon" icon)
      //   v-icon {{ icon }}
</template>

<script>
export default {
  name: 'sd-footer',
  data() {
    return {
      icons: [
        'twitter',
        'linkedin',
        'email-open'
      ]
    }
  }
}
</script>
