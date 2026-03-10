import { URL } from "../models/url.models.js";
import generateUniqueId from "../utils/generateUniqueId.js";

const generateShortURL = async (req, res) => {
  const {redirectURL} = req.body;

  const shortId = generateUniqueId();

  try {
    const url = new URL({
      redirectURL,
      shortId
    });

    const newURL = await url.save();
    return res.status(201).json(newURL);

  } catch (error) {
    return res.status(500).json({error: error.message});
  }
}

export default generateShortURL;