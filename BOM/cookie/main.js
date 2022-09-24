

function setCookie(cname, cvalue, exdays){
    const d = new Date();
    d.setTime(d.getTime()+exdays*24*60*60*1000);
    let exprires = "expired = " + d.toUTCString;
    document.cookie = cname + "=" + cvalue+ ";" + exprires+ "/path=/";
}

function getCookie(cname){
    let name = cname + "=";
    let ca = document.cookie.split(";");
    let length = ca.length;
    for(let i = 0; i<length; i++){
        let c = ca[i]

        // while(c.charAt(0) === " "){
        //    c = c.substring(1);
        // }

        if(c.indexOf(name) === 0){
            return c.substring(name.length);
        }
    }
    return " ";
}


function  checkCookie(cname,exdays){
    let a = getCookie(cname);
    if(a != " "){
        alert("Welcome aging" + a);
    }else{
        name = prompt("pleace enter your name:", " Enter Your Name");
        if(name === " " && name === null){
            setCookie(cname, name, exdays);
        }
    }
}