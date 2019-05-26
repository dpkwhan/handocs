# Array Concatenation

Array concatenation is very common in JavaScript. In this blog, I provide four different approaches to do this and also provide the performance comparison. Suppose we have two simple arrays like:

``` javascript
const a1 = [1, "David", 3];
const a2 = ["Tom", 3, "Jeff"];
```

## Array.concat

Arrays in JavaScript have a built-in function ``concat``. We can use it to combine two or multiple arrays into a single one.

``` javascript
const a = a1.concat(a2);
```

## Spread Operator

The spread operator was introduced in ES6. It provides you the ability to expand iterable objects into multiple elements. We can use it to combine multiple arrays into a single array.

``` javascript
const a = [...a1, ...a2];
```

## Looped Insertion

Use a for-of loop to append each element of the second array to the first array.

``` javascript
const a = a1.slice();
for (const e of a2) {
  a.push(e);
}
```

## Functional Reduce

We can also use functional reduce to combine two arrays.

``` javascript
const a = a2.reduce((acc, item) => {
    acc.push( item );
    return acc;
}, a1 );
```

## Performance Comparison

I created a test case to test the performance of the above four methods in [jsperf.com](https://jsperf.com). Here is the link to the [test case][Test Case].

<span style="display:block;text-align:center">
![LMNX OHLC](../../../assets/images/javascript/array-concatenation-speed.jpg)
</span>

Observations:

- The latest version of Chrome improve the speed of concatenation dramatically.
- ``Looped Insertion`` is the fastest in the latest version of Chrome.
- The speed of ``Spread Operator`` is close to the fastest one.

## Remarks

Given the speed of ``Spread Operator`` is very close to the fastest and more importantly it has a very consise and easy syntax. I would recommend using spread operator to concatenate arrays.

[Test Case]: https://jsperf.com/dpkwhan-array-concatenation
