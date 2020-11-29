// Solution #1
function getMiddle(str) {
    const length = str.length;
    if (length % 2 === 0) {
        let resultArr = [];
        const middleOne = str[Math.floor(length / 2) - 1];
        const adjacentOne = str[Math.floor(length / 2)];
        resultArr = [middleOne, adjacentOne];
        return resultArr.join('');
    } else {
        return str[Math.floor(length / 2)]
    }
}

// Solution #2 (Refactored #1)
function getMiddle(str) {
    const middle = Math.floor(str.length / 2);
    if (str.length % 2 === 0) {
        return `${str[middle - 1]}${str[middle]}`
    } else {
        return str[middle]
    }
}

// Solution #3
function getMiddle(str) {
    return str.substr(Math.ceil(str.length / 2 - 1), str.length % 2 === 0 ? 2 : 1);
}

// Tests
console.log(getMiddle("test"), "es");
console.log(getMiddle("testing"), "t");
console.log(getMiddle("middle"), "dd");
console.log(getMiddle("A"), "A");