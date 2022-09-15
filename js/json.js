// Json theke javaScript conver
let text =
  '{ "employees" : [' +
  '{ "firstName":"John" , "lastName":"Doe" },' +
  '{ "firstName":"Anna" , "lastName":"Smith" },' +
  '{ "firstName":"Peter" , "lastName":"Jones" } ]}';
// console.log(text);
const obj = JSON.parse(text); ///Valid javaScript korar jonno
console.log(obj.employees[0].firstName);

// Object theke jason Convert kora

let person = {
  firstName1: "sumit",
  lastName: "saha",
};
console.log(person.firstName1);
console.log(JSON.stringify(person));
