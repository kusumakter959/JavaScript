// duplecate number ber kora

const number = [1, 32, 4, 5, 2, 1, 54, 4, 5];
const duplicate = number.filter(function (value, index, array) {
     return array.indexOf(value) !== index; //duplicate ber korar jonno
    //  return array.indexOf(value) === index; //unique ber korar jonno
});
console.log(duplicate);
