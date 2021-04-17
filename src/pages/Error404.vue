<template lang="pug">
div.row
  div.col-xs-12.col-sm-6.offset-sm-3.text-center
    p.text-h4.q-my-xl 404 - Page Not Found
    img.q-mt-md(src="https://media.giphy.com/media/ePsV4lBfsrPmo/giphy.gif" alt="confused puppies")
    div.text-center
      q-btn.q-mt-xl(color="primary" text-color="white" unelevated to="/" label="Go Home" no-caps)
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Error404'
})
</script>
