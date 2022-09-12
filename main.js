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

const result = document.querySelector(".result input");
const numbers = document.querySelectorAll('.keypad button[aria-label = "num"]');
const operations = document.querySelectorAll(
  '.keypad button[aria-label = "operation"'
);
const equal = document.querySelector('.keypad button[aria-label = "equal"');
const reset = document.querySelector('.keypad button[aria-label = "reset"');
const del = document.querySelector('.keypad button[aria-label="del"]');
numbers.forEach((num) => {
  num.addEventListener("click", () => {
    result.value += num.value;
  });
});
operations.forEach((op) => {
  op.addEventListener("click", () => {
    result.value += op.innerText;
  });
  equal.addEventListener("click", () => {
    let arr = result.value.split(op);
    result.value = eval(arr.join());
  });
  reset.addEventListener("click", () => {
    result.value = "";
  });
  del.addEventListener("click", () => {
    const arr = result.value.split("");
    result.value = result.value.substring(0, arr[arr.length - 1]);
  });
});
