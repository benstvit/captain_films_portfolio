<template>
  <div class="flex flex-col justify-center items-start m-4 p-8">
    <h1 class="font-captainbold text-3xl py-4">Contact me</h1>
    <div class="flex flex-col justify-center items-start gap-6 h-fit w-1/2">
     <FormulateForm>
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
          label-class="font-captainlight text-sm"
          input-class="w-fit"
          class="mb-6 mt-2"
        />
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
          class="text-xl transition ease-in hover:cursor-pointer hover:shadow-lg hover:text-white text-black hover:border-transparent border border-black w-fit bg-white hover:bg-teal-700 font-cormorant px-4 py-2"
        />
     </FormulateForm>
    </div>
  </div>
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
