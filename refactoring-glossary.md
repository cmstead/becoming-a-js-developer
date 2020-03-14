# Refactoring #

Refactoring is the process of changing code to be more readable and/or maintainable without changing the behavior of the software.

Not all refactorings are as safe or stable as others. It is always worth verifying your software works after applying a refactoring.

## Common Refactorings ##

**Extract Variable**

Extract variable takes a single expression or selection in your source code and creates a new variable containing the output of the work. The newly created variable will be substituted for the original selection.

```javascript
// Before:

function 
```