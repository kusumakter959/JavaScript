//nicher santece koybar lorem dewa ace , and koybar use kora hoyse, 1st lorem koybar position pawa jai,

const sentane =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

let macths = sentane.match(/simply/gi);
let occurances = macths ? macths.length : 0;
let position = sentane.search(/simplys/);
let position2 = position >= 0 ? position : "Not Found";
console.log(occurances);
console.log(position2);
