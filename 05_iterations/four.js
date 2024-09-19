const nums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = nums.filter( (number) => {                 // filter
//     // number > 4
//     return number > 4
// } )

const newNums = []
nums.forEach( (number) => {             // for each loop
    if(number>4){
        newNums.push(number)
    }
} )

// console.log(newNums);


const books = [
    {title: 'Book One', genre: 'Fiction', publish: '1985', edition: '2004'},
    {title: 'Book Two', genre: 'History', publish: '1995', edition: '2006'},
    {title: 'Book three', genre: 'Science', publish: '1990', edition: '2009'},
    {title: 'Book Four', genre: 'Fiction', publish: '2000', edition: '2009'},
    {title: 'Book Five', genre: 'History', publish: '2005', edition: '2010'},
    {title: 'Book Six', genre: 'Science', publish: '2011', edition: '2017'},
    {title: 'Book Seven', genre: 'Fiction', publish: '2017', edition: '2021'},
    {title: 'Book Eight', genre: 'History', publish: '2023', edition: '2023'}
]

// const userBooks = books.filter( (bk) => {
//     return bk.genre === 'History'
// })

const userBooks = books.filter( (bk) => {
    return bk.publish >= 2000 && bk.genre === 'Fiction'
})

console.log(userBooks);