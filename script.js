const imgs = document.querySelectorAll(".header-slider ul img");
const previous_btn = document.querySelector(".control_previous");
const next_btn = document.querySelector(".control_next");

let n = 0;

function changeSlide() {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none";
  }
  imgs[n].style.display = "block";
}

changeSlide();

next_btn.addEventListener("click", function () {
  n += 1;
  if (n >= imgs.length) {
    n = 0;
  }
  changeSlide();
});

previous_btn.addEventListener("click", function () {
  n -= 1;
  if (n < 0) {
    n = imgs.length - 1;
  }
  changeSlide();
});

const scrollContainer = document.querySelectorAll(".products");
for (const item of scrollContainer) {
  item.addEventListener("wheel", (event) => {
    event.preventDefault();
    item.scrollLeft += event.deltaY;
  });
}

const category = document.querySelectorAll(".contain-child-footer");
const menu = document.getElementById("menuu");
document.querySelector(".footer-menu-menu").addEventListener("click", () => {
  category.forEach((element) => {
    element.classList.add("show");
    menu.classList.add("menuuu");
  });
});
