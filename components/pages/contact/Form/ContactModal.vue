<template>
  <div
    @click.stop="handleBodyClick"
    class="fixed top-36 left-0 z-20 w-full h-full overflow-auto"
  >
    <div
      id="modal"
      class="relative bg-white t-56 mt-auto mx-auto p-4 border-2 md:border-1 border-gray-600 md:border-black md:border-2 w-2/3 rounded-sm md:rounded-none shadow-md"
    >
      <span
        @click="closeModal()"
        class="absolute -top-1 right-2 md:top-1 md:right-3 hover:text-black cursor-pointer text-gray-700 float-right font-bold text-2xl md:text-4xl"
        >&times;</span
      >
      <FormSubmitMessage
        v-if="successMessage || errorMessage"
        :success="successMessage"
        :error="errorMessage"
        language="fr" />
      <div v-else>
        <h1 class="text-lg md:text-xl lg:text-2xl text-center lg:text-left font-captainbold my-4">
          Remplissez ce formulaire pour me contacter 👇 :
        </h1>
        <FormulateForm
          id="contact-form"
          @submit="handleSubmit"
          #default="{ hasErrors }"
          >
            <FormulateInput
            name="email"
            type="email"
            label="Votre e-mail:"
            label-class="font-captainlight text-xs lg:text-sm whitespace-normal"
            input-class="w-full md:w-2/3 focus:ring-2 focus:ring-teal-600 text-xs lg:text-sm focus:border-transparent"
            class="mb-6 mt-2 w-1/2"
            validation="required|email"
            error-behavior="submit" />
            <FormulateInput
              type="textarea"
              v-model="text"
              name="message"
              label="Parlez-moi de votre projet (un site vitrine ? un site d'e-commerce... ?):"
              label-class="font-captainlight text-xs lg:text-sm"
              input-class="w-full h-36 focus:ring-2 text-xs lg:text-sm focus:ring-teal-600 focus:border-transparent"
              class="mb-4"
              validation="required|min:10"
            />
            <FormulateInput
              type="submit"
              :label="isLoading ? 'En cours d\'envoi...' : 'Envoyer le message'"
              :class="hasErrors ? 'font-light md:cursor-none bg-teal-700 md:bg-gray-200 text-white md:text-gray-500 md:hover:cursor-not-allowed' : 'transition ease-in text-black hover:border-transparent bg-white hover:bg-teal-700 hover:cursor-pointer hover:shadow-lg hover:text-white'"
              class="text-base md:text-lg lg:text-xl font-cormorant w-fit px-4 py-2 border border-transparent md:border-black"
            />
        </FormulateForm>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";
import FormSubmitMessage from "../Form/FormSubmitMessage.vue";

export default {
  name: "contact-modal",
  components: {
    FormSubmitMessage,
  },
  data() {
    return {
      errorMessage: false,
      isLoading: false,
      successMessage: false,
      text: ''
    };
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
    handleBodyClick(event) {
      const modal = document.getElementById("modal");
      if (event.target.closest("#modal") !== modal) {
        this.closeModal();
      }
    },
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
};
</script>
