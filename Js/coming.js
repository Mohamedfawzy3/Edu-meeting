show=document.querySelector(".header-meeting")
let allElements = document.querySelectorAll(".box");
let soonElements = document.querySelectorAll(".soon");
let importantElements = document.querySelectorAll(".important");
let attractiveElements = document.querySelectorAll(".attractive");
let active = document.querySelector(".active");
let filtering = document.querySelectorAll(".filtering div");
window.onload = () => {
  allElements.forEach((el) => {
    el.style.display = "block";
  });
};
filtering.forEach((button) => {
  button.addEventListener("click", (e) => {
    filtering.forEach((el) => {
      el.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    allElements.forEach((el) => {
      el.style.display = "none";
    });
    allElements.forEach((el) => {
      el.style.display = "block";
    });
  });
});
filtering[1].addEventListener("click", () => {
  allElements.forEach((el) => {
    el.style.display = "none";
  });
  soonElements.forEach((el) => {
    el.style.display = "block";
  });
});
filtering[2].addEventListener("click", () => {
  allElements.forEach((el) => {
    el.style.display = "none";
  });
  importantElements.forEach((el) => {
    el.style.display = "block";
  });
});
filtering[3].addEventListener("click", () => {
  allElements.forEach((el) => {
    el.style.display = "none";
  });
  attractiveElements.forEach((el) => {
    el.style.display = "block";
  });
});
