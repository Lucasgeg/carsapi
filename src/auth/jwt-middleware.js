// -- Importing jwt package
const jwt = require("jsonwebtoken");

// -- Importing json configuration
const config = require("../../ressources/json/config.json");

// -- Get jwt secret from json config file
const JWT_SECRET = config.jwtSecret;

// -- Extract jwt token from header
const extractBearerToken = (headerValue) => {
  if (typeof headerValue !== "string") {
    return false;
  }

  const matches = headerValue.match(/(bearer)\s+(\S+)/i);
  return matches && matches[2];
};

// -- Check jwt token with middleware
exports.checkJwtTokenMiddleware = (req, res, next) => {
  // -- Check if authorization header is missing or empty
  if (!req.headers.authorization) {
    return res
      .status(401)
      .json({ message: "Error: Missing or empty authorization header" });
  }

  // -- Get jwt token from header
  const token =
    req.headers.authorization && extractBearerToken(req.headers.authorization);

  // -- Check if jwt token syntax is valid
  if (!token) {
    return res
      .status(401)
      .json({ message: "Error: invalid authentication JWT" });
  }

  // -- Check jwt token is valid and provided by our API
  jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
    if (err) {
      res
        .status(401)
        .json({ message: "Error: invalid or expired authentication JWT" });
    } else {
      // -- JWT Token is valid continue
      return next();
    }
  });
};

// -- Export extractBearerToken function
exports.extractBearerToken = extractBearerToken;
