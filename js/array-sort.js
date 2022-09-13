//Sort alpebet akare shano

const fruits = ["Banana", "orange", "Apple", "Mango"];
let fsort = fruits.sort();
let frevese = fruits.reverse(); //utla theke sajai

// Compare function Number k shajano choto theke boro
const point = [40, 100, 50, 80, 32, 75];
let newPoint = point.sort(function (a, b) {
  return a - b;
});
console.log(newPoint);

// Compare function Number k shajano boro theke choto
const points = [40, 100, 50, 80, 32, 75];
let newPoints = point.sort(function (a, b) {
  return b - a;
});

//Math.random eta songkhake random vabe dekhai,,

const mathRandom = [40, 100, 50, 80, 32, 75];
let newRandom = mathRandom.sort(function (a, b) {
  return 0.5 - Math.random();
});
// console.log(newRandom);

//Math.max height value ber korar jonno

let hrightsN = Math.max(12, 32, 54, 3, 53);
let minium = Math.min(12, 32, 54, 3, 53);
console.log(minium);

// SORTING OBJECT ARRAYS

//Number diye sorting kora hoy
const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];
let newCars = cars.sort(function (a, b) {
  return a.year - b.year;
});

// type diye sorting kora
let carsT = cars.sort(function (a, b) {
  let x = a.type.toLowerCase();
  let y = b.type.toLowerCase();

  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
});
console.log(carsT);
