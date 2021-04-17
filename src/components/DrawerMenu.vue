<template lang="pug">
q-drawer(v-model="drawer" :width="200" :breakpoint="500" overlay)
  q-list
    q-item
      q-item-section
        q-avatar
          img(src="../assets/sdlogo.png" alt="the smelly dog logo")
      q-item-section.text-center.text-bold.text-primary Menu
      q-item-section(side)
        q-btn(flat round icon="close" @click="$emit('close')")
    q-item(clickable v-for="item in menu" :key="item" :active="isCurrent(item.name)" v-ripple @click="navigate(item.to)")
      q-item-section(avatar)
        q-icon(:name="item.icon")
      q-item-section {{ item.name }}
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'Drawer Menu',
  props: {
    drawer: Boolean
  },
  setup (props, { emit }) {
    const menu = [
      { name: 'Home', icon: 'home', to: '/' },
      { name: 'About', icon: 'pets', to: '/about' },
      { name: 'Contact', icon: 'email', to: '/contact' }
    ]

    const router = useRouter()
    const navigate = (to) => {
      router.push(to)
      emit('close')
    }

    const isCurrent = (itemName) => {
      const routeName = router.currentRoute.value.name
      return itemName === routeName
    }

    return { menu, isCurrent, navigate }
  }
})
</script>
