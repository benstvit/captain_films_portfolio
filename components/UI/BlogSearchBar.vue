<template>
  <div
    class="font-captainlight opacity-90"
  >
    <input
      class="text-xs md:text-sm text-center rounded-sm focus:border-teal-600 focus:ring-0 hover:cursor-text w-fit px-4"
      type="text"
      v-model="query"
      placeholder="Rechercher un article"
    />
  </div>
</template>

<script>
export default {
  name: "blog-search-bar",
  inject: ["filter"],
  data() {
    return {
      query: "",
    };
  },
  watch: {
    query(newValue) {
      this.filter(null, newValue);
    },
  },
};
</script>
