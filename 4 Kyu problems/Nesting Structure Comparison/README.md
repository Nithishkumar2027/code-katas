# Nesting Structure Comparison

![](https://img.shields.io/badge/Difficulty-4kyu-blue?logo=codewars)

Complete the function/method (depending on the language) to return `true`/`True` when its argument is an array that has the same nesting structures and same corresponding length of nested arrays as the first array.

**For example:**

```js
// should return true
[1, 1, 1].sameStructureAs([2, 2, 2]);
[1, [1, 1]].sameStructureAs([2, [2, 2]]);

// should return false
[1, [1, 1]].sameStructureAs([[2, 2], 2]);
[1, [1, 1]].sameStructureAs([[2], 2]);

// should return true
[[[], []]].sameStructureAs([[[], []]]);

// should return false
[[[], []]].sameStructureAs([[1, 1]]);
```

For your convenience, there is already a function 'isArray(o)' declared and defined that returns true if its argument is an array, false otherwise.
