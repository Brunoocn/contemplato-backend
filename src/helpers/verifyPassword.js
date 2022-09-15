import { compare } from "bcrypt";

async function verifyPassword(password, correctPassword) {
  res = await compare(password, correctPassword);
  return res;
}

export { verifyPassword as default };
