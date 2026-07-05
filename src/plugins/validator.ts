import fp from "fastify-plugin";
import {
  validatorCompiler,
  serializerCompiler,
} from "fastify-type-provider-zod";

export default fp(async (app) => {
  app.setValidatorCompiler(validatorCompiler);
  app.setSerializerCompiler(serializerCompiler);
});