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
