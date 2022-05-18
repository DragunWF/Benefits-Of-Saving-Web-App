import "dotenv/config";
import express from "express";
import VisitsTracker from "./utils/visits-tracker.js";

const app = express();
const port = process.env.PORT || 8888;

app.set("view engine", "ejs");
app.use("/public", express.static("public"));

app.get("/", (req, res) => {
  VisitsTracker.incrementVisits();
  res.render("index", {
    data: {
      visits: VisitsTracker.getVisits(),
    },
  });
});

app.listen(port, () => {
  console.log("Server is now running!");
});
