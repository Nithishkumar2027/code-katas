const RomanNumerals = {
    toRoman: (number) => {
        var romans = [
            [1000, 'M'],
            [900, 'CM'],
            [500, 'D'],
            [400, 'CD'],
            [100, 'C'],
            [90, 'XC'],
            [50, 'L'],
            [40, 'XL'],
            [10, 'X'],
            [9, 'IX'],
            [5, 'V'],
            [4, 'IV'],
            [1, 'I']
        ],
            output = "";

        for (var i = 0; i < romans.length; i++) {
            var glyph = romans[i][1],
                limit = Number(romans[i][0]);

            while (number >= limit) {
                output += glyph;
                number -= limit;
            }
        }

        return output;
    },

    fromRoman: (roman) => {
        var map = {
            IV: 4,
            IX: 9,
            XL: 40,
            XC: 90,
            CD: 400,
            CM: 900,
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000
        },

            value = 0;

        for (var i = 0; i < roman.length; i++) {
            var two = map[roman[i] + roman[i + 1]],
                one = map[roman[i]];

            if (two != null) {
                value += two; i++;
            } else if (one != null) {
                value += one;
            }
        }

        return value;
    }
}

console.log(RomanNumerals.toRoman(1000), 'M')
console.log(RomanNumerals.toRoman(999), "CMXCIX")
console.log(RomanNumerals.toRoman(4), 'IV')
console.log(RomanNumerals.toRoman(1), 'I')
console.log(RomanNumerals.toRoman(1991), 'MCMXCI')
console.log(RomanNumerals.toRoman(2006), 'MMVI')
console.log(RomanNumerals.toRoman(2020), 'MMXX')
console.log(RomanNumerals.fromRoman('XXI'), 21)
console.log(RomanNumerals.fromRoman('I'), 1)
console.log(RomanNumerals.fromRoman('III'), 3)
console.log(RomanNumerals.fromRoman('IV'), 4)
console.log(RomanNumerals.fromRoman('MMVII'), 2007)
console.log(RomanNumerals.fromRoman('MDCLXIX'), 1669)
