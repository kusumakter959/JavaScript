
// step-1 create onloads Headle

    window.onload = () =>{
        main()
    }
    function main(){
        const root = document.getElementById("root");
        const btn = document.getElementById("change-btn");
        btn.addEventListener("click",function (){
           const bgColor = generateaRGBColor();
           root.style.background = bgColor;
        })
    }
// step-2 random color generator  function
    function generateaRGBColor(){
        const red = Math.floor(Math.random()*255);
        const green = Math.floor(Math.random()*255);
        const blue = Math.floor(Math.random()*255);

        return `rgb(${red},${green},${blue})`;
    }


// step-3 collect all mecessary reference

// step-4 Handle the click event

// TEST


// window.onload = () =>{
//     main();
// }
// function main(){
//     const root = document.getElementById("root");
//     const btn = document.getElementById("change-btn");
    
//     btn.addEventListener("click",function(){
//         const bgColor = genarateColor()
//         root.style.background = bgColor;
//     })
// }
// function genarateColor(){
//     const red = Math.floor(Math.random() *255);
//     const green = Math.floor(Math.random() *255);
//     const blue = Math.floor(Math.random() *255);

//     return `(${red}, ${green}, ${blue})`;
// }