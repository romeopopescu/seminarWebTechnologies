//module definition & exporting in node js
//a module is : file containing a block a code which performs a task
//Node js supports: module ex

const PI = 3.14159;

function add(a, b) {
    return a + b;
}

module.exports = {PI, add};