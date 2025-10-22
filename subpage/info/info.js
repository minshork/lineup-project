const arcoBtns = document.querySelectorAll(".arcoBtn");
arcoBtns.forEach((item) => {
  item.addEventListener("click", function () {
    let target = item.classList.contains('on')
    arcoBtns.forEach((i) => {
      i.classList.remove("on");
    });
    if(!target)
    this.classList.add("on");
  });
});
