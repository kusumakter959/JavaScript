// call er update version//

const person1 = {
  fuNamell: function (x, y, z) {
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

// Array theke kivabe max number ber kora jai
//   console.log(person1.fuNamell.apply(perso2,[1,3,4]));
Math.max.apply(null, [1, 2, 3, 4]);
Math.max.apply(" ", [1, 2, 3, 4]);
console.log(Math.max.apply(Math, [1, 2, 3, 4]));
