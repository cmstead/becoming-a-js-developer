# Talking in Code (JS) #

There is a working hypothesis by Dr. Felienne Hermans that code can be better absorbed if we read it aloud. (Code Phonolgy)  It can be rather challenging to dive right in to a new idea without some guidance.  This cheat sheet is a list of suggested ways to say code aloud.  None of these are intended to be prescriptive.

These promounciations come from my own experience. I like to read code as if it were English. I hope this provides insight.

As you go through this list, try reading each example out loud. (It will feel silly, but that's alright.) It is okay to start with simply saying the symbols if you don't know what they do.

## Variables and Assignments ##

- `var x;` -- "Var x" or "Variable x"
- `let y;` -- "Let y" or "Let y be a variable"
- `const z;` --  "Const z" or "Constant z"
- `var a = 5;` -- "Var a equals 5" or "Var a is 5"
- `let b = true;` -- "Let b equal true" (this is one of my favorites)
- `const pi = 3.14159;` -- "Const pi is 3.14159" or "Constant pi is 3.14159" (pi is pronounced like pie)
- `myBool = false` -- "My bool equals false" or "set my bool to false"

## Comparisons and Negation ##

- `theAnswer === 42` -- "The answer equals 42" or "The answer is 42"
- `name !== 'Sally'` -- "Name is not equal to Sally" or "Name is not Sally"
- `height > 4` -- "Height is greater than 4"
- `age >= 21` -- "Age is greater than or equal to 21"
- `price < 10` -- "Price is less than 10"
- `length <= 5` -- "Length is less than or equal to 5"
- `!ready` -- "Not ready" or "Is not ready"

## Other Common Operators ##

- `volume + 32` -- "Volume plus 32"
- `area - 17` -- "Area minus 17"
- `weight / 2` -- "Weight divided by 2"
- `diameter * pi` -- "Diameter times pi"
- `value ** n` -- "Value to the nth power" or "Value to the n"
- `myGuess % 2` -- "My guess mod 2"
- `return 'Hello'` -- "Return Hello"

## Conditionals ##

- `if(value < 5){ okay = true; }` -- "If value is less than 5 then set okay to true"
- `else if(name === "Bob") { slack = 'received'; }` -- "Else if name is Bob then set slack to 'received'"

This one is bigger so think about it carefully:

```javascript
if(value < 12) {
    return 'Less than 12';
} else {
    return 'Greater than 12';
}
```

I read this as:

"If value is less than 12 then return 'Less than 12', else return 'Greater than 12'"

## Loops ##

```javascript
for(let i = 0; i < length; i++) {
    console.log(i);
}
```

I say:

"For i equals 0, and i is less than length, i plus plus; console dot log i"

```javascript
while(bottlesOfBeer >= 0) {
    console.log(bottlesOfBeer + 'on the wall');
    bottlesOfBeer -= 1;
}
```

I say:

"While bottles of beer is greater than or equal to 0, console dot log bottles of beer plus 'on the wall'. Bottles of beer minus-equal 1"

Sometimes, when I'm being lazy, I refer to `console.log` as "console log," or even just "log."

## Functions ##

```javascript
function sayHello (greeting) {
    console.log(greeting + ', World!');
}
```

I say:

"Function, say hello, greeting, console dot log greeting + 'World'"

```javascript
(x, y) => x + y;
```

I say:

"X and y arrow x plus y" or, more often, "x and y into x plus y"