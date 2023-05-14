<template>
  <div class="mx-2">
    <select
      class="rounded-md focus:ring-none border-none font-captainlight opacity-90 bg-transparent hover:cursor-pointer px-2 w-52"
      v-model="selectedOption"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "blog-filter",
  data() {
    return {
      selectedOption: "",
      options: [
        { value: "tout", label: "Tout" },
        { value: "À L'OEIL", label: "À l'Oeil" },
        { value: "À ÉCOUTER", label: "À Écouter" },
        { value: "À LIRE", label: "À Lire" },
        { value: "À VOIR", label: "À voir" },
      ],
    };
  },
  watch: {
    selectedOption(newValue) {
      this.$parent.$emit("filter", newValue);
    },
  },
};
</script>
