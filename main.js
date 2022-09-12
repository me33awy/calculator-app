const container = document.querySelector(".container");
const toggle = document.querySelector(".input-toggle input");
toggle.addEventListener("input", () => {
  switch (toggle.value) {
    case "1":
      container.classList.remove("theme-2", "theme-3");
      container.classList.add("theme-1");
      break;
    case "2":
      container.classList.remove("theme-1", "theme-3");
      container.classList.add("theme-2");
      break;
    case "3":
      container.classList.remove("theme-2", "theme-1");
      container.classList.add("theme-3");
      break;
  }
});
localStorage.setItem("theme", `theme-${toggle.value}`);
container.classList.add(localStorage.getItem("theme"));
