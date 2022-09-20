
function myFunction(text){
    console.log(text);
}
const button = document.getElementById("button");
const container = document.getElementById("container");

button.addEventListener('click',myFunction);

// Capture Mode
button.addEventListener('click',function(){
    myFunction("Hellow Button");
},true);
container.addEventListener('click',function(){
    myFunction("Hellow Div");
},true);

// container.removeEventListener('click',myFunction);

button.addEventListener('mouseover',function(){
    console.log("mouseover");
});
button.addEventListener('mouseout',function(){
    console.log("mouse out");
});