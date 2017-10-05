const { verify } = require('jsonwebtoken');

const { getUserByUsername } = require('../model/users');

const { JWT_SECRET } = require('../config/constants.json');

exports.get = (req, res, next) => {
  const { token } = req.cookies;
  verify(token, JWT_SECRET, (err, data) => {
    if(err) {
      return res.status(401).send({ message: 'Unauthorised' })
    }

    const user = getUserByUsername(data.username);
    if(!user) {
      return res.status(401).send({ message: 'Unauthorised' })
    }

    return res.json({
      username: user.username,
      email: user.email
    })
  })
}
