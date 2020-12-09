// Solution (remove spaces)
reverse = a => a.map(a.pop, [...a])

// Tests
console.log(reverse([1, 2, 3]), [3, 2, 1]);
console.log(reverse([...'01234567890123456789']), [...'98765432109876543210']);
console.log(reverse([0, undefined]), [undefined, 0]);