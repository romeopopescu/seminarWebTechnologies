const functions = require('./functions');
const fs = require('fs');

console.log("The value of PI is: ", functions.PI);
console.log("The sum of 10 and 7 is: ", functions.add(10,7));
//add a substract method and call it from app.js
console.log("The difference between 10 and 7 is: ", functions.substract(10,7));

fs.writeFile('sample.txt','Hello, World!', (err)=>{
    if(err) throw err;
    console.log('File created successfully');
})

//create a greetings.txt file with a specific text.