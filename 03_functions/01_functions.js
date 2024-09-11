// function addNUmbers (num1, num2){
//     console.log(num1+num2);
// }
// addNUmbers(5, 6)


function addNUmbers (num1, num2){
    // let result = num1 + num2
    // return result

    return num1 + num2
}
const result = addNUmbers(5, 6)
// console.log("Result : ", result);

function loginUserMessage(username = "Hitesh"){
    // if(username === undefined){
    if(!username){                  // same meaning of this line like above line
        console.log("please enter a user name");
        return       
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Ravi Gautam"));
// console.log(loginUserMessage());


function calculatePrice(value1, value2, ...number){
    return number
}
// console.log(calculatePrice(200, 400, 500, 100));


const user = {                      //object creation name is user
    username : "hitesh",
    price : 199
}

function handleObject(anyobject){            // function created name is handle object
    // console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username : "sam",
    price : 399
})


const newArray = [200, 400, 600, 800]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(newArray));
// console.log(returnSecondValue([1001, 200, 300, 400]));
