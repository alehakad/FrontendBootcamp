console.log(document);
const playingField = document.getElementById("playing-field");
console.log(playingField);
const ballDiv = document.getElementById("ball");
playingField.style.backgroundColor = "blue";
ballDiv.style.backgroundColor = "yellow";

const ball = document.getElementById("ball");

let rightBorder = playingField.clientWidth - ball.clientWidth;
let leftBorder = 0;
let topBorder = 0;
let bottomBorder = playingField.clientHeight - ball.clientHeight;
let step = 15;

console.log(
  `Borders are ${rightBorder}, ${leftBorder},${topBorder},${bottomBorder} `
);

const moveBallRight = function () {
  console.log("moveBallRight");
  let currentCoord = parseInt(ball.style.left) || leftBorder;
  console.log(currentCoord);
  currentCoord += step;
  console.log(rightBorder, currentCoord);
  if (rightBorder >= currentCoord) ball.style.left = currentCoord + "px";
};

const moveBallLeft = function () {
  console.log("moveBallLeft");
  let currentCoord = parseInt(ball.style.left) || leftBorder;
  console.log(currentCoord);
  currentCoord -= step;
  if (leftBorder <= currentCoord) ball.style.left = currentCoord + "px";
};

const moveBallDown = function () {
  console.log("moveBallDown");
  let currentCoord = parseInt(ball.style.top) || topBorder;
  console.log(currentCoord);

  currentCoord += step;
  if (bottomBorder >= currentCoord) ball.style.top = currentCoord + "px";
};

const moveBallUp = function () {
  console.log("moveBallUp");
  let currentCoord = parseInt(ball.style.top) || topBorder;
  console.log(currentCoord);
  currentCoord -= step;
  if (topBorder <= currentCoord) ball.style.top = currentCoord + "px";
};

const header = document.createElement("h1");
header.innerHTML = "The Best Game Ever";
header.style.color = "#c0392b";
header.style.fontFamily = "Helvetica";
document.body.appendChild(header);

const subHeader = document.createElement("h2");
subHeader.textContent = "Game by: ???";
subHeader.class = "subHeader";
document.body.appendChild(subHeader);

const box = document.getElementById("box");

const enterColor = function () {
  box.style.backgroundColor = "#c0392b";
  box.innerHTML = "AHH GO AWAY";
};

const leaveColor = function () {
  box.style.backgroundColor = "#1abc9c";
  box.innerHTML = "Hover over me!";
};

const onClickColor = function () {
  box.style.backgroundColor = "#8e44ad";
};

const drinkList = document.getElementById("drinkList");

const addDrink = function () {
  let newDrink = document.createElement("li");
  newDrink.innerHTML = "Beer";
  drinkList.appendChild(newDrink);
};
