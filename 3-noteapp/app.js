const btn = document.querySelector(".btn");
const notes = document.querySelector(".container");

btn.addEventListener("click", () => {
  //create element
  const page = document.createElement("div");
  const head = document.createElement("input");
  const text = document.createElement("textarea");
  const icon = document.createElement("ion-icon");
  const iconcheck = document.createElement("ion-icon");
  //create element

  notes.appendChild(page);
  page.appendChild(head);
  head.setAttribute("placeholder", "Başlık giriniz");
  page.appendChild(text);
  page.appendChild(icon);
  page.appendChild(iconcheck);

  icon.setAttribute("name", "close-outline");
  iconcheck.setAttribute("name", "checkmark-done-outline");

  // Close func
  icon.addEventListener("click", () => {
    page.remove();
  });
  // Close func

  //Done func
  iconcheck.addEventListener("click", () => {
    page.style.textDecoration = "line-through";
    head.style.opacity = 0.4;
    text.style.opacity = 0.4;
    iconcheck.style.opacity = 0.4;
    page.style.pointerEvents = "none";
    icon.style.pointerEvents = "all";
    icon.style.opacity = 2;
  });
  //Done func
});
