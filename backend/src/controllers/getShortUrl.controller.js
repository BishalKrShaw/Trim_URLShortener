import { URL } from "../models/url.models.js";

const getShortUrl = async (req, res) => {
  const requestedId = req.params.shortid;
  // console.log(req.params);

  try {
    const url = await URL.findOne({shortId: requestedId});
    // console.log(url);

    if(!url) {
      return res.status(400).json({"Error": "URL not found"});
    }
    return res.redirect(url.redirectURL);

  } catch (error) {
    return res.status(400).json({"error": error.message});
  }
}

export default getShortUrl;