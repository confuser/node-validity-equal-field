# validity-equal-field

[![Build Status](https://travis-ci.org/confuser/node-validity-equal-field.png?branch=master)](https://travis-ci.org/confuser/node-validity-equal-field)

Validity style validator to ensure a property is equal to another schemata field

## Installation

    npm install validity-equal-field

## Usage

Below  is a simple example for usage with schemata:

```js

var validity = require('validity')
  , schemata = require('schemata')
  , save = require('save')
  , createValidator = require('validity-equal-field')

var schema = schemata(
    { password:
      { type: String
      , validators: { all: [ createValidator('vpassword') ] }
      }
    , vpassword:
      { type: String }
    })
```

A custom error message can also be passed ```createValidator('vpassword', 'Passwords do not match')```

## API

### var validate = createValidator()

Create a validate function.

### validate(String:key, String:keyDisplayName, Object:object, Function:cb)

This is a validity compatible function, which in turn is used by schemata for
schema validation.

The callback signature cb(err, errorMessage).

err is an Error object if something bad happened and null otherwise.
errorMessage is a String if a validation error happened and undefined otherwise.

## Licence
Licensed under the [New BSD License](http://opensource.org/licenses/bsd-license.php)
