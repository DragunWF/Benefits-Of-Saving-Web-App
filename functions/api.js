import express from "express";
import serverless from "serverless-http";
import VisitTracker from "../utils/visits-tracker";

const app = express();
const router = express.Router();

app.set("view engine", "ejs");
app.use("/public", express.static("public"));

router.get("/", (req, res) => {
//   VisitTracker.incrementVisits();
  res.render("index", {
    data: {
      visits: 1,
    },
  });
});

app.use("/", router);

export const handler = serverless(app);
