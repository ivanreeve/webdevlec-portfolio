function toggleMenu() {
  const darkbg = document.querySelector(".dark-bg");
  const menu = document.querySelector(".nav-icon-menu");
  const wrapper = document.querySelector(".wrapper");
  
  menu.classList.toggle("active");
  darkbg.classList.toggle("active");
  wrapper.classList.toggle("menu-active");
  
  // Handle body scrolling
  document.body.style.overflow = darkbg.classList.contains("active") ? "hidden" : "auto";
  
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
