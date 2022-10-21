
let w;
function startWorker(){
    if(typeof Worker !==undefined){

        // if w worker is not defined
        if(typeof w === undefined){
            // create a new worker
            w = new Worker("worker.js");
          

        }

        // listenning
        w.onmessage=function(event){
            document.getElementById('demo').innerHTML = event.data;
        }
        console.log(w);

    }else{
        alert ("Your browser dos't support");
    }
}


function stopWorker(){
    if(typeof Worker !==undefined){
        w.terminate(); //strop korar onno
        w = undefined;

    }else{
        alert ("Your browser dos't support");
    }
}