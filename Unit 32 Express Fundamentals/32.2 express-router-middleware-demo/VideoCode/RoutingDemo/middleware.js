const ExpressError = require("./expressError");

function logger(req, res, next) {
  console.log(`RECEIVED a ${req.method} request to ${req.path}.`);
  return next();
}

function checkForPassword(req, res, next) {
  try {
    if(req.query.password !== 'shh'){
      throw new ExpressError('Missing Password',402);
    }
    return next()
  } catch(e){
    return next(e)
  }
}

module.exports = { logger, checkForPassword }

// module.exports = { logger: logger, checkForPassword: checkForPassword}