<template>
  <div
    @click.stop="handleBodyClick"
    class="fixed top-36 left-0 z-20 w-full h-full overflow-auto"
  >
    <div
      id="modal"
      class="relative bg-white t-56 mt-auto mx-auto p-4 border-2 md:border-1 border-gray-600 md:border-gray-50 w-2/3 rounded-sm md:rounded-md shadow-lg"
    >
      <FormSubmitMessage
        v-if="successMessage || errorMessage"
        language="fr"
        :success="successMessage"
        :error="errorMessage" />
      <div v-else>
        <h1
          class="text-sm md:text-base lg:text-base font-bold text-center lg:text-left font-captainbold my-3"
        >
          Il me faut juste un nom et un e-mail (pas de pub, juste des
          articles, promis !)
        </h1>
        <FormulateForm
          id="contact-form"
          @submit="handleSubmit"
          #default="{ hasErrors }"
        >
          <div class="flex flex-col justify-center items-center md:items-start">
            <FormulateInput
              name="name"
              type="text"
              placeholder="Nom et prénom"
              input-class="w-full focus:ring-2 focus:ring-teal-600 text-xs lg:text-sm focus:border-transparent"
              class="my-2"
              validation="required"
              error-behavior="submit"
            />
            <FormulateInput
              name="email"
              type="email"
              placeholder="E-mail"
              input-class="w-full focus:ring-2 focus:ring-teal-600 text-xs lg:text-sm focus:border-transparent"
              class="my-2"
              validation="required|email"
              error-behavior="submit"
            />
            <FormulateInput
              type="submit"
              :label="isLoading ? 'Bien reçu, je note cela...' : 'Me tenir au courant'"
              class="my-2 text-sm lg:text-lg font-cormorant w-fit px-3 py-1 border border-transparent md:border-black"
              :class=" hasErrors ? 'font-light md:cursor-none bg-teal-700 md:bg-gray-200 text-white md:text-gray-500 md:hover:cursor-not-allowed': 'transition ease-in text-black text-sm hover:border-transparent bg-white hover:bg-teal-700 hover:cursor-pointer hover:shadow-lg hover:text-white'"
            />
          </div>
        </FormulateForm>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";
import FormSubmitMessage from "../Form/FormSubmitMessage.vue"

export default {
  name: "journal-subscription-modal",
  components: {
    FormSubmitMessage
  },
  data() {
    return {
      errorMessage: false,
      isLoading: false,
      successMessage: false,
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
      await emailjs
        .send(
          "service_hoffucc",
          "template_gd526i8",
          templateParams,
          "zI57JYyitltBxG966"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            if (response.status === 200) this.successMessage = true;
          },
          (error) => {
            console.log("FAILED...", error);
            if (error) return (this.errorMessage = true);
          }
        );
      this.isLoading = false;
    },
  },
};
</script>
