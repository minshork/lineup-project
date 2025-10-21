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
// TOP버튼 자바스크립트
topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 탭
const tabBtns = document.querySelectorAll(
  ".tab_container .tab_btn_wrap li button"
);
const tabCon = document.querySelectorAll(".tab_contents .tab_con_wrap");
tabBtns.forEach((item, idx) => {
  item.addEventListener("click", function () {
    tabBtns.forEach((el) => {
      el.classList.remove("current");
    });
    this.classList.add("current");

    tabCon.forEach((e) => {
      e.classList.remove("on");
    });
    tabCon[idx].classList.add("on");
  });
});