var validate = require('../validator')
  , fixture = require('./fixtures')
  , should = require('should')

describe('Field Equal Validation', function() {
  it('should not pass back an error when the value matches the field', function () {
    var validator = validate(fixture.field)

    validator('bar', 'bar', fixture.equal, function (err, errMessage) {
      should.not.exist(err)
      should.not.exist(errMessage)
    })
  })

  it('should pass back an error when the value fails to match the field', function () {
    var validator = validate(fixture.field)

    validator('bar', 'bar', fixture.notEqual, function (err, errMessage) {
      should.not.exist(err)
      should.exist(errMessage)

      errMessage.should.equal('bar must equal foo')
    })
  })

  it('should pass back custom message when the value fails to match the field', function () {
    var customError = 'This is a custom error message'
      , validator = validate(fixture.field, customError)

    validator('bar', 'bar', fixture.notEqual, function (err, errMessage) {
      should.not.exist(err)
      should.exist(errMessage)

      errMessage.should.equal(customError)
    })
  })

})
