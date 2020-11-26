# Maximum Product

![](https://img.shields.io/badge/Difficulty-7kyu-9cf?logo=codewars)

Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

### Note

- Array size should be atleast 2.
- Array/list numbers could be a mixture of positives, negatives also zeroes .

### Examples

```js
adjacentElementsProduct([1, 2, 3]); ==> return 6
```

The maximum product obtained from multiplying `2 * 3 = 6`, and they're adjacent numbers in the array.

```js
adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
```

The maximum product obtained from multiplying `5 * 10 = 50`

```js
adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14
```

The maximum product obtained from multiplying `-2 * 7 = -14`, and they're adjacent numbers in the array.
