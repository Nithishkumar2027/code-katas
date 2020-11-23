// Data
const oneName = [{ name: 'Andrew' }];
const twoNames = [{ name: 'Bart' }, { name: 'Lisa' }];
const threeNames = [
    { name: 'Bart' },
    { name: 'Lisa' },
    { name: 'Maggie' },
];

// Solution #1
function list(listOfNames) {
    let sentence = '';
    for (let i = 0; i < listOfNames.length; i++) {
        const { name } = listOfNames[i];
        if (i === listOfNames.length - 2) {
            sentence += name + ' & ';
        } else if (i !== listOfNames.length - 1) {
            sentence += name + ', '
        } else {
            sentence += name
        }
    }
    return sentence;
}

// Solution #2
function list(listOfNames) {
    return listOfNames.reduce((sentence, { name }, i) => {
        if (i === listOfNames.length - 1) {
            return sentence + name;
        } else if (i === listOfNames.length - 2) {
            return sentence + name + ' & ';
        } else {
            return sentence + name + ', ';
        }
    }, '');
}

// Solution #3
function list(listOfNames) {
    let names = listOfNames.map(person => person.name).join(', ');
    if (listOfNames.length > 1) {
        const lastCommaIndex = names.lastIndexOf(',')
        const replacedNames = names.split('');
        replacedNames.splice(lastCommaIndex, 1, ' &')
        names = replacedNames.join('')
    }
    return names;
}

console.log(list(threeNames)); // Bart, Lisa & Maggie
console.log(list(twoNames)); // Bart & Lisa
console.log(list(oneName)); // Andrew