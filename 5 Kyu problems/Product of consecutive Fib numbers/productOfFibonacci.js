// Solution #1
function productFib(prod, fibs = [0, 1]) {
    let check = checkProd(fibs, prod);

    if (check === 'match') {
        return [fibs[fibs.length - 2], fibs[fibs.length - 1], true];
    } else if (check === 'not found') {
        return [fibs[fibs.length - 2], fibs[fibs.length - 1], false];
    } else {
        fibs = addFibs(fibs);
        return productFib(prod, fibs);
    }
}

function checkProd(fibs, prod) {
    let element1 = fibs[fibs.length - 2],
        element2 = fibs[fibs.length - 1],
        currentProd = element1 * element2;

    if (currentProd === prod) {
        return 'match';
    } else if (currentProd > prod) {
        return 'not found';
    }
    return;
}

function addFibs(fibs) {
    let num1 = fibs[fibs.length - 2],
        num2 = fibs[fibs.length - 1];

    fibs.push(num1 + num2);
    return fibs;
}

// Solution #2
function productFib(prod) {
    var n = 0;
    var nPlus = 1;
    while (n * nPlus < prod) {
        nPlus = n + nPlus;
        n = nPlus - n;
    }
    return [n, nPlus, n * nPlus === prod];
}

console.log(productFib(6)); // [2, 3, true]
console.log(productFib(7)); // [3, 5, false]