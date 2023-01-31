<template>
  <div class="flex justify-center">
    <div class="flex flex-col justify-start items-start gap-4 h-52 w-2/3 m-4 p-4 bg-gray-100 rounded-sm shadow-md">
      <FormulateInput
         v-model="value"
        :options="{order: 'Order a photograph', question: 'Ask me a question', other: 'Talk about the weather or anything, really'}"
        type="select"
        placeholder="What do you want to talk about ?"
        label="Please choose the reason you are contacting me for (though you don't need any)"
      />
      <FormulateInput
        v-if="value === 'order'"
        v-model="photograph"
        :options="{order: 'Order a photograph', question: 'Ask me a question', other: 'Talk about the weather or anything, really'}"
        type="select"
        placeholder="Pick the photograph"
        label="Which photograph are you interested in?"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data () {
    return {
      photograph: '',
      value: ''
    }
  },
  watch: {
    value(newValue) {
      console.log(newValue)
    }
  }
}
</script>
