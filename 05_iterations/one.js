const arr = [1,2,3,4,5,6]

for (const numbers of arr) {
    // console.log(numbers);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

//Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United state of america")
map.set('FR', "Franch")

// console.log(map);

for (const [key, value] of map) {           //for of loop
//    console.log(key, value);
   console.log(key, ' : ', value);    
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Temple Run'
}

// console.log(myObject);
