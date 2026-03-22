import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import generateShortURLRoute from "./routes/url.routes.js";
import getShortUrlRoute from "./routes/getShortURL.routes.js";

let app = express();
app.use(express.json());

dotenv.config({
  path: './.env'
});

connectDB()
.then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is listening at port ${process.env.PORT}`);
  }
  )
})
.catch(() => {
  console.error("DB connection failed!!")
})

const allowedOrigins = process.env.ALLOWED_ORIGINS;

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}))

app.use("/api/v1/generateshorlurl", generateShortURLRoute);
app.use("/api/v1/getshorturl", getShortUrlRoute);