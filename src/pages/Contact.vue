<template lang="pug">
q-page
  div.row
    div.col-12.q-px-md
      p.q-mb-none.q-mt-md.text-h6.text-secondary.text-center Wooooof Bork Yip Yip?*
  div.row.q-mx-md
    div.col-xs-12.col-sm-4.offset-sm-4
      p.q-mt-md.text-body2 *translation: What's on your mind?
      q-input(v-model="name" ref="nameRef" label="Name" outlined :rules="nameRules")
      q-input.q-pt-md(v-model="email" ref="emailRef" label="Email" outlined :rules="emailRules")
      q-input.q-pt-md(v-model="message" ref="messageRef" label="Message" type="textarea" outlined :rules="messageRules")
      div.text-center
        q-btn(color="primary" label="submit" :loading="sending" @click="submit" :disabled="submitDisabled")
      q-banner.q-mt-md.text-center(:class="bannerConfig.class" v-if="status === 'success' || status === 'fail'")
        div.text-white.text-subtitle1.q-mx-auto(v-html="bannerConfig.message")
        q-btn.item-center(v-if="status === 'fail'" color="primary" label="Please Email Me" to="mailto:smellydogcoding@gmail.com")
</template>

<script>
import { defineComponent, ref, computed, onMounted } from 'vue'
import emailjs from 'emailjs-com'
export default defineComponent({
  name: 'Contact',
  setup () {
    const name = ref(null)
    const nameRef = ref(null)
    const email = ref(null)
    const emailRef = ref(null)
    const message = ref(null)
    const messageRef = ref(null)
    const ipData = ref({})
    const sending = ref(false)
    const status = ref('')

    const nameRegex = /^[a-z\d\s,.'-]+$/i
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    const nameValid = computed(() => name.value && nameRegex.test(name.value))
    const emailValid = computed(() => email.value && emailRegex.test(email.value))
    const messageValid = computed(() => message.value && message.value.length > 0)

    const submitDisabled = computed(() => !nameValid.value || !emailValid.value || !messageValid.value)

    const nameRules = [() => nameValid.value || 'Please enter a name.  No special characters allowed except , . - or \'']
    const emailRules = [() => emailValid.value || 'Please enter a valid email']
    const messageRules = [() => messageValid.value || 'Please type a message']

    const bannerConfig = computed(() => {
      let config = {}
      switch (status.value) {
        case 'success': config = { class: 'bg-positive', message: 'Success!&nbsp;&nbsp;Your message was received.' }
          break
        case 'fail': config = { class: 'bg-negative', message: 'Bummer!&nbsp;&nbsp;There was an error and your message was not received.&nbsp;&nbsp;Please try again.&nbsp;&nbsp;If you see this message repeatedly:' }
          break
        default: config = { class: 'bg-primary', message: '' }
      }
      return config
    })

    const submit = () => {
      sending.value = true
      status.value = ''

      const emailTemplateParams = {
        contactFormName: 'Portfolio Website',
        from_name: name.value,
        from_email: email.value,
        message: message.value,
        ipAddress: ipData.value.ip,
        ipHostName: ipData.value.hostname,
        ipOrganization: ipData.value.org,
        ipCity: ipData.value.city,
        ipRegion: ipData.value.region,
        ipZipcode: ipData.value.postal,
        ipCountry: ipData.value.country,
        ipCoords: ipData.value.loc,
        ipTimezone: ipData.value.timezone
      }

      emailjs.send(process.env.VUE_APP_EMAILJS_SERVICE_ID, process.env.VUE_APP_EMAILJS_TEMPLATE_ID, emailTemplateParams, process.env.VUE_APP_EMAILJS_USERID)
        .then((result) => {
          sending.value = false
          status.value = 'success'
          console.log('SUCCESS!', result.status, result.text)
          clearForm()
        }, (error) => {
          sending.value = false
          status.value = 'fail'
          console.log('FAILED...', error)
        })
    }

    const clearForm = () => {
      name.value = null
      email.value = null
      message.value = null
      // clearing the form will make computed methods run, triggering validation
      // wait 1ms for the computed methods to run then call reset validation
      setTimeout(() => {
        nameRef.value.resetValidation()
        emailRef.value.resetValidation()
        messageRef.value.resetValidation()
      }, 1)
    }

    onMounted(() => {
      // Get IP Address of user which is submitted with the form data
      fetch('https://ipinfo.io/json?token=' + process.env.VUE_APP_IPINFO_TOKEN)
        .then((data) => { return data.json() })
        .then(ip => { ipData.value = ip })
    })

    return { name, nameRef, email, emailRef, message, messageRef, sending, nameRules, emailRules, messageRules, submit, submitDisabled, status, bannerConfig }
  }
})
</script>
