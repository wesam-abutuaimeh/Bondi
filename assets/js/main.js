// Preloader
const preloader = document.getElementById("preloader");
window.onload = document.onreadystatechange = () => {
  document.readyState === "loading"
    ? (preloader.style.display = "flex")
    : (preloader.style.display = "none");
};

// Gallery Section
const filter = document.getElementById("filter");
const gallery = Array.from(document.querySelectorAll(".box"));
function handleFilterClick(event) {
  const selectedTarget = event.target.innerHTML;
  gallery.forEach((galleryItem) => {
    if (selectedTarget === "all") {
      galleryItem.style.display = "block";
    } else {
      galleryItem.style.display = "none";
      if (galleryItem.dataset.target === selectedTarget) {
        galleryItem.style.display = "block";
      }
    }
  });
}
filter.addEventListener("click", handleFilterClick);

// Blog Section
const loadBlogArticles = document.querySelector(".blog .load-more-btn");
const blogArticles = document.querySelectorAll(
  ".blog .box[data-display='none']"
);
loadBlogArticles.addEventListener("click", () => {
  loadBlogArticles.classList.toggle("open");
  const isOpen = loadBlogArticles.classList.contains("open");
  loadBlogArticles.textContent = isOpen ? "show less" : "show STORIES";
  blogArticles.forEach((article) => article.classList.toggle("show"));
});

const copyrightYear = new Date().getFullYear();
document.querySelector(".copyright-year").textContent = copyrightYear;
