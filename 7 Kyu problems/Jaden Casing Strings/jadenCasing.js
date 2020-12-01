// Solution #1
String.prototype.toJadenCase = function () {
    let jadenCase = '';
    let capitalize = true;

    for (let i = 0; i < this.length; i++) {
        const letter = this[i];
        if (letter === ' ') {
            capitalize = true;
            jadenCase += ' ';
        } else {
            if (capitalize) {
                jadenCase += letter.toUpperCase();
                capitalize = false;
            } else {
                jadenCase += letter.toLowerCase();
            }
        }
    }
    return jadenCase;
}

// Solution #2
String.prototype.toJadenCase = function () {
    return this.split(' ').map(word => word[0].toUpperCase() + word.substr(1)).join(' ')
};


var str = "How are you";
console.log(str.toJadenCase());
