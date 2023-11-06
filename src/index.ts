import "dotenv/config";
import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import path from "path";

import {
  saveEmbedding,
  findSimilarEmbeddings,
  generateEmbedding,
} from "./helpers";

const app: Express = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// display root page
app.get("/", (req: Request, res: Response) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`🔥🔥🔥: Server is running at http://localhost:${port}`);
});
