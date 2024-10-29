//module definition & exporting in node js
//a module is : file containing a block a code which performs a task
//Node js supports: module ex

const PI = 3.14159;

const add = (a, b) => a + b;

const substract = (a, b) => a - b;

module.exports = {PI, add, substract};