const myNums = [1,2,3,4,5]

// const total = myNums.reduce( function (acc, currval){
//     console.log(`acc: ${acc} and current value : ${currval}`);
//     return acc + currval
// }, 0 )

// console.log("total = ", total);

// const total = myNums.reduce( (acc, currval) => acc + currval, 5)
// console.log("total = ", total);

const cart = [
    {
        itemName : "JS course",
        price : 999
    },

    {
        itemName : "python course",
        price : 1999
    },

    {
        itemName : "Data Science  course",
        price : 10999
    }
]

const total = cart.reduce( (acc, item) => {
    return acc + item.price
}, 0)

console.log(total);