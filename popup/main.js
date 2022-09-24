
const confirm = document.getElementById("confirm");
const promt = document.getElementById("promt");

// alert("Hello Bnagladesh")

function showalert(){
    window.alert("Hello Bangladesh");
}

function showconfirm(){ //use ki preess korse. ta dora jai true false return kore
    let text;
    if(window.confirm("Hello BANGLADESH")){
        text = "you press okay!";
    }else{
        text="you presss cancel!";
    }
    confirm.innerHTML = text;
}


function showpromt(){ //etate unput valuse dewa jai
    let person = window.prompt("Hello BANGLADESH","kususm"); //ekhne defult valuse dewa jai
    let text;

    if(person === null || person === ""){
        text = "user cancelled the propmt";
    }else{
        text = "hello" + person +"!" +  " How are you?";
    }

    promt.innerHTML = text;
}