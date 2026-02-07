import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb://nagalingamviveharan2001_db_user:vive123456@cluster0.uwihfqi.mongodb.net/?appName=Cluster0'
    );
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
  }
};
