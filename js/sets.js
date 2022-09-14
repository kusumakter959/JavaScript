// Set hooche uniqe, eta modde duplicate data dawa jai na

const letters = new Set(["a", "b", "c", "d"]);
letters.add("f");
console.log(letters);

console.log(
  letters.forEach(function (value) {
    console.log(value);
  })
);


console.log(letters.values());