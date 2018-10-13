const squares = document.getElementsByTagName('div');
const startGame = document.getElementById('start');
const redSquares = document.getElementsByClassName('.preRedSquares');




function handleHover() {
  console.log('hovered');
  this.classList.add('highlightedSquares');

}

for (let i = 0; i < squares.length; i ++) {
  squares[i].addEventListener('mouseover', handleHover);
}

function buttonClick() {
  console.log('heeey');
  const randomArray = [];
  const randonNumber = Math.floor(Math.random()*35);
  const randonNumber1 = Math.floor(Math.random()*35);
  const randonNumber2 = Math.floor(Math.random()*35);
  const randonNumber3 = Math.floor(Math.random()*35);
  const randonNumber4 = Math.floor(Math.random()*35);
  const randonNumber5 = Math.floor(Math.random()*35);
  randomArray.push = [randonNumber, randonNumber1, randonNumber2, randonNumber3, randonNumber4, randonNumber5];
  console.log(randomArray);
  squares[randonNumber].classList.add('redSquares');
}
//random div to go redSquare
// const [randonNumber].classList.add('.redSquare')

//change a random number of div to class (redsquare)

startGame.addEventListener('click', buttonClick);








//
// function generateGrid() {
//
//
//
//
//   squares.removeClass('active');
//   const randomNumbers = []; // create an empty array to push random numbers in to
//   while(randomNumbers.length < 10){
//     const randomNumber = Math.floor(Math.random()*50); // generate a random number between 0 and 49
//     if(randomNumbers.indexOf(randomNumber) > -1) continue; // if randomNumber is already in the array, break out of the if block
//     randomNumbers[randomNumbers.length] = randomNumber; // add randomNumber to the end of the randomNumbers array
//   }
//
//   randomNumbers.forEach((number) => { // loop through the randomNumbers array
//     $('li').eq(number).addClass('active'); // find the li with the index of the random number and add the class of "active"
//   });
// }
//
// startGame.addEventListener('click', generateGrid);











// function generateGrid() {
//   $('.active').removeClass('active');
//   const randomNumbers = []; // create an empty array to push random numbers in to
//   while(randomNumbers.length < 10){
//     const randomNumber = Math.floor(Math.random()*50); // generate a random number between 0 and 49
//     if(randomNumbers.indexOf(randomNumber) > -1) continue; // if randomNumber is already in the array, break out of the if block
//     randomNumbers[randomNumbers.length] = randomNumber; // add randomNumber to the end of the randomNumbers array
//   }
//
//   randomNumbers.forEach((number) => { // loop through the randomNumbers array
//     $('li').eq(number).addClass('active'); // find the li with the index of the random number and add the class of "active"
//   });
// }
