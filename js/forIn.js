
// eta Obejct er jonno use kora hoy
const person = {
  fname: "kusum",
  lname: "akter",
  age: 16,
};

for (let x in person) {
  //   console.log(person[x]);
}

// for in Array jonno use na kora valo
const numbers = [32, 65, 2, 243, 545, 53, 43];
for (let number in numbers) {
  //   console.log(numbers[number]);
}

console.log(numbers.forEach(myFunction));

  function myFunction(value){
    console.log(value);
  };