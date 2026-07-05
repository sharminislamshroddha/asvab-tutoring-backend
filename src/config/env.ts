import { z } from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().default(3000),

  DB_HOST: z.string(),
  DB_PORT: z.coerce.number(),
  DB_NAME: z.string(),
  DB_USER: z.string(),
  DB_PASSWORD: z.string().optional(),

  JWT_SECRET: z.string().min(10),
});

export const env = envSchema.parse(process.env);