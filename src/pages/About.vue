<template lang="pug">
q-page
  banner(:overlay="overlay" :background="background" :alt="alt" :position="position" :quote="quote" :attribution="attribution")
  div.row
    div.col-12.q-px-md
      p.q-mb-none.q-my-lg.text-h6.text-secondary.text-center The Smellydog Story
      p.text-body1 My wife is a cat person.&nbsp;&nbsp;As such, it is her belief that 'dogs smell'.&nbsp;&nbsp;When she tells me this, my response is always 'yes, they smell like dogs.'&nbsp;&nbsp;Of course, I'm a dog person so it's probably not much of a surprise that I don't think that most dogs smell bad (though I have met some very fragrant exceptions over the years.)
      p.text-body1 I'm a lot like a dog in many ways.&nbsp;&nbsp;I'm protective of my friends and loved ones, I tend to 'follow my nose', I have a tendancy to 'herd' my wife through the parking lot (which has annoyed her on more than one occasion), and I tend to be a happy-go-lucky (and at times a bit derpy) kind of guy.
      p.text-body1 It is for these reasons (and probably more) that my wife refers to me as her 'big smelly sheepdog'.&nbsp;&nbsp;When it was time to create my website, I decided that a big smelly dog that strives to write clean code made for a good theme.  Thus Smellydog Coding was born.
      p.text-body1 I would like to point out that I don't actually smell (most days) since I do bathe regularly.&nbsp;&nbsp;Taco Thursday is another story...
      p.text-body1 I've always been interested in technology (read: computer geek), but my current career (and life) took me in a different direction.&nbsp;&nbsp;When I starting getting more serious about software development, I thought that I wanted to change careers and be a full time developer.&nbsp;&nbsp;However, after exploring that avenue I decided that a software development career may not be for me.&nbsp;&nbsp;That's OK, because it turns out that there are lots of ways to use software in public health.
</template>

<script>
import { defineComponent } from 'vue'
import Banner from '../components/Banner'
export default defineComponent({
  name: 'About',
  components: { Banner },
  setup () {
    const overlay = 'about-banner-background'
    const background = require('../assets/sdlogo-banner.png')
    const alt = 'the smelly dog logo, only bigger'
    const position = '0px 50px'
    const quote = 'I\'m not insane, my mother had me tested.'
    const attribution = 'Dr. Sheldon Cooper'

    return { overlay, background, alt, position, quote, attribution }
  }
})
</script>
