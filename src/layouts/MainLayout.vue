<template lang="pug">
q-layout(view="lHh Lpr lFf")
  q-header.bg-white(elevated)
    q-toolbar
      q-btn.q-mr-sm(v-if="xsScreen" flat round dense icon="menu" color="dark" @click="drawer = !drawer")
      q-btn.q-pa-none(flat to="/")
        q-avatar
          img(src="../assets/sdlogo.png" alt="the smelly dog logo")
      q-toolbar-title.text-primary My Coding Portfolio
      template(v-if="!xsScreen")
        q-separator
        q-btn(color="secondary" text-color="white" label="About Me" to="/about")
        q-separator
        q-btn.q-ml-md(color="primary" text-color="white" label="Contact" to="/contact")
  drawer-menu(:drawer="drawer" @close="drawer = !drawer")
  q-page-container
    router-view(v-slot="{ Component }")
      transition(name="fade")
        component(:is="Component")
  q-footer.q-pa-sm(elevated)
    p.q-mb-none &copy; {{ new Date().getFullYear() }} Smellydog Coding
</template>

<script>
import { defineComponent, ref, computed } from 'vue'
import { useQuasar } from 'quasar'
import DrawerMenu from '../components/DrawerMenu'
export default defineComponent({
  name: 'MainLayout',
  components: { DrawerMenu },
  setup () {
    const drawer = ref(false)

    const $q = useQuasar()
    const xsScreen = computed(() => $q.screen.xs)

    return { drawer, xsScreen }
  }
})
</script>

<style lang="sass" scoped>
  .fade-enter-active, .fade-leave-active
    transition: opacity 0.5s ease
  .fade-enter-from, .fade-leave-to
    opacity: 0
</style>
