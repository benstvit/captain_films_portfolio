<template>
  <div
    class="self-end"
  >
    <div class="flex justify-center items-center gap-2">
      <SearchSvg />
      <input
        class="font-captainlight text-xs md:text-sm text-left rounded-md border-none focus:ring-0 hover:cursor-text w-fit p-1"
        type="text"
        v-model="query"
        placeholder="Rechercher un article..."
      />
    </div>
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
