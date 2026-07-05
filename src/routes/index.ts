import { FastifyInstance } from "fastify";
import authRoutes from "../modules/auth/auth.route";

export default async function routes(app: FastifyInstance) {
  app.register(authRoutes, {
    prefix: "/api/v1/auth",
  });
}