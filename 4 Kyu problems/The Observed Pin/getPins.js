// Solution 
function getPINs(observed) {
    let combinations = [];
    const neighbors = {
        '0': ['8'],
        '1': ['2', '4'],
        '2': ['1', '3', '5'],
        '3': ['2', '6'],
        '4': ['1', '5', '7'],
        '5': ['2', '4', '6', '8'],
        '6': ['3', '5', '9'],
        '7': ['4', '8'],
        '8': ['0', '5', '7', '9'],
        '9': ['6', '8'],
    }
    const digits = [...observed];
    getCombinations(digits, 0, '');
    return combinations;

    function getCombinations(digits, idx, currentCombination) {
        const currentDigit = digits[idx]
        const candidates = new Set(neighbors[currentDigit]);
        candidates.add(currentDigit);
        candidates.forEach(idx == digits.length - 1 ? reachedEnd : goDeeper);

        function reachedEnd(candidate) { combinations.push(currentCombination + candidate); }
        function goDeeper(candidate) {
            getCombinations(digits, idx + 1, currentCombination + candidate)
        }
    }
}

// Tests
console.log(getPINs('12'))
console.log(getPINs('5637'))