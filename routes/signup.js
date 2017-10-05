const { addUser } = require('../model/users');

exports.post = (req, res, next) => {
  const user = req.body;
  addUser(user, (err) => {
    if(err) {
      return res.status(500).json({ message: 'There was a signup error' })
    }
    res.json({ username: user.username })
  });
}
