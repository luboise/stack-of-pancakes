import jwt from "jsonwebtoken";

import { JWT_SECRET_KEY } from "./globals";

export function generateToken(payload: any): string {
  return jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: "1h" });
}

export function verifyToken(token: string): any {
  return jwt.verify(token, JWT_SECRET_KEY);
}
