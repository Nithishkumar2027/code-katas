// Solution #1
function longest(s1, s2) {
    const sortedStringArr = (s1 + s2).split('').sort();
    let removedDuplicates = [];
    for (let i = 0; i < sortedStringArr.length; i++) {
        if (sortedStringArr[i + 1] !== sortedStringArr[i]) {
            removedDuplicates.push(sortedStringArr[i]);
        }
    }
    return removedDuplicates.join('');
}

// Solution #2
const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join('')

console.log(longest("aretheyhere", "yestheyarehere"))
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"))
console.log(longest("inmanylanguages", "theresapairoffunctions"))