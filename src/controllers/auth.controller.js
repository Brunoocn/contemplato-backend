import jwt from "jsonwebtoken";
import verifyPassword from "../helpers/verifyPassword.js";
import User from "../models/userModel.js";

const { SECRET_KEY } = process.env;

async function login(req, res) {
  const { sign } = jwt;
  const { name, password } = req.body;
  const user = await User.findOne({ where: { name: name } });
  const verifiedPassword = verifyPassword(password, user.password);

  if (user === null || !verifiedPassword) {
    const error = new Error("Login Invalido.");
    error.httpCode = 400;
    throw error;
  }
  const { id } = user;
  const jwtToken = sign({ id }, SECRET_KEY, { expiresIn: 60 * 20 });
  return res.json({ jwtToken, expiresIn: +new Date() + 1000 * 60 * 20 });
}

async function registerUser(req, res) {
  const { name, email, password } = req.body;

  try {
    const user = await User.create({ name, email, password });
    return res.status(200).json(user);
  } catch (err) {
    return res.status(400).json(err);
  }
}

export default { login, registerUser };
