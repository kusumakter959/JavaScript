
const display = document.getElementById("display");

function getData(){
    fetch("http://127.0.0.1:5500/API/fetch-API/data.txt")
    .then(function(res){
        res.text()
    })
    .then(function(data){
        display.innerHTML=data;
    });
}