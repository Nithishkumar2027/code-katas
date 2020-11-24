// Data
const testArr = [5, 3, 2, 8, 1, 4];
const testArr2 = [5, 3, 1, 8, 0];

// Solution #1
function sortArray(array) {
    let evenData = [];
    let oddArray =
        array
            .map((num, index) => {
                if (num % 2 !== 0) {
                    return num
                }
                evenData.push({ index, num })
            })
            .sort((a, b) => a - b)
            .filter(val => val !== undefined);
    evenData.map((num) => {
        return oddArray.splice(num.index, 0, num.num)
    });
    return oddArray;
}


// Solution #2 😌 Better solution
function sortArray(arr) {
    const odds = arr
        .filter(num => num % 2)
        .sort((a, b) => a - b);

    return arr
        .map(num => num % 2 ? odds.shift() : num);
}

console.log(sortArray(testArr)) // [1, 3, 2, 8, 5, 4]
console.log(sortArray(testArr2)) // [1, 3, 5, 8, 0]