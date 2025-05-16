const squares = document.querySelectorAll(".square");
const nextRoundBtn = document.getElementById("nextRound");
const restartGameBtn = document.getElementById("restartGame");
const playerTurnText = document.getElementById("turnText");
const xPlayerVictory = document.getElementById("xPlayerWins");
const oPlayerVictory = document.getElementById("oPlayerWins");
const ul = document.getElementById("moves");

let currentPlayer = Math.floor(Math.random() * 2) === 1 ? "X" : "O";
let xMoves = [];
let oMoves = [];
let xPlayerWins = 0;
let oPlayerWins = 0;
nextRoundBtn.style.display = "none";
restartGameBtn.style.display = "none";
xPlayerVictory.innerHTML = `Player X: 0`;
oPlayerVictory.innerHTML = `Player O: 0`;
playerTurnText.innerHTML = "Player turn: " + currentPlayer;

const possibleWaysToWin = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

/*----FUNCTION THAT HANDLES WHAT CLICKING A SQUARE DOES----*/
const handleClick = (e) => {
  const square = e.currentTarget;
  let index = Array.from(squares).indexOf(square);
  const img = square.querySelector("img");

  if (!img.getAttribute("src")) {
    img.setAttribute(
      "src",
      currentPlayer === "X" ? "./resources/cross.png" : "./resources/circle.png"
    );

    currentPlayer === "X" ? xMoves.push(index) : oMoves.push(index);
    ul.innerHTML +=
      "<li> " +
      `Player ${currentPlayer} plays in square ${index + 1}` +
      " </li>";

    const gameStatus = evaluate();

    if (!gameStatus) {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      playerTurn = playerTurnText.innerHTML = "Player turn: " + currentPlayer;
    }
  }
  //evaluate();
};

/*---- EVALUTES IF OBJECTIVE TO WIN HAS BEEN FULLFILLED ---------*/
const evaluate = () => {
  let result = false;
  if (!result && xMoves.length >= 3) {
    for (let i of possibleWaysToWin) {
      const hasXWin = i.every((arrayElement) => xMoves.includes(arrayElement));

      if (hasXWin) {
        xPlayerWins++;
        result = true;
        xPlayerVictory.innerHTML = `Player X: ${xPlayerWins}`;
        ul.innerHTML +=
          "<li> " + "<strong>" + `Player X wins!!!` + "<strong>" + "</li>";
        stopGame();
        break;
      }
    }
  }

  if (!result && oMoves.length >= 3) {
    for (let i of possibleWaysToWin) {
      const hasOWin = i.every((arrayElement) => oMoves.includes(arrayElement));

      if (hasOWin) {
        oPlayerWins++;
        result = true;
        oPlayerVictory.innerHTML = `Player O: ${oPlayerWins}`;
        ul.innerHTML +=
          "<li> " + "<strong>" + `Player O wins!!!` + "<strong>" + "</li>";
        stopGame();
        break;
      }
    }
    if (oMoves.length + xMoves.length === squares.length) {
      gameDraw();
    }
  }
  return result;
};

/*----FUNCTION TO RESET VALUES AFTER GAME FINISHED----*/
const resetAllValues = () => {
  xMoves = [];
  oMoves = [];
  xPlayerWins = 0;
  oPlayerWins = 0;
  xPlayerVictory.innerHTML = `Player X: 0`;
  oPlayerVictory.innerHTML = `Player O: 0`;
  currentPlayer = Math.floor(Math.random() * 2) === 1 ? "X" : "O";
  resetSquares();
};

/*----FUNCTION TO RESET ALL VALUES AFTER GAME FINISHED----*/
const resetValues = () => {
  xMoves = [];
  oMoves = [];
  resetSquares();
};

/*----FUNCTION TO CLEAR IMAGES----*/
const resetSquares = () => {
  for (let i = 0; i < squares.length; i++) {
    const img = squares[i].querySelector("img");
    img.src = "";
  }
  ul.innerHTML = "";
};

const showButtons = () => {
  restartGameBtn.style.display = "inline";
  nextRoundBtn.style.display = "inline";
};

const hideButtons = () => {
  restartGameBtn.style.display = "none";
  nextRoundBtn.style.display = "none";
};

/*---FUNCTION TO PLAY NEXT ROUND---*/
const beginNextRound = () => {
  stopGame();
  resetValues();
  playingGame();
  hideButtons();
};

const restartGame = () => {
  stopGame();
  resetAllValues();
  playingGame();
  hideButtons();
};

/*-----FUNCTION TO PLAY IF IT'S A DRAW----*/
const gameDraw = () => {
  document.getElementById("moves").innerHTML +=
    "<li> " + "<strong>" + `It's a DRAW!!!` + "<strong>" + "</li>";
  stopGame();
};

/*----FUNCTION TO ADD EVENT LISTENER----*/
const playingGame = () => {
  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
};

/*----FUNCTION TO REMOVE EVENT LISTENER----*/
const stopGame = () => {
  squares.forEach((square) => {
    square.removeEventListener("click", handleClick);
  });
  showButtons();
  nextRoundBtn.addEventListener("click", beginNextRound);
  restartGameBtn.addEventListener("click", restartGame);
};

/*---GAME BEGIN---*/
playingGame();
