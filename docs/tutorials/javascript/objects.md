## Objects

### Create an empty object
Sure you can create an object that seems empty with {}, but that object still has a __proto__
and the usual hasOwnProperty and other object methods. There is a way, however, to create a pure
"dictionary" object:

```js
let dict = Object.create(null);

// dict.__proto__ === "undefined"
// No object properties exist until you add them
```

There are absolutely no keys or methods on that object that you don't put there!

### Merge objects
The need to merge multiple objects in JavaScript has been around forever, especially as we started
creating classes and widgets with options:

```js
const person = { name: 'David Walsh', gender: 'Male' };
const tools = { computer: 'Mac', editor: 'Atom' };
const attributes = { handsomeness: 'Extreme', hair: 'Brown', eyes: 'Blue' };

const summary = {...person, ...tools, ...attributes};
/*
Object {
  "computer": "Mac",
  "editor": "Atom",
  "eyes": "Blue",
  "gender": "Male",
  "hair": "Brown",
  "handsomeness": "Extreme",
  "name": "David Walsh",
}
*/
```
