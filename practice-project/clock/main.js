
function digitalClock(){
    var myDate = new Date();
    let hours = myDate.getHours();
    let minutes = myDate.getMinutes();
    let second = myDate.getSeconds();
    let timeFormate = "AM";
    if(hours === 0){ //0 MAANE 12TA
        hours = 12;
    }
    if(hours>12){
        hours = hours-12;
        timeFormate = "PM";
    }
    hours = hours<10 ? "0" + hours : hours;
    minutes = minutes<10 ? "0" + minutes : minutes;
    second = second<10 ? "0" + second : second;

    let finalTime = `${hours} : ${minutes} : ${second}`;

    document.getElementById("time").innerHTML = finalTime;
    document.getElementById("formate").innerHTML = timeFormate;

    
    setInterval(digitalClock,1000);
}
digitalClock();

