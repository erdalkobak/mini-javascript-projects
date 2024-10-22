let h = document.querySelector(".hour");
let m = document.querySelector(".minute");
let s = document.querySelector(".second");
let d = document.querySelector(".day");
const daysOfWeek = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];
const monthsOfYear = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
];
setInterval(myTimer, 1000);
function myTimer() {
  const now = new Date();
  h.textContent = String(now.getHours()).padStart(2, "0");
  m.textContent = String(now.getMinutes()).padStart(2, "0");
  s.textContent = String(now.getSeconds()).padStart(2, "0");
  let weekN = daysOfWeek[now.getDay()];
  let monthN = monthsOfYear[now.getMonth()];
  let dayN = now.getDate();
  d.textContent = `${dayN} ${monthN} , ${weekN}`;
}
