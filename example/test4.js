// leep year ber kora

function isLeepYear(year){
    if(year % 400 === 0 || ((year % 4 === 0) && (year % 100 !== 0))){
        console.log(`${year} is a leap year!`);
    }else{
        console.log(`${year} is a not a leap year!`);
    }
}
isLeepYear(2028);