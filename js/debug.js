// brekpoint chome theke dewa
class perso2 {
  constructor(name, age) {
    debugger

    this.name = name;
    this.age = age;
  }

  method(status) {
    console.log(`${this.name} age ${this.age} is playing ${status}`);
  }
}
debugger

const person = new perso2("limon");
person.method("well");
