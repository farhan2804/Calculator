// Get references to the input and button elements
const inputText = document.getElementById("ip");
const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const button3 = document.getElementById("btn3");
const button4 = document.getElementById("btn4");
const button5 = document.getElementById("btn5");
const button6 = document.getElementById("btn6");
const button7 = document.getElementById("btn7");
const button8 = document.getElementById("btn8");
const button9 = document.getElementById("btn9");
const addBtn = document.getElementById("addBtn");
const subBtn = document.getElementById("subBtn");
const equalButton = document.getElementById("equalBtn");
const clearButton = document.getElementById("clearBtn");
const oneClear = document.getElementById("cOne");
const zeroButton = document.getElementById("zero");
const zeroesButton = document.getElementById("zeroes");
const mulButton = document.getElementById("multiply");
const divButton = document.getElementById("divide");
const dotButton = document.getElementById("dot");
const percentageButton = document.getElementById("percentage");

function zb() {
  inputText.value += "0";
}
function zb1() {
  inputText.value += "00";
}

function logButtonValue(farhan) {
  const value = farhan.target.getAttribute("data-value");
  inputText.value += value;
}

function clearOne() {
  inputText.value = inputText.value.toString().slice(0, -1);
}

function clearInputField() {
  inputText.value = "";
}
function putDot() {
  inputText.value += ".";
}

function evaluateExpression() {
  const expression = inputText.value;
  try {
    const result = eval(expression);
    inputText.value = result;
  } catch (error) {
    inputText.value = "Error";
  }
}

button1.addEventListener("click", logButtonValue);
button2.addEventListener("click", logButtonValue);
button3.addEventListener("click", logButtonValue);
button4.addEventListener("click", logButtonValue);
button5.addEventListener("click", logButtonValue);
button6.addEventListener("click", logButtonValue);
button7.addEventListener("click", logButtonValue);
button8.addEventListener("click", logButtonValue);
button9.addEventListener("click", logButtonValue);
addBtn.addEventListener("click", logButtonValue);
subBtn.addEventListener("click", logButtonValue);
mulButton.addEventListener("click", logButtonValue);
divButton.addEventListener("click", logButtonValue);
dotButton.addEventListener("click", putDot);
equalButton.addEventListener("click", evaluateExpression);
clearButton.addEventListener("click", clearInputField);
oneClear.addEventListener("click", clearOne);
zeroButton.addEventListener("click", zb);
zeroesButton.addEventListener("click", zb1);
percentageButton.addEventListener("click", logButtonValue);
