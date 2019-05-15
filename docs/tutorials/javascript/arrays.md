## Arrays

### Get unique values of an array
Getting an array of unique values is probably easier than you think:

```js
const uniqueArray = [...new Set([2, 1, 2, 1, 3, 3, 4, 4])];
console.log(uniqueArray); // [2, 1, 3, 4]
```

### Array and Boolean
Ever need to filter falsy values (0, undefined, null, false, etc.) out of an array? You 
may not have known this trick:

```js
const arrayValues = ["", "David", "Han"];
const nonFalsyValues = arrayValues
  .map(item => {
    return item.length;
  })
  .filter(Boolean); // Get rid of bad values
```

Just pass ``Boolean`` and all those falsy value go away!