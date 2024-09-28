"use strict";
let finalButton = document.getElementById('final-button');
let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let direction = "to right";
function colorGenerator() {
    let hchrachters = "0123456789abcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        let md = Math.random() * 16;
        color = color + hchrachters[Math.floor(md)];
    }
    ;
    return color;
    ;
}
let currentFirstColor = "#eef2f3";
let currentSecondColor = "#8e9eab";
let codetoCopy = `{background-image:linear-gradient(${direction},${currentFirstColor},
    ${currentSecondColor})}`;
function firstColor() {
    currentFirstColor = colorGenerator();
    if (button1) {
        button1.innerHTML = currentFirstColor;
    }
    document.body.style.backgroundImage = `linear-gradient(${direction},${currentFirstColor},
    ${currentSecondColor})`;
    codetoCopy = `{background-image:linear-gradient(${direction},${currentFirstColor},
    ${currentSecondColor})}`;
}
function secondColor() {
    currentSecondColor = colorGenerator();
    if (button2) {
        button2.innerHTML = currentSecondColor;
    }
    document.body.style.backgroundImage = `linear-gradient(${direction},${currentFirstColor},
    ${currentSecondColor})`;
    codetoCopy = `{background-image:linear-gradient(${direction},${currentFirstColor},
    ${currentSecondColor})}`;
}
function allColor() {
    firstColor();
    secondColor();
}
function directionToRight() {
    let direction = "to right";
    document.body.style.backgroundImage = `linear-gradient(${direction},${currentFirstColor},
    ${currentSecondColor})`;
    codetoCopy = `{background-image:linear-gradient(${direction},${currentFirstColor},
    ${currentSecondColor})}`;
}
;
function directionToLeft() {
    direction = "to left";
    document.body.style.backgroundImage = `linear-gradient(${direction},${currentFirstColor},
    ${currentSecondColor})`;
    codetoCopy = `{background-image:linear-gradient(${direction},${currentFirstColor},
    ${currentSecondColor})}`;
}
function directionToTop() {
    direction = "to top";
    document.body.style.backgroundImage = `linear-gradient(${direction},${currentFirstColor},
    ${currentSecondColor})`;
    codetoCopy = `{background-image:linear-gradient(${direction},${currentFirstColor},
    ${currentSecondColor})}`;
}
function directionToBottom() {
    direction = "to bottom";
    document.body.style.backgroundImage = `linear-gradient(${direction},${currentFirstColor},
    ${currentSecondColor})`;
    codetoCopy = `{background-image:linear-gradient(${direction},${currentFirstColor},
    ${currentSecondColor})}`;
}
;
let fCb = button1?.addEventListener('click', firstColor);
let sCb = button2?.addEventListener('click', secondColor);
let fB = finalButton?.addEventListener("click", allColor);
let dButtontoRight = document.getElementById("button-toright");
let toR = dButtontoRight?.addEventListener('click', directionToRight);
let dButtontoLeft = document.getElementById("button-toleft");
let toL = dButtontoLeft?.addEventListener('click', directionToLeft);
let dButtontoTop = document.getElementById("button-totop");
let toT = dButtontoTop?.addEventListener('click', directionToTop);
let dButtontoBottom = document.getElementById("button-tobottom");
let ToB = dButtontoBottom?.addEventListener('click', directionToBottom);
let copyButton = document.getElementById("copy-button");
copyButton?.addEventListener('click', () => {
    navigator.clipboard.writeText(codetoCopy);
    alert(`Your Code: ${codetoCopy} is copied✅`);
});
