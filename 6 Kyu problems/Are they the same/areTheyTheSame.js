// Data
const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
const a2 = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
const a3 = [45, 62, 62];
const a4 = [2025, 3845, 3844];

// Solution #1
function comp(array1, array2) {
    if (!array1 || !array2 || array1.length != array2.length) return false;
    const sortedArray1 = array1.sort((a, b) => a - b)
    const sortedArray2 = array2.sort((a, b) => a - b)
    const test = sortedArray1.map((num, i) => {
        return num ** 2 === sortedArray2[i]
    })
    return test.includes(false) ? false : true;
}

// Solution #2
function comp(a, b) {
    if (!a || !b || a.length !== b.length) return false;
    return a.map(x => x * x).sort().toString() === b.sort().toString();
}

console.log(comp(a1, a2), true);
console.log(comp(a3, a4), true);
