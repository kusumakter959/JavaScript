// JavaScript hocche prototype language
//constrator er modde sorasori property add kora jai na.. add korar jonno prototype use kora hoy...
//protype hiden thake


function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.fullNmae = function () {
    return this.firstName + "" + this.lastName;
  };
}
const kusum = new Person("kusum", "akter", 21);
const limon = new Person("limon", "akter", 21);
Person.prototype.country = "Bangladesh";

let jon = new String('deo');

console.dir(jon);
console.log(jon.toUpperCase());
