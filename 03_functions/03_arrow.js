const user = {
    username : "hitesh",
    price : 999,
    welcomeMessage : function () {
        console.log(`${this.username}, welcome to website`);    //  this meaning is it takes current vaule
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function chai (){
//     console.log(this);   
// }

// chai()

// const chai = function(){
    // let username = "hitesh"
//     console.log(this);
// }
// chai()

// const chai = () => {
//     let username = "hitesh"
//     console.log(this);
//     console.log(this.username);
// }
// chai()

const addTwo = (num1, num2)=>{          // explicit return
    return num1 + num2 
}
console.log(addTwo(3,5));

// const addnum = (num1, num2) => (num1 + num2)   // implicit return 
// console.log(addnum(5,5));

const addnum = (num1, num2) => ({username: "hitesh"})   // object uses 