function isAdmin(req, res, next) {
  if (req.tipo == "admin") {
    console.log(req.tipo)
    next();
  } else {
    console.log(req.tipo)
    res.status(401).send({ error: "User is not admin" });
  }
}

module.exports = isAdmin;