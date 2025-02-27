function toggleMenu() {
  const darkbg = document.querySelector(".dark-bg");
  const menu = document.querySelector(".nav-icon-menu");
  const wrapper = document.querySelector(".wrapper");

  menu.classList.toggle("active");
  darkbg.classList.toggle("active");
  wrapper.classList.toggle("menu-active");

  // Handle body scrolling
  document.body.style.overflow = darkbg.classList.contains("active")
    ? "hidden"
    : "auto";

  darkbg.removeEventListener("click", removeMenu);
  if (darkbg.classList.contains("active")) {
    darkbg.addEventListener("click", removeMenu);
  }
}

function removeMenu() {
  const darkbg = document.querySelector(".dark-bg");
  const menu = document.querySelector(".nav-icon-menu");
  const wrapper = document.querySelector(".wrapper");

  menu.classList.remove("active");
  darkbg.classList.remove("active");
  wrapper.classList.remove("menu-active");
  document.body.style.overflow = "auto"; // Restore scrolling
}

document.querySelector(".fade").classList.toggle("active");

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

const target = document.querySelector(".hack-effect");
let iteration = 0;

clearInterval(interval);

interval = setInterval(() => {
  target.innerText = target.innerText
    .split("")
    .map((letter, index) => {
      if (index < iteration) {
        return target.dataset.value[index];
      }
      return letters[Math.floor(Math.random() * 26)];
    })
    .join("");
  if (iteration >= target.dataset.value.length) {
    clearInterval(interval);
  }
  iteration += 1 / 2;
}, 30);
