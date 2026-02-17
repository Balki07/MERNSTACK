
#  Object Literals

## Basic Syntax

```js
const user = {
  name: "Sam",
  age: 27,
  isAdmin: false
};
```

Objects store **key-value pairs**.

---

## Accessing Properties

### Dot notation

```js
user.name
```

### Bracket notation

```js
user["age"]
```

Bracket is useful when key is dynamic:

```js
let key = "name";
user[key];
```

---

## Adding / Modifying

```js
user.city = "Chennai";
user.age = 29;
```

---

## Deleting

```js
delete user.isAdmin;
```

---

## Nested Objects

```js
const user = {
  name: "Sam",
  address: {
    city: "Chennai",
    pincode: 600001
  }
};

user.address.city;
```

---

#  Destructuring (Very Important)

Extract values from objects or arrays easily.

---

## Object Destructuring

```js
const user = {
  name: "Sam",
  age: 27
};

const { name, age } = user;
```

Now:

```
name = "Sam"
age = 27
```

---

## Rename while destructuring

```js
const { name: username } = user;
```

---

## Default value

```js
const { role = "user" } = user;
```

---

## Nested destructuring

```js
const { address: { city } } = user;
```

---

## Array Destructuring

```js
const arr = [10, 20, 30];

const [a, b] = arr;
```

---

## Skip values

```js
const [first, , third] = arr;
```

---

## MERN Usage Example

```js
app.post("/login", (req, res) => {
  const { email, password } = req.body;
});
```

---

#  Object Methods

Functions inside objects.

```js
const user = {
  name: "Sam",
  greet: function() {
    return "Hello " + this.name;
  }
};

user.greet();
```

---

## Shorter Syntax (ES6)

```js
const user = {
  name: "Sam",
  greet() {
    return "Hello " + this.name;
  }
};
```

---

#  `this` Keyword (Important)

`this` refers to the object that calls the function.

---

## Inside Object Method

```js
const user = {
  name: "Sam",
  greet() {
    console.log(this.name);
  }
};

user.greet(); // Sam
```

`this` → user object

---

## Normal Function (Global)

```js
function test() {
  console.log(this);
}
```

In browser → window
In strict mode → undefined

---

## Arrow Function and `this`

Arrow functions DO NOT have their own `this`.

```js
const user = {
  name: "Sam",
  greet: () => {
    console.log(this.name);
  }
};
```

This will NOT work as expected.

Because arrow takes `this` from surrounding scope.

---

###  Rule

Use:

* Normal functions for object methods
* Arrow functions for callbacks

---

#  Array Methods (Extremely Important)

These are Higher-Order Functions.

---

#  map()

Transforms each element.

```js
const numbers = [1, 2, 3];

const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6]
```

Returns new array.

---

#  filter()

Filters elements based on condition.

```js
const numbers = [1, 2, 3, 4];

const even = numbers.filter(num => num % 2 === 0);

console.log(even); // [2, 4]
```

Returns new array.

---

#  reduce() (Advanced but Powerful)

Reduces array into single value.

```js
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((acc, curr) => {
  return acc + curr;
}, 0);
```

acc = accumulator
curr = current value
0 = initial value

---

## Real MERN Example

Count total cart price:

```js
cart.reduce((total, item) => total + item.price, 0);
```

---

#  forEach()

Executes function for each element.

```js
numbers.forEach(num => {
  console.log(num);
});
```

Does NOT return new array.

---

#  find()

Returns first matching element.

```js
const users = [
  { id: 1 },
  { id: 2 }
];

const user = users.find(u => u.id === 2);
```

---

#  some()

Returns true if at least one matches.

```js
numbers.some(num => num > 3);
```

---

#  every()

Returns true only if all match.

```js
numbers.every(num => num > 0);
```

---

#  sort()

Sorts array (mutates original).

---

## Default behavior (string based)

```js
[10, 5, 20].sort();
// [10, 20, 5] X(NO)
```

---

## Correct numeric sort

```js
[10, 5, 20].sort((a, b) => a - b);
```

Ascending:

```
a - b
```

Descending:

```
b - a
```

---

## Sorting Objects

```js
users.sort((a, b) => a.age - b.age);
```

---

#  map vs forEach

| map                     | forEach               |
| ----------------------- | --------------------- |
| Returns new array       | Returns undefined     |
| Used for transformation | Used for side effects |

---

#  Real MERN Patterns

### Backend:

```js
users.map(user => user.email);
```

### React Rendering:

```js
users.map(user => (
  <User key={user.id} {...user} />
));
```

### Data filtering:

```js
products.filter(p => p.price > 1000);
```

---

# Questions

1. Difference between map and forEach
2. Why reduce is powerful
3. Difference between some and every
4. Why sort behaves incorrectly without comparator
5. Why arrow functions should not be used for object methods
6. What destructuring solves

---

This topic is heavily used in:

* React rendering
* MongoDB results handling
* API data transformation
* Authentication logic

---

