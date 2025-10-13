const depth01 = document.querySelectorAll('.gnb > li');
const header = document.querySelector('header');

depth01.forEach((item) => {
    item.addEventListener('mouseenter', function(){
        header.classList.add('on');
    })
    item.addEventListener('mouseleave', function(e){
        header.classList.remove('on');
    })
    
});