let display = document.getElementById('display');

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = '';
}

function deleteLastChar() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    // Replace % with /100 before evaluation
    let expression = display.value.replace(/%/g, '/100');
    display.value = eval(expression);
  } catch (error) {
    display.value = 'Error';
  }
}