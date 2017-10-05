const { getUserByUsername } = require('../model/users');

exports.get = (req, res, next) => {
  const username = req.params.username;
  const user = getUserByUsername(username);
  if(!user) {
    return res.json({ message: 'No such user exists' })
  }
  res.json({
    username: user.username
  });
}
