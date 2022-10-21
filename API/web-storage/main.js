
// Local

function setlocalStorage(key,value){
    localStorage.setItem(key,value);
}

function getLocalStorage(key){
   alert(localStorage.getItem(key));
}

function removelocalStorage(key){
    alert(localStorage.removeItem(key));
}

function clearlocalStorage(){
    alert(localStorage.clear());
}


// SESSION

function setSessionStorage(key,value){
    sessionStorage.setItem(key,value);
}

function getSessionStorage(key){
   alert(sessionStorage.getItem(key));
}

function removeSessionStorage(key){
    alert(sessionStorage.removeItem(key));
}

function clearSessionStorage(){
    alert(sessionStorage.clear());
}