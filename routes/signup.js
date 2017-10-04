const users = {

}

const addUser = (userStore, user) => {
    const { username, email, password } = user;
    users[username] = {
      username,
      email,
      password
    };
}


exports.post = (req, res, next) => {
  const user = req.body;
  addUser(users, user);
  console.log(users);
}
