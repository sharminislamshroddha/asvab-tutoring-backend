import fp from "fastify-plugin";
import swagger from "@fastify/swagger";
import swaggerUI from "@fastify/swagger-ui";

import { swaggerOptions } from "../config/swagger";

export default fp(async (app) => {
  await app.register(swagger, swaggerOptions);

  await app.register(swaggerUI, {
    routePrefix: "/docs",
  });
});