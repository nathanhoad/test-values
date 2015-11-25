# Test Values

A collection of helpers for generating values for tests.


## Usage

`npm install --save test-values`

Then just require it:

```javascript
var Values = require('test-values');
```


### Names

```javascript
user.name = Value.name(); // eg. John Smith
user.name = Value.name(true); // eg. Sam
```


### Emails

```javascript
user.email = Value.email(); // eg. john_smith_124223@test.com
user.email = Value.email('something.com'); // eg. sam_jones_122321@something.com
```