// Solution #1
function accum(input) {
    let result = '';
    for (let index = 0; index < input.length; index++) {
        const currentLetter = input[index];
        const totalCount = index + 1;
        for (let counter = 0; counter < totalCount; counter++) {
            if (counter === 0) {
                result += currentLetter.toUpperCase();
            } else {
                result += currentLetter.toLowerCase();
            }
        }
        if (index !== input.length - 1) {
            result += '-'
        }
    }
    return result;
}
console.log(accum('abcd'));
console.log(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");


// Solution #2
const mumbler = (input) => {
    const splittedInput = input.split('');
    const repeatHandler = splittedInput.map((letter, i) => {
        return letter.toUpperCase() + letter.toLowerCase().repeat(i)
    })
    return repeatHandler.join('-');
}

// One line solution for #2
const mumbler = (input) => {
    return input.split('').map((letter, index) => (letter.toUpperCase() + letter.toLowerCase().repeat(index))).join('*')
}
console.log(mumbler('abcd'));


