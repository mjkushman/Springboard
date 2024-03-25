const jwt = require("jsonwebtoken")

const { SECRET_KEY } = require("../config");
const ExpressError = require("../expressError");


// function authenticateJWT(req, res, next) {
//   try {
//     const payload = jwt.verify(req.body._token, SECRET_KEY);
//     req.user = payload;
//     return next();
//   } catch (e) {
//     return next();
//   }
// }

function authenticateJWT(req, res, next) {
  try {
    const payload = jwt.verify(req.body._token, SECRET_KEY)
    req.user = payload; //Sets req.user on every request that has a valid token
    console.log('that was a valid token')
    return next()
  } catch {
    return next() // passes request on if token is invalid
  }
}

// function ensureLoggedIn(req, res, next) {
//   if (!req.user) {
//     const e = new ExpressError("Unauthorized", 401);
//     return next(e);
//   } else {
//     return next();
//   }
// }

function ensureLoggedIn(req, res, next) {
  if (!req.user) {
    const e = new ExpressError("Unauthorized", 401);
    return next(e)
  } else {
    return next();
  }
}

// If the req does not have a user attribute and if user.role is not admin, then return an error instead of passing the request on

function ensureAdmin(req, res, next) {
  if (!req.user || req.user.role !== 'admin') {
    return next(new ExpressError("Must be an admin to go here!", 401))
  }
  return next();
}

// module.exports = { authenticateJWT, ensureLoggedIn, ensureAdmin };
module.exports = { authenticateJWT, ensureLoggedIn, ensureAdmin }