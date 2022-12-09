export default {
  mounted() {
    const bandBanner = document.getElementById('bandBanner');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry.isIntersecting);
        }
        observer.unobserve(entry.target);
      })
    }, { threshold: .6 })
    observer.observe(bandBanner);
  }
}
