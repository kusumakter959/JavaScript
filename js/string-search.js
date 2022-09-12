//Search holo Casesensivitive
//Indes OF

// Search kore 1st index ber kore
let str = "Please locate where 'locate' occurs!";
console.log(str.indexOf("Please"));

// Search kore last index ber kore
let str1 = "Please Please locate where 'locate' occurs!";
console.log(str1.lastIndexOf("Please"));

// Search kore last index ber kore
let str2 = "Please locate where Please 'locate' occurs!";
console.log(str2.lastIndexOf("locate", 17));
17; //mane last dike 17 index bad dey

// Search kora
let search = "Please Please locate where 'locate' occurs!";
console.log(search.search("where"));

//Text Macth match kore ber kora
let text = "the rain in SPAN stays mainly in the plain";
console.log(text.match(/ain/gi));

// Includes
// string er modde word ta  ache kina check kora

let text1 = "hello world, welcome to the universe";
console.log(text1.includes("hello", 12)); //jodi positio bole DelayNode, setha khata porbe, ortat 12 por theke seach korbe


//String start With holo, string diye shuru kore check kora
let strwith = "Hello World, Welcome to te universe";
console.log(strwith.startsWith('Hello'));



//String start With holo, string diye shuru kore check kora
let endwith = "Hello World, Welcome to te universe";
console.log(endwith.endsWith('World',6));