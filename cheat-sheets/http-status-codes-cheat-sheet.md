# HTTP Status Codes #

There are a number of status codes sent from the server to the client as web communication occurs. This document will not cover all of them. Instead the most common status codes are listed.

## Success Codes ##

Receiving one of these means the server thinks it did the right thing.

- **200** -- OK
    - Most common response for a GET request
    - Typically contains some sort of response information like HTML or requested data like a JSON string.
- **201** -- Created
    - A common response from a POST request
    - May contain response information, it's not required (response body could be null)
- **204** -- No Content
    - HTTP response will not contain any response data

## Redirection Codes ##

Receiving one of these means the server wants you to make the request to a different place.

- **301** -- Moved Permanently
    - This is a common response code when an endpoint was changed
    - The browser will store information about URLs which have been redirected permanently
- **304** -- Not modified
    - This means nothing has changed since the last time the browser requested this data
    - No data is sent to the client
    - This is common when accessing information from services like Content Delivery Networks (CDNs)
- **307** -- Temporary Redirect
    - This code is used most often to tell the browser to request content from another URL
    - It's common to see this when systems handle user login as a server-side-only action

## Client Error Codes ##

Receiving one of these means the server thinks the client made a mistake.

- **400** - Bad Request
    - This means a request was sent which the server could not understand
- **401** - Unauthorized
    - This is typically sent when a request cannot be completed without the user logging in first
- **403** - Forbidden
    - This is sent when the client is not allowed to access the content, irrespective of login status
- **404** - Not Found
    - The server cannot find the data requested by the client

## Server Error Codes ##

These error are sent when the server fails in some way

- **500** - Internal Server Error
    - The server failed in a way it cannot recover from
- **503** - Service Unavailable
    - The server is down, or overloaded and cannot respond
- **504** - Gateway Timeout
    - The server took too long to respond, and the network connection was closed