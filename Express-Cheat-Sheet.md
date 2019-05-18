# Express Cheat Sheet #

This is intended as a reference for someone who is setting up their very first few Express applications.  This will not be sufficient for large-scale applications.

**Setting up the Express app:**

```javascript
// Require basic packages
var express = require("express");
var path = require("path");

// Set up server application
var app = express();
var PORT = process.env.PORT || 8080;

// Make sure data gets to routes in a usable format
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up static file serving
// Be sure to put all your HTML, CSS, and images in public directory
app.use(express.static('public'));
```

**Adding a view rendering engine:**

For handlebars:

```javascript
const handlebars = require('express-handlebars');

app.engine('handlebars', handlebars({
  // be sure your default layout name matches the actual name
  // of the layout file you want to use in views/layouts
  defaultLayout: 'main' 
}));

app.set('view engine', 'handlebars');
```

For information on using Handlebars, visit their site:
[HandlebarsJS Site](https://handlebarsjs.com/)

For pug:

```javascript
// Pug is the Express preferred rendering engine so this is
// all that is required to get it working.
app.set('view engine', 'pug');
```

For more information on using Pug, go here:
[Pug Docs for Express](https://expressjs.com/en/guide/using-template-engines.html)

**Rendering data with a view engine:**

```javascript
app.get('/myDataView', function(request, response) {
  response.render('myDataViewTemplate', myData);
});
```

**Different route types (HTTP REST verbs):**

```javascript
app.get();
app.post();
app.put();
app.delete();
```

**Creating a new route in your server file:**

```javascript
app.get( // also works for delete
  '/directoryName/:parameterName',
  function(request, response) {
    const parameterName = request.params.parameterName;

    // When everything is done:

    response.json(); // for JSON responses
    response.send(); // for non-JSON string responses
  }
);

app.post( // also works for put
  '/directoryName/:parameterName',
  function(request, response) {
    const parameterName = request.params.parameterName;
    const requestBody = request.body;
    
    // When everything is done:

    response.json(); // for JSON responses
    response.send(); // for non-JSON string responses
  }
);
```
**Start your server:**

```javascript
app.listen(PORT, function(error) {
  if(error) {
    console.log('An error occurred while starting the server.', error.message);
  } else {
    console.log('Started server on port ' + PORT);
  }
});
```
