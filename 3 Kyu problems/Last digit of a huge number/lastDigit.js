// Solution 
function Mod(a, n, m) {
    return Math.round((a % m) * Math.pow((a % m), (n + 3) % 4)) % m;
}

function lastDigit(as) {
    if (as.length == 0) return 1;
    let rightIsZero = false;
    let rightBiggerThan2 = false;
    let rightMod4 = 1;
    for (let i = as.length - 1; i > 0; --i) {
        console.log('With ' + i, as[i], rightIsZero, rightMod4);
        if (rightIsZero) {
            rightMod4 = 1;
            rightIsZero = false;
            rightBiggerThan2 = false;
        } else {
            rightMod4 = (rightBiggerThan2 && (as[i] % 4 === 2)) ? 0 : Mod(as[i], rightMod4, 4);
            rightIsZero = as[i] === 0;
            rightBiggerThan2 = !rightIsZero && !(as[i] === 1)
        }
    }

    console.log(rightIsZero, rightMod4)

    return rightIsZero ? 1 : Mod(as[0], rightMod4, 10);
}

// Tests
console.log(lastDigit([]), 1);
console.log(lastDigit([0, 0]), 1);
console.log(lastDigit([0, 0, 0]), 0);
console.log(lastDigit([1, 2]), 1);
console.log(lastDigit([3, 4, 5]), 1);
console.log(lastDigit([4, 3, 6]), 4);
console.log(lastDigit([7, 6, 21]), 1);
console.log(lastDigit([12, 30, 21]), 6);
console.log(lastDigit([2, 2, 2, 0]), 4);
console.log(lastDigit([937640, 767456, 981242]), 0);
console.log(lastDigit([123232, 694022, 140249]), 6);
console.log(lastDigit([499942, 898102, 846073]), 6);
