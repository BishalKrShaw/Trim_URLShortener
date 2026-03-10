import express from "express";
import getShortUrl from "../controllers/getShortUrl.controller.js";

const getShortUrlRoute = express.Router();

getShortUrlRoute.route("/:shortid").get(getShortUrl);

export default getShortUrlRoute;