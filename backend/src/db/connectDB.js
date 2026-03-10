import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`);
    // console.log("Server is connected successfully!!");
  } catch (error) {
    // console.error("Error hua hai: ", error);
    process.exit(1);
  }
}

export default connectDB;