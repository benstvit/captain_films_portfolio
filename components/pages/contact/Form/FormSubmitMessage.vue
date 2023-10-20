<template>
  <section>
    <div v-if="success" class="flex flex-col justify-center items-center gap-4">
      <ConfettiSvg />
      <div v-if="language === 'en'">
        <h1 class="text-2xl font-captainbold">Thank you !</h1>
        <p class="text-md font-captainlight">Your message was successfuly sent! I will get back to you ASAP.</p>
      </div>
      <div v-else>
        <p class="text-md font-captainlight">C'est noté ! Un grand merci et à bientôt 👋</p>
      </div>
    </div>
    <div v-if="error" class="flex flex-col justify-center items-center gap-4">
      <ErrorSvg />
      <div v-if="language === 'en'">
        <h1 class="text-2xl font-captainbold">Oops!</h1>
        <p class="text-md font-captainlight">Something went wrong ! Check your connection or try again. 🙏</p>
      </div>
      <div v-else>
        <h1 class="text-2xl font-captainbold">Oops!</h1>
        <p class="text-md font-captainlight">Quelque chose a buggé. Réessaye ou vérifie ta connexion 🙏</p>
      </div>
    </div>
  </section>
</template>

<script>
import ConfettiSvg from '../../../svg/ConfettiSvg.vue'
import ErrorSvg from '../../../svg/ErrorSvg.vue'

export default {
  name: 'FormSubmitMessage',
  components: {
    ConfettiSvg,
    ErrorSvg
  },
  props: {
    language: {
      type: String,
      default: 'en'
    },
    success: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    }
  }
}
</script>
