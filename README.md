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
user.name = Values.name(); // eg. John Smith
user.name = Values.name(true); // eg. Sam
```


### Emails

```javascript
user.email = Values.email(); // eg. john_smith_124223@test.com
user.email = Values.email('something.com'); // eg. sam_jones_122321@something.com
```


### Phone numbers

```javascript
user.phone = Values.phone(); // eg. 0410123432
user.phone = Values.phone('+61'); // eg. +61424123456
```


### URLs

```javascript
user.url = Values.url(); // eg. http://sam-max-rachael-janice.com
```