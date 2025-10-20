const arcoBtns = document.querySelectorAll(".arcoBtn");
arcoBtns[0].classList.add("on");
arcoBtns.forEach((item) => {
  item.addEventListener("click", function () {
    arcoBtns.forEach((i) => {
      i.classList.remove("on");
    });
    this.classList.add("on");
  });
});
