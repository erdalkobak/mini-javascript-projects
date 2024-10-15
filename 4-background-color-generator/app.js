const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  let random = Math.trunc(Math.random() * 255 + 1);
  let random2 = Math.trunc(Math.random() * 255 + 1);
  let random3 = Math.trunc(Math.random() * 255 + 1);

  document.body.style.backgroundColor = `rgb(${random},${random2},${random3})`;
  color.innerHTML = document.body.style.backgroundColor;
});
