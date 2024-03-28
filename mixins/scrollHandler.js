export default {
  name: 'scroll-handler',
  data() {
    return {
      isScrolling: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.getOffsetTop);
  },
  destroyed() {
    window.removeEventListener("scroll", this.getOffsetTop);
  },
  methods: {
    getOffsetTop() {
      const navbarY = document.getElementById("navbar").getBoundingClientRect().y;
      const innerWidth = window.innerWidth;
      const threshold = innerWidth < 768 ? -4 : -10;
      return navbarY <= threshold ? this.isScrolling = true : this.isScrolling = false;
    },
  }
}
