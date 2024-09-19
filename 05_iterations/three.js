const coding = ["js", "cpp", "python", "java"]

coding.forEach( function (item){        //function
    // console.log(item);
} )

coding.forEach( (item) => {        //arrow function
    // console.log(item);
} )


// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe)


// coding.forEach( (item,index, arr) => {          // value, index postion, array
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName : "javascript",
        languageFile : "js"
    },

    {
        languageName : "Java",
        languageFile : "java"
    },

    {
        languageName : "python",
        languageFile : "py"
    }
]

myCoding.forEach( (val) => {
    console.log(val.languageName);
} )