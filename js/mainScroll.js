window.addEventListener("scroll", () => {
    const scrY = window.scrollY;

    // section 2
    if(scrY > sec2Top - 500){

        // 산 배경 이벤트
        sec2Back.style.opacity = "1";
        sec2Back.style.transform = "translateY(0)";

        // 계룡산 제목
        set2Title.style.transform = "translateX(0)";
        set2Title.style.opacity = "1";

        if(scrY > sec2Top - 200){
            // 계룡산 설명
            sec2Des.style.opacity = "1";

            // View More
            sec2View.style.opacity = "1";
            sec2View.style.transform = "scaleX(1)";
        }
    }

    // section 3
    if(scrY > sec3Top - 600){
        // 그림
        sec3Back.style.opacity = "1";
        sec3Back.style.transform = "translateX(0)";

        //부제목
        sec3subTitle.style.opacity = "1";
        sec3subTitle.style.transform = "translateY(0)";

        // 제목
        sec3Title.style.opacity = "1";
        sec3Title.style.transform = "translateX(0)";

        if(scrY > sec3Top - 300){
            // 설명
            sec3Des.style.opacity = "1";
            sec3Des.style.transform = "translateX(0)";

            // View More
            sec3View.style.opacity = "1";
            sec3View.style.transform = "scaleX(1)";
        }
    }

    // section 4
    if(scrY > sec4Top - 600){
        // 그림
        sec4Back.style.opacity = "1";
        sec4Back.style.transform = "translateX(0)";

        // 부제목
        sec4subTitle.style.opacity = "1";
        sec4subTitle.style.transform = "translateY(0)";

        // 제목
        sec4Title.style.opacity = "1";
        sec4Title.style.transform = "translateX(0)";

        if(scrY > sec4Top - 300){
            // 설명
            sec4Des.style.opacity = "1";
            sec4Des.style.transform = "translateX(0)";

            // View More
            sec4View.style.opacity = "1";
            sec4View.style.transform = "scaleX(1)";
        }
    }

    // footer 변수

    return sec2Top;
});



// section2 변수
let sec2Wrap = document.querySelector(".main__sec2Wrapper");
let sec2Back = document.querySelector(".main__sec2__background > img");
let set2Title = document.querySelector(".main__sec2__textGuideLine__text__title");
let sec2Des = document.querySelector(".main__sec2__textGuideLine__text > p");
let sec2View = document.querySelector(".main__sec2__textGuideLine__btn");

// section3 변수
let sec3Wrap = document.querySelector(".main__sec3");
let sec3Back = document.querySelector(".main__sec3__background");
let sec3Title = document.querySelector(".main__sec3__textBox__title > h1");
let sec3subTitle = document.querySelector(".main__sec3__textBox__title > h2");
let sec3Des = document.querySelector(".main__sec3__textBox > p");
let sec3View = document.querySelector(".main__sec3__textBox__btn");

// section4 변수
let sec4Wrap = document.querySelector(".main__sec4");
let sec4Back = document.querySelector(".main__sec4__background");
let sec4Title = document.querySelector(".main__sec4__textBox__title > h1");
let sec4subTitle = document.querySelector(".main__sec4__textBox__title > h2");
let sec4Des = document.querySelector(".main__sec4__textBox > p");
let sec4View = document.querySelector(".main__sec4__textBox__btn");

// Top
let sec2Top = sec2Wrap.offsetTop;
let sec3Top = sec3Wrap.offsetTop;
let sec4Top = sec4Wrap.offsetTop;

console.log(sec2Top);
console.log(sec3Top);
console.log(sec4Top);