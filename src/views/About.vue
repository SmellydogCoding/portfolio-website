<template lang="pug">
  v-container(text-xs-center)
    v-layout.mb-2(row wrap)
      v-flex(xs12)
        app-story
    v-layout(row wrap)
      v-flex(xs12 md6 lg4)
        app-code
      v-flex(xs12 md6 lg4)
        app-credentials
      v-flex(xs12 md6 lg4)
        app-connect
</template>

<script>
import Story from '../components/Story'
import Code from '../components/Code'
import Credentials from '../components/Credentials'
import Connect from '../components/Connect'

export default {
  name: 'sd-about',
  components: {
    appStory: Story,
    appCode: Code,
    appCredentials: Credentials,
    appConnect: Connect
  }
}
</script>
