function one(){
    const username = "hitesh"
    
    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);
    
    two()
}
one()


// +++++++++++++++++++++++++++++++++++++++++++++++++++


console.log(addOne(9));

function addOne (num){          // we can call a function before declaration
    return num + 1
}


const addTwo = function (num){          // we can not call a function before declaration
    return num + 2
} 
console.log(addTwo (10));
