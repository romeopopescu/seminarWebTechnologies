const functions = require('./functions');
const fs = require('fs');

console.log("The value of PI is: ", functions.PI);
console.log("The sum of 10 and 7 is: ", functions.add(10, 7));


//add a substract method and call it from app.js
console.log("The substraction of 10 and 7 is: ", functions.substract(10, 7));

fs.writeFile('sample.txt', 'Hello, world!', (err) => {
    if (err) throw err;
    console.log('file created successfully');
})

//create a greetings.txt file with a specific text.
const text = 'greetings my man'
fs.writeFile('greetings.txt', text, (err) => {
    if (err) throw err;
    console.log('File created successfully');
})