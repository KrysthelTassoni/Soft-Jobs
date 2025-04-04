import pkg from "pg";
const { Pool } = pkg;
import dotenv from "dotenv";
dotenv.config();
export const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    allowExitOnIdle: process.env.DB_ALLOW_EXIT_ON_IDLE === 'true'
  });
  
  const testDBConnection = async () => {
    try {
      await pool.query("SELECT NOW()");
      console.log("Database connected");
    } catch (error) {
      console.error("Database connection error:", error);
    }
  };
  
  testDBConnection();