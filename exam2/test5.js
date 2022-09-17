const mixedArr = [
  "kusum",
  undefined,
  "Learn with sumith",
  false,
  "",
  "apple",
  50,
  "k",
  true,
  NaN
];
// const trueArr = mixedArr.filter(function (el) {
//   if (el) {
//     return true;
//   } else {
//     return false;
//   }
// });

const trueArr = mixedArr.filter(Boolean);

console.log(trueArr);
