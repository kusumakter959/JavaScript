
let myWindow;

const widht = document.getElementById("width");
const height = document.getElementById("height");

widht.innerHTML = "Window inner width is:" + window.innerWidth;
height.innerHTML = "Windorw inner width is:" + window.innerHeight;

function openWindow(){
    myWindow = window.open("https://www.facebook.com/");
    // myWindow = window.open("https://www.facebook.com/","_self");
}
function closeWindow(){
    myWindow.close();
    // alert(myWindow);
}