# wdi-project-one

## Isn't this Amazing

link to [My game] (file:///Users/joebyrne/development/wdi-project-one/index.html)

'Isn't this amazing' is a speed and skill based game, with the user attempting to fill the board without touch the red squares. Then you get a score, the lower the score the better. It's fun, competitive and intense.

This was my first project with GA's Web Development course, and my first opportunity to spread my wings with HMTL, JavaScript and CSS.

The game consists of three pages:

* Starting Page.
* Game Over Page.
* Winning Page.

# The Starting Page

![Home Page](screenshot/start.png)

This starting page consists of an animated title, a flex box, a button and a timer.

# Game Over Page

![Game Over Page](screenshot/game-over-page.09.11.png)

Once a player starts the game and touches a red square, you lose and come to this page.

# Winning page

![winning page](screenshot/winning-page.15.19.png)

If all the squares get highlighted including the the winning page.

# Example of Code

## My Winning Logic

`function NoHighlightedSquaresLeft() {`

`if (container.filter(square => square).length === container.length) {`

`if (container.filter(square => square).length > 142) {`

`const welldone = document.getElementById('wellDone');
welldone.play();
lastPage.style.zIndex = '3';
score.textContent = (`${i}`)``

`;}}`


# My Process

  1.) <strong>Make the grid</strong> using Bulma.

  2.) DOM elements with a hover over function, to make all the squares change colour (and class) when they were hovered over by the mouse. To do this, I created a function called handleHover:

  `function handleHover(event) {`

  `container[event.target.id -1] = true;`

  `event.target.classList.add('highlightedSquares');`

  Changing the class of the hovered over div to highlightedSquares.

  `NoHighlightedSquaresLeft();`

  After the square has changed class, I invoked the winning logic to check if all the squares
      have been highlighted.

  `}`

  3.) Add a <strong>timer</strong>.

  `function timerStart() {`

  `const interval = setInterval(function () {`

  `i = i + 1;`

  `const themeTune = document.getElementById('themeTune');`

  `themeTune.play();`
    When the timerStart function is invoked the background themeTune plays.

  `timerFace.textContent = `${i}`;`
    The timer face shows i, I have set the timer to change this value every second, therefore building a timer which counts up in seconds.

  `}, 100);`

  `}`

  4.) I was running out of time and still had more things that I wanted to add, so I decided to dedicate my time to making a <strong>selecting difficulty button</strong>.

  The concept behind the difficulty button was simple, using DOM elements when the start button was pressed the startButtonClick was invoked. This function randomly generates 12 random numbers in an array between 0 - 119. Then gives the the numbers that corresponding  to the squares a new class of redSquares.

  Each time the button is pressed, more red squares are generated.


# If I Had Time...

  1.) Make the difficulty selector smoother, at the moment a red square can be generated multiple times is the same div.

  2.) Add more style, I would love the theme of the game to be universal throughout, for me its still looks a bit slapped together.

  3.) Add a scoreboard, I would need figure out how to save and show the data on local storage. The reason why I would do it this way is because I would need the information to be save even when the page is reloaded.
