<template lang="pug">
  v-container(text-xs-center)
    v-layout(row wrap)
      v-flex(xs12)
        h1.mb-2 404 - Page Not Found
        img(src="https://media.giphy.com/media/ePsV4lBfsrPmo/giphy.gif" alt="confused puppies")
        p.my-4 Sorry, but that page you were looking for is not part of this website.&nbsp;&nbsp;Please click the back button or choose on the menu options above.&nbsp;&nbsp;I you believe that you are seeing this message in error (and this should be an actual page) please #[a(href="mailto:smellydogcoding@gmail.com") email me] and let me know.
</template>

<style scoped lang="scss">
  h1 {
    margin-top: 49px;
    @media screen and (min-width: 960px) {
      margin-top: 57px;
    }
  }
  /* resize image for very small ( width < 400px ) devices */
  img {
    max-width: 100%;
  }
</style>
