<template>
  <div
    class="font-captainlight opacity-90 flex justify-center items-center gap-2"
  >
    <SearchSvg />
    <input
      class="text-xs md:text-sm text-left rounded-md border-none focus:ring-0 hover:cursor-text w-fit p-1"
      type="text"
      v-model="query"
      placeholder="Rechercher un article..."
    />
  </div>
</template>

<script>
import SearchSvg from  '../svg/SearchSvg.vue';

export default {
  name: "blog-search-bar",
  inject: ["filter"],
  components: {
    SearchSvg
  },
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
