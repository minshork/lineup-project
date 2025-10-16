let imgs = document.querySelectorAll(".main__sec1__imgBox > img");
let curimgs = document.querySelectorAll(".main__sec1__curImg > span");
let i = 0;

document.addEventListener("DOMContentLoaded", () => {
    imgs[0].style.opacity = 1;
    imgs[0].style.scale = 1;
});

let imgFD = setInterval(() => {
    imgs[i].style.opacity = 0;
    imgs[i].style.scale = 1.15;

    i = (i + 1) % imgs.length;

    imgs[i].style.opacity = 1;
    imgs[i].style.scale = 1;
}, 3500);

curimgs.forEach((item, idx) => {
    item.addEventListener("click", () => {
        curimgs.forEach((it) => {it.style.backgroundColor = "rgba(255,255,255,0.4)"});
        item.style.backgroundColor = "#FFF";
    });
});


