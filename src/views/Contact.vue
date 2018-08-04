<template lang="pug">
  v-container(text-xs-center)
    v-layout(row wrap)
      v-flex(xs12 md6 offset-md3)
        form(@submit.prevent="submit")
          h1.my-2 Send Me a Message
          v-text-field(v-model="name" :error-messages="nameErrors" label="Name" required @input="$v.name.$touch()" @blur="$v.name.$touch()" solo)
          v-text-field(v-model="email" :error-messages="emailErrors" label="E-mail" required @input="$v.email.$touch()" @blur="$v.email.$touch()" solo)
          v-textarea(v-model="message" :error-messages="messageErrors" label="What's on your mind?" required @input="$v.message.$touch()" @blur="$v.message.$touch()" solo)
          v-btn(@click="submit" color="success") Submit
          v-btn(@click="clear" color="info") Clear
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  mixins: [validationMixin],
  validations: {
    name: { required },
    email: { required, email },
    message: { required }
  },
  computed: {
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Please enter a valid e-mail.')
      !this.$v.email.required && errors.push('E-mail is required.')
      return errors
    },
    messageErrors () {
      const errors = []
      if (!this.$v.message.$dirty) return errors
      !this.$v.message.required && errors.push('A message is required.')
      return errors
    }
  },
  methods: {
    submit () {
      this.$v.$touch()
      if (this.$v.$invalid) {console.log('invalid')}
      else {console.log('submit')}
    },
    clear () {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.message = ''
    }
  }
}
</script>

<style>
.container {
  display: flex;
  align-items: center;
}
</style>
