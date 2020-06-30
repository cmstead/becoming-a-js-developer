<!--bl
(filemeta
    (title "Value Types"))
/bl-->
**Bigint**

Bigint is an integer with arbitrary precision.

```javascript
1234n
2n ** 53n // from MDN
```

**Boolean**

Boolean values are always either true or false.

```javascript
true
false
```

**Function**

Functions are the means for creating reusable executable units of code. Functions are a stand-alone data type. Functions will be covered in more depth later.

```javascript
function add (a, b) {
    return a + b;
}
```

**Null**

Null represents the circumstance in which a variable has been set, but contains no value.

```javascript
let aNewVariable = null;
```

**Number**

Any number value is a number in JavaScript, except a bigint.

```javascript
0
-5
382.776
NaN
Infinity
```

**Object**

An object is a compound data type which may be used to represent complex values and rich data representations.  Arrays are also objects, but can be identified by Array.isArray();

```javascript
{
    id: 1234,
    name: 'widget',
    sides: '12'
};

[1, 2, 3, 4];

Array.isArray(['this', 'is', 'an', 'array']); // true
Array.isArray({}); // false
```

**String**

Strings are contiguous sets of characters.  This is the most common means for creating human-readable output.

```javascript
'Hello, World!'
'This is a string.'
```

**Symbol**

Symbols are a unique and immutable data type which may be used as the key for an object.

```javascript
Symbol('This is a symbol')
Symbol(42)
```

**Undefined**

Undefined is unique in that it represents a value which has not yet been set.

```javascript
undefined
```

