let lnbBar = document.querySelectorAll(".lnb > li");
console.log(lnbBar);

lnbBar.forEach((item) => {
    item.addEventListener("click", (e) => {
        lnbBar.forEach((n) => n.classList.remove("on"));
        item.classList.add("on");
    })
});