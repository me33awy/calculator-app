const body = document.querySelector("body");
const toggle = document.querySelector(".change input");
toggle.addEventListener("input", () => {
  switch (toggle.value) {
    case "1":
      body.classList.remove("theme_2", "theme_3");
      body.classList.add("theme_1");
      break;
    case "2":
      body.classList.remove("theme_1", "theme_3");
      body.classList.add("theme_2");
      break;
    case "3":
      body.classList.remove("theme_2", "theme_1");
      body.classList.add("theme_3");
      break;
  }
});
localStorage.setItem("theme", `theme_${toggle.value}`);
body.classList.add(localStorage.getItem("theme"));
