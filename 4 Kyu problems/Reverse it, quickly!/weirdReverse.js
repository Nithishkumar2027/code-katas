// Solution #1 (but exceeded 28chars)
function weirdReverse(arr) {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        const element = arr[i];
        reversedArr.push(element)
    }
    return reversedArr;
}

// Solution #2
weirdReverse = a => a.sort(e => 1)

console.log(weirdReverse([5, 's', 6, 8, 3, 4, []]));
console.log(weirdReverse([1, 2, 3, 4, 5]));