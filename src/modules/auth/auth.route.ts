import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";

import { registerController } from "./auth.controller";
import { registerSchema } from "./auth.schema";

export default async function authRoutes(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    "/register",
    {
      schema: {
        body: registerSchema,
        tags: ["Authentication"],
        summary: "Register a new user",
      },
    },
    registerController
  );
}