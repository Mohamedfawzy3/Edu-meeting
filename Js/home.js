let apply_now_dislay_click = document.querySelectorAll(".apply-now .click");
let apply_now_dislay_text = document.querySelectorAll(".apply-now .text");
window.addEventListener("load",()=>{
  apply_now_dislay_click[0].style.color = "#f5a425";
  apply_now_dislay_text[0].style.display = "block";
})
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
let nextParent = document.querySelector(".info");
let next = document.querySelector(".info .next");
let boxs = document.querySelectorAll(".info .box");
console.log(nextParent);
next.addEventListener("click", () => {
  boxs.forEach((box) => {
  
    box.style.transform = "translateX(-313px)";
  });
});
let about_spans=document.querySelectorAll(".about .container .BOX .content .box div span");
let about=document.querySelector(".about");
let conditon=false
window.addEventListener("scroll",()=>{
if(window.scrollY>about.offsetTop&&!conditon){
    about_spans.forEach(span=>{
        let stop=span.dataset.reach
     let count= setInterval(()=>{
            span.textContent++;
            if(span.textContent==stop){
                clearInterval(count)
            }
        }, 1)
    })
}
conditon=true
})