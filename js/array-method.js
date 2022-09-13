
const fruits = Array('banna','orange','Apple','Mango');
// console.log(fruits.toString());
console.log(fruits.join("*"));

const LRemove = fruits.pop();
const fRemove = fruits.shift();
const fAdd = fruits.unshift('kutta limon');
const lAdd = fruits.push('limon');


// Jekono item k delet korar jonno delet mthod use na kora vALO
// let delet = delete fruits[3];


// Array Splicing array item k add and removed kora jai
// 1st kon position bose, 2nd kon koyta item remove hobe,, then item add korbe


const name = ['kusum','limon','karima','ador'];
name.splice(2,0,'sumi','minu');
console.log(name);

console.log(fruits.concat(name));

