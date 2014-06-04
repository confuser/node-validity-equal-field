module.exports = function (field, customMessage) {

  function validate(key, keyDisplayName, object, cb) {

    if (object[key] !== object[field]) {
      var message = customMessage || keyDisplayName + ' must equal ' + field

      return cb(null, message)
    }

    return cb(null, undefined)
  }

  return validate

}
