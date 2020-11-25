//  Solution #1
var permArr = [], usedChars = [];
function permutations(input) {
    var i, ch, chars = input.split("");
    for (i = 0; i < chars.length; i++) {
        ch = chars.splice(i, 1);
        console.log(ch);
        usedChars.push(ch);
        if (chars.length == 0)
            permArr[permArr.length] = usedChars.join("");
        permutations(chars.join(""));
        chars.splice(i, 0, ch);
        usedChars.pop();
    }
    return [...new Set(permArr)]
};


//  Solution #2
function permutations(string) {
    if (string.length <= 1) {
        return [string];
    }

    let finalPermutations = permutations(string.substring(1))
        .reduce((acc, p) => {
            let charList = p.split('');
            for (let i = 0; i <= charList.length; i++) {
                let newPermutation = charList.slice(0, i)
                    .concat([string[0]])
                    .concat(charList.slice(i))
                    .join('');
                if (!acc.includes(newPermutation)) {
                    acc.push(newPermutation);
                }
            }
            return acc;
        }, []);
    return finalPermutations;
}

// Tests
console.log(permutations('a')); // ['a']
console.log(permutations('ab')); // ['ab','ba']
console.log(permutations('aabb')); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']