const newArr = [0,1,2,4,5,7,8]
// console.log(newArr);
// console.log(newArr[1]);

const newArr2 = new Array (0,9,2,6,4,8)
// console.log(newArr2[5]);

// Array Methods *************************************************

newArr.push(10)  // add a value in the end of array
// console.log(newArr);

newArr.pop(10)  // remove a value in the end of array
// console.log(newArr);

newArr.unshift(33) // add a value at the start of array
// console.log(newArr);

newArr.shift(33)  // remove a value at the Start of array
// console.log(newArr);

// console.log(newArr.includes(9)); // when we need to know value is exit or not
// console.log(newArr.indexOf(9));  // when we need to know index position of value in array
// console.log(newArr2.indexOf(9)); 

// const myArr = newArr.join()
// console.log(newArr);
// console.log(myArr);
// console.log(typeof newArr);
// console.log(typeof myArr);

const newArray = [0,4,5,7,8]
console.log("A - ", newArray);

const a1 = newArray.slice(0,3)
console.log("B", a1);
console.log("After Slice method", newArray);

const a2 = newArray.splice(0,3)
console.log("C", a2);
console.log("After Splice method", newArray);

