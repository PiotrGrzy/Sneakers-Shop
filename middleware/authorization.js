const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  // get token from header
  const token = req.header('authorization');

  // Check if no token

  if (!token) {
    return res
      .status(401)
      .json({ msg: 'No token provided, authorization denied' });
  }

  try {
    // Decode  token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Add user data from token to request
    req.user = decoded.user;

    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid, authorization denied' });
  }
};
