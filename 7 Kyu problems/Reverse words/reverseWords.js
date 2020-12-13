// Solution #1
function reverseWords(str) {
    return str.split(' ').map(word => {
        return word.split('').reverse().join('')
    }).join(' ')
}

// Solution #2
function reverseWords(str) {
    let reversedStr = '';
    let reversedWord = '';
    for (let i = 0; i < str.length; i++) {
        const character = str[i];
        if (character !== ' ') {
            reversedWord = character + reversedWord;
        } else {
            reversedStr += reversedWord + ' ';
            reversedWord = '';
        }
    }
    return reversedStr + reversedWord;
}
// Tests

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
console.log(reverseWords('apple'), 'elppa');
console.log(reverseWords('a b c d'), 'a b c d');
console.log(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');