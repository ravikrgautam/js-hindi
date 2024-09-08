let name = "Ravi"
let age = 27
let add = "Gurgaon"

// console.log(`Hello my name is ${name} and age is ${age}. my address is ${add}.`);

const gameName = new String("Divyanshu")

// console.log(gameName[5]);
// console.log(gameName.__proto__ );

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('y'));

const newStr = gameName.substring(0,5)
// console.log(newStr);

const url = "https://ravi.com/ravi%20gautam"

//console.log(url.replace('%20', '-'));   // first way
const str1 = url.replace('%20', '-');   // second way value store in a variable 
console.log(str1);
console.log(str1.split('/'));

