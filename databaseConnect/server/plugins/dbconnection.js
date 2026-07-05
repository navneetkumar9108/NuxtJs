import mongoose from "mongoose";

export default async () => {
  const config = useRuntimeConfig();
  try {
    const DB_OPTIONS = {
      dbName: config.dbName,
      user: config.user,
      pass: config.password,
      authSource: config.authSource,
    };
    await mongoose.connect(config.dbUrl, DB_OPTIONS);
    console.log("connected Successfully..", DB_OPTIONS);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
