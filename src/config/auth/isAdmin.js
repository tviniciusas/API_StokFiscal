function isAdmin(req, res, next) {
  if (req.tipo == "admin") {
    next();
  } else {
    res.status(401).json({ error: "Usuário não tem permissão" });
    return;
  }
}

module.exports = isAdmin;
