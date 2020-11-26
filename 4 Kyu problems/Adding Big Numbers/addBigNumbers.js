// Solution #1
function add(a, b) {
    a = '0' + a;
    b = '0' + b;

    if (a.length > b.length) {
        var zeroCount = a.length - b.length
        b = (Array(zeroCount + 1).join('0')) + b
    } else if (b.length > a.length) {
        var zeroCount = b.length - a.length
        a = (Array(zeroCount + 1).join('0')) + a
    }

    var result = '';
    var temp = 0;
    for (var i = a.length - 1; i > -1; i--) {
        var res = parseInt(a[i]) + parseInt(b[i]) + temp
        temp = 0
        if (res >= 10) {
            res = res - 10
            temp = 1
        }
        result = res + result
    }


    if (result[0] == '0')
        result = result.substr(1)

    return result
}

// Solution #2 
function add(num1, num2) {
    let result = '', c = 0
    num1 = num1.split('')
    num2 = num2.split('')
    while (num1.length || num2.length || c) {
        c += ~~num1.pop() + ~~num2.pop()
        result = c % 10 + result
        c = c > 9
    }
    return result
}



console.log(add('1', '1'));
console.log(add('2750', '33705'));
console.log(add('63829983432984289347293874', '90938498237058927340892374089'));
console.log(274 - 242);