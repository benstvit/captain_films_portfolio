<template>
  <div>
    <select v-model="selectedOption">
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
        { value: "À L\'OEIL", label: "À l'Oeil" },
        { value: "À ÉCOUTER", label: "À Écouter" },
        { value: "À LIRE", label: "À Lire" },
        { value: "À VOIR", label: "À voir" },
      ],
    };
  },
  watch: {
    selectedOption(newValue) {
      this.$parent.$emit('filter', newValue);
    }
  }
};
</script>
