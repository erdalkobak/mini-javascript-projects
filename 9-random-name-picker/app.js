const input = document.querySelector(".input");
const addBtn = document.querySelector(".add");
const shakeBtn = document.querySelector(".shake");
const resetBtn = document.querySelector(".reset");
const chosen = document.querySelector(".chosen");
const nameList = document.querySelector(".name-list");
let names = [];

addBtn.addEventListener("click", () => {
  const name = document.createElement("li");
  nameList.appendChild(name);
  name.textContent = input.value;
  names.push(name.textContent);
  console.log(names);
  input.value = "";

  if (names.length > 19) {
    input.style.pointerEvents = "none";
    alert("En fazla 20 kişi ekleyebilirsin.");
  }
});

shakeBtn.addEventListener("click", () => {
  let randomNumber = Math.floor(Math.random() * names.length);
  console.log(randomNumber);
  chosen.textContent = `${names[randomNumber]} 😍`;
});

resetBtn.addEventListener("click", () => {
  chosen.textContent = "";
  nameList.textContent = "";
  names = [];
  input.style.pointerEvents = "all";
});
