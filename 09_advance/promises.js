const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function () {
        // console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function (params) {
    // console.log("Promise consumed");
    
})


new Promise(function (resolve, reject) {
    setTimeout(function () {
        // console.log('Async task 2');
        resolve()
    }, 1000)
}).then(function () {
    // console.log('Async 2 is resolved');
    
})



const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function (user) {
    // console.log(user);
})


const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if(!error){
            resolve({username: "Ravi", email: "ravi@email.com"})
        } else{
                reject('Error : Something went wrong')
            }   
    }, 1000)
})

promiseFour.then((user)=>{
    return user.username

}).then((myusername)=> {
    // console.log(myusername);

}).catch(function (error) {
    // console.log(error);
    
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if(!error){
            resolve({username: "JavaScript", pass: "12345"})
        } else{
                reject('Error : JS went wrong')
            }   
    }, 1000)
})


async function consumePromiseFive() {
    try {
        const response = await promiseFive          //promise is a object
        console.log(response);        
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


// async function getAllUsers() {
//    try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//    } catch (error) {
//         console.log("E:", error);
//    }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=> {
    return response.json();
})
.then((data)=>{
    console.log(data);
}).catch((error)=> console.log(error))