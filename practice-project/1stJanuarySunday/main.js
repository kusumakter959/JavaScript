
let year = 2014;

for(year; year<2050; year++){
    let date = new Date(year,0,2);
    if(date.getDay() === 0 ){
        console.log("1st January is being a Sunday  "+ `${year}`);
    }
    // console.log(date);
}