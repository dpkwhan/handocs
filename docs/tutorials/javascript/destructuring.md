## Desctructuring

### Destructuring aliases
Destructuring is a very welcomed addition to JavaScript but sometimes we'd prefer to refer to 
those properties by another name, so we can take advantage of aliases:

```js
const obj = { x: 1 };

// Grabs obj.x as { x }
const { x } = obj;

// Grabs obj.x as { otherName }
const { x: otherName } = obj;
```

Useful for avoiding naming conflicts with existing variables!