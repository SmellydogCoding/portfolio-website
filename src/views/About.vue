<template lang="pug">
  div
    app-banner(:bannerStyles="bannerStyles" :quoteBlock="quoteBlock")
    v-container(text-xs-center)
      v-layout.mb-2(row wrap)
        v-flex(xs12)
          app-story
      v-layout.mt-4(row wrap)
        v-flex(xs12 md4)
          app-cardlink(:cardSet='cardSet1')
        v-flex(xs12 md4)
          app-credentials
        v-flex(xs12 md4)
          app-cardlink(:cardSet='cardSet2')
</template>

<script>
import Banner from '../components/Banner'
import Story from '../components/Story'
import CardLink from '../components/CardLink'
import Credentials from '../components/Credentials'

export default {
  name: 'sd-about',
  data () {
    return {
      bannerStyles: {
        height: '150px',
        background: `linear-gradient(rgba(18, 122, 0, 0.75), rgba(18, 122, 0, 0.75)), url(${require('../assets/sdlogo-banner.png')}) no-repeat top left`,
        'justify-content': 'center'
      },
      quoteBlock: {
        quote: `I'm not insane, my mother had me tested.`,
        attribution: 'Dr. Sheldon Cooper'
      },
      cardSet1: {
        layoutSize: 'xs6',
        sectionName: 'Code',
        setData: [
          {
            index: 0,
            src: require('../assets/octocat.png'),
            name: 'Github',
            website: 'https://github.com/SmellydogCoding',
            color: 'primary--text'
          },
          {
            index: 1,
            src: require('../assets/codepen.png'),
            name: 'Codepen',
            website: 'https://codepen.io/SmellydogCoding',
            color: 'primary--text'
          }
        ]
      },
      cardSet2: {
        layoutSize: 'xs4 offset-xs-4',
        sectionName: 'Connect',
        setData: [
          {
            index: 0,
            src: require('../assets/linkedin.png'),
            name: 'LinkedIn',
            website: 'https://linkedin.com/in/daniel-mcneil',
            color: 'accent--text'
          }
        ]
      }
    }
  },
  components: {
    appStory: Story,
    appCardlink: CardLink,
    appCredentials: Credentials,
    appBanner: Banner
  }
}
</script>
