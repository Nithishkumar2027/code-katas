// Solution #1
function capitals(word) {
    const indices = [];
    word.split('').forEach((letter, i) => {
        if (letter.match(/[A-Z]/)) {
            indices.push(i)
        }
    });
    return indices;
}

// Solution #2
function capitals(word) {
    const wordArray = word.split('');
    return wordArray
        .map((letter, index) => ({ index, letter }))
        .filter(({ letter }) => letter === letter.toUpperCase())
        .map(({ index }) => index)
};

// Solution #3 (Better way)
function capitals(word) {
    return word.split('').reduce((indices, letter, index) => {
        if (letter.match(/[A-Z]/)) {
            indices.push(index)
        }
        return indices;
    }, [])
}

console.log(capitals('CodEWaRs'));