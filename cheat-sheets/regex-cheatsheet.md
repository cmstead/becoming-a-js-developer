# Regular Expressions (regex) #

Regular expressions are a tool for performing sophisticated searches through text. They are built upon a computer science concept of "non-deterministic finite automata." In other words, regular expressions are able to perform somewhat "fuzzy" searches through text finding substrings which match a set of criteria rather than a simple string compare.

We will explore some practical fundamental parts of regular expressions and how to put together expressions which can do some nice search work for you. We will also take a look at some of the JavaScript functions that take advantage of regex and how we can make them work for us.

It is worth noting, regular expressions are a very expressive pattern language and take time and practice to use well.

For a more in-depth look at regular expressions and their use, visit [Regular-Expressions.info](https://www.regular-expressions.info/).

## The Basics ##

### String Searching ###

In JavaScript, all regex literals begin and end with a forward slash (`/`). The following is a regular expression that searches for "hello":

`const helloPattern = /hello/;`

### Case-Insensitive Searching ###

The previous example will only find "hello", but not "Hello", "hElLo", or anything other than all lower-case.  To search for upper and lower case, we can use the `i` switch. This means the search will be case-insensitive:

`const helloPattern = /hello/i;`

### Global Searching ###

Now that we can find "hello" regardless of capitalization, let's discuss the `g` flag. Using the `g` flag means the search will be "global". In other words, without `g`, only the first "hello" would be found. By adding `g`, our search will find **all** matches. We can extend our case-insensitive search to find all like this:

`const helloPattern = /hello/ig;`

## Special Search Characters ##

There are a number of special characters in JS regular expressions -- and regular expressions in general -- but for the moment we are going to look at just a few: `.`, `*`, `+`, `?`, `^`, and `$`

### Escaping Special Characters ###

Before we start looking at how to use these, I want to call special attention to the fact that the following pattern might not do what you expect:

`//^?.*+$//`

I haven't tried it, so I'm not entirely sure what it actually does. In fact I'm not sure it would work at all. No matter what, it doesn't find the string "/^?.*+$/".

If we wanted to find that exact string we need to escape our special characters. This means, each special character we want to search for needs a slash (`\`) in front of it. So, in order to find "/^?.*+$/", we need to do this:

`/\/\^\?\.\*\+\$\//`

My suspicion is you wont want to find this string anyway, but that's how you'd do it. An extra item of note, if you want to search for the "\" then, you probably guessed it, you have to escape it. It would look like this: `/\\/`

### The `.` Character ###

There are cases where you don't care what character is in a particular position, you only care that there **is** a character there. This is what the `.` character does for you.

Let's suppose you want to locate a string like "the answer is: x", where x is any character. You could use the following pattern to do that search:

`the answer is: .`

### The `*` Character ###

If you want to find 0 or more of a character, the `*` is for you. Let's suppose you wanted to find "zoom!", but you also wanted to find something like "zoooooooooooom!". You could use `*` to accomplish this. The pattern looks like this:

`/zooo*m!/`

It's especially common to see the `*` used with `.`. It's helpful when you know there could be stuff in the middle of a string, but you don't care what it is. It could be something like this:

`src=".*"`

Side note: Though I am using an obvious HTML reference, **do not** attempt to search HTML with regex.

### The `+` Character ###

The `+` character is similar to the `*` character. The only difference is `+` looks for 1 or more of the previous character. Our previous example of "zoom!" could be written this way instead:

`/zoo+m/`

### The `?` Character ###

Using `?` in a pattern means the character may or may not be there. It's essentially a 0 or 1, but no more than 1 indicator.  A great example is searching for "color" or "colour":

`/colou?r/`

### Using `^` and `$` ###

I included both `^` and `$` in a single section because they are quite literally bookends. `^` means "the start of the string". `$` means "then end of the string".

If we consider our original hello, now, we can look for strings that contain ONLY "hello":

`/^hello$/`

This pattern means, "h" is the first character in the string, "o" is the last, and the characters between **must be** "ell". This can be tremendously helpful when you want to find a string that exactly matches your pattern, like an email:

`/^.+@.+\..+$/`

(Don't use this to actually validate emails.)

## Capture Groups ##

Capture groups are sub-patterns that will be captured by the regular expression execution for future use. Capture groups are surrounded by `()`. We will look at a couple of different ways to use capture groups below.

### Repeated sequences ###

You can create repeated sequences by using capture groups. For instance "banana", "banananana", and "banananananananananana":

`/^bana(na)+$/`

### Later Use ###

In JavaScript you can use regex to perform a replacement in a string. For example we could rewrite a standard function into an arrow function:

```javascript
functionString.replace(
    `/function (.+) ?\((.*)\){/`,
    'const $1 = ($2) => {'
)
```

The first capture group captured the name. We referred to it in the replacement string by "$1". The second capture group is the parameter list -- which could be empty -- and we referred to this as $2 in our replacement string.

## Character Classes (AKA Character Sets) ##

Character classes are a collection of possible characters, from which only one will be matched. Much like our color/colour example, we can use character classes to find the color gray/grey.  The pattern would look like the following:

`/gr[ae]y/`

You can also provide common ranges of characters:

```javascript
const letter = /[a-z]/i;
const numbers = /[0-9]/
```

### Negating Character Classes ###

Negating a character class means you will accept anything that is **not** in the character class. For example, if you wanted anything that was not a vowel, you could do the following:

`/[^aeiou]/`

It's worth noting, this is the only other place that the `^` character has specific meaning.

## Other Useful Patterns ##

The following is a list of *escape sequences* which result in a special set of characters.

- `\w` -- "word" characters
- `\W` -- anything **except** word characters
- `\d` -- decimal characters
- `\D` -- anything **except** decimal characters
- `\s` -- space
- `\t` -- tab
- `\r` -- carriage return
- `\n` -- line feed (new line)
- `|` -- "or": `a|e` matches a, or e (`/gra|ey/`)