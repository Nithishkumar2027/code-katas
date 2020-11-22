function squareDigits(num) {
    const numArray = num.toString().split('')
    const squared = numArray.map(value => {
        return value ** 2
    })
    return Number(squared.join(''))
}
console.log(squareDigits(9119)); // 811181
console.log(typeof (squareDigits(12))); //number