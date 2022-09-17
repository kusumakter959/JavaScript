// Contractor k 1st letter boro hater dite hoy
function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
}
const kusum = new Person("kusum", "akter", 21);
const ador = new Person("ador", "ali", 7);
console.log(Person());
