let currentPlayer = "X";
let xMoves = [];
let oMoves = [];
let indexArr = [];
let xPlayerWins = 0;
let oPlayerWins = 0;
let weHaveAWinner = false;

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

const squares = document.querySelectorAll(".square");

document.getElementById("turnText").innerHTML = "Player turn: " + currentPlayer;
document.getElementById("xPlayerWins").innerHTML = `Player X: 0`;
document.getElementById("oPlayerWins").innerHTML = `Player O: 0`;
document.getElementById("nextRound").style.visibility = "hidden";

/*----FUNCTION THAT HANDLES THE CLICKING A SQUARE----*/
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
    indexArr.push[index];
    document.getElementById("moves").innerHTML +=
      "<li> " +
      `Player ${currentPlayer} plays in square ${index + 1}` +
      " </li>";

    if (evaluate() === false) {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      let playerTurn = (document.getElementById("turnText").innerHTML =
        "Player turn: " + currentPlayer);
    }
  }
  evaluate();
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
        document.getElementById(
          "xPlayerWins"
        ).innerHTML = `Player X: ${xPlayerWins}`;
        document.getElementById("moves").innerHTML +=
          "<li> " + "<strong>" + `Player X wins!!!` + "<strong>" + "</li>";
        weHaveAWinner = true;
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
        document.getElementById(
          "oPlayerWins"
        ).innerHTML = `Player O: ${oPlayerWins}`;
        document.getElementById("moves").innerHTML +=
          "<li> " + "<strong>" + `Player O wins!!!` + "<strong>" + "</li>";
        weHaveAWinner = true;
        stopGame();
        break;
      }
    }
  }
  return weHaveAWinner;
};

/*----FUNCTION TO RESET VALUES AFTER GAME FINISHED----*/
const resetAllValues = () => {
  weHaveAWinner = false;
  xMoves = [];
  oMoves = [];
  indexArr = [];

  resetSquares();
};

/*----FUNCTION TO CLEAR IMAGES----*/
const resetSquares = () => {
  for (let i = 0; i < squares.length; i++) {
    const img = squares[i].querySelector("img");
    img.src = "";
  }
  const ul = document.getElementById("moves");
  ul.innerHTML = "";
};

/*---FUNCTION TO PLAY NEXT ROUND---*/
const nextRound = () => {
  stopGame();
  resetAllValues();
  playingGame();
  document.getElementById("nextRound").style.visibility = "hidden";
};

//WORK ON DRAW
//

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
  document.getElementById("nextRound").style.visibility = "visible";
};

playingGame();
