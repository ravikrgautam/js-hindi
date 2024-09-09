const mysmbl = Symbol ("key")

const user = {
    name : "Ravi",
    "full name" : "Ravi Gautam",
    age : "27",
    email : "ravi@gmail.com",
    add : "Gurgaon",
    [mysmbl] : "myNewKey"
}

// console.log(user.name);
// console.log(user.email);
// console.log(user["full name"]);
// console.log(user[mysmbl]);
// console.log(typeof user[mysmbl]);

user.email = "ravi@google.com"
user.age = "25"
// Object.freeze(user) //value is freeze here after this value is not change in user object

user.email = "ravi@yahoo.com"
// console.log(user);

user.greeting = function(){
    console.log("Hello Js User");
}

user.greeting2 = function(){
    console.log(`Hello Js User, ${this["full name"]} `);
}

console.log(user.greeting());
console.log(user.greeting2());
