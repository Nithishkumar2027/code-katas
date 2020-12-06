# Next bigger number with the same digits

![](https://img.shields.io/badge/Difficulty-4kyu-blue?logo=codewars)

Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits.

### Example:

```js
12 ==> 21
513 ==> 531
2017 ==> 2071
```

```js
nextBigger((num: 12)); // returns 21
nextBigger((num: 513)); // returns 531
nextBigger((num: 2017)); // returns 2071
```

If the digits can't be rearranged to form a bigger number, return `-1` (or `nil` in Swift):

```js
9 ==> -1
111 ==> -1
531 ==> -1
```

```js
nextBigger((num: 9)); // returns nil
nextBigger((num: 111)); // returns nil
nextBigger((num: 531)); // returns nil
```
