const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  //   set lang(values) {
  //     return (language = values);
  //   },
};
// console.log((person.values = "kusum akter"));
// setter diye New PROPERTY ADD KORA JONNO
Object.defineProperty(person, "fullName", {
  get: function () {
    return this.firstName;
  },
});

// person.city = "pabna"
console.log(person.fullName);
