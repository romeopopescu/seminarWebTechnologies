let a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(a.indexOf(3));

let s = 'a,b,c,d';
let b = s.split(',');
console.log(b);



function addStuff(a, b, c) {
    return a + b + c
}

const memoizedAddStuff = memoize(addStuff)

console.log(memoizedAddStuff(1, 2, 3))