const menu = document.querySelector(".icon");
const open = document.querySelector(".open");
const close = document.querySelector(".close");
const wrapper = document.querySelector(".wrapper");
open.addEventListener("click", () => {
  wrapper.classList.add("rotate-wrapper");
  menu.classList.add("rotate");
});

close.addEventListener("click", () => {
  wrapper.classList.remove("rotate-wrapper");
  menu.classList.remove("rotate");
});
