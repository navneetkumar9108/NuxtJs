import PostModel from "~~/server/models/Post";

export default defineEventHandler(async (event) => {
  try {
    const posts = await PostModel.find();
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
});
