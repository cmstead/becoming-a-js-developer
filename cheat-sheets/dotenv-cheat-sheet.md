# Using the DotEnv Package #

The dotenv package on npm is designed to protect secret information from being accidentally checked into source control. Using dotenv helps to ensure usernames and passwords are secure.

It can also be used for other things. In this document we'll look at the setup and use of dotenv.

## Setup ##

Visit the [dotenv package page](https://www.npmjs.com/package/dotenv)

### Prerequisite ###

Make sure your node project is properly initialized.

If you don't have a package.json file in your node project, run `npm init` and follow the prompts.

### Installing the Package ###

The dotenv package is meant to be a deployed project dependency. This means you should install it like so:

`npm install dotenv --save`

### Setting Up the Project ###

**Creating the DotEnv File**

Ensure you have a file called `.env` in the base of your project. The file content will look something like this:

```
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=root
```

**Ignoring the DotEnv File in Git**

To ignore the dotenv file (`.env`) make sure you have a file called `.gitignore` in the base of your project.  If the file isn't there, create it. Once the file exists, add the following line:

```
.env
```

This will ensure your `.env` file doesn't get committed to your repository.

## Using DotEnv ##

The package itself is a one-and-done solution. once the setup steps are complete, do the following to set up your environment variables, and access them in your program. Keep in mind, you should do this inside the main file for your application. Don't reconfigure your environment over and over. It won't actually make things work differently.

```javascript
require('dotenv').configure();

// environmentValueOrDefault is a helper function 
// found just below this example in the document.
const dbUser = environmentValueOrDefault('DB_USER', 'root');
const dbPassword = environmentValueOrDefault('DB_PASSWORD', 'root');
const dbHost = environmentValueOrDefault('DB_HOST', 'localhost');
const dbPort = environmentValueOrDefault('DB_PORT', '3306');

```

Here's the helper function. You're welcome to copy it and use it as you see fit.

```javascript
function environmentValueOrDefault(key, defaultValue){
    return typeof process.env[key] !== 'undefined'
        ? process.env[key]
        : defaultValue;
}
```

## Making a Better World With DotEnv ##