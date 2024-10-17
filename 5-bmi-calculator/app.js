const arrow = document.querySelector(".arrow-icon");
const bmi = document.querySelector(".bmi");
const desc = document.querySelector(".desc");
const btn = document.querySelector(".btn");
// console.log(arrow, bmi);

btn.addEventListener("click", () => {
  let weight = prompt("Kg cinsinden kilonuzu giriniz?");
  let height = prompt("Mt cinsinden boyunuzu giriniz?");

  function calcBMI(kg, h) {
    h = h / 100;
    return kg / (h * h);
  }

  let BMI = Number(calcBMI(weight, height).toFixed(1));
  console.log(BMI);

  if (BMI <= 16) {
    desc.classList = "";
    desc.classList.add("severe");
    bmi.textContent = `BMI Değerin ${BMI}`;
  } else if (16 <= BMI && BMI < 17) {
    desc.classList = "";
    desc.classList.add("moderate");
    bmi.textContent = `BMI Değerin ${BMI}`;
  } else if (17 <= BMI && BMI <= 19) {
    desc.classList = "";
    desc.classList.add("mild");
    bmi.textContent = `BMI Değerin ${BMI}`;
  } else if (19 <= BMI && BMI <= 25) {
    desc.classList = "";
    desc.classList.add("normal");
    bmi.textContent = `BMI Değerin ${BMI}`;
  } else if (26 <= BMI && BMI <= 30) {
    desc.classList = "";
    desc.classList.add("over");
    bmi.textContent = `BMI Değerin ${BMI}`;
  } else if (31 <= BMI && BMI <= 35) {
    desc.classList = "";
    desc.classList.add("obese-1");
    bmi.textContent = `BMI Değerin ${BMI}`;
  } else if (36 <= BMI && BMI <= 40) {
    desc.classList = "";
    desc.classList.add("obese-2");
    bmi.textContent = `BMI Değerin ${BMI}`;
  } else if (BMI > 40) {
    desc.classList = "";
    desc.classList.add("obese-3");
    bmi.textContent = `BMI Değerin ${BMI}`;
  }
});
