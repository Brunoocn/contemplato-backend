import jwt from "jsonwebtoken";
const { SECRET_KEY } = process.env;

function checkAuth(req, res, next) {
  const { verify } = jwt;
  const token = req.headers.authorization.replace("Bearer ", "");
  let verifyToken = null;
  try {
    verifyToken = verify(token, SECRET_KEY);
  } catch (err) {
    return res.status(401).json(err);
  }
  req.userId = verifyToken.id;
  return next();
}

export { checkAuth as default };
