<template>
  <div class="flex justify-center items-center gap-0 md:gap-1">
    <FilterSvg width="h-4 w-4 md:h-6 md:w-6" class="h-auto opacity-90" />
    <select
      class="rounded-md border-none text-xs md:text-sm lg:text-base font-cormorant opacity-90 bg-transparent focus:ring-teal-600 hover:cursor-pointer w-fit pr-8 pl-2"
      v-model="selectedOption"
    >
      <optgroup>
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </optgroup>
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
        { value: "SPEED PORTRAIT", label: "Speed portrait" },
        { value: "À ÉCOUTER", label: "À écouter" },
        { value: "À VOIR", label: "À voir" },
        { value: "CARNET DE VOYAGE", label: "Carnet de voyage" }
      ],
    };
  },
  watch: {
    selectedOption(newValue) {
      this.$parent.$emit('filter', newValue);
    },
  },
  mounted() {
    this.selectedOption = this.options[0].value;
  }
};
</script>
