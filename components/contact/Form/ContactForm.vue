<template>
  <section>
    <div class="w-max-full bg-gray-100 shadow-inner text-center font-captainlight text-xs md:text-sm lg:text-base leading-loose mx-6 lg:mx-0 lg:my-2 p-2">
      <p class="py-4 font-cormorant text-sm md:text-base lg:text-lg">
        <span class="text-xs md:text-base lg:text-lg not-italic font-captainbold pb-8">Why film photography ?</span><br>
        Each photograph has its own identity, its history and is therefore <span class="text-teal-700">unique</span>.<br>
        More than a simple snapshot, it becomes the product of a reflective work.<br>
        This idea of ​​uniqueness transpires in the meticulousness that I bring to the development, printing and framing of my photographs.
      </p>
    </div>
    <div class="flex flex-col justify-between items-center gap-4 m-4 p-4 bg-white">
      <FormSubmitMessage
        v-if="successMessage || errorMessage"
        :success="successMessage"
        :error="errorMessage" />
      <div v-else>
        <h1 class="text-lg md:text-xl lg:text-2xl text-center lg:text-left font-captainbold my-4">
          Fill in this form if you wish to adopt a photograph:
        </h1>
        <FormulateForm
          id="contact-form"
          @submit="handleSubmit"
          #default="{ hasErrors }"
          >
            <div class="flex justify-between items-start lg:gap-12 flex-wrap">
              <FormulateInput
              name="email"
              type="email"
              label="Please leave me your e-mail so I can contact you back"
              placeholder="Email address"
              label-class="font-captainlight text-xs lg:text-sm whitespace-normal"
              input-class="w-2/3 focus:ring-2 focus:ring-teal-600 text-xs lg:text-sm focus:border-transparent"
              class="mb-6 mt-2"
              validation="required|email"
              error-behavior="submit" />
            <FormulateInput
              v-model="reason"
              name='reason'
              :options="{question: 'Ask a question / get information', order: 'Order a photograph', other: 'Talk about the weather or anything, really'}"
              type="select"
              placeholder="What do you want to talk about?"
              label="Please choose the reason you are contacting me for (though you don't need any)"
              label-class="font-captainlight text-xs lg:text-sm whitespace-normal"
              input-class="w-fit focus:ring-2 text-xs lg:text-sm focus:ring-teal-600 focus:border-transparent"
              class="mb-6 mt-2 items-end"
            />
            </div>
          <FormulateInput
            type="textarea"
            v-model="text"
            name="message"
            label="Write your message here. I will get back to you ASAP"
            label-class="font-captainlight text-xs lg:text-sm"
            input-class="w-full h-36 focus:ring-2 text-xs lg:text-sm focus:ring-teal-600 focus:border-transparent"
            class="mb-4"
            validation="required|min:10"
          />
          <FormulateInput
            type="submit"
            :label="isLoading ? 'Sending message...' : 'Send message'"
            :class="hasErrors ? 'font-light md:cursor-none bg-teal-700 md:bg-gray-200 text-white md:text-gray-500 md:hover:cursor-not-allowed' : 'transition ease-in text-black hover:border-transparent bg-white hover:bg-teal-700 hover:cursor-pointer hover:shadow-lg hover:text-white'"
            class="text-base md:text-lg lg:text-xl font-cormorant w-fit px-4 py-2 border border-transparent md:border-black"
          />
        </FormulateForm>
      </div>
    </div>
  </section>
</template>

<script>
import emailjs from '@emailjs/browser'
import FormSubmitMessage from '../Form/FormSubmitMessage.vue'

export default {
  name: 'ContactPage',
  data () {
    return {
      errorMessage: false,
      isLoading: false,
      reason: '',
      successMessage: false,
      text: ''
    }
  },
  components: {
    FormSubmitMessage
  },
  methods: {
    async handleSubmit(event) {
      this.isLoading = true;
      const templateParams = event;
      await emailjs.send('service_hoffucc', 'contact_form', templateParams, 'zI57JYyitltBxG966')
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          if (response.status === 200) this.successMessage = true;
        }, (error) => {
          console.log('FAILED...', error);
          if (error) return this.errorMessage = true;
        })
      this.isLoading = false;
    }
  },
  mounted() {
    if (window.scrollY === 0 ) {
      setTimeout(() => {
        const form = document.getElementById('contact-form');
        form.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  }
}
</script>
