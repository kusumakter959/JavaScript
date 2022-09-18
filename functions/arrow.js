const x = function () {
  return 5;
};

const x3 = (x, y) => {
  console.log("hello");
  return x + y;
};
const x1 = (x, y) => x + y;
const x2 = () => 5;
// arrow function this k chini na... se this mane bujhe global variable


