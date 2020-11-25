// Solution
function generateHashtag(str) {
    if (!str.trim()) return false;

    const hashedString = str.split(' ')
        .filter(word => word)
        .map(word => {
            return word[0].toUpperCase() + word.slice(1)
        })
        .join('')

    if (hashedString.length >= 140) return false;
    return `#${hashedString}`
}

// Tests 🧪
console.log(generateHashtag(''), false);
console.log(generateHashtag(' '.repeat(200)), false);
console.log(generateHashtag('Do We have A Hashtag'), '#DoWeHaveAHashtag');
console.log(generateHashtag('Codewars'), '#Codewars');
console.log(generateHashtag('Codewars Is Nice'), '#CodewarsIsNice');
console.log(generateHashtag('Codewars is nice'), '#CodewarsIsNice');
console.log(generateHashtag('code' + ' '.repeat(140) + 'wars'));
console.log(generateHashtag('Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat'), false);
console.log(generateHashtag('a'.repeat(139)), '#A' + 'a'.repeat(138));
console.log(generateHashtag('a'.repeat(140)), false);