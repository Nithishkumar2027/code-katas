// Solution #1
function XO(str) {
    str = str.toLowerCase();
    let x = 0, y = 0;
    for (let i = 0; i < str.length; i++) {
        const letter = str[i];
        if (letter === 'x') x++;
        if (letter === 'o') y++;
    }
    return x === y ? true : false;
}

// Solution #2
function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
}

console.log(XO('xo'), true);
console.log(XO("xxOo"), true);
console.log(XO("xxxm"), false);
console.log(XO("Oo"), false);
console.log(XO("ooom"), false);