# Conditionals and Logic Cheat Sheet #

## And, Or, and Not ##

- And is represented by `&&`
- Or is represented by `||`
- Not is represented by `!`

## Evaluating Boolean Variables and Expressions ##

Definitions:

```javascript
const isTrue = true;
const isFalse = false;
const isTrue1 = true;
const isFalse1 = false;
```

### Evaluating Boolean Variables ###

- `isTrue // true`
- `isFalse // false`
- `!isTrue // false`
- `!isFalse // false`

```javascript
if(isTrue) {
    console.log('this will run');
}

if(!isTrue) {
    console.log('this will not run');
}

if(isFalse) {
    console.log('this will not run');
}

if(!isFalse) {
    console.log('this will run')
}
```

### Evaluating Boolean Expressions ###

#### And ####

- `isTrue && isTrue // true`
- `isFalse && isFalse // false`
- `isTrue && isFalse // false`
- `isFalse && isTrue // false`

```javascript
if(isTrue && isTrue) {
    console.log('This will run');
}

if(isTrue && isFalse) {
    console.log('this will not run');
}

if(isFalse && isFalse) {
    console.log('this will not run');
}

if(isTrue && isFalse) {
    console.log('this will not run');
}
```

#### Or ####

- `isTrue || isTrue // true`
- `isFalse || isFalse // false`
- `isTrue || isFalse // true`
- `isFalse || isTrue // true`

```javascript
if(isTrue || isTrue) {
    console.log('This will run');
}

if(isTrue || isFalse) {
    console.log('This will run');
}

if(isFalse || isFalse) {
    console.log('this will not run');
}

if(isTrue || isFalse) {
    console.log('This will run');
}
```

#### Applying Not ####

"Flip the sign"

- `!(isTrue && isFalse) === (!isTrue || !isFalse)`
- `!(isTrue || isFalse) === (!isTrue && !isFalse)`

```javascript
if(!(isTrue && isFalse)) {
    console.log('This will run');
}

if(!(isTrue || isFalse)) {
    console.log('This will not run');
}
```

#### Order of Operations ####

Logical operations are applied in this order:

- Parentheses
- Not
- And
- Or
- Left to right

Example:

- `!false || false && (true || false)`
    - === `!false || false && true`
    - === `true || false && true`
    - === `true || false`
    - === `true`

```javascript
if(!isFalse || isFalse && (isTrue || isFalse)) {
    console.log('This will run');
}
```

## Extended/Advanced Boolean Logic ##

### Evaluating Compound Expressions ###

"Substitution Method"

- `(isTrue && isFalse) || (isFalse1 && isTrue1)`
    - === `(true && false) || (false && true)`
    - === `false || false`
    - === `false`

```javascript
if((isTrue && isFalse) || (isFalse1 && isTrue1)) {
    console.log('this will not run');
}

if((isTrue || isFalse) && (isFalse1 || isTrue1)) {
    console.log('this will run');
}
```

### Expanding Compound Expressions ###

"FOIL Method" (FOIL is "First, Outside, Inside, Last")

- `(isTrue && isFalse) || (isFalse1 && isTrue1)`
    - === `(isTrue || (isFalse1 && isTrue1)) && (isFalse || (isFalse1 && isTrue1))`
    - === `((isTrue || isFalse1) && (isTrue || isTrue1)) && ((isFalse || isFalse1) && (isFalse || isTrue1))`

Evaluating the expansion with Substitution:

- `((isTrue || isFalse1) && (isTrue || isTrue1)) && ((isFalse || isFalse1) && (isFalse || isTrue1))`
    - Substitute Values => `((true || false) && (true || true)) && ((false || true) && (false || false))`
    - Evaluate 'Or' Expressions => `(true && true) && (true && false)`
    - Evaluate 'And' Expressions => `true && false`
    - Evaluate Final Expression => `false`

## Truth Tables ##

### And ###

|  *And*    | true   | false |
| ----------|--------|-------|
| **true**  | true   | false |
| **false** | false  | false |

### Or ###

|  *Or*     | true  | false |
| ----------|-------|-------|
| **true**  | true  | true  |
| **false** | true  | false |