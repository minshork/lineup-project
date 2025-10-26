let imgs = document.querySelectorAll(".main__sec1__imgBox > img");
let curimgs = document.querySelectorAll(".main__sec1__curImg > span");
let i = 0;
let imgFD;
let resumeFD;

document.addEventListener("DOMContentLoaded", () => {
    imgs[0].style.opacity = 1;
    imgs[0].style.scale = 1;
    startSlider();
});

function startSlider(){
    imgFD = setInterval(() => {
        imgs[i].style.opacity = 0;
        imgs[i].style.scale = 1.15;

        i = (i + 1) % imgs.length;

        imgs[i].style.opacity = 1;
        imgs[i].style.scale = 1;

        curimgs.forEach((item) => {
            item.style.backgroundColor = "rgba(255,255,255,0.4)";
        });
        curimgs[i].style.backgroundColor = "#FFF";
    }, 3500);
}

curimgs.forEach((item, idx) => {
    item.addEventListener("click", () => {
        clearInterval(imgFD);
        clearTimeout(resumeFD);

        curimgs.forEach((it) => {
            it.style.backgroundColor = "rgba(255,255,255,0.4)";
        });
        item.style.backgroundColor = "#FFF";

        imgs[i].style.opacity = 0;
        imgs[i].style.scale = 1.15;

        i = idx;

        imgs[idx].style.opacity = 1;
        imgs[idx].style.scale = 1;

        resumeFD = setTimeout(() => {
            startSlider();
        }, 10000);
    });
});


