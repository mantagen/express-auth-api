const bcrypt = require('bcrypt');

const users = {

}

const addUser = (user, cb) => {
    const { username, email, password } = user;
    bcrypt.hash(password, 10, (err, hash) => {
      if(err) {
        return cb(err)
      }
      users[username] = {
        username,
        email,
        hash
      };
      return cb(null)
    });
}

const getUserByUsername = username => {
  return users[username];
}

const authenticateUser = (username, password, cb) => {
  const user = users[username]
  if(!user) {
    return cb(new Error('User not found'))
  }
  bcrypt.compare(password, user.hash, (err, res) => {
    if(err) {
      cb(err);
    }
    return cb(null, user)
  });
}

module.exports = {
  addUser,
  getUserByUsername,
  authenticateUser
}
