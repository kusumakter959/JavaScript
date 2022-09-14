for (let i = 0; i < 10; i++) {
  if (i === 3) {
    break;
    // console.log(i)
  }
  // console.log(i)
}
let text = " ";
const cars = ["BMW", "Volvo", "Saab", "Ford"];
list: {
  text += cars[0] + "<br>";
  text += cars[1] + "<br>";
  break list;
  text += cars[2] + "<br>";
  text += cars[3] + "<br>";
}
console.log(text);
