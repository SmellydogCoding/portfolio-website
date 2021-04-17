<template lang="pug">
div.row
  div.col-12
    q-img(:src="background" style="height: 200px;" fit="none" :position="position")
      div.absolute-full.text-h6.flex.flex-center(:class="overlay")
        q-item
          q-item-section
            q-item-label {{ quote }}
            q-item-label.text-subtitle1.text-right - {{ attribution }}
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Banner',
  props: {
    overlay: String,
    background: String,
    position: String,
    quote: String,
    attribution: String
  },
  setup (props) {}
})
</script>
