const depth01 = document.querySelectorAll(".gnb > li");
const header = document.querySelector("header");
const m_menu = document.querySelector(".m_menu .menu_icon");

depth01.forEach((item) => {
  item.addEventListener("mouseenter", function () {
    header.classList.add("on");
  });
  item.addEventListener("mouseleave", function (e) {
    header.classList.remove("on");
  });
});

m_menu.addEventListener("click", function () {
  this.classList.toggle("active");
});
