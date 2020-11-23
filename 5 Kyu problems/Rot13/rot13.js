// Solution #1
function rot13(message, key) {
    return message.split('').map(letter => {
        const charCode = letter.charCodeAt();
        if (charCode >= 65 && charCode <= 90) {
            return String.fromCharCode((charCode + key - 65) % 26 + 65)
        } else if (charCode >= 97 && charCode <= 122) {
            return String.fromCharCode((charCode + key - 97) % 26 + 97)
        } else {
            return letter
        }
    }).join('')
}

console.log(rot13('JS is cool! 🔥', 13));
