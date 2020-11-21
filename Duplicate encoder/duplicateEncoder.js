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
console.log(duplicateEncode('din')); 651
console.log(duplicateEncode('recede')); 651
console.log(duplicateEncode('Success')); 651
console.log(duplicateEncode('(( @')); 651