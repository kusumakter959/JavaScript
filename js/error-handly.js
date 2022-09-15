try {
  adddlert("Welcome guest!");
} catch (err) {
  // console.log(err.message);
}

// Throws errors
let x = "9";
try {
  if (x == "") throw "Empty";
  x = Number(x);
  if (isNaN(x)) throw "Not a Number";
  if (x < 5) throw "Too Low";
  if (x > 10)
    throw {
      message: "Too Height",
      name: "Height Error",
    };
} catch (err) {
  console.log(err);
}
console.log("This is a test");


// HTML VALIDATION
