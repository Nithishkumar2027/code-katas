# Last digit of a huge number

![](https://img.shields.io/badge/Difficulty-3kyu-blue?logo=codewars)

For a given list `[x1, x2, x3, ..., xn]` compute the last (decimal) digit of `x1 ^ (x2 ^ (x3 ^ (... ^ xn)))`.

### Examples

```js
lastDigit([3, 4, 2]) === 1;
```

because `3 ^ (4 ^ 2) = 3 ^ 16 = 43046721`.

_**Beware:**_ powers grow incredibly fast. For example, `9 ^ (9 ^ 9)` has more than `369 millions of digits`. lastDigit has to deal with such numbers **efficiently**.

_**Corner cases:**_ we assume that `0 ^ 0 = 1` and that lastDigit of an empty list equals to `1`.
