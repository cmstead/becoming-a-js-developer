# REST - REpresentational State Transfer #

REST is the most common approach to sending and receiving information on the web. Though REST contains a number of methods for interacting with the server, the focus of this cheat sheet will be the "big four" methods: GET, POST, PUT, and DELETE

## GET ##

Notable Attributes:

- Aligns with "Read" from the CRUD model
- Does not allow any data to be sent in the request body
- Only allows data interaction with query parameters (e.g. `?key1=value1&key2=value2`)
- A response body is typically expected (common response code: 200)

## POST ##

Notable Attributes

- Aligns with "Create" from the CRUD model
- Supports data sending through a request body
- Supports query parameters
- A response body may or may not be sent (see response code 204, may send code 201)

## PUT ##

Notable Attributes

- Aligns with "Update" from the CRUD model
- Supports data sending through a request body
- Supports query parameters
- A response body may or may not be sent (see response code 204)

## DELETE ##

Notable Attributes:

- Aligns with "Delete" from the CRUD model
- Does not allow any data to be sent in the request body
- Only allows data interaction with query parameters
- A response body may or may not be sent (see response code 204)
