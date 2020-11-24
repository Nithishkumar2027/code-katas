// Solution #1
function solution(list) {
    const ranges = [[list[0]]];
    let currentRange = ranges[0];
    for (let i = 1; i < list.length; i++) {
        const currentNumber = list[i];
        const lastValueInRange = currentRange[currentRange.length - 1];
        if (Math.abs(currentNumber - lastValueInRange) === 1) {
            currentRange.push(currentNumber)
        } else {
            currentRange = [currentNumber]
            ranges.push(currentRange)
        }
    }
    return ranges.map(range => {
        if (range.length === 1) return `${range[0]}`;
        if (range.length === 2) return range.join(',');
        return `${range[0]}-${range[range.length - 1]}`;
    }).join()
}

// Data
const testData = [-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20];
console.log(solution(testData)) // -6,-3-1,3-5,7-11,14,15,17-20