exports.post = (req, res, next) => {
  res.cookie('token', '', { httpOnly: true, maxAge: 0 });
  res.json({ message: 'User logged out' });
}
