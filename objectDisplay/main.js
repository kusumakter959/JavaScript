const person = {
  name: " kusum",
  age: " 21",
  chity: "Chittagong",
};

let text = " ";
for (let x in person) {
  text += person[x] + " ";
}

const myArray = Object.values(person);
for (x of myArray) {
  console.log(x);
}

let myString = JSON.stringify(person);
// document.getElementById('demo').innerHTML = person.name+ person.age+ person.chity;
// document.getElementById('demo').innerHTML = text;
// document.getElementById('demo').innerHTML = myArray;
document.getElementById('demo').innerHTML = myString;

