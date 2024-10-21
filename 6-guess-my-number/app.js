const secretNumber = document.querySelector(".number");
const icon = document.querySelector(".number ion-icon");
const guess = document.querySelector(".guess");
const btn = document.querySelector(".btn");
const desc = document.querySelector(".desc");
const newGame = document.querySelector(".new-game");
const guessDiv = document.querySelector(".guess-number");

let randomNumber = Math.trunc(Math.random() * 20 + 1);
console.log(newGame);

btn.addEventListener("click", () => {
  let userGuest = Number(guess.value);
  if (userGuest < 0 || userGuest > 20) {
    desc.textContent = "0 ile 20 arasında bir sayı gir!";
  } else {
    if (userGuest === randomNumber) {
      desc.textContent = "Doğru bildin 🏁";
      secretNumber.textContent = randomNumber;
      btn.style.pointerEvents = "none";
      guess.style.pointerEvents = "none";
      guess.style.opacity = 0.4;
      btn.style.opacity = 0.4;
    } else if (userGuest > randomNumber) {
      guess.value = "";
      desc.textContent = "Çok yüksek";
    } else if (userGuest < randomNumber) {
      guess.value = "";
      desc.textContent = "Çok düşük";
    }
  }
});

newGame.addEventListener("click", () => {
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  guess.value = "";
  desc.textContent = "";
  btn.style.pointerEvents = "all";
  guess.style.pointerEvents = "all";
  guess.style.opacity = 1;
  btn.style.opacity = 1;
  secretNumber.innerHTML = `<ion-icon name="help-outline"></ion-icon>`;
  console.log(randomNumber);
});
console.log(randomNumber);
