
// step-1 create onloads Headle

window.onload = () =>{
    main()
}
function main(){
    const root = document.getElementById("root");
    const btn = document.getElementById("change-btn");
    const Output = document.getElementById("Output");
    const copyBtn = document.getElementById("copy-btn");

    btn.addEventListener("click",function (){
       const bgColor = generatorHex();
       root.style.background = bgColor;
       Output.value = bgColor.substring(1);
    })
    copyBtn.addEventListener("click",function(){
        navigator.clipboard.writeText(`#${Output.value}`);
        
       if(isValidHex(Output.value)){
             generatToastMessage(`#${Output.value} copied`);
       }else{
        alert("Invalid Color code");
       }
    })

    Output.addEventListener("keyup",function (e){

        const color = e.target.value;
        if(color){
            Output.value = color.toUpperCase();
            if(isValidHex(color)){
                root.style.background = `#${color}`;
            }
        }
    })
}
// step-2 random color generator  function
function generatorHex(){
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
 function generatToastMessage(message){
    const div = document.createElement("div");
    div.innerHTML = message;
    div.className = "tost-message toast-message-slide-in";
    const append =   document.body.appendChild(div);

    setTimeout(() => {
        div.className = " ";
        div.remove()
    }, 1000);
 }

 /** 
 * @param {string} color: ;   
 */
 function isValidHex(color){
    if(color.length !== 6) return false;
    // if(color[0] !== "#") return false;
    // color = color.substring(1);
    return /[0-9A-Fa-f]{6} $/i
 }

// step-3 collect all mecessary reference

// step-4 Handle the click event

// step-5 active tost Message
// step-6 create a dynamic toast message
// step-7 clear tost message

