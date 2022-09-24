
const timeout = document.getElementById("timeout");
const interval = document.getElementById("interval");

let timeoutInstance;
let IntervalInstance;

function starttimeout(){
    timeoutInstance = setTimeout(function(){
        timeout.innerHTML = "3 second over!";
    },3000);
}

function stoptimeout(){
    clearTimeout(timeoutInstance);
}

function startInterval(){
    IntervalInstance = setInterval(function(){
        interval.innerHTML = new Date().toLocaleTimeString();
    },1000);
}
function stopInterval(){
    clearTimeout(IntervalInstance);
}