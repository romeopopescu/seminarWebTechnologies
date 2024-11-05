// Module definition & exporting in Node Js
// A module is... file containing a block of code which performs a task. Node js supports: module.exports and require() in order to share and import different functionalities

const PI = 3.14159;

function add(a,b){
    return a+b;
}
function substract(a,b){
    return a-b;
}

const btn = document.getElementById('myBtn');
btn.addEventListener('click',()=>{
    console.log('Congrats, you are using a DOM object here!');
})


module.exports = {PI, add,substract}