// eta function er modde arekta function call korte thake, Infinity, jar karone hendle kora koshto hoye jai, ei jonno promiss uase kora hoy

// Promiss Definition
const status = true;
console.log('task 1');
const promiss = new Promise(function(resolve,reject){
    setTimeout(() => {
        if(status){
            resolve("task 2");
        }else{
            reject("Filed");
        }
    }, 2000);
})
console.log('task 3');


//Promiss call
promiss .then(
    function(value){
        console.log(value);
    },
    function(error){
        console.log(error);
    });