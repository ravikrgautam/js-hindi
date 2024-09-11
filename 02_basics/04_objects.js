const tinderUser = new Object() // singleton object
// console.log(tinderUser);

const InstaUser = {} // Non singleton object

InstaUser.id = "123abc"
InstaUser.name = "Sam"
InstaUser.isLoggedIn = false

// console.log(InstaUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        username : {
            firstname : "Ravi",
            middlename : "Kumar",
            lastname : "Gautam"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.username);
// console.log(regularUser.fullname.username.firstname);

const obj1 = {1 : "Ravi", 2 : "Gautam"}
const obj2 = {3 : "Kshitiz", 4 : "Gupta"}
const obj3 = {5 : "Aakash", 6 : "UD"}

// const obj4 = Object.assign({}, obj1, obj2, obj3)
// const obj4 = {...obj1, ...obj2, ...obj3} // spread method 
// console.log(obj4);

const users = [
    {
        id : "gautamravi11",
        email : "r@gmail.com"
    },
    {
        id : "devgautam",
        email : "r@gmail.com"
    },
    {
        id : "rkg1110",
        email : "r@gmail.com"
    }
]

users[1].email

// console.log(InstaUser);
// console.log(Object.keys(InstaUser));
// console.log(Object.values(InstaUser));
// console.log(Object.entries(InstaUser));

// console.log(InstaUser.hasOwnProperty('isLoggedIn'));


const course = {
    name : "Javascript course",
    price : "999",
    CourseInstructor : "hitesh"
}

// console.log(course.CourseInstructor);

const {CourseInstructor: instructor} = course 
console.log(instructor);

