var counter = document.getElementById("actualEnergy");
counter = 3;
var round = document.getElementById("roundNumber");
roundNumber = 1;

var currentCardsCounter = document.getElementById("currentCards");
currentCardsCounter = 6;

/**
 * Energy-round functions
 */
function subtract(){
  counter -= 1;
  
  if (counter <= 0) {
    counter = 0;
  }
  
  document.getElementById("actualEnergy").innerHTML = counter;
}

function add(){
  counter += 1;
  
  if (counter >= 10) {
    counter = 10;
  }
  document.getElementById("actualEnergy").innerHTML = counter;
}

function nextRound(){
  roundNumber += 1;
  counter += 2;
  currentCardsCounter += 3;
  
  if (counter >= 10) {
    counter = 10;
  }
  
  if (currentCardsCounter >= 12) {
    currentCardsCounter = 12;
  }
  if (currentCardsCounter <= 0) {
    currentCardsCounter = 3;
  }
  
  document.getElementById("roundNumber").innerHTML = roundNumber;
  document.getElementById("actualEnergy").innerHTML = counter;
  document.getElementById("currentCards").innerHTML = currentCardsCounter;
}

function reset(){
  counter = 3;
  roundNumber = 1;
  currentCardsCounter = 6;
  
  document.getElementById("actualEnergy").innerHTML = counter;
  document.getElementById("roundNumber").innerHTML = roundNumber;
  document.getElementById("currentCards").innerHTML = currentCardsCounter;
  
  resetA1Parts();
  resetA2Parts();
  resetA3Parts(); 
}

/**
 * Cards functions
 */
function addCard() {
  currentCardsCounter += 1;
  
  if (currentCardsCounter >= 12) {
    currentCardsCounter = 12;
  }
  
  document.getElementById("currentCards").innerHTML = currentCardsCounter;
}

function minusCard() {
  currentCardsCounter -= 1;
  
  if (currentCardsCounter <= 0) {
    currentCardsCounter = 0;
  }
  
  document.getElementById("currentCards").innerHTML = currentCardsCounter;
}