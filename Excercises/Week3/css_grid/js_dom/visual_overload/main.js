const getRandomColor = function () {
  const niceColors = [
    "#8e44ad",
    "#3498db",
    "#c0392b",
    "#f1c40f",
    "#d35400",
    "#2ecc71",
    "#1abc9c",
    "#2c3e50",
    "#7f8c8d",
  ];

  const randomPosition = Math.floor(Math.random() * niceColors.length);
  return niceColors[randomPosition];
};

let numOfBoxes = 10;
let boxHeight = 20;
let boxWidth = 20;
let boxContainer = document.getElementById("container");
for (let i = 1; i <= 10; i++) {
  //create new box
  let newBox = document.createElement("div");
  newBox.style.backgroundColor = getRandomColor();
  newBox.clientHeight = boxHeight;
  newBox.clientWidth = boxWidth;
  boxContainer.appendChild(newBox);
}
