
// step-1 create onloads Headle

window.onload = () =>{
    main()
}
function main(){
    const root = document.getElementById("root");
    const btn = document.getElementById("change-btn");
    const Output = document.getElementById("Output");

    btn.addEventListener("click",function (){
       const bgColor = generatorHex();
       root.style.background = bgColor;
       Output.value = bgColor;
    })
}
// step-2 random color generator  function
function generatorHex(){
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}


// step-3 collect all mecessary reference

// step-4 Handle the click event
