function calculator() {
  var operation = prompt("Pick a mathematical operation to perform");
  var num1 = prompt("Pick a number");
    num1 = parseFloat(num1, 10);
  var num2 = prompt("Pick another number");
    num2 = parseFloat(num2, 10);
  if (operation === "+") {
    alert(num1 + num2);
  } else if (operation === "-") {
    alert(num1 - num2);
  } else if (operation === "*") {
    alert(num1 * num2);
  } else if (operation === "/") {
    alert(num1 / num2);
  }
}