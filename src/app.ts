import Fastify from "fastify";

import validatorPlugin from "./plugins/validator";
import swaggerPlugin from "./plugins/swagger";
import errorHandlerPlugin from "./plugins/error-handler";
import routes from "./routes";

export async function buildApp() {
  const app = Fastify({
    logger: true,
  });

  await app.register(validatorPlugin);
  await app.register(swaggerPlugin);
  await app.register(errorHandlerPlugin);
  await app.register(routes);

  return app;
}