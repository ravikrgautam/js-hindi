// Numbers concept start here ********************

const score = 100
// console.log(score); //one way

const balance = new Number(400)
// console.log(balance); //2nd way

// console.log(balance.toString().length);
// console.log(balance.toFixed(4));
 
const newNumber = 23.8964
const newNumber1 = 1223.2564
const newNumber2 = 10000000
// console.log(newNumber.toPrecision(3));
// console.log(newNumber1.toPrecision(4));
// console.log(newNumber2.toLocaleString('en-IN'));


// Math concept start here ********************

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.8));
// console.log(Math.floor(4.8));
// console.log(Math.ceil(4.8));
// console.log(Math.min(2,5,8,9,6,5));
// console.log(Math.max(2,5,8,9,6,5));

// console.log(Math.random());
// console.log(Math.random() * 10);
// console.log((Math.random() * 10) + 1);
// console.log(Math.floor((Math.random() * 10) + 1));

const min = 1
const max = 6
console.log(Math.floor(Math.random() * (max - min + 1)) + min);