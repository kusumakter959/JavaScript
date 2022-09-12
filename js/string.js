
let text = "Lorem  sit \"amet\" consectetur elit.";
let text2 = "Lorem  sit \\amet\\ consectetur elit.";
let tab = "Lorem  sit \tamet\t consectetur elit.";
let return1 = "Lorem  sit \ramet\r consectetur elit.";
let new1 = "Lorem  sit \namet\n consectetur elit.";
let backspace = "Lorem  sit \bamet\b consectetur elit.";
let fromfeed = "Lorem  sit \famet\f consectetur elit.";

console.log(text);
console.log(text2);
console.log(tab);
console.log(return1);
console.log(new1);
console.log(fromfeed);
console.log(backspace);


// let test = "Hello " + "World";
let test = "Hello World";
console.log(test);


//String can be string

let name = "kusum";
let firstname = new String("kusum");
console.log(typeof name);
console.log(typeof firstname);
// console.log(firstname);

console.log(name == firstname); // value check kore
console.log(name === firstname); // type check kore


//2ta object k compare kora jai na 
//2ta object always false hoy
let name1 = new String("Limon");
let name2 = new String("hossain");
console.log(name1===name2);
