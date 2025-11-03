const toggler = document.getElementById("Toggle");
const menu = document.getElementById("Menu");

toggler.addEventListener("click", () => {
  menu.classList.toggle("active");
});
