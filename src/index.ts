import "dotenv/config";
import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import path from "path";

import { findSimilarEmbeddings, generateEmbedding } from "./helpers";

const app: Express = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// display root page
app.get("/", (req: Request, res: Response) => {
  res.render("index");
});

app.post("/search", async (req: Request, res: Response) => {
  try {
    const { question } = req.body;
    const embedding = await generateEmbedding(question);
    const similarQuestions = await findSimilarEmbeddings(embedding);

    res.render("index", { faqs: similarQuestions });
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`🔥🔥🔥: Server is running at http://localhost:${port}`);
});
