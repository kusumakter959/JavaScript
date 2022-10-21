const demo = document.getElementById("demo");

    let i = 0;
    while(i<1000000){
        i++
    }
    
    demo.innerHTML = i;

    if(typeof(Worker) !==undefined){
        w = new Worker("./main.js");
    }