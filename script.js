const squares = document.getElementsByClassName('squares');
const startGame = document.getElementById('start');
const timerFace = document.getElementById('timer');
// const highlightedSquares = document.getElementsByClassName('highlightedSquares');
const redSquares = document.getElementsByClassName('redSquares');
const lastPage = document.querySelector('.lastPage');
const gameOverPage = document.querySelector('.gameOverPage');
const resetButton = document.querySelector('.resetButton');
// const resetButton1 = document.querySelector('.1resetButton');

const score = document.querySelector('.score');
const container = [];
for (let i = 0; i < 143; i++) {
  container.push(false);
}

let squareId = 1;
const containerDiv = document.querySelector('.container');
for (let row = 0; row < 12; row++) {
  const rowDiv = document.createElement('div');
  rowDiv.classList = 'row column is-1 columns';
  for (let square = 0; square < 12; square++) {
    const squareDiv = document.createElement('div');
    squareDiv.classList = 'squares column is-1';
    if (squareId === 144) {
      squareDiv.id = 'startingSquare';
    } else {
      squareDiv.id = squareId;
    }
    squareId++;
    rowDiv.appendChild(squareDiv);
  }
  containerDiv.appendChild(rowDiv);
}


//^108 squares

// let highlightedSquaresNumber = 0;



//when you hover over the main game, sqaures change colour.
function handleHover(event) {
  container[event.target.id -1] = true;
  // highlightedSquaresNumber += 1;
  event.target.classList.add('highlightedSquares');

  NoHighlightedSquaresLeft();
}

//function randomly generates am array, with 12 random numbers
function startButtonClick() {
  const randomNumber = Math.floor(Math.random()*119);
  squares[randomNumber].classList.add('redSquares');
  const randomNumberA = Math.floor(Math.random()*119);
  squares[randomNumberA].classList.add('redSquares');
  const randomNumberB = Math.floor(Math.random()*119);
  squares[randomNumberB].classList.add('redSquares');
  const randomNumberC = Math.floor(Math.random()*119);
  squares[randomNumberC].classList.add('redSquares');
  const randomNumberD = Math.floor(Math.random()*119);
  squares[randomNumberD].classList.add('redSquares');
  const randomNumberE = Math.floor(Math.random()*119);
  squares[randomNumberE].classList.add('redSquares');
  const randomNumberF = Math.floor(Math.random()*119);
  squares[randomNumberF].classList.add('redSquares');
  const randomNumberG = Math.floor(Math.random()*119);
  squares[randomNumberG].classList.add('redSquares');
  const randomNumberH = Math.floor(Math.random()*119);
  squares[randomNumberH].classList.add('redSquares');
  const randomNumberI = Math.floor(Math.random()*119);
  squares[randomNumberI].classList.add('redSquares');
  const randomNumberJ = Math.floor(Math.random()*119);
  squares[randomNumberJ].classList.add('redSquares');
  const randomNumberK = Math.floor(Math.random()*119);
  squares[randomNumberK].classList.add('redSquares');
  container[randomNumber] = true;
  container[randomNumberA] = true;
  container[randomNumberB] = true;
  container[randomNumberC] = true;
  container[randomNumberD] = true;
  container[randomNumberE] = true;
  container[randomNumberF] = true;
  container[randomNumberG] = true;
  container[randomNumberH] = true;
  container[randomNumberI] = true;
  container[randomNumberJ] = true;
  container[randomNumberK] = true;
}

//red sqaures are generated when the start button is clicked.

startGame.addEventListener('click', startButtonClick);

//timer runs when the start button is clicked.

let i = 0;

function timerStart() {
  const interval = setInterval(function () {
    i = i + 1;
    const themeTune = document.getElementById('themeTune');
    themeTune.play();
    timerFace.textContent = `${i}`;
    if (container.filter(square => square).length === container.length) {
      clearInterval(interval);
      //Z index. make in HTML make right size postion. z index > 1
      // document.querySelector('.lastPage').innerHtml;
    }
  }, 100);
  addSquaresEventListeners();

}

function addSquaresEventListeners() {
  for (let i = 0; i < redSquares.length; i++) {
    redSquares[i].addEventListener('mouseover', gameOver);
    // console.log('GAME OVER');
    // gameOverPage.style.zIndex = '4';
  }
  for (let i = 0; i < squares.length; i ++) {
    squares[i].addEventListener('mouseover', () => handleHover(event));
  }
}

// Start timer
squares[squares.length - 1].addEventListener('click', timerStart);



//Level complete >>>>

function NoHighlightedSquaresLeft() {

  if (container.filter(square => square).length === container.length) {
  // if (container.filter(square => square).length > 142) {
    console.log('Well done, You have completed the level. You\'re timer was', `${i}`);
    const welldone = document.getElementById('wellDone');
    welldone.play();
    lastPage.style.zIndex = '3';
    score.textContent = (`${i}`);
  }
}

//Don't touch the redsquare === game over>>>


const randomNumber = Math.floor(Math.random()*119);
const randomNumber1 = Math.floor(Math.random()*119);
const randomNumber2 = Math.floor(Math.random()*119);
const randomNumber3 = Math.floor(Math.random()*119);
const randomNumber4 = Math.floor(Math.random()*119);
const randomNumber5 = Math.floor(Math.random()*119);
const randomNumber6 = Math.floor(Math.random()*119);
const randomNumber7 = Math.floor(Math.random()*119);
const randomNumber8 = Math.floor(Math.random()*119);
const randomNumber9 = Math.floor(Math.random()*119);
const randomNumber10 = Math.floor(Math.random()*119);
const randomNumber11 = Math.floor(Math.random()*119);
// const redSquaresArray = [];
squares[randomNumber].classList.add('redSquares');
squares[randomNumber1].classList.add('redSquares');
squares[randomNumber2].classList.add('redSquares');
squares[randomNumber3].classList.add('redSquares');
squares[randomNumber4].classList.add('redSquares');
squares[randomNumber5].classList.add('redSquares');
squares[randomNumber6].classList.add('redSquares');
squares[randomNumber7].classList.add('redSquares');
squares[randomNumber8].classList.add('redSquares');
squares[randomNumber9].classList.add('redSquares');
squares[randomNumber10].classList.add('redSquares');
squares[randomNumber11].classList.add('redSquares');
container[randomNumber] = true;
container[randomNumber1] = true;
container[randomNumber2] = true;
container[randomNumber3] = true;
container[randomNumber4] = true;
container[randomNumber5] = true;
container[randomNumber6] = true;
container[randomNumber7] = true;
container[randomNumber8] = true;
container[randomNumber9] = true;
container[randomNumber10] = true;
container[randomNumber11] = true;

//Don't touch the redsquare === game over>>>


// for (let i = 0; i < redSquares.length; i++) {
//   redSquares[i].addEventListener('mouseover', gameOver);
// const boo = document.getElementById('booing');
// }
const boo = document.getElementById('booing');

function gameOver() {
  boo.play();
  gameOverPage.style.zIndex = '4';
}


//Reset game button once game over >>>
function resetGame() {
  gameOverPage.style.zIndex = '-2';
  location.reload();
}

resetButton.addEventListener('click', resetGame);
