// closure  hocche ekta acces parent scope, jar modde funtion er modde funtion thake,,

function temporary() {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
}
const add = temporary();

console.log(add());
console.log(add());
