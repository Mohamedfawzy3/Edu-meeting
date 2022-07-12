//navbar
let navbar = document.querySelector(".nav");
let show= document.querySelector("section");
window.onscroll = () => {
    navbar.classList.toggle("stiky",window.scrollY >= show.offsetTop+2)
};
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

//------

//footer year
let footerYear = document.querySelector(".end-footer .year");
window.onload = () => {
  let date = new Date();
  footerYear.textContent = date.getFullYear();
};
