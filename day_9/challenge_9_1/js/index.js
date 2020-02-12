var display = document.getElementById('res');

var clear = document.getElementById('btnClr');

var operations = {
  '+': (numbers) => numbers[0] + numbers[1],
  '-': (numbers) => numbers[0] - numbers[1],
  '*': (numbers) => numbers[0] * numbers[1],
  '/': (numbers) => numbers[0] / numbers[1],
}

function addText(element) {
  let value = element.outerText;
  display.innerHTML = display.outerText + value;
}

function doOperation() {
  let expression = display.outerText;
  let regex = /[+ | - | * | /]/;
  let numbers = expression.split(regex);
  numbers = numbers.map((number) => parseInt(number, 2));
  let operation = expression.match(regex)[0];
  let result = operations[operation](numbers);
  display.innerHTML = result.toString(2);
}

clear.onclick = () => {display.innerHTML = ""};
