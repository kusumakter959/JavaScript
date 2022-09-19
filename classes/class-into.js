// class lekhar somoy class dite hoy,, and er ekta nam dite hory, and er modde ekta constructor method thake

class Car {
  constructor(name, year) {
    this.name = name;
    this, (year = year);
  }
  run(speed) {
    console.log(`${this.name} is running` + speed);
  }
}

const bmw = new Car("BMW", 2032);
const audi = new Car("audi", 2032);

bmw.run("Hello Bangladesh");
