const compress = (a, b = true) => {

    //check if it's a string
    if (typeof a != 'string') {
        throw new Error('InvalidType');
    }
    //checks the length of the string
    if (a.length === 0) {
        return a;
    } 
    //checks the if the first character is a string
    if (!isNaN(a.charAt(0))) {
        throw new Error('InvalidType');
    }
    
    //word compression
    if (b === true) {
        let compressedWord = a[0];
        let count = 1;
        for (let i = 1; i < a.length; i++) {
            if (a[i] === a[i - 1]) {
                count++;
            }
            else {
                compressedWord += count;
                count = 1;
                compressedWord += a[i];
            }
        }
        compressedWord += count;
        return compressedWord;
 
    }
    //word decompression
    else if (b === false) {
        let decompressedWord = '';
        for (let i = 0; i < a.length; i += 2) {
            for (let j = 0; j < a[i + 1]; j++) {
                decompressedWord += a[i];
            }
        }
        return decompressedWord;
    }

}

//testing
try {
    console.log(compress(''));
}
catch (e) {
    console.log(e.message);
}

module.exports = compress