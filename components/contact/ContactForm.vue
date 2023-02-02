<template>
  <section>
    <div class="w-full rounded-sm bg-white text-center font-captainlight text-md leading-loose my-4 p-4 bg-gray-100">
      <p class="py-4">
        <span class="text-lg font-bold font-captainbold py-4">Why film photography ?</span><br>
        Each photograph has its own identity, its history and is therefore <b>unique</b>.<br>
        More than a simple snapshot, it becomes the product of a reflective work.<br>
        This idea of ​​uniqueness transpires in the meticulousness that I bring to the development, printing and framing of my photographs.
      </p>
    </div>
    <div class="flex flex-col justify-between items-center gap-4 m-4 p-8 bg-white">
      <div>
        <h1 class="text-2xl font-captainbold my-4">
          Fill in this form if you wish to adopt a photograph:
        </h1>
        <FormulateForm
          @submit="submitHandler"
          #default="{ hasErrors }"
          >
            <div class="flex justify-between items-start lg:gap-12 flex-wrap">
              <FormulateInput
              name="email"
              type="email"
              label="Please leave me your e-mail so I can contact you back"
              placeholder="Email address"
              input-class="w-2/3"
              class="mb-6 mt-2"
              validation="required|email"
            />
            <FormulateInput
              v-model="reason"
              name='reason'
              :options="{question: 'Ask a question / get more info', order: 'Order a photograph', other: 'Talk about the weather or anything, really'}"
              type="select"
              placeholder="What do you want to talk about ?"
              label="Please choose the reason you are contacting me for (though you don't need any)"
              label-class="font-captainlight text-sm whitespace-normal"
              input-class="w-fit"
              class="mb-6 mt-2 items-end"
            />
            </div>
          <FormulateInput
            type="textarea"
            v-model="text"
            name="message"
            label="Write your message here. I will get back to you ASAP"
            label-class="py-2 font-captainlight text-sm"
            input-class="w-full h-36"
            class="mb-4"

          />
          <FormulateInput
            type="submit"
            label="Send message"
            :class="hasErrors ? 'font-light cursor-none bg-gray-200 text-gray-500 hover:cursor-not-allowed' : 'transition ease-in text-black hover:border-transparent bg-white hover:bg-teal-700 hover:cursor-pointer hover:shadow-lg hover:text-white'"
            class="text-xl font-cormorant w-fit px-4 py-2 border border-black"
          />
        </FormulateForm>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactPage',
  data () {
    return {
      text: '',
      reason: ''
    }
  },
  computed: {
    test() {
      return 'captainfilmbold text-pink-900'
    }
  },
  watch: {
    value(newValue) {
      console.log(newValue)
    }
  }
}
</script>
