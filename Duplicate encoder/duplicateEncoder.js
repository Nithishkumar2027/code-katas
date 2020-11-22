// Solution #1
const duplicateEncode = (word) => {
    const isDuplicate = {};
    for (let i = 0; i < word.length; i++) {
        const letter = word[i].toLowerCase();
        if (letter in isDuplicate) {
            isDuplicate[letter] = true
        } else {
            isDuplicate[letter] = false
        }
    }
    let paranthesis = '';
    for (let i = 0; i < word.length; i++) {
        const letter = word[i].toLowerCase();
        if (isDuplicate[letter]) {
            paranthesis += ')';
        } else {
            paranthesis += '('
        }
    }
    return paranthesis;
}

// Solution #2
function duplicateEncode(word) {
    return word
        .toLowerCase()
        .split('')
        .map(function (value, index, array) {
            return array.indexOf(value) == array.lastIndexOf(value) ? '(' : ')'
        })
        .join('');
}

console.log(duplicateEncode('din')); // (((
console.log(duplicateEncode('recede')); // ()()()
console.log(duplicateEncode('Success')); // )())())
console.log(duplicateEncode('(( @')); // ))((