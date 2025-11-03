const depth01 = document.querySelectorAll(".gnb > li");
const header = document.querySelector("header");
const m_menu = document.querySelector(".m_menu .menu_icon");

// 모바일 헤더
function mobileResize() {
  const bodyWidth = document.querySelector("body").clientWidth;
  if (bodyWidth <= 1024) {
    m_menu.addEventListener("click", function () {
      this.classList.toggle("active");
      if (this.classList.contains("active")) {
        document.querySelector(".gnb_wrap").classList.add("on");
        header.classList.add("on");
        document.querySelector("body").classList.add("fix");
      } else {
        document.querySelector(".gnb_wrap").classList.remove("on");
        header.classList.remove("on");
        document.querySelector("body").classList.remove("fix");
      }
    });
    depth01.forEach((item) => {
      const link = item.querySelector(".depth01");
      link.addEventListener("click", function (e) {
        e.preventDefault();

        depth01.forEach((i) => {
          if (i !== item) {
            i.classList.remove("open");
            const sub = i.querySelector(".depth02_wrap");
            if (sub) sub.classList.remove("on");
          }
        });

        item.classList.toggle("open");
        const depth02 = item.querySelector(".depth02_wrap");
        if (depth02) {
          depth02.classList.toggle("on", item.classList.contains("open"));
        }
      });
    });
  }
  if (bodyWidth > 1024) {
    depth01.forEach((item) => {
      item.addEventListener("mouseenter", function () {
        header.classList.add("on");
      });
      item.addEventListener("mouseleave", function () {
        header.classList.remove("on");
      });
    });
  }
  // });
}
mobileResize();
window.addEventListener("resize", mobileResize);

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
