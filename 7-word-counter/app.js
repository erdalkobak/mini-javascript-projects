const text = document.querySelector(".text");
const word = document.querySelector(".word");
const letter = document.querySelector(".letter");

word.textContent = "Birşeyler yaz 👌";

text.addEventListener("input", () => {
  let wordArr = text.value
    .trim()
    .split(/[ ,]+/)
    .filter((wordArr) => wordArr !== "");

  let letterArr = text.value
    .split("")
    .filter((char) => char.match(/[a-zA-ZıİğĞüÜşŞöÖçÇ]/));

  word.textContent = `Bu metin ${wordArr.length} kelimeden oluşuyor.`;
  letter.textContent = `Bu metin ${letterArr.length} harften oluşuyor.`;
  if (!text.value) {
    word.textContent = "Birşeyler yazmanı bekliyorum 🤷‍♂️";
    letter.textContent = " ";
  }
});
