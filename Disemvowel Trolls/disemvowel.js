const testString = 'This website is for losers LOL!';
function disemvowel(str) {
    const disemvoweled = str.split('').map(value => {
        if (!/^[aeiou]$/.test(value.toLowerCase())) {
            return value
        }
    });
    return disemvoweled.join('');
}
console.log(disemvowel(testString));