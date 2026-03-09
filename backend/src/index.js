import express from "express";

let app = express();

app.get("/", (_req, _res) => {
  return _res.send("Home route");
});

app.listen(8000, () => {
  console.log("Server is running at port 8000");
});