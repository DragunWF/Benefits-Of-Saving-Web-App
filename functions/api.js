import express from "express";
import serverless from "serverless-http";

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Testing");
});

app.use("/", router);

export const handler = serverless(app);
