import { compare } from "bcrypt";

async function verifyPassword(password, correctPassword) {
  const res = await compare(password, correctPassword);
  return res;
}

export { verifyPassword as default };
