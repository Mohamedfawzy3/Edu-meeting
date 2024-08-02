let apply_now_dislay_click = document.querySelectorAll(".apply-now .click");
let apply_now_dislay_text = document.querySelectorAll(".apply-now .text");
window.addEventListener("load", () => {
  apply_now_dislay_click[0].style.color = "#f5a425";
  apply_now_dislay_text[0].style.display = "block";
});
apply_now_dislay_click.forEach((click) => {
  click.addEventListener("click", (e) => {
    apply_now_dislay_click.forEach((div) => {
      div.style.color = "#1f272b";
    });
    apply_now_dislay_text.forEach((el) => {
      el.style.display = "none";
    });
    click.style.color = "#f5a425";
    apply_now_dislay_text.forEach((element) => {
      if (element.getAttribute("data-num") == click.getAttribute("data-num")) {
        element.style.display = "block";
        element.style.margin = "6px 0px 0px";
      }
    });
  });
});

let about = document.querySelector(".about");
let about_spans = document.querySelectorAll(
  ".about .container .BOX .content .box div span"
);
// let max_number = 0;
// about_spans.forEach((span) => {
//   if (parseInt(span.dataset.reach) >= max_number) {
//     max_number = +span.dataset.reach;
//   }
//   console.log(max_number);
// });
let condition = false;
window.addEventListener("scroll", () => {
  if (window.scrollY > about.offsetTop && !condition) {
    about_spans.forEach((span) => {
      let stop = parseInt(span.dataset.reach);
      let count = setInterval(() => {
        span.textContent++;
        if (parseInt(span.textContent) == stop) {
          clearInterval(count);
        }
      }, 8000 / stop);
    });
    condition = true;
  }
});
