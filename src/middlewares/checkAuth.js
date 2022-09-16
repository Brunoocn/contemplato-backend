import jwt from "jsonwebtoken";
const { SECRET_KEY } = process.env;

function checkAuth(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).json();
  }
  const { verify } = jwt;
  const token = req.headers.authorization.substring(
    7,
    req.headers.authorization.length
  );
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
