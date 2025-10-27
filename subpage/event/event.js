// event 01 계룡군문화축제

// event01 item 이미지 슬라이드
document.querySelectorAll('.itemBox__item__wrap').forEach((item) => {
    let imgBox = item.querySelector('.item__wrap__imgBox');
    let prevBtn = item.querySelector('.arrow.left');
    let nextBtn = item.querySelector('.arrow.right');

    let imgs = imgBox.querySelectorAll('img');
    let fTotal = imgs.length;
    let total = fTotal - 2;

    let index = 1;

    imgBox.style.transform = `translateX(-${index * (100 / fTotal)}%)`

    function moveSlide(){
        imgBox.style.transform = `translateX(-${index * (100 / fTotal)}%)`
        imgBox.style.transition = 'transform 0.5s ease'
    }

    prevBtn.addEventListener("click", () => {
        index--;
        moveSlide();
    })

    nextBtn.addEventListener("click", () => {
        index++;
        moveSlide();
    })

    imgBox.addEventListener('transitionend', () => {
        if(index === total + 1){
            imgBox.style.transition = 'none';
            index = 1;
            imgBox.style.transform = `translateX(-${index * (100 / fTotal)}%)`
        }

        if(index === 0){
            imgBox.style.transition = 'none';
            index = total;
            imgBox.style.transform = `translateX(-${index * (100 / fTotal)}%)`
        }
    })
})





// event 02 자연생태체험

// event 03 고택체험