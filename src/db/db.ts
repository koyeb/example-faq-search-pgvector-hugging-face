import "dotenv/config";
import { Pool } from "pg";

const connectionString: string = `${process.env.DB_URL}`;
const pool = new Pool({ connectionString });

// function to save embeddings to the db
export const saveEmbedding = async (
  title: string,
  embedding: number[]
): Promise<void> => {
  const query = {
    text: "INSERT INTO documents (title, embedding) VALUES ($1, $2)",
    values: [title, embedding],
  };

  try {
    await pool.query(query);
  } catch (error) {
    throw error;
  }
};

// function to find similar embeddings in the database
export const findSimilarEmbeddings = async (
  embedding: number[]
): Promise<any[]> => {
  try {
    // find nearest neighbour by L2 distance
    const res = await pool.query(
      "SELECT title, embedding <-> $1 AS distance FROM documents ORDER BY distance LIMIT 5",
      [embedding]
    );

    return res.rows;
  } catch (error) {
    throw error;
  }
};

export default pool;
