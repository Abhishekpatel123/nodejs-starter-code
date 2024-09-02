import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { Pool } from "@neondatabase/serverless";
import "dotenv/config";
import config from "../../configs";

const { PG_DATABASE_URL } = config.env;

const sql = neon(PG_DATABASE_URL!);

export const db = drizzle(sql);
export const pool = new Pool({ connectionString: PG_DATABASE_URL });
