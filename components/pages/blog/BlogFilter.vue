<template>
  <div class="flex justify-between items-center gap-1">
    <FilterSvg />
    <select
      class="rounded-md border-none text-xs md:text-sm font-captainlight opacity-90 bg-transparent focus:ring-teal-600 hover:cursor-pointer w-32 md:w-48 px-2"
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
import FilterSvg from '../../svg/FilterSvg.vue';

export default {
  name: "blog-filter",
  components: {
    FilterSvg
  },
  data() {
    return {
      selectedOption: "",
      options: [
        { value: "tout", label: "Tous les articles" },
        { value: "À GARDER À L'OEIL", label: "À garder à l'oeil" },
        { value: "À ÉCOUTER", label: "À écouter" },
        { value: "À VOIR", label: "À voir" },
      ],
    };
  },
  watch: {
    selectedOption(newValue) {
      this.$parent.$emit("filter", newValue);
    },
  },
  mounted() {
    this.selectedOption = this.options[0].value;
  }
};
</script>
