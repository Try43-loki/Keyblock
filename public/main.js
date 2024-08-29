const btn = document.querySelector("#btn-dropdown");
const list = document.querySelector("#dropdown");
var conut = 0;
btn.addEventListener("click", () => {
  list.classList.toggle("top-[-496%]");
  list.classList.toggle("opacity-0");
  list.classList.toggle("top-[50px]");
  list.classList.toggle("opacity-100");
});
