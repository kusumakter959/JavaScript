// Numbers Methods

let x = 123;
let newN = x.toString();
let newm = (123).toString();
let neL = (123 + 12).toString();
console.log(typeof neL);

// Exponential or to the power hisabe dosomiker pore koyta bosbe

let test = 9.656;
test1 = test.toExponential(2);
test1 = test.toExponential(5);
console.log(test1);

// Number fixed method
// dosomiker por koytha sonska thakbe,,
let fix = 9.656;
let newfix = fix.toFixed(2);

//Precision Method
// Eta mut koytha sonkha dekhabe,, ba  dosomiker age pore koytha dekhabe

let preci = 9.656;
let newpreci = preci.toPrecision(3);

// ValueOf
let value = 9.656;
let newvalue = (123).valueOf();
console.log(newvalue);

// Number Method use korle space, remove kore dey setha hok float ba integer
// Number float ba number dile  segula retrun kore,
// Number modde multiple numbere space dile NAN  dibe
let number = Number(new Date("2022-09-12"));
console.log(number);

//ParseInt Number multiple numbare space thakle setha 1st number ta nney
//ParsInt sob somoy interger sonskha dey

let newparse1 = parseInt("-10");
let newparse11 = parseInt("-10.23");
let newparse = parseInt("-10.23 years");

// ParseFloat  retrun kore floating number retrun kore and 
//integer dile setha o retun Kore

let NewparseFloat = parseFloat("10.32");
console.log(NewparseFloat);
