const menu = document.getElementById("nav-icon");
const newmenu = document.querySelector(".nav-menu");
const closedmenu = document.querySelector(".close-menu");

function showmenu() {
  newmenu.classList.toggle("nonedisplay");
}

menu.addEventListener("click", showmenu);
// newmenu.addEventListener("click", showmenu);

closedmenu.addEventListener("click", hidemenu);

function hidemenu() {
  newmenu.classList.toggle("nonedisplay");
}
