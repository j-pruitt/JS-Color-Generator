
//CONTAINER 1 LOGIC - HEX CODE
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn1 = document.getElementById('btn1');
const color1 = document.querySelector(".color1");
const container1 = document.getElementById('container1');

//TRIGGER BUTTON
btn1.addEventListener("click", function () {
let hexColor = "#";
for (let i = 0; i < 6; i++) {
 hexColor += hex[getRandomNumber()];
}

//MAKE CHANGES IN HTML
color1.textContent = hexColor;
container1.style.backgroundColor = hexColor;
});

//CALCULATIONS
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

//CONTAINER 2 LOGIC - LINEAR GRADIENT CODE
const btn2 = document.getElementById('btn2');
const color2 = document.querySelector(".color2");
const container2 = document.getElementById('container2');
let angle = [];
 
for (let i = 1; i <= 100; i++) {
   angle.push(i);
}

//TRIGGER BUTTON
btn2.addEventListener("click", function () {
let hexColor1 = "#";
let hexColor2 = "#";
for (let i = 0; i < 6; i++) {
 hexColor1 += hex[getRandomNumber()];
 hexColor2 += hex[getRandomNumber()];
}

//MAKE CHANGES IN HTML
color2.textContent = getRandomHundred() + "deg, " + hexColor1 + ", " + hexColor2;
container2.style.backgroundImage = "linear-gradient(" + getRandomHundred() + "deg, " + hexColor1 + ", " + hexColor2 + ")";
container2.style.backgroundRepeat = "no-repeat";
});

//CALCULATIONS
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}
function getRandomHundred() {
    return Math.floor(Math.random() * angle.length);
}