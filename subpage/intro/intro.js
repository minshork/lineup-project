document.addEventListener("DOMContentLoaded", () => {
    backimg_intro03();
    clickimg_intro03();
});


// intro_01 js
let lnbBar = document.querySelectorAll(".lnb > li");
console.log(lnbBar);

lnbBar.forEach((item) => {
    item.addEventListener("click", (e) => {
        lnbBar.forEach((n) => n.classList.remove("on"));
        item.classList.add("on");
    })
});


// intro_02 js



// intro_03 js
function backimg_intro03() {
    let imgBoxs = document.querySelectorAll(".intro_03_product");

    for(i = 0; i < imgBoxs.length; i++){
        imgBoxs[i].style.backgroundImage = `url(../../assets/img/sub/intro/intro_03_product0${i + 1}.jpg)`;
    }
};

function clickimg_intro03(){
    let imgBoxs = document.querySelectorAll(".intro_03_product_container");
    let imgTitle = document.querySelectorAll(".intro_03_product_container > p");

    for(let i = 0; i < imgBoxs.length; i++){
        imgBoxs[i].addEventListener("click", () => {
            for(let j = 0; j < imgBoxs.length; j++){
                imgBoxs[j].style.display = "none";
            }
            imgBoxs[i].style.display = "block";
            imgBoxs[i].style.pointerEvents = "none";
            // imgTitle[i].style top
        })
    };
};