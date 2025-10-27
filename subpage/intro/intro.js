document.addEventListener("DOMContentLoaded", () => {
    
    // intro_03
    backimg_intro03();
    clickimg_intro03();
});


// intro_01 js


// intro_02 js



// intro_03 js
let products = [
    {
        url: "../../assets/img/sub/intro/intro_03_product01.jpg",
        title: "쌈채류",
        des: "계룡산 자락 지하 100m 암반수를 사용하여 재배한 계룡 무공해 쌈채는 농약을 사용하지 않고 유기질 비료만을 사용하여 재배합니다. 또한 그린 음악을 이용 친환경 재배법으로 고품질의 쌈채류를 생산합니다.",
        addr: "주소: 계룡시 엄사면 유동리"
    },

    {
        url: "../../assets/img/sub/intro/intro_03_product02.jpg",
        title: "방울토마토",
        des: "계룡시 농소리의 청정지역에서 재배한 방울 토마토는 유리온실의 양액재배시설에서 계룡영농조합법인 구성원들의 자체품질관리로 생산하여 비타민A와 비타민C가 풍부하고 향과 당도가 높아 품질면에서 매우 뛰어납니다.",
        addr: "주소: 충남 계룡시 일원"
    },

    {
        url: "../../assets/img/sub/intro/intro_03_product03.jpg",
        title: "상추",
        des: "계룡상추작목반에서 재배하는 상추는 수막보호시설과 스프링쿨러 시설로 생산성이 매우 높습니다. 또한 각종 영양분이 밤의 낮은 온도에 의해 작물에 그대로 저장되므로서 맛과 향과 색상이 진하고 강하며 저장성과 상품성이 뛰어납니다.",
        addr: "주소: 충남 계룡시 일원"
    },

    {
        url: "../../assets/img/sub/intro/intro_03_product04.jpg",
        title: "딸기",
        des: "계룡산의 자락에서 수막시설과 수경시설을 갖추고 자체 철저한 품질관리를 통해 고품질 딸기를 생산하고 있으며, 풍부한 일조량으로 향기와 맛이 뛰어나고 과육이 단단하며 신선도가 높은 것이 특징입니다. 또한 재배품종은 국내산 육성품종인 설향을 재배하여 소비자 기호에 맞는 딸기를 생산하고 있습니다.",
        addr: "주소: 충남 계룡시 일원"
    },

    {
        url: "../../assets/img/sub/intro/intro_03_product05.jpg",
        title: "양봉",
        des: "계룡산 양몽작목반에서는 계룡산의 청정밀원지역에서 자생하는 벚꽃, 아카시아, 밤, 찔레꽃 족제비싸리 등 많은 꽃에서 고품질 꿀을 생산하고 있으며 밀원 수심기 및 양봉시설교육을 통해서 생산량을 증대하고 있습니다.",
        addr: "주소: 충남 계룡시 일원"
    },

    {
        url: "../../assets/img/sub/intro/intro_03_product06.jpg",
        title: "엿류",
        des: "계룡산 지하 120m 암반수를 이용하며 우리쌀, 엿기름을 원료로 고아낸 계룡산 엿은 천연 무공해 토속적인 제품입니다. 계룡한 물엿은 고추장 및 찜, 볶음, 무침, 조림, 장아찌 등에 유용하게 사용하실 수 있습니다.",
        addr: "주소: 계룡시 엄사면"
    }
]


function backimg_intro03() {
    let imgBoxs = document.querySelectorAll(".intro_03_product");

    for(let i = 0; i < imgBoxs.length; i++){
        imgBoxs[i].style.backgroundImage = `url(../../assets/img/sub/intro/intro_03_product0${i + 1}.jpg)`;
    }
};

function imgDesOpen_intro03(num){
    let arrow = document.getElementById("intro03_des_close");

    document.querySelector(".intro_03_des > p").innerHTML = products[num].des;
    document.querySelector(".intro_03_adr").innerHTML = products[num].addr;
    document.querySelector(".intro_03_des_box").style.transform = "scaleX(1)";
    document.querySelector(".intro_03_des_title").style.width = "100%";
    document.querySelector(".intro_03_des_img").style.borderRadius = "0px 0px 0px 15px";
    setTimeout(() => {
        arrow.style.transform = "translateY(-50%) rotate(270deg)";
    }, 500);
}

function imgDesClose_intro03(){
    let arrow = document.getElementById("intro03_des_close");

    document.querySelector(".intro_03_des_box").style.transform = "scaleX(0)";
    document.querySelector(".intro_03_des_title").style.width = "290px";
    setTimeout(() => {
        arrow.style.transform = "translateY(-50%) rotate(450deg)";
        document.querySelector(".intro_03_des_img").style.borderRadius = "0px 0px 15px 15px";
        setTimeout(() => {
            arrow.style.transform = "translateY(-50%) rotate(90deg)";
        }, 1000);
    }, 500);
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
            // setTimeout(() => {
            //     imgBoxs[i].style.transform = "rotate(360deg)";
            // }, 20);
            setTimeout(() => {
                document.querySelector(".intro_03_des_title > p").innerHTML = products[i].title;
                document.querySelector(".intro_03_des_img").style.backgroundImage = `url(${products[i].url})`;
                introWrap.style.height = "586px";
                desBox.style.opacity = "1";
                desBox.style.pointerEvents = "auto";
                setTimeout(() => {
                    imgDesOpen_intro03(i);
                }, 1000);
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
        setTimeout(() => {
            for(let i = 0; i < imgBoxs.length; i++){
                introWrap.style.height = "auto";
                imgBoxs[i].style.opacity = "1";
                imgBoxs[i].style.pointerEvents = "auto";
            };
        }, 1000);
    }, 1000);
    
}
