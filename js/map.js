// MAP
//Object key k jekono data type dewa jai na,,, shudhu string dite hoy...
//but map  key k jekono data type dewa jai,
// map size property ache
//je order insert kore, se order thake
// key and value k newar jonno

let text = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);
text.set("apple", 600);
text.set(232, 800);
// console.log(text.get("apples"));
// console.log(text.delete("oranges"));
// console.log(text.size);


text.forEach(function(value,key){
    console.log(key + ":"+value);
});