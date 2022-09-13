// 1-6 randomly ber print kora
function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
console.log(getRandomNumber(6,1));

