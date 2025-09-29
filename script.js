const movies = document.querySelectorAll(".movies img");
const series = document.querySelectorAll(".series img");

document.getElementById("showMovies").addEventListener("click", function() {
  movies.forEach(img => img.style.display = "inline-block");
  series.forEach(img => img.style.display = "none");
});
document.getElementById("showSeries").addEventListener("click", function() {
  series.forEach(img => img.style.display = "inline-block");
  movies.forEach(img => img.style.display = "none");
});
document.getElementById("showAll").addEventListener("click", function() {
  movies.forEach(img => img.style.display = "inline-block");
  series.forEach(img => img.style.display = "inline-block");
});
const body = document.querySelector("body");
document.getElementById("lightMode").addEventListener("click", function() {
  body.style.backgroundColor = "white";
  body.style.color = "black";
});
document.getElementById("darkMode").addEventListener("click", function() {
  body.style.backgroundColor = "black";
  body.style.color = "white";
});
