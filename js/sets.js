// Set hooche uniqe, eta modde duplicate data dawa jai na
//etate kono key dewa jai na,, etate key dile value k key hisabe dore k ney

const letters = new Set(["a", "b", "c", "d"]);
letters.add("f");
console.log(letters);

console.log(
  letters.forEach(function (value) {
    // console.log(value);
  })
);

console.log(letters.values());
for(x of letters){
  console.log(x);
}