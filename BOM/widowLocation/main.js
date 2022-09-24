
const href = document.getElementById("href");
const hostName = document.getElementById("hostName");
const pathName= document.getElementById("pathName");
const protocol= document.getElementById("protocol");
const port= document.getElementById("port");

href.innerHTML = "Href :" + location.href;
hostName.innerHTML = "pathName :" + location.hostname;
pathName.innerHTML = "pathName :" + location.pathname;
protocol.innerHTML = "protocol :" + location.protocol;
port.innerHTML = "port :" + location.port;


function assion() {
    window.location.assign("https://www.w3schools.com")
    //   New kore assing kore,,, ager lacation replace kora
  }