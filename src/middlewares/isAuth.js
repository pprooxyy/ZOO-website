function isAuth(req, res, next) {
  const user = req.session?.user;
  if (!user) {
    return res.redirect('/admin/login');
  }
  next();
}

module.exports = isAuth;
