import "dotenv/config";
import axios, { AxiosError } from "axios";
import pgvector from "pgvector/pg";
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
  embedding: string
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
export const generateEmbedding = async (text: string): Promise<string> => {
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

    return pgvector.toSql(response.data);
  } catch (error) {
    const err = error as AxiosError;
    throw err.message;
  }
};
