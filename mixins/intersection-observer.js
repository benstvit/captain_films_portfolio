export default {
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("visible");
        }
        observer.unobserve(entry.target);
      })
    })
    observer.observe(document.getElementById('bandHorizontalScroll'));
  }
}
