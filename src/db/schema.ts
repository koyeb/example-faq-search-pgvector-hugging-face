import pool from "./db";

// create vector extension if it doesn't exist
pool
  .query("CREATE EXTENSION IF NOT EXISTS vector;")
  .then(() => {
    // Create the "documents" table if it doesn't exist
    return pool.query(
      "CREATE TABLE IF NOT EXISTS documents (id SERIAL PRIMARY KEY, title text, embedding vector(384));"
    );
  })
  .then(() => {
    console.log("Database setup complete.");
  })
  .catch((error) => {
    console.error("Error setting up the database:", error);
  });
