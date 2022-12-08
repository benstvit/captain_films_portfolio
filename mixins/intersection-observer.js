export default {
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry.isIntersecting);
        if (entry.isIntersecting) {
          this.scrollOn = true;
        }
        observer.unobserve(entry.target)
      })
    })

    observer.observe(document.getElementById('captain-logo'));
  }
}
