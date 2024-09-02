import { z } from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().default(8000),
  PG_DATABASE_URL: z.string(),
});

export const env = envSchema.parse(process.env);
