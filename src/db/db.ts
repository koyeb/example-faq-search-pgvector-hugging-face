import "dotenv/config";
import { Pool } from "pg";

const connectionString: string = `${process.env.DB_URL}`;
const pool = new Pool({ connectionString });

export default pool;
