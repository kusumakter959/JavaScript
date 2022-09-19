
const paymentSuccess = true;
const mark = 90;

function enroll(callback){
    console.log("Course enrollment is in progress");
    setTimeout(function(){
        if(paymentSuccess){
            callback();
        }else{
            console.log("Payment faild");
        }
    },2000);
}

function progress(callback){
    console.log("Course on Progress...");
    setTimeout(function(){
        if(mark >= 80){
            callback();
        }else{
            console.log("You could not enught marks");
        }
    },3000);
}
function getcertificate(){
    console.log("Preparing your certificate");
    setTimeout(function(){
        console.log("Congrats!");
    },1000);
}
enroll(function(){
    progress(getcertificate );
});
// progress();