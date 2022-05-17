import express from "express";
import serverless from "serverless-http";

const app = express();
const router = express.Router();

app.set("view engine", "ejs");
app.use("/public", express.static("public"));

router.get("/", (req, res) => {
  res.render("index");
});

app.use("/", router);

export const handler = serverless(app);
