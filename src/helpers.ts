import "dotenv/config";
import axios from "axios";
import pool from "./db/db";

const modelId: string = "sentence-transformers/all-MiniLM-L6-v2";
const API_URL: string = `https://api-inference.huggingface.co/pipeline/feature-extraction/${modelId}`;

// function to save embeddings to the db
export const saveEmbedding = async (
  title: string,
  embedding: string
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

// // function to find similar embeddings in the database
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

// API request to generate embedding for a text
export const generateEmbedding = async (text: string): Promise<number[]> => {
  try {
    const response = await axios.post(
      API_URL,
      {
        inputs: text,
        options: { wait_for_model: true },
        // If the model is not ready, wait for it instead of receiving 503
      },
      {
        headers: { Authorization: `Bearer ${process.env.HF_TOKEN}` },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
