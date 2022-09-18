//Iterable mane jar modde iterate kora jai, jekhane order kora jai, jar modde diye amra step by step jawa jai, ex: array,string

//Iterator: je jinis tar maddome iterable iterate kort pare,, mane step step jaite pare.
//iterable er mekanisom er step k bola hoy iterator

const nums = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five:5
};
const numbers = [1,2,3,4,5];

for(x of numbers){
    // console.log(x);
}
// console.dir(nums) //Object//er moodde prototype Symbol.iterator thake na
// console.dir(numbers) //Array //er moodde prototype Symbol.iterator thake
const num = numbers[Symbol.iterator]();
// console.log(num.next()); //next method jotokkhon value pabe,, totokon value retun kore,
// console.log(num.next()); 


const myNumbers = {};

myNumbers[Symbol.iterator] = function(){
    let n = 0;
    let done = false;
    return{
        next(){
            n += 10;
            if(n == 100){
                done = true;
            }
            return{value: n, done: done};
        }
    }
}
for(let num of myNumbers){
    console.log(num);
}