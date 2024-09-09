const marvel = ["Thor", "Captain", "Ironman"]
const dc = ["Batman", "Joker", "Superman"]

// marvel.push(dc)
// console.log(marvel);
// console.log(marvel[3][2]);

// const newArr = marvel.concat(dc) //concat function return a new Array
// console.log(newArr);

// spread function*******************************************

// const newArr = [...marvel, ...dc] //spread start with 3 dots
// console.log(newArr);

// const another_array = [1,2,3,[4,5], 9, [0,8,5], [5,6,[4,7,3]]]
// const anotherNewArr = another_array.flat(Infinity)
// console.log(anotherNewArr);

// console.log(Array.isArray("Hitesh")) //check array is exit or not
// console.log(Array.from("Hitesh")) //convert string into array
console.log(Array.from({name: "Ravi"})); //return a empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //convert varibales into array
