const { sign } = require('jsonwebtoken');

const { authenticateUser } = require('../model/users');

const { JWT_SECRET } = require('../config/constants.json');

exports.post = (req, res, next) => {
  const { username, password } = req.body;
  authenticateUser(username, password, (err, user) => {
    if(err) {
      return res.status(400).json({ message: 'Access denied' })
    }
    const tokenData = { username };
    sign(tokenData, JWT_SECRET, (err, token) => {
      if(err) {
        return res.status(500).json({ message: 'There was an error logging you in'})
      }
      const cookieAge = 2 * 24 * 60 * 60 * 1000;
      res.cookie('token', token, { httpOnly: true, maxAge: cookieAge })
      res.json({ user })
    });
  })
}
