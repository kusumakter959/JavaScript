// roll numbare akare sajano

const rollNumbers = [3, 64, 342, 1, 75, 4, 5, 87];

let newRoll = rollNumbers.sort(function (a, b) {
  return a - b;
});
console.log(newRoll);
