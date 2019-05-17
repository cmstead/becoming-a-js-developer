<!--bl
(filemeta
    (title "Programming Foundations"))
/bl-->

**Comments**

A way to add notes to your code without impacting the way the program runs.

```javascript
// This comment can only live on one line.

/*
This comment can span
across
multiple
lines
like
this
*/
```

**Operators**

Operators are perform single operations on values in your program.  Below is a list of common operators you are likely to encounter and use.

```javascript
// Arithmetic: +, -, *, /, % (modulus or remainder)
5 + 5;
3 - 4;
10 * 10;
100 / 4;
5 % 3; // this will produce 2

// Assignment: =
var myVariable = 15;

// Special arithemtic operators: ++, --
// ++ adds 1 and assigns new value to variable
// -- subtracts 1 and assigns new value to variable
myVariable ++; 
myVariable --; 

// String concatenation: +
'This is a test' + ' ' + 'of string concatenation';
var concatToThis = 'This is another test';

// Type checking: typeof
typeof 12345;

// Comparison: ===, >, <, >=, <=
'test' === 'test';
5 > 3;
7 < 12;
9 >= -77;
17 <= 3000;

// Logical Operators: &&, ||, !
true && true; // and
true || false; // or
!true; // read as "not true" resolves to false
```

**Values**

A value is any concrete data a program might use to run.

```javascript
('Hello, world!')
(5)
(true)
```

**Variables**

A name which can be used to reference a value from within your program.

```javascript
var greeting = 'Well, hello there!';
let myDogHasFleas = false;
const answerToLifeTheUniverseAndEverything = 42;
```

