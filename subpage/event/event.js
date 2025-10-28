// event 01 계룡군문화축제

// event01 item 이미지 슬라이드
document.querySelectorAll(".itemBox__item__wrap").forEach((item) => {
  let imgBox = item.querySelector(".item__wrap__imgBox");
  let prevBtn = item.querySelector(".arrow.left");
  let nextBtn = item.querySelector(".arrow.right");

  let imgs = imgBox.querySelectorAll("img");
  let fTotal = imgs.length;
  let total = fTotal - 2;

  let index = 1;

  imgBox.style.transform = `translateX(-${index * (100 / fTotal)}%)`;

  function moveSlide() {
    imgBox.style.transform = `translateX(-${index * (100 / fTotal)}%)`;
    imgBox.style.transition = "transform 0.5s ease";
  }

  prevBtn.addEventListener("click", () => {
    index--;
    moveSlide();
  });

  nextBtn.addEventListener("click", () => {
    index++;
    moveSlide();
  });

  imgBox.addEventListener("transitionend", () => {
    if (index === total + 1) {
      imgBox.style.transition = "none";
      index = 1;
      imgBox.style.transform = `translateX(-${index * (100 / fTotal)}%)`;
    }

    if (index === 0) {
      imgBox.style.transition = "none";
      index = total;
      imgBox.style.transform = `translateX(-${index * (100 / fTotal)}%)`;
    }
  });
});

// event 02 자연생태체험

// event 03 고택체험
document.querySelectorAll(".swiper-mini .swiper-img").forEach((img) => {
  img.setAttribute("draggable", "false");
});

let lgImgs = document.querySelectorAll(".swiper-lg .swiper-img");
let thumbs = document.querySelectorAll(".swiper-mini .swiper-img");
let swiperWrap = document.querySelector(".swiper-mini .swiper-wrap");

lgImgs.forEach((img, idx) => {
  img.style.display = idx === 0 ? "block" : "none";
});

thumbs[0].classList.add("active");

thumbs.forEach((thumb, idx) => {
  thumb.addEventListener("click", () => {
    lgImgs.forEach((img) => (img.style.display = "none"));
    lgImgs[idx].style.display = "block";

    thumbs.forEach((mini) => mini.classList.remove("active"));
    thumb.classList.add("active");
  });
});

// 드래그
let isDown = false;
let startX;
let scrollLeft;

// 마우스 이벤트
swiperWrap.addEventListener("mousedown", (e) => {
  isDown = true;
  swiperWrap.style.cursor = "grabbing";
  startX = e.pageX - swiperWrap.offsetLeft;
  scrollLeft = swiperWrap.scrollLeft;
});

swiperWrap.addEventListener("mouseup", () => {
  isDown = false;
  swiperWrap.style.cursor = "grab";
});

swiperWrap.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  let x = e.pageX - swiperWrap.offsetLeft;
  let walk = (x - startX) * 1.5;
  swiperWrap.scrollLeft = scrollLeft - walk;
});

let touchStartX = 0;
let touchScrollLeft = 0;

swiperWrap.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].pageX;
  touchScrollLeft = swiperWrap.scrollLeft;
});

swiperWrap.addEventListener("touchmove", (e) => {
  let x = e.touches[0].pageX;
  let walk = (x - touchStartX) * 1.5;
  swiperWrap.scrollLeft = touchScrollLeft - walk;
});
