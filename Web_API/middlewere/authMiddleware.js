const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;
const authModel = require('../models/authModel');

function authenticateToken(req, res, next) {
  const token = req.headers['authorization'];
  console.log('token', token)
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: Missing token' });
  }
  console.log(JWT_SECRET)
  // Verify and decode the token
  jwt.verify(token, JWT_SECRET, async (err, user) => {
    
    if (err) {
      return res.status(403).json({ message: 'Forbidden: Invalid token' });
    }

    // Check if the token is still valid in the database
    const isTokenValid = await authModel.isTokenValid(user.userId, token);

    if (!isTokenValid) {
      return res.status(401).json({ message: 'Unauthorized: Token no longer valid' });
    }

    req.user = user;
    next();
  });
}

module.exports = {
  authenticateToken,
};
