// console.log(person.fuNamell());

// eta obejct theke r ekta object call korar jonno call use kora hoy

const person1 = {
  fuNamell: function () {
    return this.firstName + " " + this.lastName;
  },
};
const perso2 = {
  firstName: "kusum",
  lastName: "akter",
  fuNamell: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person1.fuNamell.call(perso2));
