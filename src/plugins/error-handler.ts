import fp from "fastify-plugin";
import { ZodError } from "zod";

import { AppError } from "../errors/AppError";

export default fp(async (app) => {
  app.setErrorHandler((error, request, reply) => {
    // Validation Error
    if (error instanceof ZodError) {
      return reply.status(400).send({
        success: false,
        message: "Validation failed",
        errors: error.issues,
      });
    }

    // Custom Error
    if (error instanceof AppError) {
      return reply.status(error.statusCode).send({
        success: false,
        message: error.message,
      });
    }

    // Unknown Error
    request.log.error(error);

    return reply.status(500).send({
      success: false,
      message: "Internal Server Error",
    });
  });
});