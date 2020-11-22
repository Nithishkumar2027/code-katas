## Two to One

![](https://img.shields.io/badge/Difficulty-7kyu-9cf?logo=codewars)

Take 2 strings `s1` and `s2` including only letters from `a` to `z`. Return a new sorted string, the longest possible, containing distinct letters,

- each taken only once - coming from s1 or s2.

### Examples

```js
a = "xyaabbbccccdefww";
b = "xxxxyyyyabklmopq";
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz";
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
```
