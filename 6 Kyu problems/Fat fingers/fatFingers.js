// Solution #1
function fatFingers(str) {
    if (str == null) return null;
    if (str == '') return '';

    let isCaps = false;
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const letter = str[i];
        if (letter === 'a' || letter === 'A') {
            isCaps = !isCaps;
        } else {
            if (isCaps) {
                result += letter.toUpperCase();
            } else {
                result += letter;
            }
        }
    }
    return result;
}

// Solution #2
function fatFingers(str) {
    if (!str) return str;
    let isCaps = false;
    const result = str.split('').reduce((fatFingeredStr, letter) => {
        if (letter.toUpperCase() === 'A') {
            isCaps = !isCaps;
            return fatFingeredStr;
        }
        if (isCaps) {
            letter = letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase();
        }
        fatFingeredStr += letter;
        return fatFingeredStr;
    }, '');
    return result;
}

console.log(fatFingers('aAaaaaAaaaAAaAa'));
console.log(fatFingers('The quick brown fox jumps over the lazy dog.'));
console.log(fatFingers('The end of the institution, maintenance, and administration of government, is to secure the existence of the body politic, to protect it, and to furnish the individuals who compose it with the power of enjoying in safety and tranquillity their natural rights, and the blessings of life: and whenever these great objects are not obtained, the people have a right to alter the government, and to take measures necessary for their safety, prosperity and happiness.'));