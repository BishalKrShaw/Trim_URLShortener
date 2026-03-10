
import {nanoid} from "nanoid";

const generateUniqueId = () => {
  const shortId = nanoid(7);
  return shortId;
}

export default generateUniqueId;