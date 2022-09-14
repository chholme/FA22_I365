const paragraphs = document.querySelectorAll("p");

for(let i = 0; i < paragraphs.length; ++i){
    paragraphs[i].style.fontSize = "24px";
}

paragraphs.forEach(fuction(p){
    paragraphs.style.fontSize = "24px";
});

for (let i =0; i < paragraphs.length; ++i){
    paragraphs[i].style.fontSize = "24px";
}

const buttonsArray = document.querySelectorAll("button");

buttonsArray.forEach(function(){
    buttonsArray.style.fontSize = "24px";
});

function strClick(){
    const filling = document.getElementById("filling");
    filling.innerHTML = "Strawberry";
    filling.style.backgroundColor = "red";
}

function graClick(){
    const filling = document.getElementById("filling");
    filling.innerHTML = "Orange";
    filling.style.backgroundColor = "purple";
}

function orgClick(){
    const filling = document.getElementById("filling");
    filling.innerHTML = "Grape";
    filling.style.backgroundColor = "orange";
}

function bluClick(){
    const filling = document.getElementById("filling");
    filling.innerHTML = "Blueberry";
    filling.style.backgroundColor = "blue";
}

const clickFunctions = [strClick, graClick, orgClick, bluClick];

const buttons = document.querySelectorAll("button");

// for loop
for (let i = 0; i < buttons.length; ++i){
    button[i].addEventListener("click", clickFunction[i]);
}

const strBtn = document.getElementById("strBtn");
const graBtn = document.getElementById("graBtn");
const orgBtn = document.getElementById("orgBtn");
const bluBtn = document.getElementById("bluBtn");
strBtn.addEventListener("click", strClick);
graBtn.addEventListener("click", graClick);
orgBtn.addEventListener("click", orgClick);
bluBtn.addEventListener("click", bluClick);