//navbar
let navbar = document.querySelector(".nav");
let showstiky = document.querySelector("section");
let nav_scroll = (window.onscroll = () => {
  navbar.classList.toggle("stiky", window.scrollY >= showstiky.offsetTop + 2);

  if (window.scrollY >= showstiky.offsetTop + 2) {
    navbar.style.cssText = "position:fixed ; animation: show-nav .3s linear;";
  } else {
    navbar.style.cssText = "position :absolute";
  }
  if (window.scrollY == 0) {
    navbar.style.cssText = "animation: show-nav-0px .3s linear;";
  }
});
let icon = document.querySelector(".icon");
let ul_links = document.querySelector("ul");
let icon_spans = document.querySelectorAll(".icon span");
console.log(icon);
icon.addEventListener("click", () => {
  if (ul_links.style.display == "none") {
    ul_links.style.display = "block";
    icon_spans[1].style.opacity = "0";
    icon_spans[0].style.cssText =
      "width: 100%; transform-origin: left 0%; transform: rotate(45deg);";
    icon_spans[2].style.cssText =
      "width: 100%; transform-origin: left 0%; transform: rotate(-45deg);";
  } else {
    ul_links.style.display = "none";
    icon_spans[1].style.opacity = "1";
    icon_spans[0].style.cssText =
      "width: 80%; transform-origin: left 0%; transform: rotate(0deg);";
    icon_spans[2].style.cssText =
      "width: 80%; transform-origin: left 0%; transform: rotate(0deg);";
  }
});
//footer year
let footerYear = document.querySelector(".end-footer .year");
window.onload = () => {
  let date = new Date();
  footerYear.textContent = date.getFullYear();
};
