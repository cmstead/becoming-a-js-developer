<--bl
(filemeta
    (title "Design Patterns"))
/bl-->
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