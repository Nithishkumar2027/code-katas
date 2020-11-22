const MORSE_CODE = { ".-": "A", "-...": "B", "-.-.": "C", "-..": "D", ".": "E", "..-.": "F", "--.": "G", "....": "H", "..": "I", ".---": "J", "-.-": "K", ".-..": "L", "--": "M", "-.": "N", "---": "O", ".--.": "P", "--.-": "Q", ".-.": "R", "...": "S", "-": "T", "..-": "U", "...-": "V", ".--": "W", "-..-": "X", "-.--": "Y", "--..": "Z", ".----": "1", "..---": "2", "...--": "3", "....-": "4", ".....": "5", "-....": "6", "--...": "7", "---..": "8", "----.": "9", "-----": "0", " ": " " };

function decodeMorse(morseCode) {
    const encoded = [];
    const words = morseCode.split('   ');
    words.map(word => {
        word.split(' ').map(value => {
            encoded.push(MORSE_CODE[value]);
        })
        encoded.push(' ');
    })
    return encoded.join('').trim();
}

console.log(decodeMorse('-. .. - .... .. ... ....   -.- ..- -- .- .-.'));
console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));
console.log(decodeMorse('... --- ...'));
