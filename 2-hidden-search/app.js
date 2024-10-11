const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  input.classList.toggle("active");
  btn.classList.toggle("transform");
});
