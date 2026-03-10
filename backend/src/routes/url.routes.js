import express from "express";
import generateShortURL from "../controllers/url.controller.js";

const generateShortURLRoute = express.Router();

generateShortURLRoute.route("/").post(generateShortURL);

export default generateShortURLRoute;