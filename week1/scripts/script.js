//S01D01
let sayHello = (name) => {
    return `Hello, ${name}!`;
}
console.log(sayHello('Matei'));

//S01D02
function isDivisible(nr, divizor) {
    if (nr % divizor == 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isDivisible(10, 3));
console.log(isDivisible(10, 2));

//S01D03
//count how many instances of a letter in a word 
function countLetters(word, letter) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (letter === word.charAt(i)) {
            count++;
        }
    }
    return count;
} 
let occurences = (word, letter) => word.split(letter).length - 1; 
 
console.log(countLetters('andreininin', 'n'));
console.log(occurences('andreininin', 'n'));

//S01D04
/// To do: Apply map() on an array of 5 elements which multiplies them by 3. 
let arr = [1, 2, 3, 4, 5];
console.log(arr);

const map1 = arr.map((x) => x * 3);
console.log(map1);
