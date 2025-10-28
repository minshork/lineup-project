function addListUp(div){
    let ul = document.createElement("ul");
    for(let i = 1; i <= 5; i++){
        let list = document.createElement("li");
        list.style.backgroundImage = `url(../assets/img/main/imgR${i}.jpg)`;

        ul.appendChild(list);
    }

    div.appendChild(ul);
    let clone = ul.cloneNode(true);
    div.appendChild(clone);
}

function addListDown(div){
    let ul = document.createElement("ul");
    for(let i = 6; i <= 10; i++){
        let list = document.createElement("li");
        list.style.backgroundImage = `url(../assets/img/main/imgR${i}.jpg)`;

        ul.appendChild(list);
    }

    div.appendChild(ul);
    let clone = ul.cloneNode(true);
    div.appendChild(clone);
}

let ro1 = document.querySelector(".main__sec5__ro1");
let ro2 = document.querySelector(".main__sec5__ro2");

addListUp(ro1);
addListDown(ro2);

ro1.classList.add('main__sec5__aniLeft'); 
ro2.classList.add('main__sec5__aniRight');
