const depth01 = document.querySelectorAll(".gnb > li");
const header = document.querySelector("header");
const m_menu = document.querySelector(".m_menu .menu_icon");
const bodyWidth = document.querySelector("body").clientWidth;

// 모바일 헤더
function mobileResize() {
  m_menu.addEventListener("click", function () {
    this.classList.toggle("active");
    if (this.classList.contains("active")) {
      document.querySelector(".gnb_wrap").classList.add("on");
      header.classList.add("m");
      document.querySelector("body").classList.add("fix");
    } else {
      document.querySelector(".gnb_wrap").classList.remove("on");
      header.classList.remove("m");
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
          sub.style.height = "0px";
        }
      });

      item.classList.toggle("open");
      const depth02 = item.querySelector(".depth02_wrap");
      const isOpen = item.classList.contains("open");
      const height = depth02.scrollHeight;
      if (isOpen) {
        depth02.style.transition = `height 0.5s`;
        requestAnimationFrame(() => {
          depth02.style.height = height + "px";
        });
      } else {
        requestAnimationFrame(() => {
          depth02.style.height = "0px";
        });
      }
    });
  });
}

function pcResize() {
  depth01.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      header.classList.add("on");
    });
    item.addEventListener("mouseleave", function () {
      header.classList.remove("on");
    });
  });
}

let isMobile = window.innerWidth <= 1024;
if (isMobile) {
  mobileResize();
} else {
  pcResize();
}

window.addEventListener("resize", () => {
  const nowMobile = window.innerWidth <= 1024;
  if (nowMobile !== isMobile) {
    location.reload();
  }
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
