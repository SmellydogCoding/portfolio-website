<template lang="pug">
  div.mx-2
    h2.accent--text.mb-2 {{ cardSet.sectionName }}
    v-layout(row wrap)
      v-flex(:class="cardSet.layoutSize" v-for="card in cardSet.setData" :key="card.index")
        a.v-card--link(:href="card.website" target="new")
          v-card.text-xs-center.mx-2.mb-4
            v-card-media.my-2.py-2(:src="card.src" height="64px" contain)
            v-card-title.text-xs-center
              div.full-width
                h3.mb-0(:class="card.color") {{ card.name}}
</template>

<script>
export default {
  props: {
    cardSet: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
  /* Make a card into a clickable link that changes background on hover */
  .v-card--link {
    text-decoration: none;
    &:hover > .v-card {
      background-color: #dce1ff !important;
      transition: .3s cubic-bezier(0.25,0.8,0.5,1.0);
      cursor: pointer;
    }
    .full-width {
      width: 100%;
      @media screen and (max-width: 400px) {
        font-size: 0.7rem;
      }
    }
  }
</style>
