// Solution #1
function narcissistic(value) {
    const numbers = value.toString().split('');
    const length = numbers.length;
    const result = numbers.reduce((digit, num) => {
        return sum + (digit ** length);
    }, 0);
    return result === value;
}

// Solution #1 { Shorter way }
function narcissistic(value) {
    return [...value.toString()].reduce((sum, digit, i, { length }) => {
        return sum + (digit ** length)
    }, 0) == value;
}

console.log(narcissistic(7)); // 7^1 = 7 (true)
console.log(narcissistic(153)); // 1^3 + 5^3 + 3^3 = 153 (true)    
console.log(narcissistic(1652)); // 1^4 + 6^4+ 5^4 + 2^4 !== 1652 (false)