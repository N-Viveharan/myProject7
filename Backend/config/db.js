import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://nagalingamviveharan2001_db_user:vive1234@cluster0.cy9maeb.mongodb.net/?appName=Cluster0'
    );
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
  }


  
};
