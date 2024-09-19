const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'Ruby',
    swift : 'Swift for IOS'
}

// console.log(myObject);

for (const key in myObject) {               //for in loop
    // console.log(key);
    // console.log(myObject[key]);   
    // console.log(`${key} shortcut for ${myObject[key]}`);
}

const program = ["js", "cpp", "python", "java"]
for (const key in program) {
    // console.log(program[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United state of america")
map.set('FR', "Franch")

for (const key in map) {
    // console.log(key);
}

