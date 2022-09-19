// ekta function k arekta funtione peramitter akare dewa
function display(some) {
  console.log(some);
}
function calculate(num1, num2, callback) {
  let sum = num1 + num2;
  if (callback) callback(sum);
  return sum;
}

let result = calculate(2, 3, display);
