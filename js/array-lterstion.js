//ForEach

const number = [45, 53, 23, 13, 54];

function myFunction(value, index, array) {
  // console.log(value);
  // console.log(index);
  // console.log(array);
  // console.log('------------');
}
number.forEach(myFunction);

// Map new array retrun kore
function myFunction1(value) {
  return value * 2;
  console.log('------------');
}
let numbers1 = number.map(myFunction1);
console.log(numbers1);

// filter o new array retrun kore
function myFilter(value, index, array) {
  return value > 19;
}
let newfilter = number.filter(myFilter);
console.log(newfilter);

// reduce total name ekta peramitter thake,, eta array k choto kore thake
function myFilter(total, value, index, array) {
  return total + value;
}
let newreduce = number.reduce(myFilter, 10);

// eta filter er moTo, but eta ekta item jodi na mile tokhon false retun kore
function myEvery(value, index, array) {
  return value > 10;
}
let newEvary = number.every(myEvery, 10); // sob check kore
let newSome = number.some(myEvery, 20); //koyekta check kore mille holo
console.log(newSome);
