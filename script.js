var order = [];
var clickedOrder = [];
var score = 0;

const blue = document.querySelector(".blue");
const yellow = document.querySelector(".yellow");
const red = document.querySelector(".red");
const green = document.querySelector(".green");

const colorTable = new Map();
colorTable.set(0, blue);
colorTable.set(1, yellow);
colorTable.set(2, red);
colorTable.set(3, green);

function lightColor(element, number) {
  number = number * 500; //what the fuck?
  setTimeout(() => {
    element.classList.add("selected");
  }, number - 250);
  setTimeout(() => {
    element.classList.remove("selected");
  }, number);
}

//Add new color
function addSequence() {
  let randomColor = Math.trunc(Math.random() * 4);
  order.push(randomColor);
  clickedOrder = [];

  for (let i in order) {
    lightColor(colorTable.get(order[i]), parseInt(i) + 1);
  }
}

//Game over
function gameOver() {
  alert(`GAME OVER\nScore: ${score}\nClick OK to restart game`);
  order = [];
  clickedOrder = [];
  score = 0;
  addSequence();
}

//Check if correct
function checkOrder() {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      gameOver();
      return;
    }
  }

  if (clickedOrder.length == order.length) {
    score += 100;
    addSequence();
  }
}

//Each click
function eachClick(color) {
  clickedOrder.push(color);
  colorTable.get(color).classList.add("selected");

  setTimeout(() => {
    colorTable.get(color).classList.remove("selected");
    checkOrder();
  }, 250);
}

//alert("Welcome!\nClick OK to start the game");

blue.onclick = () => eachClick(0);
yellow.onclick = () => eachClick(1);
red.onclick = () => eachClick(2);
green.onclick = () => eachClick(3);

//addSequence();
