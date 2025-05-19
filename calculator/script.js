const calcValue = document.getElementById("values");
const openPar = document.getElementById("openPar");
const closePar = document.getElementById("closePar");
const clear = document.getElementById("clear");
const back = document.getElementById("back");
const buttonValues = document.querySelectorAll("digitButtons");

let value = (calcValue.innerHTML = "0");

buttonValues.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    switch (value) {
      case "/":
        break;
      case "x":
        break;
      case "-":
        break;
      case ",":
        break;
      case "=":
        break;
      case "+":
        break;
      default:
        display.value += value;
    }
  });
});
