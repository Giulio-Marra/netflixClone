const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function () {
  searchInput.value = "";
  searchInput.classList.toggle("active");
});
