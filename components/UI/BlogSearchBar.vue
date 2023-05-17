<template>
  <div
    class="rounded-md border-none text-xs md:text-sm font-captainlight opacity-90 bg-transparent focus:ring-teal-600 hover:cursor-pointer w-32 md:w-48 px-2"
  >
    <input
      type="text"
      v-model="query"
      placeholder="Rechercher un article par mot-clef"
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
