function addList(div, outBox){
    let ul = document.createElement("ul");
    for(let i = 1; i <= 10; i++){
        let list = document.createElement("li");
        let img = document.createElement("img");
        img.src = `../assets/img/main/imgR${i}.jpg`;
        img.alt = "rollingImg";

        list.appendChild(img);
        ul.appendChild(list);
    }
    div.appendChild(ul);
    let clone = ul.cloneNode(true);
    div.appendChild(clone);
}
let mv1 = document.querySelector(".main__sec5__mv1");
let ro1 = document.querySelector(".main__sec5__ro1");
let mv2 = document.querySelector(".main__sec5__mv2");
let ro2 = document.querySelector(".main__sec5__ro2");

addList(ro1, mv1);
addList(ro2, mv2);

ro1.classList.add('main__sec5__aniLeft'); 
ro2.classList.add('main__sec5__aniRight');