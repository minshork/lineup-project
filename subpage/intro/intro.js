document.addEventListener("DOMContentLoaded", () => {
    
    // intro_03
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
let products = [
    {
        url: "",
        des: "",
        addr: ""
    },
    {

    },

]


function backimg_intro03() {
    let imgBoxs = document.querySelectorAll(".intro_03_product");

    for(let i = 0; i < imgBoxs.length; i++){
        imgBoxs[i].style.backgroundImage = `url(../../assets/img/sub/intro/intro_03_product0${i + 1}.jpg)`;
    }
};

function imgDesOpen_intro03(){
    document.querySelector(".intro_03_des_box").style.transform = "scaleX(1)";
    document.querySelector(".intro_03_des_title").style.width = "100%";
}

function imgDesClose_intro03(){
    document.querySelector(".intro_03_des_box").style.transform = "scaleX(0)";
    document.querySelector(".intro_03_des_title").style.width = "290px";
}

function clickimg_intro03(){
    let imgBoxs = document.querySelectorAll(".intro_03_product_con");
    let introWrap = document.querySelector(".intro_03_wrap");
    let desBox = document.querySelector(".intro_03_des_wrap");

    for(let i = 0; i < imgBoxs.length; i++){
        imgBoxs[i].addEventListener("click", () => {
            for(let j = 0; j < imgBoxs.length; j++){
                imgBoxs[j].style.opacity = "0";
                imgBoxs[j].style.pointerEvents = "none";
            }
            introWrap.style.height = "586px";
            setTimeout(() => {
                desBox.style.opacity = "1";
                desBox.style.pointerEvents = "auto";
                setTimeout(() => {
                    imgDesOpen_intro03();
                }, 1000)
            }, 1000);
        })
    };
};

function closeimg_intro03(){
    let imgBoxs = document.querySelectorAll(".intro_03_product_con");
    let introWrap = document.querySelector(".intro_03_wrap");
    let desBox = document.querySelector(".intro_03_des_wrap");
    
    imgDesClose_intro03()
    setTimeout(() => {
        desBox.style.opacity = "0";
        desBox.style.pointerEvents = "none";
        introWrap.style.height = "auto";
        setTimeout(() => {
            for(let i = 0; i < imgBoxs.length; i++){
                imgBoxs[i].style.opacity = "1";
                imgBoxs[i].style.pointerEvents = "auto";
            };
        }, 1000)
    }, 1000);
    
}
