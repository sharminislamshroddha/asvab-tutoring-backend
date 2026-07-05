import bcrypt from "bcrypt";

import { RegisterInput } from "./auth.schema";
import { createUser, findUserByEmail } from "./auth.repository";
import { AppError } from "../../errors/AppError";

export async function registerUser(data: RegisterInput) {
  // Check if email already exists
  const existingUser = await findUserByEmail(data.email);

  if (existingUser) {
    throw new AppError("Email already exists", 409);
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(data.password, 10);

  // Save user
  return createUser({
    ...data,
    password: hashedPassword,
  });
}