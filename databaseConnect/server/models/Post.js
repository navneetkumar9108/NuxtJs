import mongoose from "mongoose";

// Define Schema
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  body: {
    type: String,
    required: true,
    trim: true,
  },
});

// compiling Schema
const PostModel = mongoose.model("Post", postSchema);

export default PostModel;
