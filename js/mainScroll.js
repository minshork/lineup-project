window.addEventListener("load", () => {
  let quickMenu = document.querySelector(".main__sec1__quickmenu");
  let dots = document.querySelector(".main__sec1__curImg");
  let mainText = document.querySelector(".main__sec1__imgBox__textBox img");

  // 텍스트
  mainText.style.transform = "translateY(0)";

  // 도트
  dots.style.bottom = "20%";
  dots.style.opacity = "1";
  quickMenu.style.transitionDelay = "0.3s";

  // 퀵메뉴
  quickMenu.style.opacity = "1";
  quickMenu.style.transitionDelay = "0.3s";
});

window.addEventListener("scroll", () => {
  // 윈도우 스크롤 값
  const scrY = window.scrollY;

  // Section Top
  const sec2Top = document.querySelector(".main__sec2Wrapper").offsetTop;
  const sec3Top = document.querySelector(".main__sec3").offsetTop;
  const sec4Top = document.querySelector(".main__sec4").offsetTop;
  const sec5Top = document.querySelector(".main__sec5").offsetTop;

  // Section 2
  if (scrY > sec2Top - 500) {
    // Section2 변수
    let set2Title = document.querySelector(
      ".main__sec2__textGuideLine__text__title"
    );

    // 산 배경 이벤트
    const mountain = document.querySelector(".main__sec2__background");
    mountain.classList.add("on");

    // 계룡산 제목
    set2Title.style.transform = "translateY(0px)";
    set2Title.style.opacity = "1";

    if (scrY > sec2Top - 300) {
      // Section2 변수
      let sec2Des = document.querySelector(
        ".main__sec2__textGuideLine__text > p"
      );
      let sec2View = document.querySelector(".main__sec2__textGuideLine__btn");

      // 계룡산 설명
      sec2Des.style.transform = "translateY(0)";
      sec2Des.style.opacity = "1";

      // View More
      sec2View.style.opacity = "1";
      sec2View.style.transform = "translateY(0)";
    }
  }

  // Section 3
  if (scrY > sec3Top - 600) {
    // Section3 변수
    let sec3Back = document.querySelector(".main__sec3__background");
    let sec3Title = document.querySelector(".main__sec3__textBox__title > h1");
    let sec3subTitle = document.querySelector(
      ".main__sec3__textBox__title > h2"
    );

    // 그림
    sec3Back.style.opacity = "1";
    sec3Back.style.transform = "translateX(0)";

    //부제목
    sec3subTitle.style.opacity = "1";
    sec3subTitle.style.transform = "translateY(0)";

    // 제목
    sec3Title.style.opacity = "1";
    sec3Title.style.transform = "translateX(0)";

    if (scrY > sec3Top - 300) {
      // Section3 변수
      let sec3Des = document.querySelector(".main__sec3__textBox > p");
      let sec3View = document.querySelector(".main__sec3__textBox__btn");

      // 설명
      sec3Des.style.opacity = "1";
      sec3Des.style.transform = "translateX(0)";

      // View More
      sec3View.style.opacity = "1";
      sec3View.style.transform = "scaleX(1)";
    }
  }

  // Section 4
  if (scrY > sec4Top - 600) {
    // Section4 변수
    let sec4Back = document.querySelector(".main__sec4__background");
    let sec4Title = document.querySelector(".main__sec4__textBox__title > h1");
    let sec4subTitle = document.querySelector(
      ".main__sec4__textBox__title > h2"
    );

    // 그림
    sec4Back.style.opacity = "1";
    sec4Back.style.transform = "translateX(0)";

    // 부제목
    sec4subTitle.style.opacity = "1";
    sec4subTitle.style.transform = "translateY(0)";

    // 제목
    sec4Title.style.opacity = "1";
    sec4Title.style.transform = "translateX(0)";

    if (scrY > sec4Top - 300) {
      // Section4 변수
      let sec4Des = document.querySelector(".main__sec4__textBox > p");
      let sec4View = document.querySelector(".main__sec4__textBox__btn");

      // 설명
      sec4Des.style.opacity = "1";
      sec4Des.style.transform = "translateX(0)";

      // View More
      sec4View.style.opacity = "1";
      sec4View.style.transform = "scaleX(1)";
    }
  }
});
