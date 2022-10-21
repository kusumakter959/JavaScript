


function digitalClock(){
    let date = new Date();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let second = date.getSeconds();
    let day = date.getDay();
    let daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    let time = document.getElementById("time");
    let formte = document.getElementById("formte");

    let dateFormate = "PM"
    if(hours >= 12){
        dateFormate = "AM";
        // console.log(dateFormate);
    }

    hours = (hours<10)? "0"+hours : hours;
    second = (second<10)? "0"+second : second;
    minutes = (minutes<10)? "0"+minutes : minutes;


    const Finaltime = `${hours} : ${minutes}: ${second}: ${daylist[day]} `;

    time.innerHTML = Finaltime;
    formte.innerHTML = dateFormate;
}
digitalClock();
setInterval(digitalClock,1000);