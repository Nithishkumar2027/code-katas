# Format a string of names like 'Bart, Lisa & Maggie'.

![](https://img.shields.io/badge/Difficulty-6kyu-yellow?logo=codewars)

**Given**: an array containing hashes of names

**Return**: a string formatted as a list of names separated by `commas` except for the last two names, which should be separated by an `ampersand`.

### Examples

```js
list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }]);
// returns 'Bart, Lisa & Maggie'

list([{ name: "Bart" }, { name: "Lisa" }]);
// returns 'Bart & Lisa'

list([{ name: "Bart" }]);
// returns 'Bart'

list([]);
// returns ''
```

**Note**: All the hashes are pre-validated and will only contain `A-Z, a-z, '-' and '.'` .
