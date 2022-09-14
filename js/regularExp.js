// Search
let text = "Visit W3Schools!";
let n = text.search("W3Schools");
let n2 = text.search(/w3Schools/i); //reqular expression

// Reqular Expresion g:global m:multiline
let text1 = "Is this all \n there is?";
let result = text1.match(/is/gim);

let result1 = text1.match(/h/g);

// number ber kora
let number = "123456789";
let num = number.match(/[1-4]/g);

// RegExp Object test()
// pattern milai true false ber kore
const pattern = /best/;
console.log(pattern.test("the best things in life are free!"));

// RegExp Object exec() setha print kore

console.log(/things/.exec("the best things in life are free!"));



console.log(num);
