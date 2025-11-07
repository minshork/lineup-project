document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabBoxes = document.querySelectorAll(".tab-content");

  // 탭 클릭하면 보여지는 부분 바꾸기
  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      tabButtons.forEach((b) => b.classList.remove("active"));
      tabBoxes.forEach((box) => box.classList.remove("active"));
      button.classList.add("active");
      const tabId = button.dataset.target;
      document.getElementById(tabId).classList.add("active");
      resetAnimation();
    });
  });

  const timelineItems = document.querySelectorAll(".timeline-item");

  function showWhenScroll() {
    const windowHeight = window.innerHeight;
    let allVisible = true; // 👈 모든 아이템이 나타났는지 확인용

    timelineItems.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top;
      if (itemTop < windowHeight * 0.9) {
        item.classList.add("visible");
      } else {
        allVisible = false; // 아직 안 나타난 게 있으면 false
      }
    });

    // 👇 모든 아이템이 보이면 스크롤 이벤트 제거
    if (allVisible) {
      window.removeEventListener("scroll", showWhenScroll);
    }
  }

  function resetAnimation() {
    const activeItems = document.querySelectorAll(
      ".tab-content.active .timeline-item"
    );
    activeItems.forEach((i) => i.classList.remove("visible"));
    window.addEventListener("scroll", showWhenScroll); // 탭 바꿀 때 다시 연결
    showWhenScroll();
  }

  window.addEventListener("scroll", showWhenScroll);
  showWhenScroll();
});

// 이미지 슬라이더 기능 추가
document.addEventListener("DOMContentLoaded", function () {
  const galleries = document.querySelectorAll(".tree_gallerys");

  galleries.forEach((galleryBox) => {
    const images = galleryBox.querySelectorAll(".tree_gallery img");
    const prevBtn = galleryBox.querySelector(".arrow.left");
    const nextBtn = galleryBox.querySelector(".arrow.right");
    let index = 0;

    function showImage(idx) {
      images.forEach((img, i) => {
        img.classList.toggle("active", i === idx);
      });
    }

    prevBtn.addEventListener("click", () => {
      index = (index - 1 + images.length) % images.length;
      showImage(index);
    });

    nextBtn.addEventListener("click", () => {
      index = (index + 1) % images.length;
      showImage(index);
    });

    showImage(index);
  });
});
// 아코디언 기능만
// document.addEventListener("DOMContentLoaded", function () {
//   const acc = document.querySelectorAll(".arrcordian");

//   acc.forEach((btn) => {
//     btn.addEventListener("click", () => {
//       // 활성화 클래스 토글
//       btn.classList.toggle("active");

//       // 내부의 panel 찾기 (현재 HTML 구조 기준)
//       const panel = btn.querySelector(".panel");

//       if (!panel) return;

//       // 열기/닫기 토글
//       if (panel.style.display === "block") {
//         panel.style.display = "none";
//       } else {
//         // 다른 아코디언 패널은 닫고, 현재만 열리게 하고 싶다면:
//         acc.forEach((other) => {
//           const otherPanel = other.querySelector(".panel");
//           if (otherPanel && other !== btn) {
//             otherPanel.style.display = "none";
//             other.classList.remove("active");
//           }
//         });

//         panel.style.display = "block";
//       }
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab_btn_wrap button");
  const tabContents = document.querySelectorAll(".tab_con_wrap");
  const arcoBtns = document.querySelectorAll(".arcoBtn");

  // ✅ 1. 탭 전환 기능
  tabButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      // 모든 탭 버튼, 콘텐츠 초기화
      tabButtons.forEach((b) => b.classList.remove("current"));
      tabContents.forEach((con) => con.classList.remove("on"));

      // 클릭한 탭만 활성화
      btn.classList.add("current");
      tabContents[index].classList.add("on");
    });
  });

  // ✅ 2. 아코디언 기능
  arcoBtns.forEach((item) => {
    item.addEventListener("click", function () {
      const parentWrap = item.closest(".tab_con_wrap");
      // 부모 탭이 열려 있을 때만 작동
      if (parentWrap && parentWrap.classList.contains("on")) {
        const isActive = item.classList.contains("on");

        // 같은 탭 안의 다른 아코디언 닫기
        parentWrap.querySelectorAll(".arcoBtn").forEach((btn) => {
          btn.classList.remove("on");
        });
        // 클릭한 아코디언만 열기/닫기
        if (!isActive) this.classList.add("on");
      }
    });
  });
});
