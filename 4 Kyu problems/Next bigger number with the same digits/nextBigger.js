// Solution #1
function nextBigger(n) {
    var nextBigNum = -1;
    var nums = n.toString().split('');
    for (var i = nums.length - 1; i >= 0; --i) {
        if (nums[i] < nums[i + 1]) {
            var rightPartNumbers = nums.splice(i + 1).sort();
            for (var j = 0; j < rightPartNumbers.length; ++j) {
                if (rightPartNumbers[j] > nums[i]) {
                    nums[i] = rightPartNumbers[j] - nums[i];
                    rightPartNumbers[j] = rightPartNumbers[j] - nums[i];
                    nums[i] = rightPartNumbers[j] + nums[i];
                    nextBigNum = parseInt(nums.concat(rightPartNumbers).join(''), 10);
                    i = 0;
                    break;
                }
            }
        }
    }

    return nextBigNum;
}

console.log(nextBigger(12), 21)
console.log(nextBigger(513), 531)
console.log(nextBigger(2017), 2071)
console.log(nextBigger(414), 441)
console.log(nextBigger(144), 414)