// Solution #1
function sumIntervals(intervals) {
    let rangeArray = [];
    for (let i = 0; i < intervals.length; i++) {
        const start = intervals[i][0];
        const end = intervals[i][1];
        for (let j = start; j < end; j++) {
            let element = j;
            rangeArray.push(element)
        }
    }
    return new Set(rangeArray).size
}

// Solution #2
function sumIntervals(intervals) {
    const ranges = new Set();
    intervals.forEach(([start, end]) => {
        for (let i = start; i < end; i++) {
            ranges.add(i)
        }
    });
    return ranges.size;
}

// Tests
var test1 = [[1, 5]];
var test2 = [[1, 5], [6, 10]];
console.log(sumIntervals(test1), 4);
console.log(sumIntervals(test2), 8);

var test3 = [[1, 5], [1, 5]];
var test4 = [[1, 4], [7, 10], [3, 5]];
console.log(sumIntervals(test3), 4);
console.log(sumIntervals(test4), 7);
