// Solution #1
function vaporcode(string) {
    string = string.replace(/\s/g, "");
    return [...string].map(char => char.toUpperCase()).join('  ');
}

// Solution #2
function vaporcode(string) {
    let voporcode = '';
    for (let i = 0; i < string.length; i++) {
        const letter = string[i];
        if (letter !== ' ') {
            const uppercaseLettter = letter.toUpperCase();
            voporcode += uppercaseLettter + '  ';
        }
    }
    return voporcode.trim();
}

// Tests
console.log(
    vaporcode('Let\'s go to the movies'),
    'L  E  T  \'  S  G  O  T  O  T  H  E  M  O  V  I  E  S'
);
console.log(
    vaporcode('Why isn\'t my code working?'),
    'W  H  Y  I  S  N  \'  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?'
);