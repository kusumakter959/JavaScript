

function valication(){
    const inputObj = document.getElementById("id1");

    if(inputObj.validity.rangeOverflow){
        inputObj.setCustomValidity("you have made a range overflow error")
    }else if(inputObj.validity.rangeUnderflow){
        inputObj.setCustomValidity("you have made a range Underflow error");
    }else if(inputObj.validity.typeMismatch){
        inputObj.setCustomValidity("Value missing");
    }
    
    if(!inputObj.checkValidity()){
        document.getElementById('demo').innerHTML = inputObj.validationMessage;
    }
}