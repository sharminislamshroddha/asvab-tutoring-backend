import prisma from "../../lib/prisma";
import { RegisterInput } from "./auth.schema";

export async function findUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
}

export async function createUser(data: RegisterInput & { password: string }) {
  return prisma.user.create({
    data,
    select: {
      id: true,
      fullName: true,
      email: true,
      roleId: true,
      createdAt: true,
    },
  });
}