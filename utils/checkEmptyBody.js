// Middleware to check for empty body
const checkEmptyBody = (req, res, next) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ message: "Request body cannot be empty" });
  }
  next();
};

module.exports = checkEmptyBody;
