import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({

  redirectURL: {
    type: String,
    required: true
  },

  shortId: {
    type: String,
    required: true,
    unique: true
  }

}, {timestamps: true});

export const URL = mongoose.model("URL", urlSchema);