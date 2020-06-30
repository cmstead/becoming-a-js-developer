
<!-- GENERATED DOCUMENT! DO NOT EDIT! -->
# JS Programming Vocabulary List #
#### A vocabulary list for people learning programming with JavaScript ####

## Table Of Contents ##

- [Section 1: Names and Basics](#user-content-names-and-basics)
- [Section 2: Programming Jargon](#user-content-programming-jargon)
- [Section 3: Programming Foundations](#user-content-programming-foundations)
- [Section 4: Value Types](#user-content-value-types)
- [Section 5: Flow Control Structures](#user-content-flow-control-structures)
- [Section 6: Design Patterns](#user-content-design-patterns)

## Names and Basics ##
**ECMA**

European Computer Manufacturers Association

**ECMAScript**

The standardized name for JavaScript as defined by the *ECMA* International standards body. ECMAScript is a *general purpose programming language* which runs both in the browser and in a server or local computer environment through *Node*.

**General Purpose Programming Language**

Any programming language which can be used to solve a number of different problems in a variety of environments. General purpose programming languages are designed with general programming ideas in mind, instead of a business or data related problem.

**JavaScript**

The common name for the language created by a group at Netscape which allowed for programming in the browser. The JavaScript name is still owned by the *Mozilla Foundation*.

**Mozilla Foundation**

Originally the Netscape Communications Corporation, Mozilla Foundation is a software group which produces the Firefox browser, the Rust programming language as well as a number of other technologies. The Mozilla Foundation also advocates for the development of *JavaScript* with *TC-39* and other web standards.

**Netscape**

A browser made by the Netscape Communications Corporation. For information on the corporation, see *Mozilla Foundation*.

**Node**

A *runtime* which allows *ECMAScript* to be run outside of the browser.

**Runtime**

A program which interprets and executes a script, like JavaScript. (Other types of runtimes exist, but are not appropriate to discuss here.)

**TC-39**

The ECMA technical committee which is in charge of defining the ECMAScript language features and behaviors.
    

## Programming Jargon ##

**Application**

A program which has been written and deployed to an environment for *execution*.

**Coding**

Slang for the act of writing source code for a program.

**CRUD**



**Deployment**

Placing source code files on a server and running the program for others to access, or installing a program on a computer for *execution*.

**Execution**

Running a program or *application*.

**Programming**

Solving a problem through identifying a need and automating the solution through creating new software and generating *source code*.

**Source Code**

The program code created and stored in a file or multiple files.

**Source Control**

See *version control system*

**Version Control System (VCS)**

An *application* or system which maintains all created *source code* with a rich history in order to facilitate reviewing old code and adding new code.

**Encapsulation**

A function or object acting as an abstraction over the details of an implementation.

**Contract**

The kinds of data a function or method expects as arguments, and returns.

E.g. `function add(a, b){ return a + b; }` The contract for the `add` function is `a:number, b:number => number`.

    

## Programming Foundations ##

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
// Arithmetic: +, -, *, /, **, % (modulus or remainder)
5 + 5;
3 - 4;
10 * 10;
2 ** 10; // ** is the "power" or exponential operator
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


    

## Value Types ##
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


    

## Flow Control Structures ##

**Conditional Blocks**
    

## Design Patterns ##
**MVC**

Model View Controller (MVC) is a design pattern commonly used in application development.  It separates the data (model) user interface (view) and *marshalling* layer (controller) out as different programmatic pieces.

**Marshalling**

Marshalling is the process of managing input and output of a program through responding to user interaction and delegating work to specific functions or modules for processing, etc. Marshalling code should not have any built-in functionality to process data or events other than to decide what other code must perform the work.

**ORM**

An Object-Relational Mapping is a design pattern which creates a data-specific layer within a program and manages the way data flows to, and from, a data storage system (like a database, or local memory).  An ORM also manages the relations between data, allowing the programmer to retrieve data in a predictably structured way.

**Strangle Pattern**

It is common to have old code which needs to be replaced.  Often old code in a system is used by a number of different parts of the program.  Strangle pattern provides a way to create new code which would replace the existing code and slowly substitute it in.

Strangling out an old implementation usually involves:

1. Creating new code
2. Introducing the new module along side the old module
3. Swapping out calls to the new module for calls to the old module
4. Once all calls are replaced, removing the old module.

Example:

```javascript
require('./oldModule');
require('./newModule');

// The following two lines are the beginning of strangling the old module out of
// this file.  Once all replacements are made and the code still works, remove
// commented out code, and delete require('./oldModule'); from the top of the file.

// oldModule.saveSomeData(myData, function() { console.log('saved!'); });
newModule.saveSomeData(myData, function() { console.log('saved!'); });

oldModule.getSomeData(myData, function(error, data) { console.log(data); });
```

**Dependency Injection**

Dependency Injection (commonly DI) is a software design approach which allows the programmer to substitute or update code within a program without requiring updates to any other underlying code.

Example:

Suppose we wanted to create a system to sell pastries.  Here's a simplified way to build it with dependency injection.

pastriesFactory.js
```javascript
function pastriesFactory() {
    let pastries = [];

    return {
        addPastry: function(pastryName, price) {
            pastries.push({
                name: pastryName,
                price: price
            });
        },
        getPastryByName: function(pastryName) {
            return pastries.find(function(pastryObject){
                return pastryObject.name === pastryName;
            });
        }
    }
}

module.exports = pastriesFactory;
```

pastryTransactionFactory.js
```javascript
function pastryTransactionFactory(pastries) {
    // pastries is a dependency of pastryTransactionFactory.
    // The pastries dependency will be provided from outside of
    // this file.

    function PastryTransaction() {
        this.transaction = [];
    }

    PastryTransaction.prototype = {
        sellPastry: function(pastryName, quantity) {
            const purchasedPastry = pastries.getPastryByName(pastryName);

            const pastryPurchase = {
                name: pastryName,
                price: purchasedPastry.price,
                quantity: quantity,
                subtotal: purchasedPastry.price * quantity
            };

            this.transaction.push(pastryPurchase);
        },
        getTotal: function() {
            let total = 0;

            this.transaction.forEach(function(pastryPurchase) {
                total += pastryPurchase.subtotal;
            });
        }
    };

    return {
        buildNewTransaction: function() {
            return new PastryTransaction();
        }
    }
}
```

app.js
```javascript
const pastriesFactory = require('./pastriesFactory.js');
const pastryTransactionFactory = require('./pastryTransactionFactory.js');

const pastries = pastriesFactory();

pastries.addPastry('Croissant', 1.99);
pastries.addPastry('Apple Fritter', 2.99);
pastries.addPastry('Day Old Muffin', 0.99);

// pastries is injected here.
const pastryTransactionBuilder = pastryTransactionFactory(pastries);

// Now we are ready to get a new transaction and start selling!
const pastryTransaction = pastryTransactionBuilder.buildNewTransaction();

pastryTransaction.sellPastry('Croissant', 3);
pastryTransaction.sellPastry('Day Old Muffin', 1);

console.log(pastryTransaction.getTotal()); // 6.96
```
    

<!-- GENERATED DOCUMENT! DO NOT EDIT! -->
    