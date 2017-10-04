exports.get = (req, res, next) => {
  const body = {
    message: 'User not logged in'
  };
  res.status(400).json(body);
}
